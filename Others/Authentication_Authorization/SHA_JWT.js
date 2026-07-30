/*
====================================================
SHA + JWT — COMPLETE NOTES WITH DEFINITIONS & EXPLANATIONS
====================================================

🔷 1. AUTHENTICATION CONTEXT
----------------------------------------------------
- SHA and JWT are used together in modern authentication systems.
- JWT (JSON Web Token) is a stateless token for verifying user identity.
- SHA ensures integrity and authenticity of tokens.

----------------------------------------------------
🔷 2. WHAT IS SHA (SECURE HASH ALGORITHM)
----------------------------------------------------
- SHA is a cryptographic hash function.
- Converts input data into a fixed-length hash (digital fingerprint).
- Properties:
  1. One-way: cannot reverse the hash
  2. Deterministic: same input → same output
  3. Sensitive: small changes in input → completely different output

Q: Why do we use SHA?
A: To verify integrity, detect tampering, and prove authenticity without revealing original data.

Q: Does SHA encrypt data?
A: No. SHA does NOT encrypt; it only generates a hash. Original data is still readable. Encryption requires a key and is reversible.

----------------------------------------------------
🔷 3. JWT STRUCTURE
----------------------------------------------------
JWT has 3 parts:

1. Header
2. Payload
3. Signature

Format:
Header.Payload.Signature

Q: What is JWT used for?
A: JWT is used to securely transmit user identity and claims in a stateless way. Server can verify authenticity without storing session.

----------------------------------------------------
🔷 4. HEADER
----------------------------------------------------
- JSON object that specifies:
  1. `alg` → Algorithm used to create signature (e.g., HS256)
  2. `typ` → Type of token (JWT)
- Base64URL encoded
- Tells server how to verify the signature

Q: Why do we need the header?
A: Server uses it to know which algorithm to apply for signature verification.

----------------------------------------------------
🔷 5. PAYLOAD
----------------------------------------------------
- JSON object containing user data / claims.
- Example fields:
  - `userId`
  - `role`
  - `exp` (expiry)
- Base64URL encoded
- Readable by anyone with the token

Q: Can payload be trusted on its own?
A: No. Signature must be verified to ensure payload is not tampered.

Q. Why somebody tempered the payload if it knows that it will have secuity concerns?

----------------------------------------------------
🔷 6. SIGNATURE
----------------------------------------------------
- The signature is a hash of: `Base64URL(Header) + "." + Base64URL(Payload)` using HMAC-SHA + secret key.
- Ensures integrity and authenticity.
- Signature is attached to the JWT: Header.Payload.Signature

Q: What is the signature?
A: A tamper-proof hash that proves the token was issued by the server and not altered.

Q: Why SHA is used for the signature?
A:
1. SHA creates a unique fingerprint for the data.
2. HMAC (SHA + secret key) ensures only server can generate a valid signature. 
3. Detects any change in Header or Payload.
4. Allows stateless verification without storing sessions.
5. HMAC stands for Hash-based Message Authentication Code

----------------------------------------------------
🔷 7. HOW SIGNATURE IS CREATED
----------------------------------------------------
Step-by-step:
1. Encode Header and Payload → Base64URL
2. Concatenate with dot → `data = Header + "." + Payload`
3. Apply HMAC-SHA using server secret → produces signature
4. Append signature to form JWT → `JWT = Header.Payload.Signature`

----------------------------------------------------
🔷 8. SECRET KEY
----------------------------------------------------
- Server-side private key
- Used in HMAC-SHA to sign and verify JWT
- Never shared with client
- Stored securely (env variables / secret manager)

Q: Where does secret key come from?
A: Created by server developer, stored securely, e.g., `process.env.JWT_SECRET`.

Q: Can client have it?
A: No. Client having the secret would allow forgery.

----------------------------------------------------
🔷 9. JWT VERIFICATION
----------------------------------------------------
1. Server receives JWT
2. Splits into Header, Payload, Signature
3. Recalculates signature using Header + Payload + secret
4. Compares with received signature
5. If match → token is valid
   If mismatch → token is tampered / invalid

----------------------------------------------------
🔷 10. WHY SHA + HMAC IS CRUCIAL
----------------------------------------------------
1. Ensures token integrity (payload not modified)
2. Authenticates token issuer (server)
3. Enables stateless authentication
4. Fast and secure verification

----------------------------------------------------
🔷 11. SUMMARY
----------------------------------------------------
- Header → tells server how to verify
- Payload → contains user claims
- Signature → HMAC-SHA hash of Header + Payload + secret
- SHA → generates unique hash, ensures integrity
- Secret → server-only key, ensures authenticity

Q: Key points to remember:
- SHA is for fingerprinting, not encryption
- JWT is readable but protected against tampering
- Signature ensures trust and stateless verification
- Secret must never leave the server

====================================================
END OF SHA + JWT NOTES
====================================================
*/
