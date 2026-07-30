/*

◆ 11. XSS (CROSS SITE SCRIPTING)

XSS occurs when an attacker injects malicious JavaScript
into an application and the browser executes it.

Root Cause:
• Application trusts user input

Example:

User Input:
<script>alert("Hacked")</script>

If rendered without sanitization,
the browser executes the script.


◆ 12. WHY XSS IS DANGEROUS

An attacker can:

• Read Local Storage
• Steal JWT Tokens
• Steal User Data
• Modify Page Content
• Perform Actions as User

Example:

localStorage.getItem("token")

If authentication tokens are stored in
Local Storage, they can be stolen.


◆ 13. HOW XSS HAPPENS

User Input
↓
Stored / Rendered Without Validation
↓
Browser Interprets Input As JavaScript
↓
Script Executes

Root Cause:

Application trusts user input.


◆ 14. XSS MITIGATION

Never trust user input.

Common Mitigations:

• Input Sanitization
• Output Encoding
• Content Security Policy (CSP)
• HttpOnly Cookies
• Framework Protections

Example:

React escapes content by default,
which helps prevent XSS.


◆ 15. RELATION BETWEEN XSS & TOKENS

Local Storage:

localStorage.getItem("token")

✓ JavaScript Can Read
✓ XSS Can Steal Token

HttpOnly Cookie:

document.cookie

✗ JavaScript Cannot Read
✓ Browser Can Send Automatically

This is why authentication tokens are often
stored in HttpOnly Cookies.


◆ 16. INTERVIEW TAKEAWAY

Vulnerability:
• User Input Executes As JavaScript

Impact:
• Token Theft
• Account Takeover
• Data Theft

Mitigation:
• Sanitization
• Output Encoding
• CSP
• HttpOnly Cookies

One-Liner:

XSS occurs when untrusted user input is
executed as JavaScript in the browser,
allowing attackers to steal data, tokens,
or perform actions on behalf of the user.

*/