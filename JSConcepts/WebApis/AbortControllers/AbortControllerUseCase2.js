/*
========================================================
LONG RUNNING DOWNLOAD / EXCEL EXPORT — DETAILED NOTES
========================================================


--------------------------------------------------------
SCENARIO 1: NORMAL DOWNLOAD (NO JOB ID, NO CANCEL)
--------------------------------------------------------

FLOW:
Frontend  ──GET /export-excel──▶ Backend
Frontend  ◀──(waits 20 sec)──── Backend

FRONTEND:
- User clicks "Download"
- Browser directly calls download API
- UI is blocked until response comes

BACKEND:
- Receives request
- Fetches full data (20 sec)
- Generates Excel
- Sends file

PROBLEMS:
1. User waits too long
2. If user closes tab:
   - Backend STILL runs
3. No cancel option
4. Wastes CPU & DB

USE ONLY WHEN:
- Small data
- API < 5 seconds


--------------------------------------------------------
SCENARIO 2: FRONTEND CANCEL ONLY (AbortController)
--------------------------------------------------------

FLOW:
Frontend ──GET /export──▶ Backend
Frontend ──abort()──────▶ Connection closed

FRONTEND EXAMPLE:
- Create AbortController
- Start API call
- If timeout (5 sec) OR cancel button → abort()

WHAT ABORT DOES:
1. Stops waiting for response
2. Stops browser download
3. Closes HTTP connection

WHAT ABORT DOES NOT DO:
1. Does NOT stop backend logic
2. Does NOT stop DB query

BACKEND:
- Keeps generating Excel
- Only fails when trying to send response

LIMITATION:
- Backend resources wasted

USE WHEN:
- Only UI responsiveness matters
- Backend work is light


--------------------------------------------------------
SCENARIO 3: AbortController + BACKEND CANCEL (NO JOB ID)
--------------------------------------------------------

GOAL:
- Cancel frontend request
- ALSO stop backend processing

FLOW:
Frontend ──GET /export──▶ Backend
Frontend ──abort()──────▶ Connection closed
Backend  ──detects close─▶ Stops work

BACKEND MECHANISM:
- Backend listens for client disconnect
- Sets a `cancelled` flag

BACKEND LOGIC:
- Heavy work MUST be in loops / batches
- Check cancelled flag repeatedly

BACKEND EXAMPLE LOGIC:
1. cancelled = false
2. req.on("close") → cancelled = true
3. While processing:
   - if cancelled → stop immediately

IMPORTANT:
- Large single DB queries cannot be stopped
- Must fetch data in chunks

USE WHEN:
- Medium exports
- Single server
- No background worker yet


--------------------------------------------------------
SCENARIO 4: ASYNC JOB + JOB ID (RECOMMENDED)
--------------------------------------------------------

CORE IDEA:
- Do NOT download file in same request
- Separate "start job" and "download file"

JOB ID:
- A unique identifier for export task
- Example: job_12345

--------------------------------------------------------
STEP 1: START EXPORT JOB
--------------------------------------------------------

FRONTEND:
POST /export/start

BACKEND:
1. Create job entry
2. Generate job_id
3. Start background processing
4. Respond immediately

RESPONSE:
{
  job_id: "job_12345"
}

JOB TABLE (example):
{
  job_id: "job_12345",
  status: "processing",
  progress: 0,
  cancelled: false,
  file_path: null
}

WHY:
- Frontend does NOT wait
- No timeout risk


--------------------------------------------------------
STEP 2: BACKGROUND WORKER STARTS
--------------------------------------------------------

WORKER FLOW:
1. Fetch data in batches
2. Generate Excel row by row
3. Update progress
4. Check cancel flag repeatedly

WORKER LOGIC:
FOR EACH batch:
  IF job.cancelled → STOP
  process batch
  update progress

IF finished:
  save Excel file
  job.status = "completed"
  job.file_path = "/files/job_12345.xlsx"


--------------------------------------------------------
STEP 3: FRONTEND CHECKS STATUS (POLLING)
--------------------------------------------------------

FRONTEND:
GET /export/status/job_12345

BACKEND RESPONSES:

PROCESSING:
{
  status: "processing",
  progress: 60
}

COMPLETED:
{
  status: "completed",
  download_url: "/export/download/job_12345"
}

CANCELLED:
{
  status: "cancelled"
}

WHY POLLING:
- Simple
- Works everywhere
- No WebSocket needed initially


--------------------------------------------------------
STEP 4: USER CLICKS CANCEL
--------------------------------------------------------

FRONTEND:
POST /export/cancel/job_12345

BACKEND:
1. Find job by job_id
2. Set:
   job.cancelled = true
   job.status = "cancelled"

WORKER:
- Sees cancelled flag
- Stops immediately
- Deletes partial file if needed

RESULT:
- CPU saved
- DB load stopped
- Clean exit


--------------------------------------------------------
STEP 5: DOWNLOAD FILE
--------------------------------------------------------

ONLY IF status === "completed"

FRONTEND:
GET /export/download/job_12345

BACKEND:
- Streams Excel file
- OR redirects to storage URL (S3 / Supabase)


--------------------------------------------------------
SCENARIO 5: AbortController + JOB ID (BEST UX)
--------------------------------------------------------

COMBINED FLOW:
1. Start job → get job_id
2. Poll status
3. If user clicks cancel:
   - Abort polling request
   - Call /export/cancel/job_id

WHY BOTH:
- AbortController → instant UI stop
- Cancel API → reliable backend stop


--------------------------------------------------------
IMPORTANT DESIGN RULES
--------------------------------------------------------

1. NEVER generate large Excel in single request
2. ALWAYS use job_id for long tasks
3. ALWAYS check cancel flag in loops
4. ALWAYS separate:
   - start
   - status
   - cancel
   - download


--------------------------------------------------------
WHEN TO USE WHICH
--------------------------------------------------------

API < 5 sec:
- Normal API or AbortController

API 5–15 sec:
- AbortController + backend cancel

API > 15–20 sec:
- Async Job + job_id + cancel API


--------------------------------------------------------
ONE-LINE SUMMARY
--------------------------------------------------------

AbortController:
- Stops frontend waiting

Backend cancel:
- Saves CPU & DB

Job ID:
- Tracks long work safely

Async job:
- Professional & scalable approach


========================================================
END OF DETAILED NOTES
========================================================
*/
