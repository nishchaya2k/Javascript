/*
- 🔹 Blob in Video Streaming and MSE

  1. What is a Blob?
     - Blob stands for Binary Large Object.
     - A blob is a data structure used to represent large binary data (video, audio, images, etc.) as a single entity.
     - In web browsers, Blob objects represent raw data in a form that can be used by APIs like MSE (Media Source Extensions) or File APIs.

  2. Why Needed?
     - Blobs allow for handling large, binary data without loading it entirely into memory.
     - Efficiently used in video/audio streaming to fetch and handle chunks of media data.
     - Helps manage streaming data in chunks (e.g., HLS/DASH video segments).

  3. How Blob Works in MSE
     - MSE uses Blob objects to represent video or audio chunks that are fetched over HTTP (e.g., from an HLS .ts segment).
     - JavaScript player retrieves a video chunk → wraps it in a Blob → appends it to the SourceBuffer in MSE.
     - The browser decodes and plays this data sequentially, as it receives more chunks.

  4. Blob and SourceBuffer
     - Blob contains raw media data (binary format).
     - Blob objects are appended to the SourceBuffer of MSE.
     - The SourceBuffer temporarily stores chunks of data until they are ready to be decoded and rendered.
     - Example: A chunk of an HLS video segment is fetched, wrapped in a Blob, and added to the SourceBuffer for playback.

  5. Blob Creation and Usage
     - You can create a Blob in JavaScript using the Blob() constructor:
       ```javascript
       const blob = new Blob([data], { type: 'video/mp4' });
       ```
     - `data`: A sequence of data (could be an ArrayBuffer or any other binary data).
     - `type`: MIME type of the data (e.g., `video/mp4`, `audio/mp3`, `image/png`).
     - After creation, the Blob can be appended to the SourceBuffer for playback.

  6. Blob URL
     - A Blob can be used to create a Blob URL using URL.createObjectURL():
       ```javascript
       const url = URL.createObjectURL(blob);
       ```
     - The Blob URL can then be assigned to a `<video>` or `<audio>` element to play the content:
       ```javascript
       videoElement.src = url;
       ```
     - Blob URLs are temporary and can be revoked when no longer needed using `URL.revokeObjectURL(url)`.

  7. Blob vs. ArrayBuffer
     - Blob: Represents binary data in a compact form, ideal for large chunks of data.
     - ArrayBuffer: Represents raw data in a fixed-length binary buffer, typically used for small data processing.
     - Blobs are more suitable for handling media chunks, whereas ArrayBuffer is used for manipulating binary data in lower-level operations.

  8. Common Uses of Blob in Streaming
     - MSE (Media Source Extensions): For dynamically appending video chunks to the SourceBuffer during adaptive streaming (HLS/DASH).
     - File API: For uploading files or managing data in the browser.
     - Creating downloadable files from dynamic content (e.g., saving video as a file).
     - Uploading chunks of media data during live streaming or large file transfers.

  9. Benefits of Blob in Streaming
     - Efficient handling of large media chunks in streaming.
     - Reduces memory consumption by breaking media into smaller pieces.
     - Provides better performance and flexibility in handling streaming data.
     - Seamlessly integrates with browser APIs like MSE, File API, and URL.createObjectURL().

  10. Common Issues
     - Memory management: If too many blobs are created or not revoked, it could lead to memory leaks.
     - Compatibility: Older browsers may have limited support for Blob and Blob URLs.
     - Large blobs: When handling large files or segments, loading and buffering them efficiently is crucial to avoid stalling.

*/