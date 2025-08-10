/*
Note: HTTP & HTTPS – largely the same, the key difference lies in the protocol.

- HTTP: HyperText Transfer Protocol
- HTTPS: HTTP + SSL/TLS (Secure)

1. HTTP vs HTTPS:
   - HTTP transmits data in plain text, making it vulnerable to interception.
   - HTTPS encrypts data using TLS, providing confidentiality and integrity.
   - HTTPS is preferred for any communication involving sensitive data (e.g., login, payments).
   - HTTPS uses port 443; HTTP uses port 80.

2. HTTP Headers:

   - Definition: Metadata (key-value pairs) sent along with HTTP requests and responses.

   - Use Cases:
     - Caching
     - Authentication
     - Managing state
     - Security policies
     - Custom behavior (e.g., via custom headers like `X-Requested-With` — now deprecated)

   - Types of Headers:
     - Request Headers → Sent from the client (e.g., `Accept`, `Authorization`)
     - Response Headers → Sent from the server (e.g., `Set-Cookie`, `Server`)
     - Representation Headers → Describe the format/encoding of content (e.g., `Content-Encoding`, `Content-Language`)
     - Payload Headers → Describe the payload/data itself (e.g., `Content-Length`, `Content-Type`)

   - Common Headers:
     - Accept: `application/json`, `text/html`, etc.
     - User-Agent: Info about client/browser
     - Authorization: Bearer tokens, Basic Auth, etc.
     - Content-Type: `application/json`, `application/x-www-form-urlencoded`
     - Cookie: Sent by client to server
     - Set-Cookie: Sent by server to client
     - Cache-Control: Caching directives

   - CORS Headers:
     - Access-Control-Allow-Origin
     - Access-Control-Allow-Credentials
     - Access-Control-Allow-Methods
     - Access-Control-Allow-Headers
     - Access-Control-Expose-Headers

   - Security Headers:
     - Content-Security-Policy
     - X-Content-Type-Options
     - X-Frame-Options
     - X-XSS-Protection (deprecated but still in use)
     - Cross-Origin-Embedder-Policy
     - Cross-Origin-Opener-Policy
     - Cross-Origin-Resource-Policy
     - Strict-Transport-Security

3. URI, URL, and URN:

   - URI (Uniform Resource Identifier): Generic identifier for a resource, can be a URL or URN.
   - URL (Uniform Resource Locator): A URI that provides a means to locate the resource by describing its primary access mechanism (e.g., `https://example.com/page`).
   - URN (Uniform Resource Name): A URI that names the resource without describing its location (e.g., `urn:isbn:0451450523`).

4. HTTP Methods: Basic set of operations used to interact with a server
   - GET: Retrieve a resource (read-only, no side effects)
   - HEAD: Same as GET but without the response body (headers only) – useful for checking metadata
   - OPTIONS: Returns allowed HTTP methods for a resource (used for CORS preflight)
   - TRACE: Echoes back the received request – used for diagnostic/debugging purposes (rarely used)
   - DELETE: Removes the specified resource
   - PUT: Replaces the resource entirely (idempotent)
   - POST: Submits data to the server (commonly used to create resources)
   - PATCH: Partially updates a resource (only the specified fields)

5. HTTP Status Codes: Standard response codes indicating the result of an HTTP request

   - 1xx → Informational
     - 100 Continue: Initial part of the request received, client should continue
     - 101 Switching Protocols: Protocol upgrade in progress
     - 102 Processing (WebDAV): Server has received and is processing the request (no response yet)

   - 2xx → Success
     - 200 OK: Standard response for successful requests
     - 201 Created: Resource has been successfully created
     - 202 Accepted: Request accepted for processing, but not completed
     - 204 No Content: Successful request, but no content returned

   - 3xx → Redirection
     - 301 Moved Permanently: Resource has permanently moved to a new URL
     - 302 Found: Temporary redirect
     - 307 Temporary Redirect: Same method should be used for redirected request
     - 308 Permanent Redirect: Same as 301 but method and body preserved

   - 4xx → Client Errors
     - 400 Bad Request: Malformed or invalid request syntax
     - 401 Unauthorized: Authentication required or failed
     - 402 Payment Required: Reserved for future use (used by some APIs)
     - 403 Forbidden: Server understood request but refuses to authorize it
     - 404 Not Found: Requested resource not found
     - 409 Conflict: Request conflicts with current state of the resource
     - 429 Too Many Requests: Rate limit exceeded

   - 5xx → Server Errors
     - 500 Internal Server Error: Generic server-side error
     - 501 Not Implemented: Server does not support the request method
     - 502 Bad Gateway: Invalid response from upstream server
     - 503 Service Unavailable: Server is temporarily overloaded or down
     - 504 Gateway Timeout: Server did not receive timely response from upstream

   Notes:
   - 1xx codes are rarely seen by end users
   - 2xx indicates success; 204 is used when no response body is needed
   - 3xx codes are critical for SEO and redirection logic
   - 4xx errors are client-side; 401 ≠ 403 (Unauthorized vs Forbidden)
   - 5xx errors are server-side and may require backend investigation
*/
