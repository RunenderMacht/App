self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Leerer Service Worker, reicht völlig für PWABuilder aus!
});
