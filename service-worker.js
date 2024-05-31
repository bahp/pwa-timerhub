const staticCacheName = 'timerhub-static';
const dynamicCacheName = 'timerhub-dynamic';
const assets = [
  '/pwa-timerhub/',
  '/pwa-timerhub/index.html',
  '/pwa-timerhub/app.js',
  '/pwa-timerhub/favicon.ico',
  '/pwa-timerhub/manifest.json',
  '/pwa-timerhub/css/pdx.css',
  '/pwa-timerhub/css/main.css',
  '/pwa-timerhub/css/bootstrap.min.css',
  '/pwa-timerhub/js/bootstrap-5.3.0.min.js',
  '/pwa-timerhub/js/easytimer-1.1.3.min.js',
  '/pwa-timerhub/js/jquery-3.6.0.min.js',
  '/pwa-timerhub/js/pagecycle.js',
  '/pwa-timerhub/images/logo-pdx.png',
  '/pwa-timerhub/audio/mixkit-clear-announce-tones-2861.wav',
  '/pwa-timerhub/audio/mixkit-happy-bells-notification-937.wav',
  '/pwa-timerhub/audio/mixkit-urgent-simple-tone-loop-2976.wav',
  '/pwa-timerhub/audio/beep-minutes.mp3',
  '/pwa-timerhub/audio/beep-seconds.mp3'
];

/*
  '/css/pdx.css',
  '/css/main.css',
  '/css/bootstrap.min.css',
  '/js/main.js',
  '/js/dexie-3.2.4.min.js',
  '/js/easytimer-1.1.3.min.js',
  '/js/jquery-3.6.0.min.js',
  '/js/moment-2.29.1.min.js',
  '/main.js',
  //'/js/pagecycle.js',
  '/audio/mixkit-clear-announce-tones-2861.wav',
  '/images/logo-pdx.svg',
  '/images/logo-pdx.png'
  '/audio/mixkit-clear-announce-tones-2861.wav',
  '/audio/mixkit-happy-bells-notification-937.wav',
  '/audio/mixkit-urgent-simple-tone-loop-2976.wav',
 */


// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size))
      }
    })
  })
}

// install event
self.addEventListener('install', evt => {
  console.log('[Service Worker] Installing Service Worker ...', evt);
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('[Service Worker] Caching shell assets ...');
      cache.addAll(assets)
    })
  )
})

// activate event
self.addEventListener('activate', evt => {
  console.log('[Service Worker] Activating Service Worker ....', evt);
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys)
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      )
    })
  )
})

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt)
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone())
          // check cached items size
          limitCacheSize(dynamicCacheName, 15)
          return fetchRes
        })
      })
    }).catch(() => {
      if (evt.request.url.indexOf('.html') > -1) {
        return caches.match('/pwa-github/static/tmpl/404.html')
      }
    })
  )
})





/*
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      console.log('[Service Worker] Caching shell assets ...');
      cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(function(res) {
          return caches.open(dynamicCacheName).then(function(cache) {
            cache.put(event.request.url, res.clone());
            return res;
          });
        });
      }
    })
  );
});
*/

/*
self.addEventListener('visibilitychange', function() {
  updateLog('resumedd!'+ document.visibilityState)
    if (document.visibilityState === 'visible') {
        console.log('APP resumed');
        //window.location.reload();
      updateLog('resumedd!'+ document.visibilityState)
    }
});*/

/*
event.waitUntil(
  clients.matchAll({ type: 'window' })
    .then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        const state = clientList[i].visibilityState;
      }
    })
);*/

