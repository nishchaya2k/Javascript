/*
=====================================================
📌 Email Queues — Why & How SMTP Retries Delivery
=====================================================

1) Purpose:
- If recipient mail server is down/busy, SMTP cannot deliver immediately.
- Instead of giving up, SMTP stores the email in a "queue".

2) Queue Mechanism:
- Email is saved temporarily in a queue folder.
- SMTP retries delivery several times with increasing intervals:
  10s → 1m → 5m → 30m → 1h → ... (for up to 24–72 hours).

3) Temporary Failures:
- Network issues
- Recipient server offline
- Greylisting
- Server overload
- DNS lookup errors

4) Outcome:
- If server becomes available → email is delivered.
- If retries expire → sender receives a bounce message.

5) Benefit:
- Guarantees reliable delivery even when servers temporarily fail.
=====================================================
*/
