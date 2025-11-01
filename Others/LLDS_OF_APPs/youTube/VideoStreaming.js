/*
Video Streaming Working!!

- 🔹 What’s Video?
  1. A video is a sequence of images (frames) shown in quick succession.
  2. Each image (frame) is a snapshot captured at a specific moment in time.
  3. When displayed rapidly (e.g., 24–60 fps), the human eye perceives continuous motion.
  4. More the Frames higher the file size

- 🔹 mp4 .. etc formats?
  1. Formats like .mp4, .mkv, .mov, .avi are **container formats**.
  2. A container holds multiple streams – video, audio, subtitles, metadata.
  3. The **codec** (e.g., H.264, HEVC, VP9, AV1) defines how the video is compressed and stored inside the container.

- 🔹 When No Concept of Streaming?
  1. Video of 100mb: When client requests to watch any video, then from server whole video is returned and client needs to download it first, so what I mean is client should have buffer of 100mb.
  2. More Internet consumption, higher bandwidth usage.
  3. High startup delay – playback starts only after the full video is downloaded.
  4. If user watches only 2 mins out of 1 hour → still entire file downloaded → waste of bandwidth.
  5. Poor user experience – cannot seek or resume efficiently.
  6. So this model is not scalable → gave rise to **Streaming** (data sent in chunks while playing).
  7. No Streaming can works well for high end devices if you have good internet connection or less size of video.
  8. Its a Progressive Download

- 🔹 Concept of Streaming!
  1. Can we somehow send data or video in chunks
  2. To Enable Streaming we have 2 Protocols, RTMP, RTSP & They are called as specialized streaming protocols
  3. RTMP by Adobe Company
  4. RTSP by Real Networks Company
  5. Now on you can wait for video to download fully, you can stream
  6. Low Latency
  7. Efficient use of Bandwidth
  8. Cons: Suppose you have video size of 40gb of high resolution, so its 1 chunk/frame we can assume to be 200 mb, so to download 1 chunk also you need good internet connection, & now a days you have variety of devices from watches to TV's screen, so for small size screen devices you dont need 40gb video for such high resolution, so client suffers in this case

- 🔹 Concept of Adaptive Bitrate Streaming!
  1. Works on the Protocol of HLS (HTTP Live Streaming) by Apple
  2. If internet speed drops → client automatically switches to lower resolution.
  3. If internet speed increases → client switches back to higher resolution.
  4. Playback is smooth, adaptive, and works across all devices (mobiles, TVs, laptops, etc.).
  5. Video is divided into **small chunks/segments**

  - 🔸 Detailed Explanation of Adaptive Bitrate Streaming (ABR)
    1. **Multiple Versions Created:** 
       - When video is uploaded, the server (like YouTube, Netflix, etc.) encodes it into multiple resolutions and bitrates 
         → Example: 240p, 360p, 480p, 720p, 1080p.
    2. **Chunking (Segmentation):**
       - Each version is divided into small segments (2–10 seconds each).
       - These small chunks are stored on CDN servers.
    3. **Manifest / Playlist File:**
       - A special file (like `.m3u8` for HLS or `.mpd` for DASH) is created.
       - This file contains URLs for all available chunks in different bitrates.
       - Player uses this file to know which chunks to download.
    4. **Playback Start:**
       - When user clicks play, the player requests the manifest file first.
       - Then downloads the first few segments (lowest quality initially) to start playback quickly.
    5. **Dynamic Quality Selection:**
       - While streaming, the player continuously monitors:
         - Current network speed
         - Buffer size
         - CPU performance
       - Based on these, it selects the best suitable bitrate for the next chunk.
    6. **Switching Happens Seamlessly:**
       - If network slows → next chunk requested in lower quality (e.g., from 1080p → 480p)
       - If network improves → next chunk requested in higher quality again.
       - The change happens between segment boundaries → user doesn’t notice the switch.
    7. **Benefits of ABR:**
       - Smooth playback even on fluctuating network.
       - Efficient use of bandwidth (no over-downloading).
       - One video serves all device types (mobile, TV, laptop).
       - Better scalability via HTTP/CDNs.
    8. **Example:**
       - YouTube, Netflix, Hotstar, and Amazon Prime Video use ABR for all their streaming.
*/

