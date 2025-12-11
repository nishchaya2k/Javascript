/*
====================================================
📌 Gmail — End-to-End Email Flow (Easy Overview Notes)
====================================================

----------------------------------------------------
🔹 1. High-Level Components
----------------------------------------------------
- Webmail (UI): Gmail interface used by users.
- Webserver: Gmail backend handling requests.
- Metadata Store: Stores small/structured email info.
- Attachment Store: Stores large files like images, PDFs.
- SMTP Server: Sends & receives emails between providers.
- Receiver Email Server: Destination server for email delivery.

----------------------------------------------------
🔹 2. When You SEND an Email
----------------------------------------------------
1) User writes an email in Gmail webmail → clicks Send.
2) Gmail Webserver receives the message.
3) Webserver splits the email:
     - Metadata (subject, from, to, labels, snippet) → Metadata Store
     - Attachments (files) → Attachment Store
4) Gmail SMTP server delivers email to recipient's mail server.
5) Recipient’s server accepts the email and places it in their inbox.
6) Gmail updates your Sent folder using metadata + attachment reference.

----------------------------------------------------
🔹 3. When You RECEIVE an Email
----------------------------------------------------
1) Sender's email provider → Gmail SMTP (incoming).
2) Gmail Webserver processes email:
     - Spam filtering
     - Virus scanning
     - Authentication checks (SPF, DKIM, DMARC)
3) Webserver splits the message:
     - Small structured data → Metadata Store
     - Large files → Attachment Store
4) Gmail Webmail retrieves metadata to show email list.
5) When you open an email, UI loads attachments from Attachment Store.

----------------------------------------------------
🔹 4. Why Split Metadata & Attachments?
----------------------------------------------------
- Metadata is small → allows fast inbox loading & fast searching.
- Attachments are large → stored separately for:
     - Cheaper storage
     - Deduplication
     - Faster performance
     - Efficient loading only when required

----------------------------------------------------
🔹 5. Summary
----------------------------------------------------
- Gmail UI handles user interaction.
- Gmail backend stores metadata and attachments separately.
- SMTP handles all email sending & receiving between servers.
- Metadata loads instantly in inbox.
- Attachments load on-demand when user opens the email.

====================================================
📌 End of Notes — Gmail Overview
====================================================
*/


/*
Email need mail server to handle sending,receving and storing messages,

2 Mail server we have,

1. outgoing mail server using SMTP
2. incoming mail server using IMAP or POP3

- When u send an email, ur email client (gmail or outlook) connects to an outgoing email server via smtp 

- smtp checks the domain of email recepients (eg. @yahoo.com) to identify where it should go, to actually find yahoo server

- to find  (@yahoo.com) the smtp server performs dns lookup
- dns to locate recipient mail server or mail exchange record
- email pass through several intermediary relay server, & these are like transer stations along the way & these ensures your message stays on track, som relay servers belong to isps, other backbone providers that make up the internet infrastructure that email travels through these networks using secure protocols thanks to bgp (border gateway protocol)

- SMTP is responsible only for *sending* the email from Gmail → Yahoo.
- But the *internet route* is NOT handled by SMTP.
- After Gmail prepares the email and performs DNS lookup for Yahoo's MX record,
  the actual email packets must travel across the global internet.
- THIS is where BGP comes into play.
- 


- Now finally email arrives at yahoo mail server, & email is stored in reciepents inbox until they login to retrieve it 

- At this point, reciepients uses IMAP/POP3 to fetch the mail

- IMAP (internet message access protocol) keeps emails on the server and allow access for multiple devices

- While POP3 - Downloads email to a devices and ofter deletes them from server afterwards

- Email Servers use queuing mechanism to retry delivery if needed

- For storage email use distributed storage solution, for attachments eg. amazon s3 will used

- for SPAM and Virus filtering, we use machine learning models like knife based classifier and logistic regression to filter out spams Blacklist and whitelist help refine these filters , Before accepting an email we verify sender IPs and use technique like grey listing to reduce spams


what is border gateway protocol?
- Gmail SMTP needs to reach Yahoo's server.
- But Gmail doesn’t know the best physical route across the global internet.
- So Gmail's network (Google AS) asks:What’s the best path to reach Yahoo’s AS?
- BGP routers between ISPs share the path information

- what are priorities in yahoo servers? 
*/


/*
1. Github
2. How 1080p file get donwloaded with in a minutes (depending on internet speed), eg. torrent, dailymotion
3. Supbase.  - authentication (login,logout),jwt oAuth, crud, sha algo..etc
*/