/*
🔹 Why HLS? — The Need for HTTP-Based Adaptive Streaming

- After RTMP and RTSP became less practical for large-scale and browser-based streaming, the industry required:
    - Works over standard HTTP (firewall-friendly)
    - Requires no plugins
    - Can scale globally using CDNs
    - Adapts to varying network conditions (especially on mobile)
- Apple developed HLS (HTTP Live Streaming) in 2009 as a solution for iOS devices and Safari browsers.
- It replaced real-time socket streaming with simple HTTP file delivery, making streaming compatible with web infrastructure.

🔹 What is HLS (HTTP Live Streaming)

- HLS is an adaptive streaming protocol developed by Apple.
- Delivers video over regular HTTP using small media file segments.
- Divides video into short chunks (2–10 seconds each) instead of one continuous stream.
- Client downloads and plays chunks sequentially.
- Player can adjust video quality dynamically based on network speed.

🔹 How HLS Works (Step-by-Step)

1. Encoding
   - Original video encoded into multiple bitrate variants (240p, 480p, 720p, 1080p).

2. Segmentation
   - Each bitrate version divided into small segments (2–10 seconds).
   - Stored as `.ts` (MPEG-2 Transport Stream) or `.mp4`.

3. Manifest / Playlist Creation
   - Master `.m3u8` playlist lists available quality levels and URLs.
   - Each quality level has a variant playlist referencing actual video chunks.

4. Distribution via HTTP
   - All files (playlists + segments) hosted on HTTP servers or CDNs.
   - Player fetches them with simple HTTP requests.

5. Playback
   - Client downloads master playlist first.
   - Selects initial bitrate stream based on network conditions.
   - Buffers segments and starts playback.

6. Adaptive Bitrate Switching
   - Player monitors network speed, buffer, CPU usage.
   - Switches to higher or lower quality streams seamlessly.
   - Each segment starts with a keyframe to allow smooth transitions.

🔹 Components of HLS

1. Master Playlist (master.m3u8)
   - Lists multiple bitrate variants (resolutions, codecs).
   - Example:
     #EXTM3U
     #EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360
     low.m3u8
     #EXT-X-STREAM-INF:BANDWIDTH=2000000,RESOLUTION=1280x720
     high.m3u8

2. Media Playlist (variant.m3u8)
   - Contains URLs of video chunks for a specific bitrate.
   - Example:
     #EXTM3U
     #EXTINF:6.0,
     segment1.ts
     #EXTINF:6.0,
     segment2.ts
     #EXTINF:6.0,
     segment3.ts

3. Media Segments
   - Actual video files stored in `.ts` or `.mp4`.
   - Each starts with a keyframe to allow bitrate switching mid-playback.

🔹 Adaptive Bitrate Streaming (ABR) in HLS

- Player continuously adapts to network speed and buffer.
- Ensures smooth playback even with fluctuating internet speeds.
- Provides a seamless user experience on mobile and desktop.

🔹 Codec & Container Notes in HLS

- HLS is **not codec-agnostic**:
  - Typically uses **H.264** for video and **AAC** for audio.
- HLS is **container-specific**:
  - Traditionally uses **MPEG-2 TS (`.ts`)** for segments.
  - Modern HLS supports fragmented MP4 (`.fMP4`), but older devices expect TS.
- Contrast with DASH:
  - DASH supports multiple codecs (H.264, H.265, VP9, AV1) and containers (`.mp4`, `.m4s`, etc.).
  - HLS is more limited but widely compatible with Apple devices and older browsers.

🔹 Advantages of HLS

- Works over standard HTTP (port 80/443) — firewall-friendly.
- Supported on most browsers and mobile devices.
- Easy distribution via CDNs.
- Supports adaptive bitrate streaming.
- Works for live and on-demand content.

🔹 Limitations of HLS

- Higher latency (15–30 seconds typical).
- Default MPEG-2 TS less efficient than modern containers.
- Slower start than real-time protocols (WebRTC).
- Quality switching may cause short visual artifacts.
- Older browsers may require Media Source Extensions (MSE).

🔹 HLS Summary

1. HLS divides video into small HTTP-delivered chunks.
2. Uses `.m3u8` playlists to organize chunks.
3. Adaptive bitrate streaming allows real-time quality switching.
4. Works seamlessly with CDNs and standard HTTP.
5. Broad compatibility but higher latency than real-time protocols.
6. Ideal for large-scale web streaming (YouTube, Twitch, OTT platforms).

🔹 FAQ / Notes on Confusion Between QUIC and HLS

- Question: Is QUIC better than HLS?
- Answer: HLS is a streaming protocol; QUIC is a transport protocol. HLS can use TCP (HTTP/1.1, HTTP/2) or QUIC (HTTP/3). QUIC improves latency and connection reliability but does not replace HLS.
*/
