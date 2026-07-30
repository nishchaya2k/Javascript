/*
====================================================
OAUTH - (Open Authorization)
====================================================

🔷 1. WHAT IS OAUTH (CLEAR DEFINITION)
----------------------------------------------------
OAuth is an authorization framework.

Authorization means:
"Who is allowed to access what, and for how long."

OAuth allows:
- One application to access another application's data
- On behalf of a user
- WITHOUT sharing the user's password

OAuth does NOT care about:
- How the user logs in internally
- Password storage
- Session management

OAuth only answers:
"What permissions does this app have?"

----------------------------------------------------
🔷 2. WHY OAUTH WAS NEEDED (PROBLEM FIRST)
----------------------------------------------------
Before OAuth existed:

Example:
You install a third-party app called "CoolAnalytics"
It wants to read your Gmail data.

Old approach:
- App asks for your Gmail email + password
- You type password into CoolAnalytics
- CoolAnalytics stores it

Problems:
1. App has FULL access forever
2. If app is hacked, password is leaked
3. You cannot limit access
4. You cannot revoke access without changing password

This was dangerous and unacceptable.

----------------------------------------------------
🔷 3. WHAT OAUTH SOLVES
----------------------------------------------------
OAuth fixes all of this by:

1. Never sharing passwords
2. Allowing limited access (scopes)
3. Allowing time-limited access (tokens)
4. Allowing easy revocation
5. Allowing delegation of access

OAuth introduces:
"I allow this app to do ONLY this much."

----------------------------------------------------
🔷 4. OAUTH IS NOT LOGIN (VERY IMPORTANT)
----------------------------------------------------
OAuth is NOT authentication.

Authentication answers:
"Who are you?"

Authorization answers:
"What are you allowed to do?"

OAuth:
- Only grants permission
- Does NOT prove identity

When you see:
"Login with Google"

What is actually happening:
- OAuth is used for permission
- OpenID Connect (OIDC) is added on top for identity

OAuth alone does NOT mean login.

----------------------------------------------------
🔷 5. CORE OAUTH ACTORS (WHO IS WHO)
----------------------------------------------------
OAuth always has 4 roles.

1. Resource Owner
   - The user
   - Owns the data
   - Example: Gmail user

2. Client
   - The application requesting access
   - This is YOUR BACKEND SERVER
   - NOT the browser
   - Example: CoolAnalytics backend

3. Authorization Server
   - Handles login and consent
   - Issues codes and tokens
   - Example: Google Authorization Server

4. Resource Server
   - Holds protected APIs/data
   - Accepts access tokens
   - Example: Gmail API

----------------------------------------------------
🔷 6. REAL WORLD EXAMPLE (RUNNING EXAMPLE)
----------------------------------------------------
Scenario:
You click "Login with Google" on a website.

What the app wants:
- Your email
- Your profile name

What it does NOT want:
- Your Google password

----------------------------------------------------
🔷 7. WHAT OAUTH PROVIDES (IMPORTANT CLARITY)
----------------------------------------------------
OAuth provides:
- Authorization Code
- Access Token
- Refresh Token
- Scopes
- Consent flow

OAuth does NOT:
- Store sessions
- Encrypt data
- Replace JWT
- Authenticate users by itself

----------------------------------------------------
🔷 8. ACCESS TOKEN (WHAT IT REALLY IS)
----------------------------------------------------
Access Token is:

- A credential issued by Authorization Server
- Represents permissions granted by user
- Short-lived
- Sent to Resource Server

Example meaning:
"This app can read user email for next 1 hour"

How it is sent:
Authorization: Bearer ACCESS_TOKEN

Access Token proves:
Permission, not identity.

----------------------------------------------------
🔷 9. SCOPES (WHAT EXACTLY IS ALLOWED)
----------------------------------------------------
Scopes define:
- What data can be accessed
- What actions are allowed

Examples:
- email → read email address
- profile → read profile info
- repo:write → write GitHub repositories

User explicitly approves scopes.

If scope not approved:
Access token CANNOT access that data.

----------------------------------------------------
🔷 10. CONSENT (WHY USER SEES A SCREEN)
----------------------------------------------------
Consent screen exists because:

- User must know what app is accessing
- User must approve scopes

Consent screen shows:
"This app wants to:
- Read your email
- Access your profile"

User clicks:
Allow or Deny

This consent is the foundation of OAuth.

----------------------------------------------------
🔷 11. HIGH-LEVEL OAUTH FLOW (STEP BY STEP)
----------------------------------------------------
1. Client redirects user to Authorization Server
2. User logs in and gives consent
3. Authorization Server issues Authorization Code
4. Client exchanges Authorization Code for Access Token
5. Client uses Access Token to call Resource Server

----------------------------------------------------
🔷 12. WHAT IS AUTHORIZATION CODE (NO CONFUSION)
----------------------------------------------------
Authorization Code is:

- Issued by Authorization Server
- Very short-lived
- One-time use
- NOT a token
- NOT usable to access APIs

Authorization Code means:
"The user approved this request."

It does NOT mean:
"You can access data now."

----------------------------------------------------
🔷 13. WHO SENDS THE AUTHORIZATION CODE?
----------------------------------------------------
Important clarification:

- Authorization Server ISSUES the code
- Browser REDIRECTS with the code
- Client BACKEND SENDS the code for exchange

So:
Issuer ≠ Sender

Browser is just a transport.

----------------------------------------------------
🔷 14. WHAT DOES “EXCHANGE CODE” MEAN?
----------------------------------------------------
Exchange means:

Client backend sends:
- Authorization Code
- Client Secret

To:
- Authorization Server

And receives:
- Access Token
- Optional Refresh Token

This happens via:
Backend → Backend HTTP request

No browser involved here.

----------------------------------------------------
🔷 15. WHY CLIENT SECRET IS REQUIRED
----------------------------------------------------
Client Secret is:

- Password of the application
- Issued when app is registered
- Stored only on backend
- NEVER exposed to browser

Why needed?

Because:
Authorization Code alone is NOT trusted.

Client Secret proves:
"This request is coming from the real app."

----------------------------------------------------
🔷 16. WHY CODE ALONE IS NOT ENOUGH (SECURITY)
----------------------------------------------------
If only code was required:

- Anyone stealing code from redirect URL
- Could exchange it for access token

This would be insecure.

Client Secret ensures:
Only the legitimate app can redeem the code.

So:
Authorization Code = user consent proof
Client Secret = app identity proof

----------------------------------------------------
🔷 17. WHY PASSWORD IS NEVER SHARED
----------------------------------------------------
User enters password ONLY on Authorization Server.

Client NEVER sees:
- User password
- User credentials

Even if client is hacked:
- Password remains safe

----------------------------------------------------
🔷 18. REFRESH TOKEN (WHY IT EXISTS)
----------------------------------------------------
Access tokens expire quickly.

Refresh Token:
- Long-lived
- Stored securely on backend
- Used to get new access tokens
- Never sent to Resource Server

Refresh token prevents repeated logins.

----------------------------------------------------
🔷 19. OAUTH VS JWT (CLEAR DIFFERENCE)
----------------------------------------------------
OAuth:
- Authorization framework
- Defines flow and permissions

JWT:
- Token format
- Digitally signed
- Can carry claims

OAuth can use JWT as access token,
but OAuth ≠ JWT.

----------------------------------------------------
🔷 20. OAUTH VS SESSION AUTH
----------------------------------------------------
Session Authentication:
- Server stores session
- Browser-centric
- Hard to scale

OAuth:
- Token-based
- API-friendly
- Mobile-friendly
- Cross-platform

----------------------------------------------------
🔷 21. COMMON GRANT TYPES
----------------------------------------------------
1. Authorization Code (most secure)
2. Client Credentials (machine-to-machine)
3. Refresh Token
4. Device Code (TVs, consoles)

Implicit Flow is deprecated.

----------------------------------------------------
🔷 22. COMMON MISUNDERSTANDINGS (ALL CLEARED)
----------------------------------------------------
1. OAuth is NOT login
2. OAuth is NOT authentication
3. Authorization Code is NOT access token
4. Browser is NOT the client
5. Client Secret is NOT user password
6. Access Token does NOT prove identity

----------------------------------------------------
🔷 23. WHERE OAUTH IS USED
----------------------------------------------------
- Login with Google / GitHub
- Third-party API access
- Mobile applications
- Microservices
- SaaS integrations

----------------------------------------------------
🔷 24. FINAL DEVELOPER SUMMARY
----------------------------------------------------
1. OAuth is about permission delegation
2. User never shares password
3. Authorization Code proves consent
4. Client Secret proves app identity
5. Access Token represents permission
6. JWT is often used as token format
7. OpenID Connect adds authentication

----------------------------------------------------
🔷 25. ONE-LINE SUMMARY
----------------------------------------------------
OAuth allows applications to securely access user data without ever handling user passwords.

====================================================
END OF OAUTH NOTES
====================================================

*/