// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
    console.log("install")
    // event.waitUntil(
    //     caches.open(PRECACHE)
    //         .then(cache => cache.addAll(PRECACHE_URLS))
    //         .then(self.skipWaiting())
    // );
});


self.addEventListener('activate', event => {
    console.log("activate")
});