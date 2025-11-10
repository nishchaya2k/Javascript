/*
- 🔹 Concept of Media Source Extensions (MSE)
  1. What is MSE?
     - A browser feature (part of HTML5)/Web Api that allows JavaScript to feed video/audio data directly to a <video> element.
     - Enables adaptive streaming (HLS, DASH) to work inside browsers without plugins.
  2. Why Needed?
     - Normal <video src="file.mp4"> requires a single full file.
     - MSE allows dynamic appending of small video chunks fetched from the network (e.g., segment1.m4s, segment2.m4s).
     - Supports both on-demand and live streaming scenarios.
  3. How It Works
     - JavaScript creates a MediaSource object and attaches it to a <video> tag.
     - Adds a SourceBuffer to store fetched binary chunks temporarily.
     - Chunks are appended via sourceBuffer.appendBuffer(data).
     - Browser decodes and plays chunks continuously.
     - Works with HLS (.ts or .fMP4) and DASH (.m4s/fMP4) segments.
  4. Data Flow Example
     - Manifest file (.m3u8 or .mpd) lists video chunks.
     - Player fetches a chunk → appends it to MSE buffer → browser decodes and plays.
  5. MSE Buffer
     - Temporary memory inside browser for appended segments.
     - Player adds new chunks and removes old ones.
     - Typically holds a few seconds/minutes of video ahead of playback.
  6. Browser Handles
     - Video/audio decoding
     - Track synchronization
     - Rendering and timing
  7. How MSE Fits in the Streaming Ecosystem
     1. Video Encoding & Segmentation
        - Source video encoded into multiple bitrates.
        - Each bitrate split into small segments (HLS `.ts`/`.fMP4`, DASH `.m4s`).
     2. Manifest / Playlist
        - HLS: `.m3u8` file lists chunks and bitrates.
        - DASH: `.mpd` file lists chunks, bitrates, codecs, and timing.
     3. Transport Layer
        - Segments delivered over standard HTTP (HTTP/1.1, HTTP/2, HTTP/3/QUIC).
     4. Player Logic (JavaScript)
        - Reads manifest for available bitrates.
        - Fetches next segment based on network, buffer, and playback position.
        - Appends segment to MSE buffer for continuous playback.
     5. Browser Role
        - Decodes audio/video from MSE buffer.
        - Synchronizes tracks.
        - Renders playback smoothly.
     6. Adaptive Bitrate Switching
        - Player monitors network and buffer.
        - Chooses higher/lower bitrate segment for next chunk.
        - Appends new segment → playback continues seamlessly.
     7. Live Streaming Support
        - Player fetches new segments as they are generated.
        - MSE buffer ensures smooth playback without waiting for entire file.
  8. Transport Layer Note
     - MSE handles playback, not transport.
     - Underlying transport is still HTTP/TCP or HTTP/3/QUIC.
  9. Benefits
     - Enables smooth adaptive playback.
     - Works via normal HTTP.
     - Supports live streaming and adaptive bitrate switching.
     - Used by YouTube, Netflix, Twitch, and other web players.
  10. Summary
      - MSE = browser API for chunk-based playback.
      - JavaScript handles fetching and appending.
      - Browser handles decoding and rendering.
      
- 🔹 Video Player Controls and Playback

  1. User Controls (Play, Pause, Seek, etc.)
     - Play: Starts video playback from the current position.
     - Pause: Stops playback but continues to fetch chunks in the background.
     - Seek: Allows jumping to a specific position. Fetches the appropriate chunk and resumes playback.

  2. Control Events
     - Play Event: Triggered when the play button is clicked; playback starts.
     - Pause Event: Triggered when the pause button is clicked; stops playback.
     - Seek Event: Triggered when the seek bar is moved; fetches and appends the chunk at the new position.

  3. Buffer Management
     - Buffer Underflow: If the buffer runs low, the video pauses until new chunks are fetched.
     - Buffer Overflow: If the buffer is too full, chunk fetching may slow down.

  4. Error Handling
     - Handles network errors or decoding issues and attempts to fetch/append new chunks or lower bitrate streams.

  5. Playback Mechanics
     - Chunk Fetching: Player appends chunks based on current playback position and buffer.
     - Network Monitoring: Adjusts bitrate based on network conditions for smooth playback.

- 🔹 Additional Notes on Flash, RTMP, and Browser API
  1. Flash Player Plugin
     - Third-party plugin by Adobe, allowed browsers to play video/audio before HTML5 video.
     - Required manual installation.
     - Used by YouTube in the 2000s.
     - Downsides: security vulnerabilities, high CPU usage, poor mobile support.
     - Modern browsers dropped support by 2020.
  
  2. RTMP (Real-Time Messaging Protocol)
     - Developed by Adobe for streaming audio, video, and data.
     - Worked mainly with Flash Player.
     - Features: low-latency streaming, maintained client-server connection.
     - Limitations: not firewall-friendly (TCP 1935), required plugin, poor mobile support.
     - Current Usage: almost obsolete, replaced by HTTP-based streaming protocols (HLS/DASH) with MSE.

  3. Browser API
     - Allows JavaScript to interact with the browser (manipulate DOM, fetch data, control video/audio).
     - MSE provides direct access to media buffers for dynamic video segment management.
     - Difference from Flash: Flash handled decoding inside plugin; MSE lets the browser decode and render.

  4. Evolution to MSE
     - Before HTML5 + MSE: YouTube used Flash Player + RTMP.
       - Pros: adaptive streaming possible via RTMP on desktop.
       - Cons: security issues, plugin requirement, poor mobile support.
     - After HTML5 + MSE: YouTube uses HTTP-based streaming (HLS/DASH) + MSE.
       - Pros: works on all modern devices, adaptive bitrate, secure, CDN-friendly.
       - Browser handles decoding and rendering; JavaScript handles fetching and appending chunks.
*/