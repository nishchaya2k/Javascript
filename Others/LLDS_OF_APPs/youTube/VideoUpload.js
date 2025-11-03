/*
How Video Uploads Works

- 🔹 Step 1: User Selects a File
  1. The user selects a video file (e.g., .mp4, .mov) from their local system.
  2. The browser reads basic file info — size, type, duration, etc.
  3. The actual video data is not uploaded yet; the UI just prepares metadata.

- 🔹 Step 2: Create Video API (Initialization Phase)
  1. The client sends a "create video" or "init upload" API request to the server.
  2. The request usually contains video metadata:
     - title, description, category, privacy, etc.
  3. The server creates a new video record in the database.
  4. The server generates:
     - a unique `videoId`
     - an upload session URL (temporary endpoint to receive video chunks)
  5. The API immediately responds with `videoId` and `upload_url`.
     ⚙️ No video bytes are sent yet — this call is lightweight and quick.

- 🔹 Step 3: Client Uploads Video Data (Resumable Upload)
  1. The client now starts uploading the actual video file to the `upload_url`.
  2. The file is split into smaller chunks (e.g., 5 MB, 10 MB, etc.).
  3. Each chunk is sent via HTTP PUT/POST with a `Content-Range` header indicating byte range.
     Example:
       Content-Range: bytes 0-5242879/104857600
  4. The server appends each chunk to reconstruct the full video.
  5. The client keeps track of:
       - how many chunks are uploaded
       - current byte offset
       - total upload progress percentage
  6. After every successful chunk upload, the client updates the progress bar on UI.
       Example: “Uploaded 30 MB of 100 MB (30%)”
  7. If a chunk fails (network issue, timeout):
       - Only that chunk is retried.
       - The upload session URL ensures continuity (no need to restart).
  8. The client can pause/resume uploads using the same upload session.
       - Resume starts from the last acknowledged byte range.
       - This is called **Resumable Upload**.
  9. Upload happens asynchronously — the browser keeps sending next chunks while showing real-time progress.
  10. On the UI, this entire phase appears as “Uploading... 45%”.

  ⚙️ Note:
     - Upload chunks are only for reliable transfer (not playback).
     - Server temporarily stores incoming chunks and reassembles them in correct order.

- 🔹 Step 4: Upload Completion
  1. When the last chunk is received, the server confirms upload completion.
  2. The full raw video file is now stored on the server (or directly on cloud storage like S3).
  3. The client receives a success acknowledgment — upload finished!

- 🔹 Step 5: Processing Phase (Server-Side)
  1. After upload, server begins asynchronous background processing:
     - Transcoding → converting the raw file into multiple resolutions (240p, 360p, 480p, 720p, 1080p).
     - Chunking → splitting each version into small segments (2–10 seconds each) for streaming.
     - Manifest creation → generating .m3u8 (HLS) or .mpd (DASH) playlists.
     - Thumbnail and metadata extraction.
  2. During this phase, UI shows “Processing...” until encoding completes.

- 🔹 Step 6: CDN Upload and Availability
  1. Once encoding completes, all chunks and manifests are uploaded to a CDN.
  2. The CDN caches the content for global delivery.
  3. The video is now ready for streaming playback via adaptive bitrate (ABR).

- 🔹 Step 7: Final State
  1. The server updates the video status to "Ready" or "Public".
  2. The player can now request the manifest file and start fetching video chunks dynamically.
  3. Users can now watch the video with adaptive quality switching.

🧠 Summary:
  - `create-video` API → only initializes and returns videoId.
  - Actual upload → happens in resumable, chunked requests.
  - Upload chunks = for reliable transfer; Streaming chunks = for adaptive playback.
  - Processing (encoding + chunking) → done asynchronously after upload.
  - CDN → stores final encoded versions for streaming.
*/



/*
🔹 File Chunking & Resumable Upload Pointer

1. File Access in Browser:
   - When a user selects a file via:
       const file = document.getElementById('fileInput').files[0];
     ⚙️ `file` is a File object (inherits from Blob).
   - It references the file on disk, it does NOT load the whole file into memory.

2. Slicing the File into Chunks:
   - File/Blob objects provide a `.slice(startByte, endByte)` method.
   - Example:
       const chunk = file.slice(0, 5 * 1024 * 1024); // first 5 MB
   - This returns a **new Blob** pointing to only that byte range.
   - Very memory-efficient: browser doesn’t copy full file data.

3. Uploading Each Chunk:
   - Each chunk is sent via HTTP POST/PUT to the server.
   - Include metadata for reconstruction:
       - videoId → identifies the video
       - chunkNumber → sequence of this chunk
       - totalChunks → total number of chunks
       - Content-Range header → indicates byte range
         Example: "bytes 0-5242879/104857600"
   - Server temporarily stores chunks and reconstructs the file after last chunk.

4. Resumable Upload:
   - Client tracks which chunks succeeded.
   - If network fails, only failed chunk is retried.
   - Upload can resume from last successful chunk.

5. Post Upload:
   - Server confirms full file received.
   - Then starts background processing: encoding, chunking for streaming, manifest creation.
   - Final video URL = after processing, points to manifest or adaptive streaming endpoint.

⚠️ Note:
   - Upload chunks are **internal**, not used for playback.
   - Final streaming uses processed chunks and manifests (HLS/DASH).
*/




/*
Q. if Video is is being upload in chunks so the api is being calle untill all chunks not consumed

Q. After successfully upload, do we get a link of whole video link or what, bcoz we are supposed to get url of chunk
*/