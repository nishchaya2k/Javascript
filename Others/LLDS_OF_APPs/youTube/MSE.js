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






*/