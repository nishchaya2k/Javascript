/*
- 🔹 Host Header:

1. What it does: Specifies **which server/domain** the request is targeting.
2. Example:
    Host: www.example.com
3. Real Life:
    You type "www.netflix.com" in your browser. The browser sends:
      Host: www.netflix.com
    So the server knows which site to serve, especially on shared IPs.

- Use Cases:
  Required for HTTP/1.1 virtual hosting.
*/


/*
- 🔹 Origin Header:

1. What it does: Indicates the **origin (protocol + host + port)** of the page making the request.
2. Example:
    Origin: https://www.youtube.com
3. Real Life:
    When you post a comment on YouTube that goes to a different server (`api.example.com`), the browser sends:
      Origin: https://www.youtube.com
    The API uses this to verify the request source for security.

- Use Cases:
  Used in CORS to control cross-origin requests.

- Security:
  Helps prevent CSRF (Cross-Site Request Forgery) attacks.
*/


/*
- 🔹 Referer Header:

1. What it does: Shows **the URL of the page** that linked to the resource being requested.
2. Example:
    Referer: https://www.youtube.com/watch?v=abc123
3. Real Life:
    You click an ad on YouTube that takes you to `https://www.adsite.com/product123`. The browser sends:
      Referer: https://www.youtube.com/watch?v=abc123
    So the ad site knows the visitor came from that YouTube video.

- Use Cases:
  Analytics, traffic source tracking.

- Privacy:
  May be omitted or truncated to protect user privacy.
*/


/*
- 🔹 User-Agent Header:

1. What it does: Identifies the **client software and platform** making the request.
2. Example:
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ...
3. Real Life:
    When you visit a site on Chrome/Windows, this header tells the server your browser & OS, allowing tailored content or bug fixes.

- Use Cases:
  Device detection, browser-specific rendering.

- Security:
  Can be spoofed, so don’t rely on it for security.
*/


/*
- 🔹 Accept-Encoding Header:

1. What it does: Lists **compression methods** the client can handle.
2. Example:
    Accept-Encoding: gzip, deflate, br
3. Real Life:
    Your browser says, "I can accept gzip or Brotli compressed files." The server compresses responses accordingly, speeding up load time.

- Use Cases:
  Reduces bandwidth and improves performance.
*/


/*
- 🔹 Accept-Language Header:

1. What it does: Specifies **preferred languages** for the response, with optional quality (`q`) values for priority.
2. Example:
    Accept-Language: en-US,en;q=0.9,fr;q=0.8
3. Real Life:
    Your browser says: “I prefer English (US), but can also accept English general (priority 0.9) or French (priority 0.8).”
    The server uses this to deliver localized content.

- Quality Values:
  The `q=0.9` means 90% preference; higher q = higher priority.

- Use Cases:
  Localization and content negotiation.
*/


/*
- 🔹 Accept Header:

1. What it does: Lists **media types** the client can process, with optional quality (`q`) values.
2. Example:
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9, q = 0.8
3. Real Life:
    Your browser prefers HTML but can also accept XML(priority 0.9) or any other type(priority 0.8).
    The server picks the best format it supports.

- Quality Values:
`q` values rank preferences; 1.0 is highest, 0 means not acceptable.

- Use Cases:
  Content negotiation for response formats.
*/


/*
- 🔹 Cache-Control Header:

1. What it does: Controls **how the client handles caching** of responses.
2. Example:
    Cache-Control: no-cache
3. Real Life:
    Your browser says, “Don’t use cached content; check with the server for fresh data.”
    Useful to avoid stale pages.

- Use Cases:
  Force reloads, bypass cache.
*/


/*
- 🔹 Cookie Header:

1. What it does: Sends stored **cookies** from client to server.
2. Example:
    Cookie: session_id=abc123; theme=dark
3. Real Life:
    When you revisit an online store, your browser sends cookies so the site remembers your login and preferences.

- Use Cases:
  Sessions, personalization, auth.

- Security:
  Secure, HttpOnly, and SameSite attributes protect cookies from theft.
*/
