import { CONFIG } from './config.js';
import { PROGRAMMES, keyFromSelections, drivePreview, driveDownload } from './programmes-map.js';

const $ = (id)=>document.getElementById(id);

function collect(){
  return {
    objectif: $('objectif').value,
    niveau: $('niveau').value,
    materiel: $('materiel').value,
    email: $('email').value || null
  };
}

async function deliver(programmeKey, email){
  const item = PROGRAMMES[programmeKey];
  if(!item){ alert('Programme non disponible.'); return; }
  const prev = drivePreview(item.id);
  const dl = driveDownload(item.id);

  if (CONFIG.API_BASE) {
    try {
      await fetch(`${CONFIG.API_BASE}/log-and-send`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ programmeKey, email })
      });
    } catch(e){ /* ignore */ }
  }

  location.href = `/viewer.html?preview=${encodeURIComponent(prev)}&dl=${encodeURIComponent(dl)}`;
}

async function go(){
  const a = collect();
  const key = keyFromSelections(a.objectif, a.niveau, a.materiel);
  if(!PROGRAMMES[key]){ alert('Programme non disponible pour cette combinaison.'); return; }
  return deliver(key, a.email);
}

document.getElementById('one').addEventListener('click', go);
document.getElementById('sub').addEventListener('click', go);
