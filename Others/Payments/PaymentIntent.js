/*
====================================================
STRIPE EXPRESS CHECKOUT + SUPABASE — PAYMENT NOTES
====================================================

1. SYSTEMS INVOLVED
----------------------------------------------------
There are only three systems in the payment flow:

- Frontend (Browser / React app)
- Supabase Edge Function (Backend / Server)
- Stripe (Payment service)

Frontend never talks to Stripe using secret keys.
Supabase is the trusted middle layer.

----------------------------------------------------

2. WHY SUPABASE IS REQUIRED
----------------------------------------------------
Frontend is NOT trusted because:
- User can modify code
- Amount can be changed
- Keys can be stolen

So:
- Frontend → asks Supabase to start payment
- Supabase → talks securely to Stripe

----------------------------------------------------

3. STEP 1 — USER STARTS PAYMENT
----------------------------------------------------
User clicks "Pay".

At this moment:
- No money is taken
- No wallet (Google Pay / Cash App) is opened

Frontend only knows:
"User wants to pay"

----------------------------------------------------

4. STEP 2 — FRONTEND CALLS SUPABASE
----------------------------------------------------
Frontend makes an API call:

POST /functions/v1/payment-express-checkout

Frontend sends ONLY business data:
- unit_id
- invoice_id
- booking_id

Frontend does NOT send:
- amount
- Stripe keys
- payment method

----------------------------------------------------

5. STEP 3 — SUPABASE READS STRIPE SECRET KEY
----------------------------------------------------
Supabase loads Stripe Secret Key from environment variables.

Meaning:
- Supabase has Stripe password
- Frontend never sees this key

This key allows Supabase to:
- Create payments
- Talk securely to Stripe

----------------------------------------------------

6. STEP 4 — SUPABASE CREATES PAYMENT PLAN
----------------------------------------------------
Supabase calls Stripe to create a payment plan.

This payment plan is called: PaymentIntent

Important:
- Money is NOT moved yet
- Only amount and currency are locked

Think of this as:
"Bill created, payment pending"

----------------------------------------------------

7. STEP 5 — STRIPE RESPONDS TO SUPABASE
----------------------------------------------------
Stripe returns:

- payment_intent_id (internal reference)
- client_secret (temporary key for frontend)

client_secret:
- Works for ONE payment only
- Cannot create new payments
- Safe to use in frontend

----------------------------------------------------

8. STEP 6 — SUPABASE RESPONDS TO FRONTEND
----------------------------------------------------
Supabase sends client_secret back to frontend.

This is the ONLY Stripe-related value
frontend is allowed to receive.

----------------------------------------------------

9. STEP 7 — FRONTEND TALKS DIRECTLY TO STRIPE
----------------------------------------------------
Frontend uses Stripe JS + client_secret.

Browser → Stripe

Why this is safe:
- client_secret has limited power
- Can only finish this payment
- Amount cannot be changed

----------------------------------------------------

10. STEP 8 — STRIPE SHOWS EXPRESS CHECKOUT UI
----------------------------------------------------
Stripe decides which wallets to show:

- Google Pay
- Cash App
- Apple Pay (if applicable)

Decision is based on:
- Browser
- Device
- Country
- Currency
- Stripe account

Frontend cannot force wallets to appear.

----------------------------------------------------

11. STEP 9 — USER CONFIRMS PAYMENT
----------------------------------------------------
User selects a wallet (e.g. Google Pay).

Stripe:
- Opens wallet UI
- Handles authentication
- Talks to bank
- Moves money

Frontend does NOT handle any of this logic.

----------------------------------------------------

12. STEP 10 — STRIPE RETURNS RESULT TO FRONTEND
----------------------------------------------------
Stripe sends result to frontend:

- Payment succeeded
OR
- Payment failed

Frontend can:
- Show success screen
- Show error message

This is UI-level confirmation only.

----------------------------------------------------

13. STEP 11 — STRIPE WEBHOOK (FINAL TRUTH)
----------------------------------------------------
Stripe sends a webhook to Supabase:

POST /functions/v1/stripe-webhook

Example event:
- payment_intent.succeeded

Why webhook is important:
- Works even if browser closes
- Backend gets final payment status

Supabase should:
- Update database
- Mark invoice as paid
- Unlock access / services

----------------------------------------------------

14. IMPORTANT RULES (MUST REMEMBER)
----------------------------------------------------
- Frontend never creates payments
- Supabase owns Stripe secret key
- client_secret is safe for frontend
- Stripe controls wallet UI
- Webhook is source of truth

----------------------------------------------------

15. ONE-LINE SUMMARY
----------------------------------------------------
Frontend asks Supabase to start payment
Supabase asks Stripe
Stripe gives temporary key
Frontend finishes payment
Stripe confirms payment to Supabase

====================================================
END OF NOTES
====================================================
*/
