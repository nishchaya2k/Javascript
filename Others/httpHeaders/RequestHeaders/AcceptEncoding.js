/*
- 🔹 Accept-Encoding Header:

1.  Tells the server which **compression algorithms** the client can understand.
2.  Helps reduce response size — improves performance and load times.
3.  Server may compress the response using one of the accepted encodings.
4.  Format:
    Accept-Encoding: <encoding>[, <encoding>;q=<weight>]

- 🔹 Example:
    Accept-Encoding: gzip, deflate, br
    Accept-Encoding: gzip;q=1.0, *;q=0.5

- 🔹 Common Encoding Types:

1.  gzip → Most common, works with most browsers.
2.  br (Brotli) → More efficient than gzip, especially for text.
3.  deflate → Older, less commonly used now.
4.  identity → No compression (default).

- 🔹 Use Cases:

1.  Browser performance:
    > Browser sends Accept-Encoding: gzip → server compresses response.
2.  API optimization:
    > Smaller JSON payloads sent using gzip or br.
3.  Mobile data savings:
    > Compressed responses reduce bandwidth usage.

- 🔹 Key Points:

1.  Improves load speed by reducing payload size.
2.  Server chooses 1 encoding from list and responds with:
    → Content-Encoding: <encoding>
3.  If none match, server may return uncompressed or 406 (Not Acceptable).
4.  Can include quality weights (q-values) to rank preference.

*/
