/*
========================================================
🧱 Non-Functional Requirements (NFRs) — YouTube Shorts
========================================================

🔹 High Availability: 
   - 99.99% uptime, since global users are constantly watching.

🔹 Low Latency: 
   - Quick load (<1s start for video playback).

🔹 Scalability: 
   - Must handle millions of concurrent viewers and uploaders.

🔹 Reliability: 
   - No data loss during uploads or feed generation.

🔹 Consistency vs Performance Tradeoff: 
   - Eventual consistency for views/likes counts.


--------------------------------------------------------
⚙️ Performance
--------------------------------------------------------
1. CDN (Content Delivery Network): 
   - Distributes videos across edge servers worldwide for low-latency delivery.

2. Adaptive Bitrate Streaming (HLS/DASH):
   - Adjusts video quality based on user’s bandwidth.

3. Lazy Loading & Prefetching:
   - Load comments, metadata, and next Shorts asynchronously.

4. Caching:
   - Redis/Memcached for hot metadata.
   - CDN edge cache for video and thumbnails.

--------------------------------------------------------
🔒 Security
--------------------------------------------------------
1. HTTPS/TLS for secure communication.
2. OAuth 2.0 + JWT for authentication/authorization.
3. DRM (Digital Rights Management) for content protection.
4. Rate limiting and spam detection.
5. ML-based moderation (nudity, spam, copyright).

--------------------------------------------------------
🗄️ Database & Caching
--------------------------------------------------------
1. Metadata Store: Spanner / Bigtable / DynamoDB.
2. Video Storage: GCS / S3 / HDFS.
3. Cache: Redis / CDN for frequently accessed data.
4. Eventual consistency for counters (likes/views).

--------------------------------------------------------
🌐 Network
--------------------------------------------------------
1. Global CDN Edge Nodes for latency reduction.
2. Geo-DNS routing and load balancing.
3. Chunked/resumable uploads for mobile networks.
4. Brotli/gzip compression for API payloads.

--------------------------------------------------------
♿ Rendering & Accessibility
--------------------------------------------------------
1. ARIA, screen-reader, and keyboard navigation support.
2. Responsive design for all devices.
3. Subtitle/caption accessibility.
4. Progressive enhancement for slow networks.

--------------------------------------------------------
🧩 Rendering Techniques
--------------------------------------------------------
1. CSR (Client-Side Rendering): 
   - For Shorts feed (dynamic scrolling, likes, comments).

2. SSR (Server-Side Rendering): 
   - For SEO and faster first render on video pages.

3. SSG/ISR: 
   - For static/trending pages or cached public content.

--------------------------------------------------------
🧪 Testing
--------------------------------------------------------
1. Unit Tests — UI controls, player modules.
2. Integration Tests — upload + playback flow.
3. Automation Tests — regression testing.
4. Penetration Tests — XSS, CSRF, token security.
5. A/B Testing — UX experiments on recommendations.

--------------------------------------------------------
📊 Analytics
--------------------------------------------------------
1. Event-based logging (views, likes, watch time).
2. Data pipelines (Pub/Sub → BigQuery → ML ranking).
3. Real-time dashboards for creators.
4. Aggregated analytics with GDPR compliance.

--------------------------------------------------------
🌍 i18n / l10n
--------------------------------------------------------
1. Multi-language UI strings.
2. Locale-based formatting (date/time/numbers).
3. RTL (Right-to-Left) layout support.
4. Translated captions and audio options.

--------------------------------------------------------
🔐 Auth & Authorization
--------------------------------------------------------
1. OAuth 2.0 / Google Identity Platform.
2. Access & refresh tokens for session management.
3. Role-Based Access Control (RBAC).
4. Secure session cookies with short lifetimes.

--------------------------------------------------------
📡 Communication Techniques
--------------------------------------------------------
1. REST / gRPC APIs between services.
2. WebSockets for live features (real-time chat/comments).
3. Pub/Sub or Kafka for async inter-service messaging.
4. FCM/APNs for push notifications.

--------------------------------------------------------
📶 Offline / Online Communication
--------------------------------------------------------
1. Service Workers for caching last-viewed Shorts.
2. IndexedDB / LocalStorage for temporary offline actions.
3. Background Sync for retrying uploads.
4. Offline placeholders for degraded UX.

========================================================
✅ Summary:
Performance | CDN, Caching, Lazy Loading
Security | OAuth2, DRM, HTTPS
Database | Bigtable, Redis, S3
Rendering | CSR + SSR Hybrid
Analytics | Kafka, BigQuery, ML Models
Communication | gRPC, Pub/Sub, WebSockets
Offline | Service Workers, IndexedDB
========================================================
*/
