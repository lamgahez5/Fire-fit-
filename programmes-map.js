// Normalisation & synonymes
const normalize = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
const norm = s => normalize(s).replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');

function mapSynonyms(obj, niv, mat){
  obj = normalize(obj); niv = normalize(niv); mat = normalize(mat);
  if (obj === 'seche' || obj === 'sèche') obj = 'perte de poids';
  if (obj === 'prise') obj = 'prise de masse';
  if (obj === 'renforcement') obj = 'renforcement musculaire';
  if (niv === 'avance' || niv === 'avancé' || niv === 'avancée' || niv === 'confirmé' || niv === 'confirmée') niv = 'confirme';
  if (mat === 'salle') mat = 'salle de sport';
  if (mat === 'sans materiel') mat = 'sans matériel';
  return {obj, niv, mat};
}

export const keyFromSelections = (obj, niv, mat) => {
  const m = mapSynonyms(obj, niv, mat);
  return `${norm(m.obj)}_${norm(m.niv)}_${norm(m.mat)}`;
};

export const drivePreview = id => `https://drive.google.com/file/d/${id}/preview`;
export const driveDownload = id => `https://drive.google.com/uc?export=download&id=${id}`;

// 18 programmes
export const PROGRAMMES = {
  'renforcement-musculaire_debutant_sans-materiel':      { id:'1VnftoYssQr_mMhBkms80CsynMt-MxsGY' },
  'renforcement-musculaire_intermediaire_sans-materiel': { id:'1GSmGOtm-738hDSTn9SJVuFI8P3uyttCO' },
  'renforcement-musculaire_confirme_sans-materiel':      { id:'1uTZG9F1GmANUSJSnBjZ3KJVJLjVFt_YR' },

  'renforcement-musculaire_debutant_salle-de-sport':      { id:'1PH7EbCZVZWMvGEMxvI9fraeCS1e4N9Ip' },
  'renforcement-musculaire_intermediaire_salle-de-sport': { id:'1IPodeV3MY1FIBeuW9GTlW86HiCFR9aug' },
  'renforcement-musculaire_confirme_salle-de-sport':      { id:'1O4CEPDtuTUxwv-s0iyXYWR9pqYCu3zKo' },

  'prise-de-masse_debutant_sans-materiel':      { id:'18zwiAePfh3MZ51OXU4AoDFuFLVg-SgB9' },
  'prise-de-masse_intermediaire_sans-materiel': { id:'1yIJe_oNrf_ljyR0rTzWeeKLzcttf5sGA' },
  'prise-de-masse_confirme_sans-materiel':      { id:'1HEz-I6NKssJSs0vHxXtzLbj89mzWJCXN' },

  'prise-de-masse_debutant_salle-de-sport':      { id:'13G8YzaA-dGANEoXDlBt8Y40PdKw4C6--' },
  'prise-de-masse_intermediaire_salle-de-sport': { id:'1ECbuitWNLyoS8jXWe0VenEIeU2ig_ysG' },
  'prise-de-masse_confirme_salle-de-sport':      { id:'1RAuCawb4of5mnvGsAyJ3H6N_ysa_A_cQ' },

  'perte-de-poids_debutant_sans-materiel':      { id:'17oMtEn4-7Yrwt3Bxz0bh-53A7Wf_ynHG' },
  'perte-de-poids_intermediaire_sans-materiel': { id:'1jsMnyvctxtetyANFR2TvSs6JMd2JUHh1' },
  'perte-de-poids_confirme_sans-materiel':      { id:'1iLYCMe_Yz_roeNCikt2H-JzCHO4GK2LP' },

  'perte-de-poids_debutant_salle-de-sport':      { id:'1S5FQ4McULZMf3Nr_Y7z1XWrjSyO1tc-n' },
  'perte-de-poids_intermediaire_salle-de-sport': { id:'1lhVHmkvABQr1CO3MaoqVnSjAnPW9f1NH' },
  'perte-de-poids_confirme_salle-de-sport':      { id:'1ZH7mSyGcx6bO2KCQvaMb4fVnHoa7hpWT' },
};
