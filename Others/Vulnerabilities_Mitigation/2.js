/*

◆ 7. HTTP vs HTTPS vs HTTPONLY

Many developers confuse these terms,
but they solve different problems.

HTTP:
• Protocol used for Browser ↔ Server communication
• Data is sent in plain text

HTTPS:
• Secure version of HTTP
• Uses TLS/SSL encryption
• Protects data while travelling over the network

HttpOnly:
• Cookie security attribute
• Prevents JavaScript from reading cookies
• Helps protect tokens from XSS attacks

Rule:

HTTP
→ Communication Protocol

HTTPS
→ Network Protection

HttpOnly
→ Browser Protection


◆ 8. WHAT HTTPS PROTECTS

Without HTTPS:

User
↓
Password
↓
Internet
↓
Server

An attacker monitoring the network
may read the transmitted data.

With HTTPS:

User
↓
Encrypted Data
↓
Internet
↓
Server

Attacker sees encrypted data only.

Example:

https://example.com

Data is encrypted before being sent
over the network.


◆ 9. WHAT HTTPONLY PROTECTS

Without HttpOnly:

localStorage.getItem("token")
document.cookie

JavaScript can access tokens.

If XSS occurs:

Attacker Script
↓
Reads Token
↓
Steals Session

Example:

localStorage.getItem("token")

Attacker can steal the token.

With HttpOnly:

Set-Cookie:
accessToken=abc123; HttpOnly

document.cookie

✗ Cannot read token

Browser can send the cookie automatically,
but JavaScript cannot access it.

Request:

GET /profile

Cookie: accessToken=abc123

The browser sends the cookie,
even though JavaScript cannot read it.


◆ 10. INTERVIEW TAKEAWAY

HTTP:
Protocol used for communication between
browser and server.

HTTPS:
Encrypted version of HTTP that protects
data while travelling over the network.

HttpOnly:
A cookie attribute that prevents
JavaScript from accessing cookies and
helps mitigate token theft through XSS.

HttpOnly only protects the cookie from JavaScript access inside the browser. It does not encrypt network traffic. If the application uses HTTP instead of HTTPS, an attacker may still intercept the cookie during transmission. That's why HttpOnly and HTTPS solve different security problems and are usually used together.
*/