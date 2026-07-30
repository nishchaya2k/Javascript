/* 

========================================
📁 Folder Upload + AbortController (Improved Notes)
========================================


----------------------------------------
🚀 Problem Statement
----------------------------------------

We need to upload a folder.

Folder contains:
→ Multiple files

Flow:
1. Upload each file to S3 (frontend)
2. Get file links (S3 URLs)
3. Build folder structure (tree)
4. Send payload to backend
5. Backend creates folder


----------------------------------------
❌ Problem (Edge Case)
----------------------------------------

User clicks "Cancel" during upload.

Without handling:
→ Current upload continues ❌
→ Next files still upload ❌
→ Network keeps running ❌

We need:
→ Stop current request
→ Stop future uploads
→ Exit cleanly


----------------------------------------
🧠 AbortController (Core Concept)
----------------------------------------

AbortController is a Web API used to cancel async operations 
(like fetch, axios, file uploads).

It has 2 parts:

1. controller
   → used to trigger cancel

2. signal
   → passed to async task
   → acts as a notifier (listener)


----------------------------------------
⚙️ How AbortController Works (Actual Flow)
----------------------------------------

1. Create controller

   const controller = new AbortController();

2. Get signal

   const signal = controller.signal;

3. Pass signal to axios/fetch

   axios(url, { signal });

4. Cancel

   controller.abort();


----------------------------------------
🔍 What happens internally
----------------------------------------

controller.abort()
   ↓
signal.aborted = true
   ↓
signal emits "abort" event
   ↓
axios/fetch is listening to signal
   ↓
axios stops request
   ↓
browser cancels network request

👉 Important:
signal does NOT stop request itself
axios/fetch listens and tells browser to stop


----------------------------------------
🤔 Why we use abortControllerRef (React)
----------------------------------------

const abortControllerRef = useRef(null);

👉 Why?

- React re-renders reset variables ❌
- useRef persists value across renders ✅
- does not cause re-render ✅

So we store:

abortControllerRef.current = controller;

👉 Now Cancel button can access it anytime


----------------------------------------
⚙️ Our Implementation (Step-by-step)
----------------------------------------

1. Create controller

const controller = new AbortController();
abortControllerRef.current = controller;


----------------------------------------

2. Pass signal to upload function

uploadFilesToS3(files, projectId, onProgress, controller.signal);

👉 Why?
signal connects controller to upload process


----------------------------------------

3. Pass signal to axios

axios.put(url, formData, { signal });

👉 Why?

- axios listens to signal
- when abort() is called:
   → axios cancels request
   → browser stops upload

👉 Without this:
abort() does NOTHING ❌


----------------------------------------

4. Handle multiple files (loop)

for (let i = 0; i < files.length; i++) {

   if (signal.aborted) {
      throw new DOMException('Upload aborted', 'AbortError');
   }

   await axios.put(...);
}

👉 Why this check?

AbortController only stops:
→ current request

BUT:
→ loop continues automatically ❌

So we manually stop loop using:
if (signal.aborted)


----------------------------------------

5. Handle cancel in catch

catch (error) {

   if (error.name === 'CanceledError' || error.name === 'AbortError') {
      throw new DOMException('Upload aborted', 'AbortError');
   }

   // other errors
}

👉 Why?

- axios throws "CanceledError"
- we normalize it to "AbortError"


----------------------------------------

6. Handle in main function

catch (error) {

   if (error.name === 'AbortError') {
      return; // silent exit
   }

   // show error toast
}

👉 Cancel ≠ error


----------------------------------------

7. Cancel action (UI)

abortControllerRef.current.abort();

👉 This triggers:

1. signal.aborted = true
2. axios request stops
3. browser cancels upload
4. loop stops
5. upload ends cleanly


----------------------------------------
🔁 Complete Flow
----------------------------------------

Upload starts
   ↓
Controller created
   ↓
Files uploading (loop)
   ↓
User clicks Cancel
   ↓
controller.abort()
   ↓
signal emits abort event
   ↓
axios stops request
   ↓
browser cancels network
   ↓
signal.aborted = true
   ↓
loop stops
   ↓
upload ends


----------------------------------------
⚠️ Important Learnings
----------------------------------------

1. signal is just a notifier (listener)
   → does not stop request itself

2. axios/fetch listens to signal
   → then cancels request

3. AbortController only stops current request
   → NOT loops

4. Always check:
   if (signal.aborted)

5. useRef is used to persist controller


----------------------------------------
🏁 One Line Summary
----------------------------------------

AbortController is used to stop in-progress file uploads.
The controller provides a signal which is passed to axios.
When abort() is triggered, the signal emits an event, axios listens to it and cancels the request, and the browser stops the network call.
Because uploads run in a loop, we also check signal.aborted to prevent the next files from uploading.
*/










/*

========================================
📁 AbortController (Frontend) vs Backend Handling
========================================


----------------------------------------
🧠 Core Question
----------------------------------------

Do we need AbortController on backend as well?

👉 Answer:
❌ NO — AbortController is a frontend/browser API


----------------------------------------
🌐 How AbortController Actually Works
----------------------------------------

Frontend:
- controller.abort() is called
- signal emits "abort" event
- axios/fetch cancels request
- browser stops network call

👉 Important:
This happens ONLY in browser


----------------------------------------
⚠️ Backend Awareness
----------------------------------------

Backend does NOT receive:
❌ abort signal
❌ cancel event from frontend

👉 Because:
HTTP is stateless


----------------------------------------
🔍 What happens on Backend
----------------------------------------

Case 1: Request not reached backend
✔️ Nothing happens (ideal)

Case 2: Request already reached backend
❗ Backend may still:
- process request
- upload file
- write to DB

👉 Frontend cancel ≠ backend cancel


----------------------------------------
⚙️ Special Case (Streaming / Large Uploads)
----------------------------------------

Backend MAY detect:
- connection closed
- request aborted

Example (Node.js):
req.on('close', () => {
   // client disconnected
})

👉 But this is NOT AbortController
👉 It is low-level connection handling


----------------------------------------
🚀 Our Current Flow (Important)
----------------------------------------

Frontend:
- Upload files → S3 (directly)
- Uses AbortController to cancel

Backend:
- Only receives final payload
- Creates folder structure

👉 So:
✔️ Backend is NOT involved in upload process
✔️ No need for abort logic on backend


----------------------------------------
⚠️ When Backend Handling IS Required
----------------------------------------

1. Heavy processing on backend
   - image/video processing
   - large file handling

2. Partial data cleanup
   - incomplete S3 uploads
   - half-created DB entries

3. Long-running jobs
   - queues / background workers


----------------------------------------
💡 Key Learnings
----------------------------------------

1. AbortController works ONLY on frontend
2. Backend does NOT auto-stop on cancel
3. Cancel stops browser request, not server execution
4. Backend needs separate logic if cancellation matters
5. In direct S3 upload → frontend control is enough


----------------------------------------
🏁 One Line Summary
----------------------------------------

AbortController cancels requests on the frontend (browser),
but backend does not automatically stop — it needs separate handling only if required.

*/