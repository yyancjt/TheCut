/* TheCut service worker — offline app shell.
   Bump CACHE whenever app.js or index.html changes. */
const CACHE = "thecut-v4";

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
    // Cache each item independently so one bad CDN response can't fail the whole install.
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

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Navigations: serve the cached shell immediately, refresh it in the background.
  if (req.mode === "navigate") {
    e.respondWith((async () => {
      const cached = await caches.match("./index.html");
      const net = fetch(req).then((r) => {
        if (r.ok) caches.open(CACHE).then((c) => c.put("./index.html", r.clone()));
        return r;
      }).catch(() => null);
      return cached || (await net) || new Response("Offline", { status: 503 });
    })());
    return;
  }

  // Everything else: cache first, then network, and cache what comes back.
  if (url.origin === location.origin || isFont(url) || url.hostname === "cdnjs.cloudflare.com") {
    e.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const r = await fetch(req);
        if (r.ok || r.type === "opaque") { const c = await caches.open(CACHE); c.put(req, r.clone()); }
        return r;
      } catch (err) {
        return cached || new Response("", { status: 504 });
      }
    })());
  }
});
