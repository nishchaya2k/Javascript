/*
===============================================================================
                        WEB WORKERS - COMPLETE NOTES
===============================================================================


🔹 1. CORE PROBLEM / CONTEXT
-------------------------------------------------------------------------------

- JavaScript is single-threaded, meaning all JavaScript code executes on the
  Main Thread.

- The Main Thread is responsible for:
    • Executing JavaScript
    • Rendering the UI
    • Handling user interactions
    • Updating the DOM

- If a CPU-intensive task runs on the Main Thread, everything else must wait.

Problems:
- Frozen UI
- Unresponsive buttons
- Laggy scrolling
- Poor user experience


🔹 2. WHAT IS A WEB WORKER?
-------------------------------------------------------------------------------

Definition:

A Web Worker is a separate JavaScript thread that runs independently of the
Main Thread.

It allows heavy computations to execute in the background, keeping the UI
responsive.


🔹 3. WHY DO WE NEED WEB WORKERS?
-------------------------------------------------------------------------------

Without Worker

Main Thread
     ↓
Heavy Calculation
     ↓
UI Freezes

With Worker

Main Thread                  Worker Thread
-----------                  -------------
Handles UI                   Heavy Calculation
User Clicks                  Sorting
Rendering                    Parsing
Animations                   Encryption

The Main Thread stays responsive while the Worker performs CPU-intensive work.


🔹 4. HOW IT WORKS
-------------------------------------------------------------------------------

Step 1:
Create a Worker

const worker = new Worker("./worker.js");

↓

Step 2:
Send data

worker.postMessage(data);

↓

Step 3:
Worker receives data

onmessage = (event) => {}

↓

Step 4:
Perform heavy work

↓

Step 5:
Return result

postMessage(result);

↓

Step 6:
Main Thread receives result

worker.onmessage = (event) => {}


🔹 5. IMPORTANT APIs
-------------------------------------------------------------------------------

new Worker()
    Creates a new Worker Thread.

postMessage()
    Sends data between threads.

onmessage
    Receives incoming messages.

event.data
    Contains the transmitted data.


🔹 6. LIMITATIONS
-------------------------------------------------------------------------------

Workers CANNOT access:

❌ document
❌ window
❌ DOM
❌ alert()
❌ prompt()
❌ confirm()

Reason:
Workers execute in an isolated thread.


🔹 7. WHAT CAN WORKERS DO?
-------------------------------------------------------------------------------

✔ Heavy calculations

✔ Sorting

✔ Searching

✔ Image Processing

✔ Video Processing

✔ Encryption

✔ JSON Parsing

✔ PDF Generation

✔ Fetch API


🔹 8. REAL WORLD USE CASES
-------------------------------------------------------------------------------

1. Canva
2. Google Sheets
3. Trading Dashboards
4. Analytics Processing
5. Machine Learning
6. PDF Generation
7. Video Editing
8. Games


🔹 9. INTERVIEW QUESTIONS
-------------------------------------------------------------------------------

Q. Why do we need Web Workers?

Q. Can a Worker access the DOM?

Q. Difference between setTimeout() and Worker?

Q. Can Workers make API calls?

Q. How do Workers communicate?


🔹 10. QUICK REVISION
-------------------------------------------------------------------------------

new Worker()      → Create Worker

postMessage()     → Send Message

onmessage         → Receive Message

event.data        → Actual Data

Worker            → No DOM Access

Use Worker        → CPU-intensive tasks

===============================================================================
*/