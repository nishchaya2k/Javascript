/*
================================================================================
DWELLO PAY — PAYMENTS TERMINOLOGY & FLOW NOTES
================================================================================

SYSTEM HAS ONLY 3 MONEY ACTIONS:

------------------------------------------------------------------------------
1. PAYMENT COLLECTION (Tenant pays rent)
------------------------------------------------------------------------------

Who:
- Tenant (customer) pays money.

What happens:
- Tenant selects payment method:
    - Card
    - Apple Pay
    - Google Pay
    - Bank (ACH)
- Tenant clicks "Pay Rent".
- Money leaves tenant's account.
- Payment record is created.
- Ledger entries are updated.

Tech used:
- Stripe Payments → Cards & Wallets
- Moov → ACH Bank Payments
- Supabase → payment_methods, payments, ledger

Important:
- NO onboarding required here.
- Tenant is paying, not receiving money.
- This is the current feature being developed.

This is called: PAYMENT COLLECTION.

------------------------------------------------------------------------------
2. INTERNAL SETTLEMENT & ACCOUNTING (Platform tracks money)
------------------------------------------------------------------------------

What happens:
- Fees are calculated.
- Money ledger is updated.
- Reconciliation runs.
- Virtual balances are tracked.
- Internal financial consistency is maintained.

Who sees this:
- System only (backend).

Important:
- No UI for users.
- No onboarding required.
- This ensures money correctness.

This is called: SETTLEMENT / ACCOUNTING.

------------------------------------------------------------------------------
3. PAYOUTS (Platform sends money to Property Managers)
------------------------------------------------------------------------------

Who:
- Property Manager (merchant) receives money.

What happens:
- Platform sends collected rent to PM bank account.
- PM must provide:
    - Identity info (KYC / KYB)
    - Bank account details

This process is called: ONBOARDING.

Where onboarding fits:
- Stripe Connect onboarding → Used to onboard PMs for payouts via Stripe.
- Moov Merchant onboarding → Used to onboard PMs for payouts via Moov.

Important:
- Onboarding is ONLY for people receiving money.
- NOT required for tenants who pay rent.
- These tasks belong to payout flow, not payment flow.

This is called: PAYOUTS.

------------------------------------------------------------------------------
TERMINOLOGY SIMPLIFIED
------------------------------------------------------------------------------

Customer = Person paying money (Tenant)
Merchant = Person receiving money (Property Manager)
Onboarding = Collecting identity + bank info for payouts
Payout = Sending money to merchant
Settlement = Finalizing payments internally
Processor = Company moving money (Stripe, Moov)
ACH = Bank transfer
Wallet = Stored balance
Rails = How money moves
KYC/KYB = Identity verification

------------------------------------------------------------------------------
MENTAL MODEL
------------------------------------------------------------------------------

[Tenant]  --->  (Pays)  --->  [Your App]  --->  (Pays Out)  --->  [Property Manager]
                   ↑                            ↑
           Stripe / Moov                 Stripe Connect / Moov Merchant

Current development scope:
- Only LEFT side (Tenant paying).

Future scope:
- RIGHT side (Paying Property Managers).

------------------------------------------------------------------------------
KEY TAKEAWAY
------------------------------------------------------------------------------

Onboarding is needed ONLY for people who RECEIVE money.
Onboarding is NOT needed for people who PAY money.

Stripe Connect and Moov onboarding belong to payout flow, not payment flow.

================================================================================
*/
