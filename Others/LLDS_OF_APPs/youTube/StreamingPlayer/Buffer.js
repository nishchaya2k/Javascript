/*
- 🔹 Buffer in Video Streaming

  1. What is a Buffer?
     - Temporary storage area in memory for video/audio data before playback.
     - In browsers, MSE buffer holds fetched chunks until the browser decodes and plays them.
     - Acts like a waiting room: data arrives from the network and waits for the player to process it.

  2. Why Needed?
     - Ensures smooth playback and prevents stuttering or freezing if network speed fluctuates.
     - Supports adaptive streaming for seamless bitrate switching.
     - Helps live streaming maintain continuous playback.

  3. Types of Buffers
     - Playback buffer: Holds segments ready to be decoded and played.
     - Pre-buffer / Prefetch buffer: Holds upcoming segments fetched in advance.
     - Live buffer: Only a few seconds are stored in live streams to reduce latency.

  4. How Buffer Works with MSE
     - JavaScript player fetches a video chunk → appends it to MSE SourceBuffer.
     - Browser reads from buffer → decodes audio/video → renders playback.
     - Player monitors buffer length:
       - Low buffer → fetch more segments.
       - High buffer → pause fetching to save bandwidth.

  5. Buffer Management Strategies
     - Sliding Window: Remove older segments as new ones are added to keep buffer size manageable.
     - High Watermark / Low Watermark:
       - Low watermark → trigger fetching more data.
       - High watermark → stop fetching to avoid memory overload.
     - Live Latency Control: Keep buffer small in live streams to reduce delay.

  6. Common Issues with Buffers
     - Buffer underrun: Buffer empties → playback stalls.
     - Buffer overrun: Too much data stored → wastes memory.
     - Network variability: If download speed < playback rate, buffer may run dry → stuttering.

  7. Benefits of Buffer
     - Smooth playback even on variable networks.
     - Enables adaptive bitrate switching.
     - Reduces impact of network latency on live or on-demand streams.
*/
