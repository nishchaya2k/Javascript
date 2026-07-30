/*
========================================
AUTHENTICATION NOTES (DEVELOPER VIEW)
========================================

- 🔹 Authentication:
  To verify the identity of a user.
  (Answering the question: "Who are you?")

------------------------------------------------

- 🔹 Core Question:
  How does the server know that a user is already authenticated?

Two approaches:

1. Server remembers the user  → Stateful Authentication
2. Server does NOT remember the user → Stateless Authentication

------------------------------------------------
1️⃣ STATEFUL AUTHENTICATION
------------------------------------------------

- 🔹 Definition:
  Stateful Authentication means the server stores
  authentication state for each logged-in user.

- 🔹 How it works (High level):
  1. User logs in with credentials
  2. Server verifies credentials
  3. Server creates a SESSION
  4. Session ID is sent to client (usually via cookie)
  5. Client sends Session ID on every request
  6. Server looks up session data and authorizes the request
  7. How unique ids are generated ?

- 🔹 Where the state is stored:
  - Server memory
  - Database
  - Redis / Cache

------------------------------------------------
✅ Advantages of Stateful Authentication
------------------------------------------------

- Easy to implement and understand
- Easy to invalidate sessions (logout is simple)
- Better control over user sessions
- Suitable for traditional web applications
- More secure for sensitive systems when properly managed

------------------------------------------------
❌ Disadvantages of Stateful Authentication
------------------------------------------------

- Server must store session data
- Harder to scale horizontally
- Requires session synchronization across servers
- Increased server memory usage
- Not ideal for microservices and APIs

------------------------------------------------
2️⃣ STATELESS AUTHENTICATION
------------------------------------------------

- 🔹 Definition:
  Stateless Authentication means the server does NOT store
  any authentication state.

- 🔹 How it works (High level):
  1. User logs in with credentials
  2. Server verifies credentials
  3. Server generates a TOKEN (usually JWT)
  4. Token is sent to client
  5. Client sends token with every request
  6. Server verifies token signature and expiry

- 🔹 Important:
  Each request carries all authentication information.
  Server does not remember previous requests.

------------------------------------------------
✅ Advantages of Stateless Authentication
------------------------------------------------

- Highly scalable
- No session storage required on server
- Works well with distributed systems
- Ideal for APIs, SPAs, and mobile apps
- Easier load balancing
- Better fit for microservice architecture

------------------------------------------------
❌ Disadvantages of Stateless Authentication
------------------------------------------------

- Logout is difficult (token remains valid until expiry)
- Token revocation is complex
- Token size increases request payload
- Requires careful token storage on client
- Security risks if token is leaked
- Short expiry + refresh logic needed

------------------------------------------------
🔁 SUMMARY COMPARISON
------------------------------------------------

Stateful:
- Server remembers user
- Uses sessions and cookies
- Easier logout
- Harder to scale

Stateless:
- Server does not remember user
- Uses tokens (JWT)
- Harder logout
- Easy to scale

------------------------------------------------
🧠 DEVELOPER TAKEAWAY
------------------------------------------------

- Choose STATEFUL when:
  - You need strict session control
  - You have a monolithic backend
  - Security and session revocation are critical

- Choose STATELESS when:
  - You build APIs or SPAs
  - You need scalability
  - You use microservices or mobile apps

- for bigger system like netflix whats best?

========================================
END OF NOTES
========================================
*/
