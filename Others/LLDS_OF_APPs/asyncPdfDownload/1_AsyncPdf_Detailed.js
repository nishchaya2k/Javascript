/*

# |                         ASYNC PDF EXPORT

Note: Frontend-centric system design notes

Goal:

* Large PDF export should not block the HTTP request.
* User should be able to continue working.
* FE should show progress, cancel and download state.

======================================================================

1. Problem
   ======================================================================

1.1 Old Sync Flow

```
Definition:
- PDF generation and HTTP request happen together.

Flow:
FE
 |
 | POST /fetch-all
 v
Backend
 |
 | Generate PDF
 | Wait minutes...
 v
PDF response
 |
 v
Browser download


Problems:
- Long-running HTTP request
- Browser / gateway timeout
- No progress
- UI waits for completion
- No cancel
- No download history
```

1.2 New Async Flow

```
Flow:

FE
 |
 | POST /new-snag-pdf-async
 v
Backend
 |
 | 202 + jobId
 v
FE
 |
 | Poll every ~3s
 v
Backend
 |
 | status / progress
 v
completed
 |
 v
Download PDF


Key idea:

HTTP request
    !=
PDF generation
```

======================================================================
2. Job Based Architecture
=========================

2.1 Definition

```
PDF export is treated as a JOB.

The initial API only creates the job.

PDF generation happens in the background.
```

2.2 jobId

```
jobId identifies ONE export.

Same jobId is used for:

- polling
- progress
- cancellation
- download
- history
```

2.3 Mental Model

```
jobId = "order number" for PDF export

Example:

ABC123
   |
   +-- status
   +-- progress
   +-- cancel
   +-- file
   +-- download
```

======================================================================
3. Frontend Architecture
========================

3.1 Entry Points

```
PDF export can start from:

- ExportSnagModal
- TableToolbar
- UpdateSnagSidePanel
```

3.2 Common Flow

```
Any entry point
      |
      v
startSnagPdfExport()
      |
      v
SnagDownloadsContext
      |
      v
snagPdfJobApi.js
      |
      v
Backend
```

3.3 Why Context?

```
Definition:
- Download state is longer-lived than the component that starts it.

Example:

ExportSnagModal
      |
      | Start export
      v
job created
      |
      v
modal closes

Job is still running.

Therefore:

Modal
  -> starts job

Context
  -> owns job lifecycle
```

3.4 What Context Manages

```
- active jobs
- jobId
- status
- progress
- polling
- cancel
- completed state
- failed state
```

======================================================================
4. API Layer
============

4.1 Queue API

```
POST /pmt/api/snag/new-snag-pdf-async

Response:

202 Accepted

{
    jobId,
    status: "queued",
    pollIntervalMs: 3000
}


FE responsibility:

- receive jobId
- create download row
- start polling
```

4.2 Poll API

```
GET /pmt/api/snag/pdf-job/:jobId?userId=...


Returns:

- status
- processedCount
- totalSnags
- downloadUrl
- fileName
- fileSize
- error
```

4.3 Cancel API

```
POST /pmt/api/snag/cancel-pdf-job/:jobId?userId=...
```

4.4 Download API

```
GET /pmt/api/snag/download-pdf/:jobId
```

4.5 History API

```
GET /pmt/api/snag/pdf-jobs?userId=...
```

======================================================================
5. Job Lifecycle
================

5.1 States

```
queued
processing
completed
failed
cancelled
```

5.2 Flow

```
queued
   |
   v
processing
   |
   +--------> completed
   |
   +--------> failed


queued
   |
   +--------> cancelled


processing
   |
   +--------> cancelled
```

5.3 Meaning

```
queued:
- Waiting for backend worker

processing:
- PDF is being generated

completed:
- PDF is ready

failed:
- PDF generation failed

cancelled:
- User no longer wants export
```

======================================================================
6. Polling
==========

6.1 Why Poll?

```
Initial POST should finish quickly.

FE should not keep the original request open.

Instead:

POST
  |
  v
jobId
  |
  v
wait ~3 sec
  |
  v
GET status
  |
  v
wait
  |
  v
GET status
  |
  v
...
```

6.2 Progress

```
Backend gives:

processedCount
totalSnags


FE calculates:

progress =
    processedCount / totalSnags


Example:

50 / 100
  =
50%
```

6.3 Polling Stops When

```
status === "completed"
status === "failed"
status === "cancelled"
```

6.4 Important FE Consideration

```
Network failure
    !=
PDF generation failure

A failed poll request does not automatically mean
the PDF job itself failed.
```

======================================================================
7. Progress UI
==============

7.1 Backend Data

```
processedCount
totalSnags
```

7.2 FE Calculation

```
processedCount / totalSnags
```

7.3 UI

```
generating
    |
    v
progress ring / progress bar
```

Example:

```
40 / 100
  |
  v
40%
```

======================================================================
8. Cancel
=========

8.1 Why Cancel?

```
Example:

User starts a 300 MB export.

Then realizes:

"I don't need this."

Without cancel:
- backend may continue processing
- worker capacity is wasted
- image fetching continues
- disk is used
```

8.2 FE Flow

```
User clicks Cancel
      |
      v
POST /cancel-pdf-job/:jobId
      |
      v
Backend updates job
      |
      v
FE stops polling
      |
      v
UI shows cancelled
```

8.3 Queued Job

```
queued
   |
   | cancel
   v
removed from queue
   |
   v
cancelled


Result:

Job never starts.
```

8.4 Processing Job

```
processing
   |
   | cancel
   v
cancelled


Current implementation:

- status becomes cancelled
- FE stops polling
- partial file is cleaned
- renderer is NOT hard-aborted


Important:

cancelled
    !=
CPU work immediately stopped
```

8.5 AbortController

```
Possible future improvement:

Cancel
  |
  v
abort signal
  |
  v
PDF generation notices signal
  |
  v
stop work
  |
  v
cleanup
  |
  v
worker available


But:

AbortController itself does not magically stop
backend PDF generation.

The backend operations must support cancellation.
```

======================================================================
9. Download
===========

9.1 When?

```
When:

status === "completed"
```

9.2 Flow

```
completed
   |
   v
downloadUrl
   |
   v
FE resolves URL against PMT API host
   |
   v
GET download endpoint
   |
   v
Browser saves PDF
```

9.3 Important

```
downloadUrl is a backend API endpoint.

It is NOT a direct CDN URL in this implementation.
```

9.4 Why API Host?

```
FE origin may be different from API origin.

Therefore a relative backend URL should be resolved against:

PMT_API
```

======================================================================
10. Download History
====================

10.1 Current Downloads

```
Managed by:

SnagDownloadsContext
```

10.2 History

```
API:

GET /pdf-jobs?userId=...


Flow:

Downloads panel
     |
     v
fetchSnagPdfJobs()
     |
     v
Backend
     |
     v
MongoDB job records
```

10.3 Important Distinction

```
Current session:
    Context state

Historical jobs:
    Backend / MongoDB
```

======================================================================
11. Backend — What FE Needs To Know
===================================

11.1 Basic Backend Flow

```
Create job
   |
   v
Queue
   |
   v
Worker
   |
   v
Generate PDF
   |
   v
Save PDF
   |
   v
Update job status
```

11.2 Where Is PDF Stored?

```
uploads/snag-exports/

Example:

uploads/snag-exports/
    snag-export-ABC123.pdf
```

11.3 What Does MongoDB Store?

```
Job information:

- status
- progress
- filePath
- fileName
- fileSize
- downloadUrl
- timestamps


MongoDB stores metadata/state.

Disk stores the actual PDF.
```

======================================================================
12. Queue
=========

12.1 Current Behaviour

```
- FIFO queue
- Up to 2 concurrent jobs per process
```

12.2 Example

```
Job A -> processing
Job B -> processing
Job C -> queued
Job D -> queued
```

12.3 Why Limit Concurrency?

```
PDF generation can consume:

- CPU
- memory
- image processing
- disk I/O


Limiting workers protects backend capacity.
```

12.4 FE Relevance

```
If a user cancels a queued job:

Job is removed before it consumes a worker.
```

======================================================================
13. Failure / Recovery
======================

13.1 PDF Generation Failure

```
processing
   |
   v
failed


Backend stores error.
```

13.2 Missing File

```
completed job
   |
   v
download requested
   |
   v
file missing
   |
   v
404
```

13.3 Server Restart

```
Queue is in memory.

MongoDB keeps job state.

Current backend also has recovery for queued jobs
and stale processing-job handling.
```

======================================================================
14. Senior Frontend Thinking
============================

```
When designing an async UI, ask:

- Where should job state live?
- What happens when component unmounts?
- What happens after refresh?
- How do we avoid duplicate polling?
- What if polling fails?
- What if cancel and complete happen together?
- What if user starts multiple jobs?
- How is history restored?
- How is download ownership protected?
- What happens if backend restarts?
```

======================================================================
15. Core Takeaway
=================

```
Async PDF is NOT just:

    "call an API and download a file"


It is:

    CREATE
      |
      v
    TRACK
      |
      v
    UPDATE
      |
      v
    CANCEL / FAIL / COMPLETE
      |
      v
    DOWNLOAD


Frontend responsibility:

    Manage the job lifecycle and UX.

Backend responsibility:

    Execute and persist the actual background work.
```

*/
