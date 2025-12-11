/*
====================================================
📌 SMTP + DNS (Deep System Design Notes for Gmail)
====================================================

----------------------------------------------------
🔹 1. SMTP — Core Introduction
----------------------------------------------------
SMTP is the **internet-wide protocol** responsible for
delivering emails from one mail server to another.

Gmail uses SMTP for:

1) **Receiving emails**
   Other mail servers → smtp.gmail.com

2) **Sending emails**
   Gmail → recipient’s mail server (via DNS MX lookup)

SMTP Responsibilities:
- Sender/recipient routing (MAIL FROM / RCPT TO)
- Transferring content: BODY + attachments (via MIME)
- Using server status codes (250 OK, 550 Reject, etc.)
- Authentication between servers (TLS, STARTTLS)
- Anti-spam integrations (SPF, DKIM, DMARC)
- Queues + retry mechanism for resilience

SMTP Does NOT handle:
- Reading emails (IMAP does this)
- Syncing multiple devices
- Searching/storing emails (Gmail internal services do that)

----------------------------------------------------
🔹 2. DNS Role in SMTP (Critical Part)
----------------------------------------------------
SMTP cannot deliver ANY email without DNS.

DNS decides **where the email must be delivered** using 
special DNS records:

1) **MX Record → Mail Exchanger**
   - Tells SMTP which server receives mail for a domain.
   Example:
       example.com → MX → mail.example.com (priority 10)

   Lower priority number = higher priority server.

2) **A / AAAA Record (Fallback)**
   - If MX missing, SMTP checks A/AAAA record for IP.
   example.com → A → 203.0.113.5

3) **SPF (TXT Record)**
   - DNS record that tells which servers are allowed 
     to send mail for a domain.
   Used to detect forged “From” addresses.

4) **DKIM (TXT Record)**
   - Stores the public key used to verify DKIM signatures.
   Ensures message integrity.

5) **DMARC (TXT Record)**
   - Defines policy for SPF/DKIM failures (reject, quarantine).
   Protects domain reputation.

SMTP + DNS Formula:
   Without DNS → No MX → No address → Email undeliverable.

----------------------------------------------------
🔹 3. SMTP Delivery Flow (Clear Overview)
----------------------------------------------------
Sending email:
   Gmail UI → Gmail Backend → Gmail SMTP Server
            → DNS MX Lookup → Destination SMTP → Inbox

Incoming email:
   Sender’s SMTP → smtp.gmail.com → Gmail Backend
                 → Gmail Spam Engine → Bigtable → Inbox

Key SMTP Commands:
- HELO / EHLO   → handshake
- MAIL FROM     → sender identity
- RCPT TO       → recipient address
- DATA          → body + attachments
- QUIT          → close session

Typical Response Codes:
- 250 OK        → accepted
- 421           → server temporarily unavailable
- 550 / 554     → rejected (spam/invalid user)

----------------------------------------------------
🔹 4. Why SMTP Exists (Purpose)
----------------------------------------------------
SMTP provides:
- Server-to-server delivery standard
- Retry queues for offline mail servers
- Attachment handling (via MIME)
- Global interoperability (Gmail ↔ Outlook ↔ Yahoo)

SMTP does NOT handle:
- Email storage
- Labeling / categorization
- Searching (Gmail search engine does this)

----------------------------------------------------
🔹 5. Gmail SMTP Internals (High-Level Steps)
----------------------------------------------------
Incoming mail:
1) SMTP handshake  
2) SPF, DKIM, DMARC checks  
3) Spam scoring  
4) Virus scanning  
5) Queue message  
6) Write email to Bigtable  
7) Trigger indexing pipeline (search, labels)  
8) Deliver to inbox  

Outgoing mail:
1) Validate authenticated user  
2) DKIM signing  
3) DNS MX lookup for receiver  
4) SMTP connection  
5) Message transfer  
6) Retry queue if server unavailable  
7) Bounce if permanent failure  

----------------------------------------------------
🔹 6. Why Gmail Still Uses SMTP
----------------------------------------------------
Email is a **global network**.  
All providers MUST follow the same protocol to communicate.

SMTP = the backbone of global email exchange.

No SMTP → Gmail could NOT send mail to:
- Outlook
- Yahoo
- Zoho
- Custom domains
- Government mail servers

----------------------------------------------------
🔹 7. Gmail Scaling Challenges
----------------------------------------------------
Gmail must handle:
- Millions of concurrent SMTP sessions
- Billions of spam messages filtered daily
- Global queues + retries for offline servers
- Fault-tolerant delivery across regions
- Real-time indexing of every message
- DKIM signing at massive scale
- DNS lookups for every outgoing email

SMTP is only one component, but the entire ecosystem 
(SPF, DKIM, DMARC, DNS MX, Bigtable, Spam Engine) 
works together to keep Gmail reliable and secure.

====================================================
📌 End of Notes — SMTP + DNS
====================================================
*/
