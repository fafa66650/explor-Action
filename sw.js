const CACHE='explor-action-v5-4-8-20260927';
const CORE=['./','./index.html','./style.css?v=5.4.8','./app.js?v=5.4.8','./data.js?v=5.4.8','./js/gps-navigation.js?v=5.4.8','./js/offline-map.js?v=5.4.8','./js/deeplink.js?v=5.4.8','./js/a11y-runtime.js?v=5.4.8','./manifest.webmanifest?v=5.4.8','./icon-192.png','./icon-512.png','./assets/guide-guard.webp','./assets/guide-think.webp','./assets/guide-welcome.webp','./privacy.html','./terrain.html'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)))});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))]))});
function navigationCacheKey(url){
  const scope=new URL(self.registration.scope),path=url.pathname.slice(scope.pathname.length);
  if(path==='privacy.html')return './privacy.html';
  if(path==='terrain.html')return './terrain.html';
  return './index.html';
}
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    const key=navigationCacheKey(url);
    event.respondWith(fetch(event.request).then(async response=>{
      if(response.ok){const copy=response.clone();const cache=await caches.open(CACHE);await cache.put(key,copy)}
      return response;
    }).catch(async()=>await caches.match(key)||await caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(async response=>{
    if(response.ok){const copy=response.clone();const cache=await caches.open(CACHE);await cache.put(event.request,copy)}
    return response;
  })));
});
