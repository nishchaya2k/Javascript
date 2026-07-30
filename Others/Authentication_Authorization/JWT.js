/*
========================================
JWT INTERNALS (HEADER, PAYLOAD, SIGNATURE)
========================================

JWT = JSON Web Token
Used mainly for STATELESS authentication.

------------------------------------------------
1️⃣ WHAT A JWT REALLY IS
------------------------------------------------

- A JWT is a compact, URL-safe string
- It represents a set of claims
- Server does NOT store it
- Client sends it with every request

Format:
header.payload.signature

Example:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJ1c2VyQG1haWwuY29tIiwiZXhwIjoxNzAwMDAwMDAwfQ
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

------------------------------------------------
2️⃣ JWT = BASE64URL ENCODED (NOT ENCRYPTED)
------------------------------------------------

IMPORTANT:
- Anyone can decode JWT
- Data is NOT hidden
- Signature ensures data is NOT tampered

------------------------------------------------
3️⃣ PART 1: HEADER
------------------------------------------------

- Describes HOW the token is signed
- Very small JSON object

Example (before encoding):
{
  "alg": "HS256",
  "typ": "JWT"
}

Fields:
- alg → Signing algorithm
- typ → Token type

After Base64URL encoding:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

------------------------------------------------
4️⃣ PART 2: PAYLOAD
------------------------------------------------

- Contains the CLAIMS (actual data)
- This is the MOST important part

Example payload:
{
  "userId": 101,
  "email": "user@mail.com",
  "role": "admin",
  "iat": 1699990000,
  "exp": 1700000000
}

Common claims:
- iss → Issuer
- sub → Subject (user id)
- aud → Audience
- iat → Issued at
- exp → Expiration time

IMPORTANT RULES:
- NEVER store passwords
- NEVER store sensitive data
- Assume payload is PUBLIC

------------------------------------------------
5️⃣ PART 3: SIGNATURE
------------------------------------------------

Signature ensures:
- Token is authentic
- Payload was NOT modified

How it is created:
HMACSHA256(
  base64(header) + "." + base64(payload),
  secret_key
)

- Uses server SECRET
- Client can NOT generate valid signature

------------------------------------------------
6️⃣ HOW SERVER VERIFIES JWT
------------------------------------------------

On every request:

1. Extract token from header
   Authorization: Bearer <token>

2. Decode header & payload

3. Recalculate signature using secret

4. Compare signatures

5. Check expiration (exp)

If ALL pass → request allowed

------------------------------------------------
7️⃣ JWT AUTHENTICATION FLOW (RECAP)
------------------------------------------------

1. User logs in
2. Server creates JWT
3. JWT sent to client
4. Client stores token
5. Client sends token every request
6. Server verifies token each time

------------------------------------------------
8️⃣ WHY JWT IS STATELESS
------------------------------------------------

- Server does NOT store token
- Server does NOT track sessions
- Token itself carries identity
- Each request is self-contained

------------------------------------------------
9️⃣ JWT SECURITY BEST PRACTICES
------------------------------------------------

✅ Short-lived access tokens
✅ Use refresh tokens
✅ Store token securely
✅ Validate exp, iss, aud
✅ Rotate secrets
❌ Do NOT trust decoded payload blindly

------------------------------------------------
🔁 COMMON JWT MISTAKES
------------------------------------------------

❌ Treating JWT as encrypted
❌ Long expiry access tokens
❌ Storing sensitive data in payload
❌ Using weak secret keys
❌ Skipping signature verification

------------------------------------------------
🧠 FINAL TAKEAWAY
------------------------------------------------

- JWT = Header + Payload + Signature
- Header → how token is signed
- Payload → who the user is
- Signature → proves authenticity
- Stateless, scalable, but needs care

========================================
END OF JWT INTERNALS
========================================
*/
