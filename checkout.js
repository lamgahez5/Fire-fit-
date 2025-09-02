// Utilise la config + mapping pour livrer (paiement désactivé)
document.getElementById('one').addEventListener('click', () => go('one_time'));
document.getElementById('sub').addEventListener('click', () => go('subscription'));

function collect(){
  return {
    objectif: document.getElementById('objectif').value,
    niveau: document.getElementById('niveau').value,
    materiel: document.getElementById('materiel').value,
    email: document.getElementById('email').value || null
  };
}

async function go(mode){
  const a = collect();
  const key = window._FF.keyFromSelections(a.objectif, a.niveau, a.materiel);
  const item = window._FF.PROGRAMMES[key];
  if(!item){ alert('Programme non disponible pour cette combinaison.'); return; }

  if(!CONFIG.PAYMENTS_ENABLED){
    const prev = window._FF.drivePreview(item.id);
    const dl = window._FF.driveDownload(item.id);
    location.href = '/viewer.html?preview='+encodeURIComponent(prev)+'&dl='+encodeURIComponent(dl);
    return;
  }
  // Stripe (pour plus tard)
  alert('Stripe sera activé plus tard.');
}
