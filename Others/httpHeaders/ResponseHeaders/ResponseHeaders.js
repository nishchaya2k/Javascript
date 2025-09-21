/*
- 🔹 Server Header:

1.  Reveals the **software used by the origin server**.
2.  Example:
    Server: Apache/2.4.41 (Ubuntu)
3.  Can be helpful for debugging, but exposes info to attackers.
4.  Example: Real Life: Like a restaurant receipt showing the **kitchen type** (e.g., "Pizza Oven Model X"). Helpful, but can reveal too much.


- 🔹 Use Cases:
1.  Devs use it to understand server environment.
2.  Can be stripped or masked for security (via proxies or configs).

- 🔹 Security Note:
1.  Revealing server versions may aid targeted attacks.
2.  Best practice: Obfuscate or remove in production.

*/


/*
- 🔹 Date Header:

1.  Indicates the **timestamp when the response was generated**.
2.  Format: RFC 7231 (HTTP-date)
3.  Example:
    Date: Sun, 21 Sep 2025 16:45:00 GMT
4.  Real Life: Like a **timestamp on a package** — "shipped at this time". Useful for comparing freshness or delays.


- 🔹 Use Cases:
1.  Helps in caching decisions and debugging.
2.  Used by CDNs/proxies to determine freshness.

- 🔹 Key Point:
   > Always in GMT/UTC — not local time.
*/


/*
- 🔹 Last-Modified Header:

1.  Shows when the **resource was last changed**.
2.  Used with conditional requests (`If-Modified-Since`).
3.  Format: HTTP-date
4.  Example:
    Last-Modified: Tue, 10 Sep 2025 12:30:00 GMT
5.  Real Life: Like a **"last updated" tag** on a blog post. Your browser can check: "Has this changed? No? Then don’t re-download."


- 🔹 Use Cases:
1.  Improves efficiency — avoids sending unchanged content.
2.  Used in caching and 304 Not Modified responses.

- 🔹 Best Practice:
    Keep accurate timestamps for static files.
*/


/*
- 🔹 Expires Header:

1.  Older HTTP caching header (replaced by `Cache-Control`).
2.  Specifies an absolute date/time when content is considered stale.
3.  Format: HTTP-date
4.  Example:
    Expires: Wed, 22 Sep 2025 00:00:00 GMT
5.  Real Life: Like a **"Best Before" date** on food. After that, the browser considers the content stale — even if it's still usable.


- 🔹 Use Cases:
1.  Legacy caches still use it.
2.  Can conflict with `Cache-Control` → the latter takes priority.

- 🔹 Tip:
    Use `Cache-Control` instead for more flexibility.
*/


/*
- 🔹 Content-Type Header:

1.  Tells the browser the **media type** of the response.
2.  Format: MIME type
3.  Example:
    Content-Type: text/html; charset=UTF-8
4.  Real Life: Like a **label on a file** — “This is a PDF” or “This is a photo.” The browser uses this to decide how to display it.


- 🔹 Common Types:
1.  text/html → HTML documents
2.  application/json → APIs / JSON responses
3.  text/css → Stylesheets
4.  application/javascript → JS files
5.  image/png → PNG images

- 🔹 Key Point:
   > Essential for correct rendering and parsing.
*/


/*
- 🔹 Content-Encoding Header:

1.  Tells the browser **how the content is compressed**.
2.  Helps reduce response size → improves load time.
3.  Example:
    Content-Encoding: gzip
4.  Real Life: Like sending a file in a **.zip folder**. Saves space. The browser “unzips” it automatically before using it.


- 🔹 Common Values:
1.  gzip
2.  br (Brotli)
3.  deflate

- 🔹 Browser Behavior:
    Automatically decompresses before displaying.

- 🔹 Tip:
    Combine with `Accept-Encoding` on client-side.
*/


/*
- 🔹 Set-Cookie Header:

1.  Sends cookies from server to client.
2.  Format:
    Set-Cookie: <name>=<value>; <attributes>
3.  Real Life: Like a **stamp card** at a coffee shop. The browser keeps it, and hands it back to the server next time for recognition.


- 🔹 Example:
    Set-Cookie: session_id=abc123; HttpOnly; Secure; Path=/; Max-Age=3600

- 🔹 Common Attributes:
1.  `Secure` → Only sent over HTTPS
2.  `HttpOnly` → JS can’t access it (prevents XSS)
3.  `SameSite=Strict|Lax|None` → Cross-site restrictions
4.  `Max-Age` / `Expires` → Lifetime of the cookie

- 🔹 Use Cases:
1.  User sessions
2.  Preferences
3.  Auth tokens (with caution)

- 🔹 Security Tips:
    Use `Secure` + `HttpOnly` + `SameSite=Strict` where possible.
*/


/*
- 🔹 Cache-Control Header

1.  Describes: How and how long content can be **cached** by browser or proxies.
2.  Example: Cache-Control: public, max-age=86400
3.  Real Life: Like a **“keep fresh for 1 day” label** on a file. Until then, the browser doesn’t need to re-fetch it.

*/


/*
- 🔹 ETag Header:

1.  Stands for **Entity Tag** — a unique ID for a version of the resource.
2.  Helps with **cache validation**.
3.  Example:
    ETag: "686897696a7c876b7e"
4.  Real Life: Like a **QR code on a document**. If the browser still has the same version, it skips re-downloading it. Saves bandwidth!


- 🔹 Use With:
1.  `If-None-Match` → client sends it back to check if resource changed.
2.  If unchanged → server responds with 304 Not Modified (saves bandwidth).

- 🔹 Strong vs Weak ETags:
1.  Strong: Exact match of content
2.  Weak: Semantically equivalent (e.g., W/"xyz123")

- 🔹 Best Practice:
    Use ETags for dynamic content to optimize caching.
*/
