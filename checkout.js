import { CONFIG } from './config.js';
import { PROGRAMMES, drivePreview, driveDownload } from './programmes-map.js';

const stripePublic = CONFIG.STRIPE_PUBLIC_KEY;
let stripe = null;
if (CONFIG.PAYMENTS_ENABLED && typeof Stripe !== 'undefined') {
  stripe = Stripe(stripePublic);
}

const norm = s => s.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');

export function collectAnswers(){
  return {
    objectif: document.getElementById('objectif').value,
    niveau: document.getElementById('niveau').value,
    materiel: document.getElementById('materiel').value,
    email: document.getElementById('email').value || null
  };
}

export function makeKey({objectif,niveau,materiel}){
  return `${norm(objectif)}_${norm(niveau)}_${norm(materiel)}`;
}

async function directDeliver(reponses){
  const key = makeKey(reponses);
  const item = PROGRAMMES[key];
  const prev = drivePreview(item.id);
  const dl = driveDownload(item.id);

  // Envoi email via Worker (si email fourni)
  if (reponses.email) {
    try {
      await fetch(`${CONFIG.API_BASE}/send-program`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ programmeKey:key, email: reponses.email })
      });
    } catch(e){ /* ignore errors in demo mode */ }
  }

  // Redirection immédiate vers le viewer
  window.location.href = `/viewer.html?preview=${encodeURIComponent(prev)}&dl=${encodeURIComponent(dl)}`;
}

export async function goToCheckout(reponses, mode){
  const key = makeKey(reponses);
  const item = PROGRAMMES[key];
  if(!item?.id){ alert('Programme non disponible pour cette combinaison.'); return; }

  if (!CONFIG.PAYMENTS_ENABLED) {
    // mode démo : pas de Stripe, on livre direct
    return directDeliver(reponses);
  }

  // Stripe Checkout (à activer plus tard)
  const res = await fetch(`${CONFIG.API_BASE}/create-checkout`, {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      mode, // 'one_time' ou 'subscription'
      priceId: mode==='one_time' ? CONFIG.PRICE_ONE_TIME : CONFIG.PRICE_SUBSCRIPTION,
      programmeKey: key,
      email: reponses.email
    })
  });
  const data = await res.json();
  if(data.error){ alert(data.error); return; }
  await stripe.redirectToCheckout({ sessionId: data.id });
}
