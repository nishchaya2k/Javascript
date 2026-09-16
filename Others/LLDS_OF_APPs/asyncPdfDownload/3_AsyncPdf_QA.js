/*

# |                  ASYNC PDF — INTERVIEW Q&A

1. Why did we make PDF export async?
   ======================================================================

Answer:

Large PDFs can take minutes to generate.

Keeping the HTTP request open for the entire generation can cause
timeouts and poor UX.

So we create a job quickly and generate the PDF in the background.

2. Why 202?
   ======================================================================

Answer:

202 Accepted means the request was accepted, but the work is not
completed yet.

3. Why jobId?
   ======================================================================

Answer:

jobId uniquely identifies one export.

We use it for polling, cancellation, downloading and history.

4. Explain the complete flow.
   ======================================================================

Answer:

FE queues export
→ backend returns 202 + jobId
→ FE starts polling
→ backend generates PDF
→ job becomes completed
→ FE enables download
→ user downloads PDF.

5. Why use Context?
   ======================================================================

Answer:

The modal can close while the PDF job is still running.

Therefore download state should live in a longer-lived global
context rather than inside the modal.

6. Why shouldn't the modal own polling?
   ======================================================================

Answer:

Modal lifecycle and job lifecycle are different.

The modal is temporary.
The export job is long-running.

So the Context owns polling.

7. How does progress work?
   ======================================================================

Answer:

Backend gives:

processedCount
totalSnags

FE calculates:

processedCount / totalSnags

8. Why polling?
   ======================================================================

Answer:

The PDF may take minutes.

Instead of keeping one request open, FE periodically asks for the
current job state.

9. Why ~3 seconds?
   ======================================================================

Answer:

It balances UI responsiveness with API request overhead.

10. Why not WebSocket?
    ======================================================================

Answer:

Polling is simpler and sufficient for periodic job-status updates.

WebSocket/SSE would add more infrastructure and complexity.

11. Why did we add cancel?
    ======================================================================

Answer:

Users may start a large export and then realize they no longer need
it.

Cancel prevents unnecessary queued work and improves resource usage.

12. What happens when a queued job is cancelled?
    ======================================================================

Answer:

It is removed from the queue and marked cancelled.

Therefore it never starts processing.

13. What happens when a processing job is cancelled?
    ======================================================================

Answer:

Current implementation is best-effort.

The job is marked cancelled, FE stops polling and the partial file is
cleaned up, but the current PDF renderer is not hard-aborted.

14. Could AbortController help?
    ======================================================================

Answer:

Potentially.

It could propagate a cancellation signal into the PDF-generation
pipeline.

But backend operations must explicitly support that signal.

15. Where is the actual PDF stored?
    ======================================================================

Answer:

Backend local disk:

uploads/snag-exports/

16. Is the download URL a CDN URL?
    ======================================================================

Answer:

No, not in the current implementation.

It is a backend API endpoint that serves the generated file.

17. Where does download history come from?
    ======================================================================

Answer:

From the backend:

GET /pdf-jobs?userId=...

18. What happens if the modal closes?
    ======================================================================

Answer:

The job continues because job state is owned by the global
Downloads Context, not the modal.

19. What if polling fails?
    ======================================================================

Answer:

A failed polling request should not automatically mean the PDF
generation failed.

We should distinguish network failure from job status = failed.

20. How do we avoid duplicate polling?
    ======================================================================

Answer:

There should be only one active polling lifecycle for a given
jobId.

21. What happens if cancel and completion happen at the same time?
    ======================================================================

Answer:

That is a race condition.

The backend needs clear state-transition rules so both operations
do not produce inconsistent job state.

22. What happens if the browser is closed?
    ======================================================================

Answer:

The original queue request has already completed.

The backend job can continue independently of the browser.

23. What happens if the backend restarts?
    ======================================================================

Answer:

The in-memory queue is lost, but the job state remains in MongoDB.

The current implementation has recovery for queued jobs and handling
for stale processing jobs.

24. What is the most important frontend architectural idea?
    ======================================================================

Answer:

This is not just a download API.

It is a long-running job lifecycle:

CREATE
→ TRACK
→ UPDATE
→ CANCEL / FAIL / COMPLETE
→ DOWNLOAD

25. What limitations would you mention?
    ======================================================================

Answer:

* Polling creates repeated API requests.
* Queue is process-local.
* Local file storage is tied to backend infrastructure.
* Processing-job cancellation is currently best-effort.

26. How would you improve it at larger scale?
    ======================================================================

Answer:

Potential improvements:

* durable shared queue
* object storage such as S3
* CDN for completed files
* stronger cancellation
* retry strategy
* idempotency
* monitoring / metrics

27. BEST 30-SECOND ANSWER
    ======================================================================

Answer:

"We changed large PDF export from a synchronous request to an
asynchronous job lifecycle.

The frontend creates a job and immediately receives a jobId.
The job state is managed globally in the Downloads Context, and
the frontend polls for progress.

Once the backend completes the PDF, the frontend enables the
download. We also added cancellation so unnecessary queued exports
can be removed, while cancellation of already-running jobs is
currently best-effort."

28. SENIOR FRONTEND QUESTIONS
    ======================================================================

    Be ready to think about:

    * component unmount
    * browser refresh
    * duplicate polling
    * polling failure
    * cancel/complete race
    * multiple exports
    * authorization
    * recovery after backend restart
    * scalability
    * resource usage

======================================================================
CORE INTERVIEW MENTAL MODEL
===========================

```
FE does NOT "wait for a PDF".

FE manages a JOB.

    CREATE
      ↓
    jobId
      ↓
    POLL
      ↓
    STATE
      ↓
READY / FAILED / CANCELLED
      ↓
   DOWNLOAD
```

*/
