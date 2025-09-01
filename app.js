
const $ = (s,el=document)=>el.querySelector(s);
const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
function save(key,val){localStorage.setItem(key, JSON.stringify(val));}
function load(key,def=null){try{return JSON.parse(localStorage.getItem(key)) ?? def;}catch{ return def; }}
function qs(name){return new URL(location).searchParams.get(name);}
window.APP = {save, load, qs};
if ('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));}
