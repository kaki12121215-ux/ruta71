/* Ruta 71 · service worker: abre sin conexión y recibe versiones nuevas. No toca las llamadas a Google. */
const VERSION = 'ruta71-1.1.0';
const ARCHIVOS = ['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest', 'sonidos/fin.wav', 'sonidos/aviso.wav',
  'fonts/HerosCn-bold.woff', 'fonts/Inter-regular.woff', 'fonts/Inter-semibold.woff', 'fonts/Inter-bold.woff', 'fonts/Mono-regular.woff', 'fonts/Mono-bold.woff',
  'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/favicon-32.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || e.request.headers.has('range')) return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { if (r.ok && r.status === 200) { const c = r.clone(); caches.open(VERSION).then(k => k.put(e.request, c)); } return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
});
