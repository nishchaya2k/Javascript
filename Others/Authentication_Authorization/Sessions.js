/*
========================================
SESSION INTERNALS (COOKIES & HEADERS)
========================================

This section explains HOW session-based authentication
works internally using HTTP headers and cookies.

----------------------------------------
1️⃣ WHAT IS A SESSION (INTERNAL VIEW)
----------------------------------------

- A session is server-side stored data
- Client only holds a SESSION IDENTIFIER
- Session ID is sent using HTTP headers (cookies)

IMPORTANT:
👉 Actual user data NEVER lives in the browser
👉 Browser only stores a random sessionId

----------------------------------------
2️⃣ HTTP HEADERS INVOLVED
----------------------------------------

There are TWO important headers:

1. Response Header (Server → Client)
2. Request Header  (Client → Server)

----------------------------------------
3️⃣ SET-COOKIE (RESPONSE HEADER)
----------------------------------------

When login is successful, server responds with:

HTTP RESPONSE HEADER:
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Lax

Meaning:
- sessionId=abc123  → unique session identifier
- This header tells the browser to STORE the cookie

----------------------------------------
4️⃣ COOKIE (REQUEST HEADER)
----------------------------------------

On every next request, browser automatically sends:

HTTP REQUEST HEADER:
Cookie: sessionId=abc123

Server then:
- Reads sessionId
- Looks it up in session store
- Retrieves user info
- Authenticates the request

----------------------------------------
5️⃣ COOKIE ATTRIBUTES (VERY IMPORTANT)
----------------------------------------

----------------------------------------
🔐 HttpOnly
----------------------------------------

- Prevents JavaScript access to cookies
- document.cookie CANNOT read it

WHY needed?
- Protects against XSS (Cross-Site Scripting)

Example:
Set-Cookie: sessionId=abc123; HttpOnly

Without HttpOnly:
- Malicious JS can steal sessionId

----------------------------------------
🔐 Secure
----------------------------------------

- Cookie is sent ONLY over HTTPS
- Never sent over HTTP

Example:
Set-Cookie: sessionId=abc123; Secure

WHY needed?
- Prevents man-in-the-middle attacks
- Protects sessionId on public networks

----------------------------------------
🔐 SameSite
----------------------------------------

Controls WHEN cookies are sent with cross-site requests

Values:

1️⃣ SameSite=Strict
- Cookie sent ONLY for same-site requests
- NOT sent on external links

Use when:
- High security apps
- Internal dashboards

2️⃣ SameSite=Lax (MOST COMMON)
- Cookie sent on top-level navigation (GET)
- Not sent on POST from external sites

Use when:
- Most login-based apps
- Good balance of usability & security

3️⃣ SameSite=None
- Cookie sent in ALL cross-site requests
- MUST be used with Secure

Use when:
- Third-party auth
- Cross-domain apps

----------------------------------------
6️⃣ WHY COOKIES ARE USED FOR SESSIONS
----------------------------------------

- Automatically sent by browser
- No manual handling needed
- Works well with HttpOnly
- Ideal for stateful authentication

----------------------------------------
7️⃣ SESSION LIFETIME
----------------------------------------

Sessions expire via:
- Time-based expiry
- Manual logout
- Server restart (if in-memory)

Cookie expiry:
Set-Cookie: sessionId=abc123; Max-Age=3600

----------------------------------------
8️⃣ SECURITY SUMMARY
----------------------------------------

Best practice cookie config:

Set-Cookie:
  sessionId=abc123;
  HttpOnly;
  Secure;
  SameSite=Lax;

----------------------------------------
9️⃣ COMMON DEVELOPER MISTAKES
----------------------------------------

❌ Storing user data in cookies
❌ Not using HttpOnly
❌ Using SameSite=None without Secure
❌ Long session expiry
❌ Sharing session across domains improperly

----------------------------------------
🧠 FINAL TAKEAWAY
----------------------------------------

- Session ID lives in COOKIE
- Actual session data lives on SERVER
- Cookies travel via HTTP HEADERS
- HttpOnly + Secure + SameSite are CRITICAL
- Browser handles cookie transmission automatically

========================================
END OF SESSION INTERNALS
========================================
*/
