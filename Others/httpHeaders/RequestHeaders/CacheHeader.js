/*
- 🔹 Cache-Control Header:

1.  Controls how, how long, and where **responses are cached** (browser, CDN, proxy).
2.  Can be set by both client (request) and server (response).
3.  Overrides older headers like `Expires`.
4.  Format:
    Cache-Control: <directive>[, <directive>, ...]

- 🔹 Example:
    Cache-Control: no-cache, no-store, must-revalidate
    Cache-Control: public, max-age=3600

1.  Real-world Example:
2.  You open a news website. It loads static files like logo.png.
3.  If the server sends:
    Cache-Control: public, max-age=86400
4.  Your browser stores it for 1 day → no need to download again next time = faster load!

- 🔹 Common Directives:

👉 For **client-side caching**:
1.  `no-cache` → Must revalidate with server before using cached copy.
2.  `no-store` → Don't store at all (used for sensitive data).
3.  `max-age=<seconds>` → Cache is fresh for this many seconds.
4.  `must-revalidate` → If cache is expired, must contact server.

👉 For **shared/public caching** (e.g., CDN, proxies):
1.  `public` → Cacheable by any cache (browser, proxy, CDN).
2.  `private` → Only browser can cache it (not shared caches).
3.  `s-maxage=<seconds>` → Like `max-age` but for shared caches only.

- 🔹 Use Cases:

1.  Static assets (images, CSS, JS):
    > Long `max-age` improves performance.
2.  APIs:
    > `no-store` or `no-cache` to prevent stale data.
3.  Sensitive pages (e.g., banking, login):
    > `no-store` for full privacy.

- 🔹 Key Points:

1.  Improves speed + reduces server load via caching.
2.  Can prevent sensitive info from being stored.
3.  Takes priority over older headers like `Expires`.
4.  Used in both requests (client) and responses (server).

*/
