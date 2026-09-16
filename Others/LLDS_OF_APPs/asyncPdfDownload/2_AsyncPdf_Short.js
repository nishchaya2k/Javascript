/*

# |                    ASYNC PDF — QUICK NOTES

1. Core Problem
   ======================================================================

   Sync:

   POST → generate PDF → wait minutes → response

   Problems:

   * timeout
   * blocked UI
   * no progress
   * no cancel

   Async:

   POST → jobId → poll → completed → download

2. Main Concept
   ======================================================================

   jobId = identity of one PDF export

   Used for:

   * poll
   * cancel
   * download
   * history

3. FE Architecture
   ======================================================================

   Export entry point
   |
   v
   startSnagPdfExport()
   |
   v
   SnagDownloadsContext
   |
   v
   API

   Context owns job lifecycle because modal can close
   while job is still running.

4. APIs
   ======================================================================

   Queue:
   POST /new-snag-pdf-async

   Poll:
   GET /pdf-job/:jobId

   Cancel:
   POST /cancel-pdf-job/:jobId

   Download:
   GET /download-pdf/:jobId

   History:
   GET /pdf-jobs

5. Polling
   ======================================================================

   POST
   ↓
   jobId
   ↓
   poll ~3 sec
   ↓
   status
   ↓
   completed / failed / cancelled

   Progress:

   processedCount / totalSnags

6. States
   ======================================================================

   queued
   ↓
   processing
   / 
   /   
   ready failed

   queued → cancelled
   processing → cancelled

7. Cancel
   ======================================================================

   Queued:

   * remove from queue
   * mark cancelled
   * job never starts

   Processing:

   * mark cancelled
   * stop FE polling
   * cleanup partial file
   * renderer is not hard-aborted

   AbortController:

   * possible future improvement
   * only useful if backend work supports cancellation

8. Download
   ======================================================================

   completed
   ↓
   downloadUrl
   ↓
   API host
   ↓
   browser download

   PDF is stored on backend disk.

   Not a CDN URL in current implementation.

9. History
   ======================================================================

   GET /pdf-jobs

   Backend / MongoDB
   ↓
   historical jobs
   ↓
   Downloads history

10. Backend — FE Level
    ======================================================================

    Create job
    ↓
    Queue
    ↓
    Worker
    ↓
    Generate PDF
    ↓
    Save to disk
    ↓
    Update Mongo

    MongoDB:
    job state + metadata

    Disk:
    actual PDF

11. Important FE Principles
    ======================================================================

    Long-running job state
    should not live inside
    short-lived modal state.

    Network failure
    !=
    job failure

    Cancelled
    !=
    necessarily "CPU stopped immediately"

    Async API
    !=
    background work completed

12. One-Line Revision
    ======================================================================

    CREATE JOB
    ↓
    jobId
    ↓
    POLL
    ↓
    READY / FAILED / CANCELLED
    ↓
    DOWNLOAD

*/
