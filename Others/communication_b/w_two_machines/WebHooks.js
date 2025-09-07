/*
Webhooks:
Webhooks are a way for applications to send real-time data to other applications automatically.
They’re commonly used to notify one system when something happens in another system.
An HTTP request that triggers based on an event.

Instead of constantly polling a server to check if there’s new data or an event,
webhooks allow the server to push information as soon as something happens.

Polling = pulling data from another system at regular intervals.
Webhooks = pushing data to a system immediately when an event occurs.

---------------------------------------------------------
Example 1: Payment Confirmation (Stripe)

1. Customer purchases an item and completes payment via Stripe.
2. Stripe detects successful payment and sends a POST request to your webhook URL
   (e.g., https://yourstore.com/webhooks/stripe).
3. Your backend receives the webhook with event type like "payment_intent.succeeded".
4. Backend updates the order status in the database from "pending" to "paid" using the order ID.
5. Optionally sends confirmation email or SMS to the customer.

All this happens in real-time — no manual refresh or polling needed.

---------------------------------------------------------
Process 1: Custom Flow with Razorpay through backend

1. User clicks on the Pay button on the frontend.
2. A POST API is triggered to the backend with payment details.
3. Backend verifies the request and initiates the Razorpay payment API.
4. Razorpay processes the payment on their end.
5. After a successful payment, Razorpay sends a message (webhook) to your server.
6. Backend receives webhook with payment status and details.
7. Backend updates the database (e.g., marks order as "paid").
8. Backend optionally notifies the user (via UI, email, or SMS) that payment was successful.

---------------------------------------------------------
Process 2: Custom Flow with Razorpay through frontend

1. User lands on the Checkout page; frontend calls backend to get Razorpay order details.
2. Backend sends the order info (order ID, key, amount, etc.) to the frontend.
3. Razorpay Checkout is opened on the frontend with this info.
4. User completes the payment in the Razorpay UI.
5. Frontend sends the payment details (payment ID, order ID, signature) to the backend.
6. Backend verifies the payment with Razorpay.
7. If verified, backend updates the order status in the database (e.g., "paid").
8. Confirmation message can be shown to the user.

---------------------------------------------------------
Reference:
https://medium.com/@wadkararyan01/efficient-real-time-communication-and-crud-operations-c8f35283ce38
*/
