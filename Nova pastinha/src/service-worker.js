selt.addEventListener("install", event => {

	event.waituntil(

		caches.open("app-saudacao-cache").then(cache => {

			return cache.addAll([

				"index.html",
				
				"manifest.json",
				
				"icone-192.png",
				
				"icon-512.png",

				"solzinho.jpg",

				"tade.jpg",
				
				"noite.jpg",
				
				"madrugada.webp"

			]);

		})

	);
});

self.addEventListener("fetch", event => {

	event.respondWith(
		caches.match(event.request).then(response => response || fetch(event.request))

	);

});