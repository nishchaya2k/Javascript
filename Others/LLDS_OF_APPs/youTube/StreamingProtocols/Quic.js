/*
🔹 Why QUIC? — Why not RTMP & RTSP:

🔹 Background:
  - Earlier, video streaming relied on specialized protocols like RTMP and RTSP.
  - These worked well for real-time streams (live events, webcams, etc.) but failed to scale for the modern web (billions of users, mobile, browsers).

🔹 RTMP (Real-Time Messaging Protocol)
  1. Developed by Adobe; used with Flash Player.
  2. Worked over TCP (port 1935) with a persistent connection.
  3. Offered low latency and bi-directional communication.
  4. Used by early YouTube and Twitch for live streaming.

  Limitations:
   - Required Flash plugin (no longer supported by browsers).
   - Not firewall-friendly (non-HTTP port 1935 often blocked).
   - Poor support on mobile and embedded devices.
   - Security vulnerabilities due to plugin-based approach.
   - Not CDN-friendly, hard to cache and distribute via HTTP infrastructure.

🔹 RTSP (Real-Time Streaming Protocol)
  1. Developed by RealNetworks for real-time control (PLAY, PAUSE, STOP) of media streams.
  2. Used in IP cameras, CCTV systems, VLC, etc.
  3. Works over TCP or UDP and delivers continuous streams.

  Limitations:
   - Complex to implement on browsers (requires native support or plugins).
   - Difficult to cache on HTTP-based CDNs.
   - Not scalable for global video distribution.
   - Firewall issues due to custom ports.

🔹 Result:
  - RTMP and RTSP worked great for dedicated apps and live feeds.
  - But they failed on scalability, compatibility, and browser adoption.
  - The industry shifted to HTTP-based streaming (HLS and DASH) for universality.


🔹 Evolution to HTTP-Based Streaming (HLS/DASH)

  1. Why HTTP?
     - Works on standard web ports (80/443) so it is firewall-friendly.
     - Supported by browsers natively without plugins.
     - Compatible with global CDNs, making caching and distribution easy.
     - Easier to scale for millions of concurrent users.

  2. Adaptive Bitrate Streaming (ABR)
     - Protocols like HLS (by Apple) and DASH (by MPEG) use HTTP.
     - Video is encoded into multiple bitrates such as 240p, 480p, 720p, 1080p, etc.
     - Each bitrate is divided into small chunks (2–10 seconds).
     - The player downloads chunks dynamically based on:
       - Network speed
       - Device performance
       - Buffer status
     - Uses manifest files (.m3u8 or .mpd) for metadata about available streams.

  3. Browser Playback via MSE
     - Browsers introduced Media Source Extensions (MSE) for chunk-based streaming.
     - JavaScript fetches video chunks via HTTP and appends them to the <video> element.
     - Browser decodes and plays them smoothly.
     - Result: plugin-free, adaptive, efficient streaming directly inside the browser.


🔹 But Still Problem Exists — Limitations of HTTP (over TCP)

  - Even with HLS/DASH, video data still flows via HTTP over TCP.
  - TCP ensures reliability but introduces overheads unsuitable for high-speed media.

  Key Limitations:
   1. Connection Setup Delay
      - TCP handshake + TLS handshake require 2 round trips before data starts.
      - Increases video startup delay.
   2. Head-of-Line (HoL) Blocking
      - TCP enforces ordered delivery.
      - If one packet is lost, all others must wait which causes playback stutter.
   3. Multiplexing Inefficiency
      - HTTP/2 multiplexes multiple streams but still runs on TCP.
      - One lost packet blocks all streams due to TCP-level ordering.
   4. Connection Breaks on IP Change
      - TCP connection is tied to an IP address.
      - If user switches Wi-Fi to mobile data, TCP resets and playback must reconnect.
   5. Slow Recovery on Lossy Networks
      - TCP congestion control slows down throughput on unstable mobile connections.

  Result:
   - HTTP (over TCP) is reliable but slow for real-time, adaptive, and mobile streaming.
   - Needed a transport protocol that is:
       - Fast like UDP
       - Reliable and secure like TCP + TLS
       - Optimized for web-scale streaming


🔹 How Packet Loss Can Lead to Playback Stutter in the Context of Streaming

  - TCP guarantees that packets arrive in the same order they were sent.
  - If one packet is lost or delayed, all the packets after it must wait until the missing one is retransmitted.
  - This delay is called Head-of-Line (HoL) Blocking, and it causes playback stutter or buffering.

  - In video streaming, data is divided into many small packets (frames or audio chunks).
    Example:
      - If packet 3 is lost, packets 4, 5, and later ones cannot be processed.
      - The player must wait for packet 3 to be resent before continuing playback.

  - As a result, video freezes or audio skips until all packets are received in correct order.
  - This happens because TCP enforces strict in-order delivery, even if the lost packet is unrelated to the others.

  - In multiplexed protocols like HTTP/2 (which still uses TCP):
      - One lost packet can block multiple streams at once due to TCP-level ordering.
  - For streaming and real-time applications, this leads to:
      - Stuttering playback
      - Increased buffering
      - Poor user experience on unstable networks

  - This limitation is one of the key reasons protocols like QUIC were developed — to remove HoL blocking and allow independent stream recovery.


🔹 Enter QUIC (Quick UDP Internet Connections)

  - Developed by Google and later standardized by IETF.
  - Built directly on top of UDP but with reliability, encryption, and multiplexing features similar to TCP and TLS.
  - Designed to solve TCP’s latency and blocking issues.
  - why UDP Choosen for 'QUIC': UDP gives you freedom to build your own reliability layer on top
  - QUIC uses UDP just as a wrapper to send packets quickly — but inside, it implements all the reliability features you’d expect from TCP
  - UDP is unreliable, QUIC over UDP is reliable. (Why UDP is unreliable? Go Through from TypesOfNP.js)

  QUIC = UDP + Reliability + Encryption + Multiplexing + Low Latency

  Goals of QUIC:
   1. Faster Connection Setup
      - Traditional TCP uses separate TCP and TLS handshakes (2 RTTs).
      - QUIC integrates the TLS 1.3 handshake directly into its initial connection setup.
      - Result: fewer round trips and faster connection establishment.
   2. No Head-of-Line Blocking
      - QUIC is multiplexed like HTTP/2 but without TCP’s global ordering.
      - Packet loss only delays the specific stream affected; others continue unaffected.
   3. Connection Migration
      - Uses a unique Connection ID that persists even if IP or network changes.
      - Seamless playback when switching between Wi-Fi, 4G, or 5G.
   4. Built-in Security
      - Uses TLS 1.3 natively; encryption is part of the transport layer itself.
   5. User-Space Implementation
      - Runs in user space rather than OS kernel, making it easier to improve and update.
   6. Better Performance on Mobile and Flaky Networks
      - Handles packet loss and retransmission at the stream level, not connection level.
      - Improves stability and latency for real-world mobile networks.

  - QUIC powers HTTP/3, the newest version of HTTP.

    HTTP/1.1 → TCP (single stream)
    HTTP/2   → TCP (multiplexed, still HoL blocking)
    HTTP/3   → QUIC (UDP-based, fully parallel, low latency)

  - In YouTube’s context:
      - Client (browser/app) communicates with Google CDN via HTTP/3 over QUIC.
      - Benefits:
          - Faster video start time
          - Reduced buffering
          - Seamless bitrate adaptation
          - Stable playback even when switching networks


🔹 Extra Insights (from MDN):
  - QUIC is a multiplexed transport protocol implemented on top of UDP.
  - It replaces TCP as the transport layer in HTTP/3.
  - Designed for quicker setup and lower latency for HTTP connections.
  - Integrates the TLS handshake into the initial QUIC handshake, reducing setup messages.
  - Handles packet loss and retransmission independently for each stream, so only the affected stream is delayed instead of blocking all others.

🔹 QUIC is the evolution that combines:
   - The real-time speed of UDP (like RTSP/RTMP)
   - The reliability and encryption of TCP/TLS (like HTTPS)
   - The multiplexing and scalability of HTTP/2 without TCP’s blocking issues
   - Foundation for modern streaming platforms like YouTube, Netflix, and Twitch


🔹 Summary:
  1. RTMP and RTSP were early streaming protocols but required plugins and were not scalable.
  2. HLS and DASH over HTTP solved compatibility and scalability using adaptive bitrate streaming.
  3. However, HTTP still ran on TCP, which caused latency and head-of-line blocking issues.
  4. QUIC was created to overcome TCP’s weaknesses by building a new transport on top of UDP.
  5. QUIC integrates encryption (TLS 1.3) directly into its handshake, reducing setup time.
  6. QUIC allows multiple independent streams, preventing head-of-line blocking.
  7. QUIC supports connection migration, enabling seamless playback across network changes.
  8. QUIC improves performance on lossy mobile networks due to faster packet recovery.
  9. HTTP/3 is built on QUIC, making it the modern foundation for web and video streaming.
  10. Platforms like YouTube, Netflix, and Twitch use QUIC to achieve faster, smoother, and more reliable playback.


🔹 Example:
   - Imagine three delivery guys bringing things to your house:

   - Guy 1: Video frames (big boxes)
   - Guy 2: Audio chunks (small boxes)
   - Guy 3: Subtitles (letters)

   - If one of them is delayed (say, the subtitle guy takes a wrong turn), the other two don’t stop.You still get the video and audio on time — subtitles might appear a second later.

   - That’s QUIC’s per-stream ordering — each delivery guy (stream) handles their own queue and errors.
*/
