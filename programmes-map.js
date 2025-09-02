// Normalisation helper
const norm = s => s.toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');

// Google Drive helpers
const drivePreview = id => `https://drive.google.com/file/d/${id}/preview`;
const driveDownload = id => `https://drive.google.com/uc?export=download&id=${id}`;

// 18 programmes
const PROGRAMMES = {
  // RENFORCEMENT MUSCULAIRE
  'renforcement-musculaire_debutant_salle-de-sport': { id: '1PH7EbCZVZWMvGEMxvI9fraeCS1e4N9Ip' },
  'renforcement-musculaire_intermediaire_salle-de-sport': { id: '1IPodeV3MY1FIBeuW9GTlW86HiCFR9aug' },
  'renforcement-musculaire_intermediaire_sans-materiel': { id: '1GSmGOtm-738hDSTn9SJVuFI8P3uyttCO' },
  'renforcement-musculaire_avance_sans-materiel': { id: '1uTZG9F1GmANUSJSnBjZ3KJVJLjVFt_YR' },
  'renforcement-musculaire_debutant_sans-materiel': { id: '1VnftoYssQr_mMhBkms80CsynMt-MxsGY' },
  'renforcement-musculaire_avance_salle-de-sport': { id: '1O4CEPDtuTUxwv-s0iyXYWR9pqYCu3zKo' },

  // PRISE DE MASSE
  'prise-de-masse_debutant_salle-de-sport': { id: '13G8YzaA-dGANEoXDlBt8Y40PdKw4C6--' },
  'prise-de-masse_intermediaire_salle-de-sport': { id: '1ECbuitWNLyoS8jXWe0VenEIeU2ig_ysG' },
  'prise-de-masse_avance_salle-de-sport': { id: '1RAuCawb4of5mnvGsAyJ3H6N_ysa_A_cQ' },
  'prise-de-masse_debutant_poids-du-corps': { id: '18zwiAePfh3MZ51OXU4AoDFuFLVg-SgB9' },
  'prise-de-masse_avance_poids-du-corps': { id: '1HEz-I6NKssJSs0vHxXtzLbj89mzWJCXN' },
  'prise-de-masse_intermediaire_sans-materiel': { id: '1yIJe_oNrf_ljyR0rTzWeeKLzcttf5sGA' },

  // PERTE DE POIDS
  'perte-de-poids_debutant_salle-de-sport': { id: '1S5FQ4McULZMf3Nr_Y7z1XWrjSyO1tc-n' },
  'perte-de-poids_intermediaire_salle-de-sport': { id: '1lhVHmkvABQr1CO3MaoqVnSjAnPW9f1NH' },
  'perte-de-poids_avance_salle-de-sport': { id: '1ZH7mSyGcx6bO2KCQvaMb4fVnHoa7hpWT' },
  'perte-de-poids_intermediaire_poids-du-corps': { id: '1jsMnyvctxtetyANFR2TvSs6JMd2JUHh1' },
  'perte-de-poids_debutant_poids-du-corps': { id: '17oMtEn4-7Yrwt3Bxz0bh-53A7Wf_ynHG' },
  'perte-de-poids_avance_sans-materiel': { id: '1iLYCMe_Yz_roeNCikt2H-JzCHO4GK2LP' },
};

function keyFromSelections(obj, niv, mat){
  return `${norm(obj)}_${norm(niv)}_${norm(mat)}`
    .replace('poids-du-corps','poids-du-corps'); // cohérence
}

// expose globally for checkout.js
window._FF = { PROGRAMMES, drivePreview, driveDownload, keyFromSelections };
