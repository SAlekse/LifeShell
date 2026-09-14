const CACHE = 'life-shell-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './core/shell.js',
  './core/router.js',
  './core/api.js',
  './core/events.js',
  './core/storage.js',
  './core/ui.js',
  './core/theme.js',
  './core/ui.css',
  './core/modules.registry.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // API не кэшируем
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
