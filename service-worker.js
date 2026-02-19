self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tutto-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./menu.html",
        "./kitchen.html",
        "./waiter.html",
        "./admin.html",
        "./login.html",
        "./styles.css",
        "./ding.mp3"
      ]);
    })
  );
});