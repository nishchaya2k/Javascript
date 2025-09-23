/*
- 🔹 Compression Algorithms (gzip, Brotli):

1. What is it?
   - Algorithms used to **compress HTTP response bodies** to reduce size, save bandwidth, and improve load speed.

2. How it works:
   - Client (browser) sends:
       Accept-Encoding: gzip, br
     -> Says: "I can handle gzip or Brotli compressed responses."

   - Server checks supported methods and compresses content accordingly:
     - Adds header:
         Content-Encoding: gzip
     - Sends compressed content (e.g., HTML, JSON, CSS)

   - Browser receives and **automatically decompresses** it before rendering.

3. Real Life:
   - Like getting a document zipped in an email. Smaller to send, and your browser "unzips" it instantly before using it.

4. Common Algorithms:
   - `gzip` → Widely supported, good speed/compression balance.
   - `br` (Brotli) → Newer, better compression than gzip (especially for text).
   - `deflate` → Older, less common now.

5. When NOT to use it:
   - Binary files like `.png`, `.mp4`, `.zip` are already compressed.
   - Re-compressing them is **wasteful** and gives little/no size savings.

6. How to disable compression:
   - Client can send:
       Accept-Encoding: identity
     -> Says: "Send the raw (uncompressed) version."

   - Server can also skip compression for certain file types, routes, or small payloads.

7. Server-Side Setup:
   - Apache: Use `mod_deflate` or `mod_brotli`
   - Nginx: Use `gzip on;` or `brotli on;`
   - Node.js: Use `compression` middleware (Express)
   - CDNs: Most (e.g., Cloudflare) apply compression automatically

8. Key Benefit:
   - Smaller file sizes  
   - Faster page loads  
   - Lower bandwidth usage
*/
