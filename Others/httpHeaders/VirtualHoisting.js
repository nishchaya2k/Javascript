/*
- 🔹 Virtual Hosting:

1. What is it?
   - A technique that lets **one physical server host multiple websites/domains** using a single IP address.

2. How it works:
   - The client sends the `Host` header with the domain name it wants.
   - The server reads this header and serves the matching website’s content.

3. Why use it?
   - Saves cost and resources by sharing one server/IP among many websites.
   - Essential for hosting providers offering multiple websites on one machine.

4. Real-Life Analogy:
   - Like an office building with many businesses. The building is the IP address, and the `Host` header is the business name guiding visitors to the right office.

5. HTTP Relation:
   - HTTP/1.1 requires the `Host` header to identify which site is requested.
   - Without it, the server wouldn’t know which website to serve.

6. Importance:
   - Enables scalable web hosting.
   - Foundation for most shared web hosting environments.
*/



/*
Terms whose notes pending:

CORS (Cross-Origin Resource Sharing)
CSRF (Cross-Site Request Forgery)
Content Negotiation
Quality Values (q=)
HttpOnly Cookie Attribute
SameSite Cookie Attribute
Compression Algorithms (gzip, Brotli)
304 Not Modified Response
Conditional Requests (If-Modified-Since, If-None-Match)
Spoofing (in User-Agent context)

*/