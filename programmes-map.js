// clé = objectif_niveau_materiel (minuscules, tirets)
// objectifs: prise-de-masse | perte-de-poids | renforcement-musculaire
// niveaux: debutant | intermediaire | avance
// materiel: sans-materiel | poids-du-corps | salle-de-sport

export const PROGRAMMES = {
  // RENFORCEMENT MUSCULAIRE
  'renforcement-musculaire_debutant_salle-de-sport': {
    id: '1PH7EbCZVZWMvGEMxvI9fraeCS1e4N9Ip',
    name: 'Renforcement_musculaire_debutant_salle-de-sport.pdf'
  },
  'renforcement-musculaire_intermediaire_salle-de-sport': {
    id: '1IPodeV3MY1FIBeuW9GTlW86HiCFR9aug',
    name: 'Renforcement_musculaire_intermediaire_salle-de-sport.pdf'
  },
  'renforcement-musculaire_intermediaire_sans-materiel': {
    id: '1GSmGOtm-738hDSTn9SJVuFI8P3uyttCO',
    name: 'Renforcement_musculaire_intermediaire_sans-materiel.pdf'
  },
  'renforcement-musculaire_avance_sans-materiel': {
    id: '1uTZG9F1GmANUSJSnBjZ3KJVJLjVFt_YR',
    name: 'Renforcement_musculaire_avance_sans-materiel.pdf'
  },
  'renforcement-musculaire_debutant_sans-materiel': {
    id: '1VnftoYssQr_mMhBkms80CsynMt-MxsGY',
    name: 'Renforcement_musculaire_debutant_sans-materiel.pdf'
  },
  'renforcement-musculaire_avance_salle-de-sport': {
    id: '1O4CEPDtuTUxwv-s0iyXYWR9pqYCu3zKo',
    name: 'Renforcement_musculaire_avance_salle-de-sport.pdf'
  },

  // PRISE DE MASSE
  'prise-de-masse_debutant_salle-de-sport': {
    id: '13G8YzaA-dGANEoXDlBt8Y40PdKw4C6--',
    name: 'Prise_de_masse_debutant_salle-de-sport.pdf'
  },
  'prise-de-masse_intermediaire_salle-de-sport': {
    id: '1ECbuitWNLyoS8jXWe0VenEIeU2ig_ysG',
    name: 'Prise_de_masse_intermediaire_salle-de-sport.pdf'
  },
  'prise-de-masse_avance_salle-de-sport': {
    id: '1RAuCawb4of5mnvGsAyJ3H6N_ysa_A_cQ',
    name: 'Prise_de_masse_avance_salle-de-sport.pdf'
  },
  'prise-de-masse_debutant_poids-du-corps': {
    id: '18zwiAePfh3MZ51OXU4AoDFuFLVg-SgB9',
    name: 'Prise_de_masse_debutant_poids-du-corps.pdf'
  },
  'prise-de-masse_avance_poids-du-corps': {
    id: '1HEz-I6NKssJSs0vHxXtzLbj89mzWJCXN',
    name: 'Prise_de_masse_avance_poids-du-corps.pdf'
  },
  'prise-de-masse_intermediaire_sans-materiel': {
    id: '1yIJe_oNrf_ljyR0rTzWeeKLzcttf5sGA',
    name: 'Prise_de_masse_intermediaire_sans-materiel.pdf'
  },

  // PERTE DE POIDS
  'perte-de-poids_debutant_salle-de-sport': {
    id: '1S5FQ4McULZMf3Nr_Y7z1XWrjSyO1tc-n',
    name: 'Perte_de_poids_debutant_salle-de-sport.pdf'
  },
  'perte-de-poids_intermediaire_salle-de-sport': {
    id: '1lhVHmkvABQr1CO3MaoqVnSjAnPW9f1NH',
    name: 'Perte_de_poids_intermediaire_salle-de-sport.pdf'
  },
  'perte-de-poids_avance_salle-de-sport': {
    id: '1ZH7mSyGcx6bO2KCQvaMb4fVnHoa7hpWT',
    name: 'Perte_de_poids_avance_salle-de-sport.pdf'
  },
  'perte-de-poids_intermediaire_poids-du-corps': {
    id: '1jsMnyvctxtetyANFR2TvSs6JMd2JUHh1',
    name: 'Perte_de_poids_intermediaire_poids-du-corps.pdf'
  },
  'perte-de-poids_debutant_poids-du-corps': {
    id: '17oMtEn4-7Yrwt3Bxz0bh-53A7Wf_ynHG',
    name: 'Perte_de_poids_debutant_poids-du-corps.pdf'
  },
  'perte-de-poids_avance_sans-materiel': {
    id: '1iLYCMe_Yz_roeNCikt2H-JzCHO4GK2LP',
    name: 'Perte_de_poids_avance_sans-materiel.pdf'
  },
};

export const drivePreview = id => `https://drive.google.com/file/d/${id}/preview`;
export const driveDownload = id => `https://drive.google.com/uc?export=download&id=${id}`;
