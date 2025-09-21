/*
- 🔹 Cookie Header:

1.  Sent by the client to the server to include previously stored **key-value pairs**.
2.  Used for maintaining **session state**, tracking, and personalization.
3.  Format:
    Cookie: <key1>=<value1>; <key2>=<value2>; ...

- 🔹 Example:
    Cookie: sessionId=abc123; theme=dark; lang=en-US

- 🔹 Use Cases:

1.  Session management:
    > Store login tokens or session IDs.
2.  Personalization:
    > Save user preferences like theme or language.
3.  Tracking:
    > Analytics or ad systems use cookies to track user behavior.

- 🔹 Related Headers:

1.  `Set-Cookie` (Response header):
    > Server sets a cookie in the client’s browser.
2.  `Cookie` (Request header):
    > Browser sends cookie back with future requests to same domain/path.

- 🔹 Key Points:

1.  Cookies are domain + path-specific (controlled by `Set-Cookie`).
2.  Automatically sent by browsers on matching domain/path.
3.  Can have expiration, Secure, HttpOnly, and SameSite flags.
4.  Max size per cookie: ~4KB; number of cookies per domain is limited.

🛑 **Security Tip:**
- Sensitive info (like tokens) in cookies should be marked:
    → `Secure` (HTTPS only), `HttpOnly` (not accessible via JS), `SameSite` (cross-site rules).

*/
