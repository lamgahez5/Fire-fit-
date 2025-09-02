export const CONFIG = {
  API_BASE: 'https://your-worker-subdomain.workers.dev', // ← remplace par l’URL Cloudflare Worker
  PAYMENTS_ENABLED: false,                                // ← active quand Stripe est OK
  STRIPE_PUBLIC_KEY: 'pk_live_xxx',                       // ← à renseigner plus tard
  PRICE_ONE_TIME: 'price_one_time_xxx',
  PRICE_SUBSCRIPTION: 'price_sub_999'
};
