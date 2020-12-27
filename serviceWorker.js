self.addEventListener("install", function(event) {
    console.log("[Service worker] Installing service worker...", event);
});

self.addEventListener("activate", function(event) {
    console.log("[Service worker] Activating service worker...", event);
    return self.clients.claim();
});

// Service worker for pwa
// self.addEventListener('install', function (event) {
//     event.waitUntil(
//         caches.open('sw-cache').then(function (cache) {
//             return cache.addAll(
//                 [
//                     'index.php',
//                     'courses.php',
//                     'dictionaires.php',
//                     'exercises.php',
//                     'references.php',
//                     'reports.php',
//                     'tools.php'
//                 ]
//             )
//         })
//     );
// });
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request).then(function (response) {
//             return response || fetch(event.request);
//         })
//     );
// });
