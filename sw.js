self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("v1").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/styles.css",
          "/app.js",
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });