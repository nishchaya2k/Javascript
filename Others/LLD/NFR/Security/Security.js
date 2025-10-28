/*
- 🔹 Login & Passwords:

1. Always store passwords in hashed form (use bcrypt).
2. Never save plain text passwords.
3. Use login with email/phone + password or Google/Facebook.

- 🔹 Sessions / Tokens:

1. After login, give user a token (like a key to stay logged in).
2. Use JWT (JSON Web Token) or session ID.
3. Set token to expire after some time (e.g., 1 hour).

- 🔹 HTTPS:

1. Always use HTTPS (not HTTP) to protect data in transit.
2. It encrypts data between user and server.

- 🔹 User Access:

1. Users should only see or change their own data.
2. Example: User A should not see User B's messages or posts.

- 🔹 Input Validation:

1. Always check what the user sends (e.g., forms, comments).
2. Helps stop attackers from injecting bad code (like scripts).

- 🔹 File Uploads:

1. Check file type, size, and name before saving.
2. Don’t let users upload dangerous files (e.g., .exe).

- 🔹 Basic Protection:

1. Add CAPTCHA to stop bots.
2. Send verification email or OTP during signup.

- 🔹 Logging Out:

1. When user logs out, their session/token should stop working.

- 🔹 Privacy:

1. Keep user data safe (e.g., email, phone, messages).
2. Only store what is needed.

*/
