// console.log("Hello World")
console.log(self)

// console.log("Hello World")
// console.log(self)

/*
- Caching and running Offline

1. We want the app to load even without internet.
   So we cache static assets like HTML, JS, and images.
   These will be served later when offline.

2. We create a helper function `addResourcesToCache` to open a named cache ("v1")
   and store all the essential files we want to make available offline.
*/

const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v3"); // Open or create a cache storage named 'v1'
    await cache.addAll(resources);         // Add all listed resources to cache
}

/*
3. Next, we define a function `cacheMatch` that handles fetch requests.
   First, it checks if the requested resource exists in the cache.

   - If found, it returns the cached response.
   - If not, it fetches from the network, caches the result, and returns it.
   - If network fails (e.g., offline), it returns a fallback message.

   This enables both offline usage and dynamic caching of new requests.
*/

const cacheMatch = async (request, preloadResponsePromise) => {
    const cachedResponse = await caches.match(request) // Try to match the request in cache
    if (cachedResponse) return cachedResponse          // Return from cache if available

    try {
        const networkResponse = await fetch(request);     // Fetch from network
        const cache = await caches.open("v1");            // Open cache
        await cache.put(request, networkResponse.clone()); // Cache the new response
        return networkResponse;                           // Return the original response
    } catch (err) {
        return new Response("Response not found!");       // Fallback if offline and not cached
    }
}

/*
4. The `install` event is fired once when the service worker is first registered.
   Here, we use `event.waitUntil()` to make sure caching finishes before installation completes.

   We cache:
   - HTML files
   - JS files
   - Images
   These make up the core structure (app shell) of the site.
*/

self.addEventListener("install", (event) => {
    event.waitUntil(addResourcesToCache([
        "/",                    // Root
        "app.js",
        "index.html",
        "contact.html",
        "profile.html",
        "images/contactus.png",
        "images/home.jpg",
        "images/profile.jpg",
    ]))
})

/* - can skip

5. The `activate` event is fired after installation, when the service worker takes control.

   We enable `navigationPreload` if the browser supports it.
   This helps in faster page loads by preloading requests while the SW boots up.
*/

self.addEventListener("activate", event => {
    event.waitUntil(async () => {
        if (self.registration.navigationPreload) {
            await self.registration.navigationPreload.enable(); // Optional performance boost
        }
    })
})

/*
6. The `fetch` event is fired for every request made by the page.

   We intercept the request and respond with:
   - Cached resource if available
   - Otherwise, fetch from network and cache it
   - If both fail (offline + not cached), return a fallback message
*/

self.addEventListener("fetch", (event) => {
    event.respondWith(cacheMatch(event.request)); // Use cache-first strategy with network fallback
})


//where I can use it ?? in application, 