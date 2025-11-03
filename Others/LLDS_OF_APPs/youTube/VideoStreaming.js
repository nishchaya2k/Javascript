/*
Video Streaming Working!!

- 🔹 What’s Video?
  1. A video is a sequence of images (frames) shown in quick succession.
  2. Each image (frame) is a snapshot captured at a specific moment in time.
  3. When displayed rapidly (e.g., 24–60 fps), the human eye perceives continuous motion.
  4. More the Frames higher the file size

- 🔹 mp4 .. etc formats?
  1. Formats like .mp4, .mkv, .mov, .avi are container formats.
  2. A container holds multiple streams – video, audio, subtitles, metadata.
  3. The codec (e.g., H.264, HEVC, VP9, AV1) defines how the video is compressed and stored inside the container.

- 🔹 When No Concept of Streaming?
  1. Video of 100mb: When client requests to watch any video, then from server whole video is returned and client needs to download it first, so what I mean is client should have buffer of 100mb.
  2. More Internet consumption, higher bandwidth usage.
  3. High startup delay – playback starts only after the full video is downloaded.
  4. If user watches only 2 mins out of 1 hour → still entire file downloaded → waste of bandwidth.
  5. Poor user experience – cannot seek or resume efficiently.
  6. So this model is not scalable → gave rise to Streaming (data sent in chunks while playing).
  7. No Streaming can works well for high end devices if you have good internet connection or less size of video.
  8. Its a Progressive Download

- 🔹 Concept of Streaming!
  1. Can we somehow send data or video in chunks
  2. To Enable Streaming we have 2 Protocols, RTMP, RTSP (Real-Time Messaging Protocol and RTSP stands for Real-Time Streaming Protocol)
  3. RTMP by Adobe Company
  4. RTSP by Real Networks Company
  5. Now on you can't wait for video to download fully, you can stream
  6. Low Latency
  7. Efficient use of Bandwidth
  8. Cons: Suppose you have video size of 40gb of high resolution, so its 1 chunk/frame we can assume to be 200 mb, so to download 1 chunk also you need good internet connection, & now a days you have variety of devices from watches to TV's screen, so for small size screen devices you dont need 40gb video for such high resolution, so client suffers in this case

- 🔹 Concept of Adaptive Bitrate Streaming!
  1. Works on the Protocol of HLS (HTTP Live Streaming) by Apple
  2. If internet speed drops → client automatically switches to lower resolution.
  3. If internet speed increases → client switches back to higher resolution.
  4. Playback is smooth, adaptive, and works across all devices (mobiles, TVs, laptops, etc.).
  5. Video is divided into small chunks/segments

  - 🔸 Detailed Explanation of Adaptive Bitrate Streaming (ABR)
    1. Multiple Versions Created: 
       - When video is uploaded, the server (like YouTube, Netflix, etc.) encodes it into multiple resolutions and bitrates 
         → Example: 240p, 360p, 480p, 720p, 1080p.
    2. Chunking (Segmentation):
       - Each version is divided into small segments (2–10 seconds each).
       - These small chunks are stored on CDN servers.
    3. Manifest / Playlist File:
       - A special indexed file (like .m3u8 for HLS or .mpd for DASH) is created.
       - This file contains URLs for all available chunks in different bitrates.
       - Player uses this file to know which chunks to download.
       - Basically we could have diff. m3u8 files for diff pixels resolutions and all respective chunks
    4. Playback Start:
       - When user clicks play, the player requests the manifest file first.
       - Then downloads the first few segments (lowest quality initially) to start playback quickly.
    5. Dynamic Quality Selection:
       - While streaming, the player continuously monitors:
         - Current network speed
         - Buffer size
         - CPU performance
       - Based on these, it selects the best suitable bitrate for the next chunk.
    6. Switching Happens Seamlessly:
       - If network slows → next chunk requested in lower quality (e.g., from 1080p → 480p)
       - If network improves → next chunk requested in higher quality again.
       - The change happens between segment boundaries → user doesn’t notice the switch.
    7. Benefits of ABR:
       - Smooth playback even on fluctuating network.
       - Efficient use of bandwidth (no over-downloading).
       - One video serves all device types (mobile, TV, laptop).
       - Better scalability via HTTP/CDNs.
    8. Example:
       - YouTube, Netflix, Hotstar, and Amazon Prime Video use ABR for all their streaming.


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






     🧠 Suggested Study Order

Video Upload & Encoding Pipeline

CDN & Storage Architecture

Manifest + Playback Flow

Scalability & Reliability

Recommendations & Analytics

Security (DRM, Auth)
*/


/*

1. Quic, HLS, Dash Protocols
2. MSE, Buffer, Blob


Streaming terminology includes essential terms that describe the process and components of delivering multimedia content over the internet. 

Core Terminology:

Codec (Coder-Decoder / Compressor-Decompressor): A software or hardware tool that compresses and decompresses digital video and audio data to enable efficient transmission and storage. Common video codecs include H.264 (AVC), H.265 (HEVC), VP9, and AV1, while common audio codecs include AAC and Opus.
Encoding: The process of converting raw video and audio signals into a compressed digital format using a codec.

Decoding: The reverse process of encoding, where the compressed data is converted back into a playable format on the viewer's device.

Bitrate: The amount of data transmitted per second (measured in kilobits per second or megabits per second), which determines the quality and file size of the stream. Higher bitrates generally mean higher quality but require more bandwidth.

Bandwidth: The maximum capacity of a network connection to transfer data. Sufficient bandwidth is crucial for smooth streaming and avoiding buffering.
Resolution: The dimensions of the video in pixels (e.g., 1920x1080 for Full HD or 3840x2160 for 4K), affecting image clarity.

Frame Rate (FPS): The number of still images, or frames, displayed per second, creating the illusion of motion. Standard rates are 24, 30, or 60 FPS.

Buffering: The process of pre-loading data into a temporary storage area (buffer) before playback to ensure a smooth, uninterrupted viewing experience.

Latency: The delay between when video is captured and when it is displayed on the viewer's screen. Lower latency is essential for live, interactive streams like video conferencing or gaming. 

Key Technologies and Processes
Adaptive Bitrate (ABR) Streaming: A technique that dynamically switches between different quality versions (renditions) of a stream based on the viewer's current network conditions and device capabilities, optimizing the experience and minimizing buffering.

Content Delivery Network (CDN): A geographically distributed network of servers used to deliver content efficiently to users by storing cached versions of the media closer to their location. This reduces latency and server load.

Container Format: A "wrapper" or file type (e.g., MP4, WebM, MOV) that holds the various components of a stream together, including the audio and video tracks, subtitles, and metadata.

Transcoding: The process of converting an encoded file from one format or bitrate to another, often to create the multiple renditions needed for ABR streaming.
Protocols: The rules governing how data is packaged and transported over the internet. Common examples include:

RTMP (Real-Time Messaging Protocol): A traditional protocol widely used for ingesting live video from an encoder to a streaming server.

HLS (HTTP Live Streaming): An Apple-developed, HTTP-based protocol widely used for delivering adaptive bitrate streams to various devices.

MPEG-DASH (Dynamic Adaptive Streaming over HTTP): An international standard for adaptive bitrate streaming, similar to HLS.

WebRTC (Web Real-Time Communication): A technology enabling real-time communication (audio, video, data) directly between browsers and devices without needing extra plugins, often used for very low latency applications.
*/