// File: src/serviceWorkerRegistration.js

// Fungsi untuk mengaktifkan pendaftaran service worker
export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
          registration => {
            console.log('Service Worker terdaftar: ', registration);
          },
          error => {
            console.log('Pendaftaran Service Worker gagal: ', error);
          }
        );
      });
    }
  }
  
  // Fungsi untuk menghapus service worker
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }
  