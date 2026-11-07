const CACHE_NAME='lingoleaf-shell-v5';
const SHELL=['./','./index.html','./styles.css','./app.js','./data.js','./manifest.webmanifest','./apple-touch-icon.png','./apple-touch-icon-180x180.png','./apple-touch-icon-167x167.png','./apple-touch-icon-152x152.png','./icon-192.png','./icon-512.png','./favicon.ico','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png','./assets/lingoleaf-logo.webp','./assets/lingoleaf-original-wordmark.png','./assets/lingoleaf-original-full.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('lingoleaf-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  // Network-first keeps GitHub Pages deployments fresh, while retaining an offline copy.
  event.respondWith(fetch(req).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy));}
    return response;
  }).catch(()=>caches.match(req).then(cached=>cached||Response.error())));
});
