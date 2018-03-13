/* ---------------------------------------------
	App wide service worker
------------------------------------------------*/


(function(){
	var version = '1.0.1';

	var filesToCache = [
		'/',
		'index.html',
		'styles/global.min.css',
		'scripts/global.min.js',
		'assets/point-background.png',
		'assets/yc-logo-horz.png'
	];


	function createCacheName(){
		return `yc-${version}`;
	};


	self.addEventListener('install', function(e) {
		console.log('[ServiceWorker] Install');
		let cacheName = createCacheName();

		e.waitUntil(
			caches.open(cacheName).then(function(cache) {
				console.log('[ServiceWorker] Caching app shell');
				return cache.addAll(filesToCache);
			})
		);
	});


	self.addEventListener('activate', event => {
		event.waitUntil(self.clients.claim());
	});


	self.addEventListener('fetch', event => {
		event.respondWith(
			caches.match(event.request, {
				ignoreSearch: true
			}).then(response => {
				return response || fetch(event.request);
			})
		);
	});

}())