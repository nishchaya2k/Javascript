/*
- Service Workers: A Service Worker is a type of JavaScript file that runs in the background of your web application, separate from the main browser thread.
Think of it as a middle layer between the browser and the network/server that can intercept and handle network requests — even when the user is offline.


1. Service Workers allow you to cache assets (HTML, CSS, JS, images, etc.) & api responses so your app can work without an internet connection..
2. You can serve files from cache instead of the network, which is often faster.
3. Enable push notifications even when the browser is not open.
4. Sync data in the background when connectivity is restored 
5. You want your app to work offline or have "offline-first" features.
6. Caches previously visited pages, even if they are offline
7. 



- When to Avoid 
1. Your app is simple/static and doesn't need offline support.
2. You don’t want to deal with caching complexity (it can cause bugs if not handled carefully).
3. You're not using HTTPS — Service Workers only work on secure origins (except on localhost for development).


- Service Worker lifecycle

1. Registration: The Service Worker script is registered with the browser, typically from a main JavaScript file, using navigator.serviceWorker.register().

2. Installation: Once registered, the browser attempts to download and install the Service Worker script. During this phase, you can use the install event to cache static assets required for offline functionality.

3. Activation: After successful installation, the Service Worker moves into an installed state and then, under certain conditions (like no other active Service Worker or a page refresh), becomes active. The activate event is a good place to manage and clean up old caches.

4. Handling Events: Once active, the Service Worker can then handle functional events like fetch (intercepting network requests), push (receiving push messages), and sync (performing background synchronization).

*/