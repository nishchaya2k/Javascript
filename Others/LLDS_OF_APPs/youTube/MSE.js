/*
- 🔹 Concept of Media Source Extensions (MSE)!
  1. What is MSE?
     - A browser feature (part of HTML5) that allows JavaScript to feed video/audio data directly to a <video> element.
     - Enables adaptive streaming (HLS, DASH) to work inside browsers without plugins.
  2. Why Needed?
     - Normal <video src="file.mp4"> requires a single full file.
     - MSE allows dynamic appending of small video chunks fetched from the network (e.g., segment1.m4s, segment2.m4s).
  3. How It Works:
     - JavaScript creates a MediaSource object and attaches it to a <video> tag.
     - It then adds a SourceBuffer, where fetched binary chunks are stored temporarily.
     - Chunks are appended via sourceBuffer.appendBuffer(data).
     - The browser decodes these chunks and plays them continuously.
  4. Data Flow Example:
     - Manifest file (.m3u8 or .mpd) → contains URLs of video chunks.
     - Player fetches a chunk → gets binary blob → appends it to MSE buffer → browser decodes and plays.
  5. MSE Buffer:
     - Temporary memory inside browser for holding appended segments.
     - Player manages this buffer: adds new chunks and removes old ones.
     - Typically holds a few seconds/minutes of video ahead of playback.
  6. Browser Handles:
     - Video/audio decoding
     - Sync between tracks
     - Rendering and timing
  7. Benefits:
     - Enables smooth adaptive playback.
     - Works via normal HTTP (no special streaming protocol needed).
     - Used by YouTube, Netflix, Twitch, and other web players.
  8. Summary:
     - MSE = Core browser API for chunk-based playback.
     - JavaScript player handles fetching + appending.
     - Browser handles decoding + rendering.


- 🔹 Additional Notes on Flash, RTMP, and Browser API (Extension)
  1. Flash Player Plugin:
     - Flash Player was a third-party plugin developed by Adobe.
     - It allowed browsers to play video/audio content before HTML5 video was standardized.
     - Users had to install it manually (it was not part of the browser by default).
     - YouTube used Flash Player in the 2000s to stream videos.
     - Downsides:
       - Security vulnerabilities
       - High CPU usage
       - Poor mobile support
     - Modern browsers (Chrome, Firefox, Edge, Safari) have **dropped support** for Flash by 2020.
  
  2. RTMP (Real-Time Messaging Protocol):
     - Developed by Adobe for streaming audio, video, and data over the internet.
     - Worked mainly with Flash Player.
     - Features:
       - Low-latency streaming
       - Maintained connection between client and server
     - Limitations:
       - Not firewall-friendly (used TCP port 1935)
       - Required plugin support (Flash)
       - Poor mobile device compatibility
     - Current Usage: Almost obsolete in web browsers; replaced by HTTP-based streaming protocols (HLS/DASH) with MSE.

  3. Browser API:
     - API = Application Programming Interface
     - Browser APIs allow JavaScript to **interact with the browser** to perform actions like:
       - Manipulating DOM
       - Fetching data
       - Controlling video/audio playback (like MSE)
     - MSE is a browser API that provides **direct access to media buffers**, letting JavaScript manage video segments dynamically.
     - Difference from Flash:
       - Flash handled decoding and rendering inside a plugin
       - MSE allows the **browser itself** to decode/render, no plugin needed

  4. Evolution to MSE:
     - Before HTML5 + MSE:
       - YouTube → Flash Player + RTMP
       - Pros: Worked for the desktop web, adaptive streaming possible via RTMP
       - Cons: Security issues, plugin requirement, poor mobile support
     - After HTML5 + MSE:
       - YouTube → HTTP-based streaming (HLS/DASH) + MSE
       - Pros: Works on all modern devices, adaptive bitrate, secure, CDN-friendly
       - Browser handles decoding and rendering
       - JavaScript handles fetching and appending chunks
*/