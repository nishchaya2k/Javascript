/*
- 🔹 HTTP Headers: They carry meta-data for API requests and responses, influencing how the server processes requests and how the client handles responses.

- 🔹 Key Characteristics:
  - **Key-Value Pairs**: Headers are sent as key-value pairs, conveying important information like content type, authentication, and caching.
  - **Separate from Body**: Headers contain meta-data, while the body carries the actual content.
  - **Text-based**: Headers are plain-text, human-readable information.

- 🔹 Why They’re Important:
  - **Control Behavior**: Headers define how requests/responses are processed (e.g., `Content-Type`, `Cache-Control`).
  - **Security**: Headers manage authentication (e.g., `Authorization`) and session data (e.g., `Set-Cookie`).
  - **Content Negotiation**: Headers help the client and server agree on formats (e.g., `Accept`).

- 🔹 Examples:
  Request Headers:
    GET /api/users HTTP/1.1
    Authorization: Bearer your-token
    Accept: application/json

  Response Headers:
    HTTP/1.1 200 OK
    Content-Type: application/json
    Set-Cookie: session_id=abcd1234

- 🔹 Additional Notes:
  - **Standard vs Custom**: Use standard headers (e.g., `Content-Type`) or custom ones for special needs (e.g., `X-API-Version`).
  - **Size Limits**: Headers have a size limit (usually 8KB).
  - **Case Insensitive**: Header names are case-insensitive but typically use capitalized form.

*/
