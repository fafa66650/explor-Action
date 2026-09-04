const C='explor-action-v3-20260904';
const A=['./','index.html','style.css','app.js','data.js','manifest.webmanifest','logo-fafa.png','icon-192.png','icon-512.png','assets/guide-guard.webp','assets/guide-point.webp','assets/guide-think.webp','assets/guide-welcome.webp','assets/guide-adventure.webp','assets/guide-calm.webp','assets/logo-clean.webp','assets/logo-premium.webp'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{if(e.request.method==='GET'){const y=x.clone();caches.open(C).then(c=>c.put(e.request,y))}return x}).catch(()=>e.request.mode==='navigate'?caches.match('index.html'):undefined)))});
