/*
- 🔹 Accept Header:

1.  Tells the server what content types (media types) the client can handle in the response.
2.  Allows content negotiation — client says what formats it prefers (HTML, JSON, XML, etc.).
3.  Helps server choose the most appropriate content type for the response.
4.  Format:
    Accept: <media-type>[, <media-type>;q=<weight>]

- 🔹 Example:
    Accept: text/html
    Accept: application/json, text/plain;q=0.8, q = 0.5

    - 🔹 Use Cases:

1.  Browser requests:
    > Accept: text / html → server returns a webpage.
2.  API calls(e.g., AJAX, fetch):
    > Accept: application / json → server returns JSON.
3.  Fallback behavior:
    > Accept: means client accepts any content type.

- 🔹 Quality Values (q-factor):

1.  Used to set preference weight (0.0 to 1.0).
2.  Higher q-value = higher preference.
3.  Example:
    Accept: application/json;q=1.0, text/html;q=0.8

- 🔹 Key Points:

1.  Used for **content negotiation** between client and server.
2.  Helps APIs or servers return the right format (JSON, XML, HTML).
3.  Default if missing: servers often assume or return HTML.
4.  Common in RESTful APIs and browser - server communication.

*/
