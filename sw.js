// PescaPoints service worker: app shell offline (HTML network-first, asset cache-first).
const CACHE='pescapoints-v7';
const ASSETS=['./','./index.html','./manifest.webmanifest','./lib/leaflet.js','./lib/leaflet.css','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const req=e.request;
  const isHTML=req.mode==='navigate'||(req.headers.get('accept')||'').includes('text/html');
  const cacheable=r=>r&&r.ok&&r.type!=='opaque';
  if(isHTML){
    e.respondWith(fetch(req).then(r=>{ if(cacheable(r)){ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(req,cp)); } return r; })
      .catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));
  } else {
    e.respondWith(caches.match(req).then(r=>r||fetch(req).then(fr=>{ if(cacheable(fr)){ const cp=fr.clone(); caches.open(CACHE).then(c=>c.put(req,cp)); } return fr; }).catch(()=>caches.match('./index.html'))));
  }
});
