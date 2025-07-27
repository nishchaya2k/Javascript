/*
1. Registering a Service Worker - we use register method, which is present in navigator object service worker property

2. After Registeration, Browser will download it and execute it in a separate thread, which is also known as installation phase

3. In installation phases, script will be checked for validity and is cached by browser

4. after installation phase, install event is fired & allowing service worker to execute setup task.

5. Now In Activation Phase: (Handled inside sw.js)
   - Browser activates the new Service Worker.
   - Cleans up old caches and takes control of the page (via self.clients.claim()).
   - This is the right place to do version cleanup tasks.

6. Scope:
   - The scope defines which files the Service Worker can control (intercept requests for).
   - By default, it's the directory where sw.js is located and everything beneath it.
   - You can customize it using `{ scope: '/some/path/' }` in the `register()` method.

7. Type of Service Worker:
   - 'classic' is the default type (standard JS file).
   - You can set `type: 'module'` when registering to use ES6 module syntax (e.g., import/export).
   - Example: `navigator.serviceWorker.register('sw.js', { type: 'module' })`

8. updateViaCache:
    - This controls how the browser handles caching during SW updates.
    - Default is `'imports'`, which means imported files can come from HTTP cache.
    - `'none'` forces the browser to bypass cache for update checks.
    - `'all'` applies HTTP cache for both main and imported scripts.
    - Example: `updateViaCache: 'none'` ensures always fresh scripts during update.

9. Dev Tools Options (in Service Workers):
    - "Offline": Simulates offline mode to test caching behavior.
    - "Update on reload": Forces SW to check for new version on every page reload.
    - "Bypass for network": Disables SW temporarily and forces all requests to hit the network.

10. on Page Refresh data will be vanished

11. While Creating a new service worker, make sure all the previous service workers are deleted 

12. if Multiple verions of service workers are there, make sure u maintain the uniqueness

*/

const registerServiceWorker = async () => {
    // Check if service workers are supported in this browser
    if ("serviceWorker" in navigator) {
        try {
            // Register the service worker script
            const registration = await navigator.serviceWorker.register("./sw.js");

            // Listen for updates to the service worker (e.g. new version found)
            registration.addEventListener("updatefound", () => {
                console.log("New worker being installed => ", registration.installing);
            });

            // Log install/active status
            if (registration.installing) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active!");
            }
        } catch (err) {
            console.error("Registration failed");
        }
    }
}

registerServiceWorker();
