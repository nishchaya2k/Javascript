/*
- 🔹 Referer Header:

1.  Sent by the browser to indicate the **URL of the page** that initiated the request.
2.  Helps the server understand the **source/context** of incoming traffic.
3.  Commonly used in analytics, ads, security checks, and personalization.
4.  Format:
    Referer: <full-URL>

- 🔹 Example:
    Referer: https://www.youtube.com/watch?v=abc123

1.  Real-world Example:
2.  You are on **YouTube**, and click on an ad.
3.  The ad redirects you to `https://www.adsite.com/product123`.
4.  The **browser sends**:
    Referer: https://www.youtube.com/
5.  The ad site sees this header and knows:
    -> "This visitor came from YouTube."

- 🔹 Use Cases:

1.  Analytics:
    > Track which sites are sending users (e.g., YouTube, Google, Instagram).
2.  Advertising:
    > Ad networks check Referer to confirm traffic origin.
3.  CSRF protection:
    > Servers check Referer to ensure requests come from trusted pages.
4.  Content control:
    > Allow or block content based on where the request came from.

- 🔹 Security & Privacy Notes:

1.  May include sensitive data if full URL has query parameters.
2.  Can be stripped or limited by browser settings, extensions, or `Referrer-Policy`.
3.  Not a reliable security measure (can be spoofed).

- 🔹 Key Points:

1.  Shows **exact URL** of the previous page (not just origin).
2.  Automatically added by browsers during navigation and asset loading.
3.  Misspelled in spec: `Referer`, not `Referrer`.
4.  Controlled by server using:
    → `Referrer-Policy` (e.g., no-referrer, origin, strict-origin, etc.)

*/
