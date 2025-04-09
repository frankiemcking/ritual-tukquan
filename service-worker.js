self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tukquan-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './service-worker.js',
        './ritual_ambient.mp3',
        './fase1.png',
        './fase2_cara.png',
        './fase2_cruz.png',
        './fase3.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});