/*
- 🔹 HTTP/HTTPS:

1. All data between client and server uses HTTPS.
2. Encrypts data in transit → protects user info and privacy.

- 🔹 CDN (Content Delivery Network):

1. Stores and delivers static content (images, videos, CSS) from servers close to users.
2. Reduces load on main servers and speeds up content delivery globally.
3. Common flow example:
   - User uploads media → stored in S3 (cloud object storage).
   - CDN linked to S3 caches copies in edge locations worldwide.
   - When user requests media, CDN serves from closest edge, not the origin.
4. Improves load time and reduces bandwidth cost on origin server.

- 🔹 Load Balancer:

1. Distributes incoming requests evenly across multiple backend servers.
2. Prevents overload and improves availability.

- 🔹 API Gateway:

1. Central entry point for client requests.
2. Handles routing, authentication, rate limiting.

- 🔹 Compression:

1. Compress API responses using gzip or Brotli.
2. Reduces data sent over network → faster loading.

- 🔹 Connection Reuse (Keep-Alive):

1. Reuse TCP connections for multiple requests.
2. Saves time on connection setup.

- 🔹 Caching (HTTP-level):

1. Use headers like ETag, Cache-Control to cache responses on client/CDN.
2. Speeds up repeat requests.

- 🔹 Retry & Timeout:

1. Set timeouts to avoid hanging requests.
2. Retry failed requests with limits.

- 🔹 WebSockets:

1. Maintain open connections for real-time data (DMs, notifications).
2. More efficient than repeated polling.

- 🔹 Network Failures & Offline:

1. Handle poor/no connectivity gracefully.
2. Show retry options, save drafts locally.

- 🔹 Summary:

✅ Always HTTPS  
✅ Use CDN for static media (e.g., S3 + CDN)  
✅ Use Load Balancer for scaling  
✅ Compress responses  
✅ Use API Gateway  
✅ Cache smartly with HTTP headers  
✅ Use WebSocket for real-time  
✅ Handle network failures gracefully
*/
