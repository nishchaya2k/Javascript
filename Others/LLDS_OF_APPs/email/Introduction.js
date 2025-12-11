/*
====================================================
📌 Gmail System Design — Introduction + SMTP (Deep Notes)
====================================================

----------------------------------------------------
🔹 1. Introduction to Gmail (What Gmail Really Is)
----------------------------------------------------
Gmail is a large-scale **distributed email system** built to handle
hundreds of millions of users with real-time sync across devices.

Internally, Gmail performs THREE main jobs:

1) Receive Emails  
   - From other servers via SMTP  
   - Run spam + virus checks  
   - Store messages in Google’s storage (Bigtable)

2) Store + Index Emails  
   - Bigtable used for storage  
   - Gmail Search uses Google Search infra  
   - Powerful label-based organization  
   - Spam classification using ML models

3) Sync Emails Across Devices  
   - Gmail Web uses internal Google APIs  
   - Mobile clients use **IMAP**  
   - Push notifications using Google Sync services

Gmail Architecture Layers:
    User Interface (Web/Mobile)
          ↓
    Gmail Backend APIs
          ↓
    Message Storage (Bigtable) + Indexing System
          ↓
    SMTP servers (sending/receiving)
    IMAP servers (syncing)


====================================================
📌 End of Notes — Gmail Introduction + SMTP (Deep System Design)
====================================================
*/
