/*
- 🔹 Authorization Header:

1.  Used to send **credentials** (like tokens or passwords) from client to server.
2.  Allows access to **protected resources** (e.g., APIs, user data).
3.  Format:
    Authorization: <type> <credentials>

- 🔹 Example:
    Authorization: Basic dXNlcjpwYXNz
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...

- 🔹 Common Authorization Types:

1.  Basic:
    > Base64-encoded username:password.
    > Least secure, often used with HTTPS.
    
2.  Bearer:
    > OAuth 2.0 token (e.g., JWT).
    > Most common for API authentication.

3.  Digest (less common):
    > Hash-based, more secure than Basic, but complex.

4.  Custom schemes:
    > Some APIs define their own token formats.

- 🔹 Use Cases:

1.  Accessing private APIs or endpoints.
2.  Authenticating users in web or mobile apps.
3.  Session-less auth using tokens (e.g., JWTs in SPAs).
4.  Third-party integrations using OAuth tokens.

- 🔹 Key Points:

1.  Credentials should **never** be exposed in URLs — only in headers.
2.  Usually sent over **HTTPS** to prevent interception.
3.  Server checks Authorization header and responds with:
    → 200 OK (if valid), or 401 Unauthorized (if invalid/missing).
4.  Often used with:
    → `WWW-Authenticate` (server tells client what kind of auth is needed)

*/
