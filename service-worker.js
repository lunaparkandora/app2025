const CACHE_NAME = 'luna-park-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  'https://fonts.googleapis.com/css2?family=Pacifico&family=Balsamiq+Sans:wght@400;700&display=swap',
  // Aggiungi qui gli URL delle icone che creerai
  'https://i.postimg.cc/g011HMJ8/192x192.png',
  'https://i.postimg.cc/tTPwShZf/512-x-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});