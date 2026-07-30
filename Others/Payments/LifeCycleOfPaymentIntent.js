/*
Frontend
  │
  │ 1. User clicks "Pay"
  ▼
Backend (Edge Function)
  │
  │ 2. Create PaymentIntent (amount, currency)
  │
  ▼
Stripe
  │
  │ 3. Returns client_secret
  ▼
Frontend
  │
  │ 4. Pass client_secret to Express Checkout Element
  │
  ▼
Stripe Element
  │
  │ 5. Shows Google Pay / Cash App if eligible
  │
  ▼
User selects wallet & confirms
  │
  │ 6. Stripe confirms PaymentIntent
  ▼
Stripe
  │
  │ 7. Payment succeeds / fails
  ▼
Webhook / UI update

*/