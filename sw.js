const C='explor-action-v4-20260907';
const CORE=['./','./index.html','./style.css?v=4.0.0','./app.js?v=4.0.0','./data.js?v=4.0.0','./manifest.webmanifest?v=4.0.0','./logo-fafa.png','./icon-192.png','./icon-512.png','./assets/guide-guard.webp','./assets/guide-point.webp','./assets/guide-think.webp','./assets/guide-welcome.webp','./assets/guide-adventure.webp','./assets/guide-calm.webp','./assets/logo-clean.webp','./assets/logo-premium.webp','./privacy.html','./terrain.html'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))]))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);
 const same=u.origin===location.origin;
 const isApp=same&&(e.request.mode==='navigate'||/\/(app|data)\.js$/.test(u.pathname)||/\/style\.css$/.test(u.pathname)||/\/index\.html$/.test(u.pathname));
 if(isApp){
   e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
 }else{
   e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{if(same){const y=x.clone();caches.open(C).then(c=>c.put(e.request,y))}return x})));
 }
});