/*

◆ 1. WHAT IS A VULNERABILITY

A vulnerability is a weakness in a system that can be
exploited by an attacker or can cause system failure.

Examples:
• Weak password storage
• Open APIs without authorization
• Single database server
• No rate limiting


◆ 2. WHAT IS MITIGATION

Mitigation is the technique used to reduce or eliminate
the risk caused by a vulnerability.

Examples:
• Password Hashing
• Authorization Checks
• Database Replication
• Rate Limiting


◆ 3. TYPES OF VULNERABILITIES

Security Vulnerabilities:
• XSS
• CSRF
• SQL Injection
• Brute Force Attack

Availability Vulnerabilities:
• Server Crash
• DDoS Attack
• Single Point of Failure

Reliability Vulnerabilities:
• Database Failure
• Data Loss
• Data Corruption

Performance Vulnerabilities:
• Slow Database Queries
• Cache Misses
• Heavy API Traffic


◆ 4. SYSTEM DESIGN THINKING

For every component ask:

1. Can someone abuse it?
   → Security

2. Can it crash?
   → Availability

3. Can data be lost?
   → Reliability

4. Can it become slow?
   → Performance


◆ 5. VULNERABILITY → MITIGATION EXAMPLES

Password Stored in Plain Text
→ Hash Passwords (bcrypt, Argon2)

Too Many Requests
→ Rate Limiting
→ CAPTCHA

Single Server
→ Load Balancer
→ Multiple Servers

Database Crash
→ Replication
→ Backups

HTTP Communication
→ HTTPS/TLS


◆ 6. INTERVIEW FRAMEWORK

Component
   ↓
What can go wrong?
   ↓
What is the impact?
   ↓
How do we prevent it?

Formula:

Problem  = Vulnerability
Solution = Mitigation

*/