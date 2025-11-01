/*
Video Streaming Working!!

- 🔹 What’s Video?
  1. A video is a sequence of images (frames) shown in quick succession.
  2. Each image (frame) is a snapshot captured at a specific moment in time.
  3. When displayed rapidly (e.g., 24–60 fps), the human eye perceives continuous motion.

- 🔹 mp4 .. etc formats?
  1. Formats like .mp4, .mkv, .mov, .avi are **container formats**.
  2. A container holds multiple streams – video, audio, subtitles, metadata.
  3. The **codec** (e.g., H.264, HEVC, VP9, AV1) defines how the video is compressed and stored inside the container.

- 🔹 How videos store frames?
  1. Conceptually → a video is a sequence of complete images (frames).
  2. Practically → not every frame is stored fully to save space.
  3. Uses **temporal compression**, which stores only the differences between frames.

- 🔹 Frame Types (in compressed video)
  1. 🟦 **I-Frame (Intra Frame)**  
     - A complete, self-contained image.  
     - Acts as a reference for following frames.
  2. 🟩 **P-Frame (Predicted Frame)**  
     - Stores only **differences** (motion + residual data) from the previous frame.  
     - Requires the previous decoded frame to reconstruct.
  3. 🟧 **B-Frame (Bidirectional Frame)**  
     - Uses both **previous and next** frames for prediction.  
     - Achieves high compression efficiency but is the most complex to decode.

- 🔹 How decoding (reconstruction) works?
  1. The decoder starts from an I-frame (a full image).
  2. It applies motion vectors and residual data from P/B frames.
  3. Each P/B frame is reconstructed into a full image for display.
  4. So, although P/B frames store only changes, the final output is always a complete image.

- 🔹 Trade-off: Compression vs Speed
  1. **All-I (Intra-only) Compression**  
     - Fast decoding and easy editing.  
     - Large file size.
  2. **Inter-frame Compression (I + P + B)**  
     - Smaller file size, efficient for streaming.  
     - Slower decoding, harder to seek or edit.

- 🔹 Real-world issues due to slow reconstruction
  1. Playback lag or dropped frames if the device can’t decode fast enough.
  2. Delay when seeking or scrubbing – decoder must rebuild from the last I-frame.
  3. Higher CPU/GPU usage → more power draw, heat, and battery drain.
  4. Latency in live streaming due to decoding dependency.
  5. Editing difficulty – each frame isn’t independently accessible.

- 🔹 When does reconstruction slowness happen?
  1. **Encoding (compression)** → happens once when the video is created or exported.  
     - Takes time to analyze and compress frames.
  2. **Decoding (playback)** → happens every time the video is played or edited.  
     - The decoder reconstructs frames on the fly.
  3. Modern hardware decoders (GPUs, media chips) minimize the delay, but issues can appear with high-res or heavily compressed videos.

- 🔹 Summary
  1. **Saving space** → Inter-frame compression (P/B frames) → slower reconstruction.
  2. **Speed & flexibility** → Intra-frame compression (All-I) → larger files.
  3. **Codec choice depends on purpose:**  
     - Editing → All-I (ProRes, Motion JPEG).  
     - Streaming → Inter-frame (H.264, HEVC, VP9).

*/
