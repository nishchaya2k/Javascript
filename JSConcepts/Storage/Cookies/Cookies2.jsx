/*
- Who Does What with Cookies

- Backend Developer’s Responsibility:

1. Set the cookie via the response header:
2. Set-Cookie: token=abc123; Path=/; HttpOnly; Secure; SameSite=Lax
3. Decide: What data to store (token, userId, etc.) & What attributes to set (Secure, HttpOnly, etc.)
4. Optionally read cookies from incoming requests (e.g., for authentication)

- Browser’s Responsibility (Automatic):

1. Stores the cookie once received.
2. Sends the cookie back automatically in the Cookie: header of future matching requests.
3. You don't write any code to send cookies — the browser handles that automatically, as long as: The domain/path/protocol matches & The cookie hasn’t expired & also The SameSite policy allows it


-  Key Conditions for the Browser to Send the Cookie:

1. Domain must match (or subdomain if specified).
2. Path must match the one defined in the cookie.
3. Secure flag requires HTTPS.
4. SameSite policy (e.g., Strict, Lax, or None) must allow it.
5. Cookie must not be expired.



- Summary
Backend sets cookies with specific rules.
Browser stores and sends them automatically when rules match.
Developer doesn’t need to write code to attach cookies in every request — it’s handled by the browser.

*/