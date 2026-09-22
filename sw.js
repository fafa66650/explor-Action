const CACHE='explor-action-v5-4-7-final-20260922';
const CORE=['./','./index.html','./style.css?v=5.4.7','./app.js?v=5.4.7','./data.js?v=5.4.7','./js/gps-navigation.js?v=5.4.7','./js/offline-map.js?v=5.4.7','./js/deeplink.js?v=5.4.7','./js/a11y-runtime.js?v=5.4.7','./manifest.webmanifest?v=5.4.7','./icon-192.png','./icon-512.png','./assets/guide-guard.webp','./assets/guide-think.webp','./assets/guide-welcome.webp','./privacy.html','./terrain.html'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)))});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))]))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put('./index.html',copy));return response}).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response})));
});
