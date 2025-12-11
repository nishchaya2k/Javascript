/*
====================================================
📌 IMAP — Gmail Internal System Design Notes
====================================================

----------------------------------------------------
🔹 1. What is IMAP? (Introduction)
----------------------------------------------------
IMAP = Internet Message Access Protocol  
Purpose: **Access + Sync emails across devices**

Key Responsibilities:
- Fetch email metadata (subject, snippet, flags)
- Load full email body on-demand
- Manage read/unread/deleted state
- Maintain folder/label structure
- Real-time updates via IDLE

IMAP does **NOT** send email.  
SMTP handles delivery → IMAP handles reading + syncing.

----------------------------------------------------
🔹 2. Why IMAP Exists
----------------------------------------------------
POP3 was built for single-device usage:
- Downloads entire email
- Removes from server

IMAP was built for multi-device era:
- Keeps master copy on server
- Syncs all changes between devices
- Supports partial download (metadata only, body on-demand)
- Supports labels, flags, and live sync

This is why Gmail on mobile and desktop stays perfectly aligned.

----------------------------------------------------
🔹 3. IMAP Multi-Device Sync (Core Concept)
----------------------------------------------------
All actions sync instantly:
- Opened on phone → "Seen" on laptop
- Deleted on laptop → removed on phone
- Label added → appears everywhere

Because IMAP updates server state:
- Read/unread flags  
- Message UIDs  
- Labels (Gmail-specific extension)  
- Folder selections  

Gmail backend writes updates to Bigtable and pushes sync via IMAP.

----------------------------------------------------
🔹 4. IMAP Internal Objects (Very Important)
----------------------------------------------------
💡 IMAP relies on four important items:

1) **Folders (Mailboxes)**  
   - Inbox, Sent, Spam, Trash  
   - Gmail maps these to labels internally.

2) **Flags**  
   - \\Seen  
   - \\Deleted  
   - \\Flagged  
   - \\Answered  

3) **UID (Unique ID)**  
   - Permanent ID assigned per email.

4) **UIDVALIDITY**  
   - Versioning system ensuring client-server consistency.

Together these make sync accurate and efficient.

----------------------------------------------------
🔹 5. Gmail's IMAP Architecture (High-Level)
----------------------------------------------------
Client → IMAP Frontend → Gmail Backend → Bigtable

Steps:
1) Client logs in (OAuth2)
2) IMAP selects mailbox
3) Client fetches metadata (fast)
4) Gmail sends:
   - UIDs
   - Flags
   - Subject lines
   - Snippets
5) Full body/attachments fetched only when opened
6) Updates written back:
   - Seen status
   - Deleted status
   - Label changes

----------------------------------------------------
🔹 6. IMAP Commands (Simplified Deep List)
----------------------------------------------------

📌 SELECT mailbox  
Select Inbox, Sent, Drafts.

📌 FETCH / UID FETCH  
Retrieve headers, body, attachments.

📌 SEARCH  
Find emails based on:
- FROM
- SUBJECT
- DATE
- FLAGS

📌 STORE  
Update flags (read, deleted).

📌 COPY  
Copy email to another folder.

📌 MOVE  
Move email (Gmail translates this to label change).

📌 IDLE  
Keeps connection open for **real-time push notifications**.

When new email arrives:  
→ Gmail IMAP server pushes update instantly.

----------------------------------------------------
🔹 7. IMAP + Gmail’s Label Model (Special Behavior)
----------------------------------------------------
Normal IMAP servers use real folders.

Gmail uses labels stored in Bigtable.

Mapping:
- IMAP "folder" → Gmail "label"
- IMAP MOVE → update labels
- IMAP DELETE → add/remove labels or place in Trash

This is why Gmail allows:
- Multiple labels on one email
- Searching across labels

----------------------------------------------------
🔹 8. IMAP Workflow (End-to-End)
----------------------------------------------------

📥 User reads email:
1) Client connects → LOGIN
2) SELECT "INBOX"
3) Server returns:
   - list of UIDs
   - message flags
   - metadata
4) Client displays subject/snippet
5) User opens email → FETCH body
6) Gmail marks as \\Seen
7) Syncs this-state to other devices instantly

📤 Client action example (delete):
1) Client sends STORE +FLAGS \\Deleted
2) Gmail applies Trash label
3) All devices remove mail from Inbox

----------------------------------------------------
🔹 9. IMAP + DNS (Small but Important)
----------------------------------------------------
IMAP itself does NOT use DNS for routing.  
DNS is involved **only for connecting to Gmail**:

1) Client resolves:
   imap.gmail.com  
   ↓
2) DNS returns Gmail IMAP frontend IPs  
3) Client connects  
4) Then IMAP protocol begins

SMTP uses MX records for cross-domain delivery.  
IMAP does NOT.

----------------------------------------------------
🔹 10. IMAP Limits & Gmail Extensions
----------------------------------------------------
Gmail adds custom IMAP extensions to support:
- Labels
- Threading metadata
- Search acceleration
- Partial fetch optimization

Limits:
- 15 simultaneous IMAP connections per user
- Large mailboxes use incremental sync (paged UIDs)

----------------------------------------------------
🔹 11. Why Gmail Still Uses IMAP
----------------------------------------------------
Even with modern APIs, IMAP is required for:
- Universal compatibility with every mail client
- Cross-platform sync (iOS, Android, Outlook)
- Offline clients syncing back later
- Third-party email software

IMAP remains a global standard.

====================================================
📌 End of Notes — IMAP (Deep System Design)
====================================================
*/
