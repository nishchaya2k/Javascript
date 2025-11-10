/*
🔹 Network Layer (IP)
- Base layer responsible for delivering packets between devices.
- All transport protocols (TCP, UDP, QUIC) run on top of it.

🔹 Transport Layer
- TCP: Reliable, ordered delivery. Used by HTTP/1.1, HTTP/2, HLS, DASH (by default).
- UDP: Fast, connectionless. Used by QUIC, RTSP (sometimes), WebRTC.
- QUIC: UDP-based transport with reliability and encryption built-in. Powers HTTP/3.

🔹 Application Layer Protocols
- HTTP/1.1: Runs on TCP. Simple web communication. Single stream. HoL blocking.
- HTTP/2: Runs on TCP. Multiplexed streams but still affected by TCP HoL.
- HTTP/3: Runs on QUIC (UDP). Multiplexed streams without HoL. Low-latency.

🔹 Streaming Protocols
- RTMP: Runs on TCP. Low-latency streaming for Flash apps (legacy).
- RTSP: Runs on TCP or UDP. Real-time control of streams (play/pause).
- HLS: Runs on HTTP (TCP/QUIC). Chunk-based adaptive bitrate streaming. Works with CDNs.
- DASH: Runs on HTTP (TCP/QUIC). Similar to HLS, more flexible, supports low-latency modes.
- WebRTC: Runs on UDP (sometimes QUIC). Peer-to-peer, real-time, low-latency streaming.

🔹 Browser & Player Integration
- Media Source Extensions (MSE): Lets JS append video chunks for HLS/DASH playback.
- HLS/DASH players use HTTP to fetch segments. Quality adapts based on network speed.
- QUIC/HTTP/3 reduces latency and buffering for adaptive streaming.
- Blob and SourceBuffer: Used to handle video/audio chunks for efficient playback and memory management in streaming applications.
- Fetch API: Used in combination with MSE to fetch media chunks for playback.
- Blob URLs: Used to create temporary URLs for media chunks in streaming.
  
🔹 Key Interconnections
- TCP → HTTP/1.1, HTTP/2 → HLS/DASH (traditional streaming)
- UDP → QUIC → HTTP/3 → HLS/DASH (modern, low-latency streaming)
- TCP/UDP → RTMP/RTSP → Real-time streaming in apps
- UDP → WebRTC → Peer-to-peer low-latency streaming
- HLS & DASH are application-layer protocols built on transport (TCP or QUIC)
- QUIC solves TCP limitations (HoL blocking, slow recovery) for HTTP/3 streaming
- MSE is the bridge in browsers to play HLS/DASH regardless of transport layer
- Blob and SourceBuffer used to manage streaming data in MSE (media chunks for playback).
- JavaScript handles fetching and appending of blobs into the SourceBuffer for seamless video playback.

🔹 Summary
- Transport choice (TCP, UDP, QUIC) affects latency, reliability, and streaming smoothness.
- HLS/DASH are adaptive protocols relying on transport (TCP or QUIC) for delivery.
- QUIC + HTTP/3 is the modern stack for smoother, faster web streaming.
- Legacy protocols (RTMP, RTSP) are mostly replaced by HTTP-based streaming for scalability and browser support.
- MSE allows for seamless chunk-based streaming in modern browsers, integrating with HLS/DASH.
- Blob objects represent media chunks, which are fetched and appended to the SourceBuffer in MSE.

🔹 Order:
  - Best (2025): HLS or DASH → HTTP/3 → QUIC → UDP (+ MSE for playback)
  - Still Good: HLS/DASH → HTTP/2 → TCP
  - Old/Legacy: RTMP or RTSP (plugin or hardware only)

🔹 Application Layer (top)      ← You interact here
├── HLS, DASH, RTMP, RTSP  ← streaming formats / logic
├── HTTP / HTTP/3          ← web delivery protocol
├── QUIC / TCP / UDP       ← transport protocol (data delivery)
└── IP / Ethernet           ← network plumbing (packets, routing)

*/