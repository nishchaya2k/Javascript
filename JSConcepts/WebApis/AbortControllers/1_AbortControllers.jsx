/*

==========================================================
AbortController
==========================================================

AbortController is a standard Web API used to cancel ongoing
asynchronous operations, especially network requests like
fetch and axios.

==========================================================
🧠 Problem It Solves
==========================================================

Without AbortController:

- Multiple unnecessary API calls continue running.
- Older API responses may arrive after newer ones.
- UI may display stale/outdated data.
- Network bandwidth is wasted.
- React components may try to update state after unmounting.

AbortController allows us to cancel operations that are
no longer needed.

==========================================================
🧠 Core Concept
==========================================================

AbortController works using two parts:

1. controller
   → Used to trigger cancellation.

2. signal
   → Passed to the async operation.
   → Acts like a notifier/listener.

AbortSignal is created internally by AbortController.

const controller = new AbortController();

controller.signal

Every controller has its own signal.

==========================================================
⚙️ Internal Working
==========================================================

const controller = new AbortController();

fetch(url, {
    signal: controller.signal
});

Initially:

controller.signal.aborted

false

When:

controller.abort();

Internally:

✔ signal.aborted becomes true
✔ "abort" event is dispatched
✔ fetch/axios receives the event
✔ request is cancelled
✔ Promise rejects with AbortError

Flow:

Controller
     │
     ▼
AbortSignal
     │
     ▼
fetch / axios (listening)
     │
controller.abort()
     │
     ▼
signal.aborted = true
     │
     ▼
"abort" event emitted
     │
     ▼
fetch cancels request

==========================================================
❓Why pass controller.signal instead of signal.aborted?
==========================================================

✔ controller.signal

is an object.

It contains:

- aborted property
- abort event
- event listeners

fetch listens to this object.

Internally:

signal.addEventListener("abort", ...)

Later when:

controller.abort()

the signal notifies everyone listening.

----------------------------------------------------------

❌ controller.signal.aborted

is only a boolean.

Initially:

false

After abort:

true

A boolean cannot emit events or notify fetch.

That's why we pass:

signal

NOT

signal.aborted

==========================================================
🚀 Why we use it
==========================================================

✔ Cancel unnecessary requests
✔ Save network bandwidth
✔ Prevent race conditions
✔ Improve application performance
✔ Better user experience
✔ Avoid updating UI with stale data

==========================================================
📌 Common Use Cases
==========================================================

1. Search autocomplete

User types:

a
ab
abc

Cancel previous request and only keep the latest.

------------------------------------

2. React cleanup

Component unmounts before request finishes.

Cancel request in cleanup function.

------------------------------------

3. Switching tabs

User opens:

Profile

then immediately

Settings

Cancel Profile API.

------------------------------------

4. Infinite scrolling

User quickly changes page/filter.

Cancel previous page request.

------------------------------------

5. Live filtering

Changing:

Category
Price
Rating

Cancel previous filter request.

------------------------------------

6. Route change

User navigates to another page.

Cancel all pending requests for previous page.

------------------------------------

7. File upload

User clicks:

Cancel Upload

Abort the upload request.

------------------------------------

8. Download large files

User no longer wants the file.

Cancel download midway.

------------------------------------

9. Refresh button

User clicks Refresh multiple times.

Cancel old request.

------------------------------------

10. Dashboard

Several widgets fetch data.

User leaves dashboard.

Abort remaining requests.

==========================================================
⚠️ Important Points
==========================================================

✔ AbortController only works if the API supports AbortSignal.

✔ fetch supports it.

✔ axios (modern versions) also supports it.

✔ Calling abort() does NOT directly stop the request.

It simply tells the signal:

"I'm aborted."

Supported APIs listen to this signal and stop themselves.

==========================================================
⚠️ Abort is NOT a Failure
==========================================================

Cancelled request throws:

AbortError

Handle separately.

try {

    await fetch(...);

}
catch(err){

    if(err.name === "AbortError"){
        return;
    }

    // Actual error
}

==========================================================
❌ What AbortController cannot cancel
==========================================================

It does NOT directly cancel:

✘ setTimeout
    → use clearTimeout()

✘ setInterval
    → use clearInterval()

✘ Generic Promises
    → unless promise checks AbortSignal manually

✘ WebSocket
    → use websocket.close()

✘ Event Listeners
    → use removeEventListener()

==========================================================
💡 Things that support AbortSignal
==========================================================

✔ fetch()

✔ axios (v0.22+)

✔ ReadableStream APIs

✔ Some browser APIs

✔ Your own async functions
   (if you manually check signal.aborted
    or listen for "abort")

==========================================================
🏁 One Line Summary
==========================================================

AbortController provides a standard mechanism to cancel
supported asynchronous operations by sending an AbortSignal.
The signal notifies APIs like fetch or axios to stop the
operation, preventing unnecessary work, race conditions,
and stale UI updates.

*/