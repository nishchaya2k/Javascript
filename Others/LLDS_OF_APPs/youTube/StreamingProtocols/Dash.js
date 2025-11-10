/*
🔹 Why DASH? — The Need for a Vendor-Neutral HTTP-Based Adaptive Streaming

- HLS worked well for Apple devices, but the streaming industry needed:
    - A standard, open, vendor-neutral adaptive streaming protocol.
    - Support across all platforms (Windows, Android, iOS, Smart TVs, browsers).
    - Flexible container and codec support.
    - HTTP-based delivery for easy CDN distribution.
- DASH (Dynamic Adaptive Streaming over HTTP) was standardized by MPEG in 2012.

🔹 What is DASH

- DASH is an adaptive streaming protocol over HTTP, similar to HLS.
- Divides video into small segments (chunks) delivered over standard HTTP.
- Supports adaptive bitrate streaming: client switches quality dynamically based on network conditions.
- Unlike HLS, DASH is codec-agnostic and container-agnostic (can use `.mp4`, `.m4s`, or other formats).

🔹 How DASH Works (Step-by-Step)

1. Encoding
   - Original video encoded into multiple bitrates (240p, 480p, 720p, 1080p, etc.).

2. Segmentation
   - Each bitrate divided into small segments (2–10 seconds).
   - Stored as `.mp4` or `.m4s` files.

3. Manifest / MPD Creation
   - DASH uses an MPD (Media Presentation Description) XML file as a manifest.
   - Lists available bitrates, segment URLs, timing, codecs, and other metadata.

4. Distribution via HTTP
   - Segments and MPD files hosted on HTTP servers or CDNs.
   - Player fetches segments and MPD using standard HTTP requests.

5. Playback
   - Client downloads MPD file first.
   - Selects appropriate quality level for initial playback.
   - Fetches and buffers segments sequentially.

6. Adaptive Bitrate Switching
   - Player monitors network speed, buffer status, and device capabilities.
   - Switches to higher or lower bitrate seamlessly during playback.

🔹 Components of DASH

1. MPD (Media Presentation Description)
   - XML manifest describing available segments, bitrates, codecs, resolutions.
   - Example snippet:
     <MPD>
       <Period>
         <AdaptationSet>
           <Representation bandwidth="500000" width="640" height="360" />
           <Representation bandwidth="1500000" width="1280" height="720" />
         </AdaptationSet>
       </Period>
     </MPD>

2. Media Segments
   - Small video/audio files in `.mp4` or `.m4s`.
   - Each starts with a keyframe for smooth switching between bitrates.

🔹 Adaptive Bitrate Streaming (ABR) in DASH

- Ensures smooth playback by selecting optimal bitrate continuously.
- Player reacts to network fluctuations in real-time.
- Reduces buffering and improves user experience on mobile and desktop devices.

🔹 Advantages of DASH

- Open standard; not tied to any vendor.
- Works over standard HTTP (port 80/443) — firewall-friendly.
- Supports multiple codecs and containers.
- Compatible with CDNs and large-scale distribution.
- Adaptive bitrate streaming ensures smooth playback.

🔹 Limitations of DASH

- Similar latency as HLS due to chunked delivery (not real-time).
- Slightly more complex to implement due to XML-based manifest (MPD).
- Browser support sometimes requires MSE for playback.
- Live latency higher than protocols like WebRTC or low-latency HLS.

🔹 DASH Summary

1. DASH is an open adaptive streaming protocol over HTTP.
2. Uses MPD files to organize small video/audio chunks.
3. Supports adaptive bitrate streaming for smooth playback.
4. Works on standard HTTP infrastructure (CDNs, web servers).
5. Vendor-neutral alternative to HLS, compatible across devices and browsers.
6. Typically used by platforms like Netflix, YouTube, and large OTT providers.

🔹 DASH — Codec-Agnostic & Container-Agnostic

- Codec: Method to encode (compress) and decode (playback) audio/video.
- Unlike HLS, DASH does not mandate a specific codec or container format.

Codec-agnostic:
  - Works with different video codecs: H.264, H.265/HEVC, VP9, AV1, etc.
  - Allows adoption of newer, more efficient codecs over time.

Container-agnostic:
  - Can use different file containers like `.mp4`, `.m4s`, or others.
  - Not tied to MPEG-2 TS (which HLS traditionally uses).

Benefit:
  - Greater flexibility for content providers and device compatibility.
  - Easier optimization for quality, bandwidth, and platform requirements.

Contrast with HLS:
  - HLS typically uses H.264 video codec in `.ts` containers.
  - DASH allows mixing and evolving codecs without changing the protocol.

🔹 FAQ / Notes

- Question: Does DASH use TCP or QUIC?
- Answer: DASH is a streaming protocol; transport depends on HTTP version:
    - DASH over HTTP/1.1 or HTTP/2 → TCP
    - DASH over HTTP/3 → QUIC
- Just like HLS, DASH benefits from QUIC’s low-latency and head-of-line blocking improvements when used with HTTP/3.
*/
