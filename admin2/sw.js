const CACHE_NAME = 'cm-filings-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/dashboard.html',
  '/signin.html',
  '/signup.html',
  '/company.html',
  '/clients.html',
  '/contacts.html',
  '/credentials.html',
  '/compliance.html',
  '/transactions.html',
  '/invoice.html',
  '/qr.html',
  '/user.html',
  '/report.html',
  '/data.html',
  '/logo.png',
  '/manifest.json'
];

// Install Event: Cache Core Static Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache and caching core workspace assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event: Clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache version:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event: Network-first for Firestore/dynamic APIs, Cache-first for static views
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Bypass service worker for Firebase requests or external API calls to ensure live data
  if (url.origin.includes('firestore.googleapis.com') || 
      url.origin.includes('firebaseapp.com') || 
      url.origin.includes('googleapis.com') || 
      url.origin.includes('gstatic.com') || 
      url.origin.includes('cdnjs.cloudflare.com') ||
      url.origin.includes('unpkg.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version, but fetch in background to update cache (stale-while-revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {/* Ignore network errors on background sync */});
        
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      }).catch(() => {
        // Fallback option if offline and page not cached
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('/dashboard.html');
        }
      });
    })
  );
});
