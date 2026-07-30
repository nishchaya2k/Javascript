/*
====================================================
SHA (SECURE HASH ALGORITHM) — DETAILED NOTES
====================================================

🔷 1. WHAT IS SHA
----------------------------------------------------
SHA (Secure Hash Algorithm) is a cryptographic hash
function that converts input data into a fixed-length
output called a hash.

Properties:
- One-way
- Deterministic
- Irreversible

----------------------------------------------------
🔷 2. WHY SHA IS USED
----------------------------------------------------
SHA is used to:
- Verify data integrity
- Avoid storing sensitive data
- Detect data tampering
- Establish trust between systems

SHA is NOT used to hide data.
SHA is used to verify data.

----------------------------------------------------
🔷 3. WHAT SHA DOES
----------------------------------------------------
SHA creates a digital fingerprint of data.

Process:
Input Data → SHA Algorithm → Fixed-Length Hash

- Same input always produces the same hash
- Any change in input produces a different hash

----------------------------------------------------
🔷 4. SAME INPUT → SAME OUTPUT (DOUBT CLARIFIED)
----------------------------------------------------
This means SHA is deterministic.

Example:
SHA("password123") → Hash A
SHA("password123") → Hash A

Why this matters:
- Enables password verification
- Server compares hashes instead of passwords
- Original data is never stored

Important:
SHA("password123") ≠ SHA("Password123")
Even one character change alters the hash completely.

----------------------------------------------------
🔷 5. SHA DOES NOT ENCRYPT (DOUBT CLARIFIED)
----------------------------------------------------
Encryption:
- Uses a secret key
- Is reversible
- Has a decrypt process

SHA:
- Uses no secret key
- Has no decrypt process
- Is mathematically irreversible

Reason:
- Infinite possible inputs map to finite outputs
- Reverse mapping is impossible

SHA fingerprints data; it does not lock or hide it.

----------------------------------------------------
🔷 6. COMMON SHA ALGORITHMS
----------------------------------------------------
- SHA-1    (Broken, insecure)
- SHA-256  (Most widely used)
- SHA-512  (Stronger, larger output)

Most authentication systems use SHA-256.

----------------------------------------------------
🔷 7. WHERE SHA IS USED IN REAL SYSTEMS
----------------------------------------------------

7.1 Password Storage
- Store hash instead of password
- Login works by comparing hashes
- Real systems use bcrypt or argon2 (SHA + salt + slow hashing)

7.2 JWT Authentication
- SHA is used in token signatures
- Ensures token integrity
- Prevents payload tampering

7.3 OAuth and SSO
- Tokens are signed using SHA-based algorithms
- Apps verify authenticity without passwords

7.4 Data Integrity
- File checksums
- API request validation
- Payment verification
- Webhook security

----------------------------------------------------
🔷 8. SHA IN JWT SIGNING
----------------------------------------------------
JWT structure:
Header.Payload.Signature

Signature creation:
HMAC_SHA256(
  base64(Header) + "." + base64(Payload),
  SecretKey
)

If payload is modified:
- Signature mismatch occurs
- Token is rejected

----------------------------------------------------
🔷 9. WHAT SHA CANNOT DO
----------------------------------------------------
- Cannot decrypt data
- Cannot hide secrets
- Cannot prevent brute-force attacks alone
- Cannot revoke tokens

----------------------------------------------------
🔷 10. SECURITY LIMITATIONS
----------------------------------------------------
- SHA is fast, which is unsafe for passwords
- Vulnerable to brute-force if used alone

Solution:
- Use salt
- Use slow hashing algorithms
- Prefer bcrypt or argon2

----------------------------------------------------
🔷 11. SHA IN AUTHENTICATION ARCHITECTURE
----------------------------------------------------
Passwords → bcrypt → Database
JWT → HMAC + SHA → Signature
OAuth → SHA-signed tokens
Payments → SHA checksums

SHA acts as the foundation of trust.

----------------------------------------------------
🔷 12. FINAL DEVELOPER TAKEAWAY
----------------------------------------------------
- SHA creates data fingerprints
- Same input always gives same output
- No decryption is possible
- Used for integrity, not secrecy
- Core building block of authentication systems
- We use it bcoz if database leaks, all login passwords got exposed

====================================================
END OF SHA NOTES
====================================================
*/
