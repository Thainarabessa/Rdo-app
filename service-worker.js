self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function(event) {
  // Você pode customizar isso para cache se quiser funcionamento offline
});
