/* TheCut service worker.
   Same-origin files are NETWORK-FIRST: every launch with signal gets the newest code
   (a cheap revalidation), and the cache only answers when the network fails.
   Bump CACHE whenever app.js or index.html changes so old caches are dropped. */
const CACHE = "thecut-v18";
const NET_TIMEOUT = 3500;

const SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./icon.png",
  "./manifest.json",
  "https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(SHELL.map((u) => c.add(new Request(u, { cache: "reload" })).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("message", (e) => { if (e.data === "skipWaiting") self.skipWaiting(); });

const isFont = (u) => u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com";

// Fetch with a deadline so a dead gym connection falls back to cache quickly.
function fetchFresh(req) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), NET_TIMEOUT);
  return fetch(new Request(req, { cache: "no-cache" }), { signal: ctl.signal }).finally(() => clearTimeout(t));
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith((async () => {
      const cacheKey = req.mode === "navigate" ? "./index.html" : req;
      try {
        const r = await fetchFresh(req);
        if (r.ok) { const c = await caches.open(CACHE); c.put(cacheKey, r.clone()); }
        return r;
      } catch (err) {
        const cached = await caches.match(cacheKey);
        return cached || new Response(req.mode === "navigate" ? "Offline" : "", { status: 503 });
      }
    })());
    return;
  }

  // CDN + fonts are pinned versions: cache first.
  if (isFont(url) || url.hostname === "cdnjs.cloudflare.com") {
    e.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const r = await fetch(req);
        if (r.ok || r.type === "opaque") { const c = await caches.open(CACHE); c.put(req, r.clone()); }
        return r;
      } catch (err) { return new Response("", { status: 504 }); }
    })());
  }
});
