/*

- Cookie Attributes 

1. name=value

* The actual data stored in the cookie, as a key-value pair.
* Example: userId=12345

2. expires=DATE

* Sets the date and time when the cookie should expire (in GMT/UTC format).
* If not set, the cookie is a session cookie (deleted when the browser closes).
* Example: expires=Wed, 09 Aug 2025 12:00:00 GMT

3. max-age=SECONDS

* Specifies how long (in seconds) the cookie should last from the time it's set.
* Alternative to expires; if both are set, max-age takes precedence.
* Example: max-age=3600 (1 hour)

4. domain=example.com

* Defines which domain can access the cookie.
* By default, it’s the domain of the page that set the cookie.
* Can be set to a higher-level domain to share cookies across subdomains.
* Example: domain=.example.com allows access on a.example.com and b.example.com.

5. path=/somepath

* Restricts the cookie to URLs under a specific path.
* The browser only sends the cookie when requesting that path or its children.
* Example: path=/account means cookie is sent to /account/settings, /account/orders, etc.

6. secure

* Ensures the cookie is only sent over HTTPS connections.
* Helps prevent man-in-the-middle attacks by not exposing the cookie over HTTP.
* Makes the cookie inaccessible to JavaScript (document.cookie).

7. HttpOnly

* Makes the cookie inaccessible to JavaScript (document.cookie).
* Only the server can access it.
* Helps protect against XSS (Cross-site Scripting) attacks.

8. SameSite

* Controls whether cookies are sent with cross-site requests.
* Can be set to:
 - Strict: Only sent for same-site requests. Most secure.
 - Lax: Sent for top-level navigation (e.g., clicking a link from another site).
 - None: Sent in all contexts (cross-site allowed) — must use Secure with this.
* Helps prevent CSRF (Cross-site Request Forgery) attacks.






Example - 1:


-  Step 1: User Logs In to shopwise.com

1. log in to your account, and the server needs to remember you're authenticated on every page (without logging you in again)
2. The browser sends this HTTP request:

POST /login HTTP/1.1
Host: shopwise.com
Content-Type: application/x-www-form-urlencoded
Origin: https://shopwise.com

email=john@gmail.com&password=123456

- Step 2: Server Responds with Set-Cookie Header

1. The server validates your credentials and responds like this:
2. HTTP/1.1 200 OK
Set-Cookie: authToken=eyJhbGci...; 
             Expires=Wed, 06 Sep 2025 12:00:00 GMT; 
             Max-Age=7200; 
             Domain=.shopwise.com; 
             Path=/; 
             Secure; 
             HttpOnly; 
             SameSite=Lax

- Step 3: Browser Stores the Cookie

1. The browser automatically stores the cookie and associates it with the domain shopwise.com.


- Step 4: Every Time You Navigate on the Site

1. You click on "My Orders" or "Cart", and your browser sends this:
2. GET /orders HTTP/1.1
Host: shopwise.com
Cookie: authToken=eyJhbGci...
3. The server uses this cookie to: Identify the user & Fetch and return the user's order details


- Step 5: Optional — JavaScript Sets a Preference Cookie

1. document.cookie = "currency=USD; max-age=2592000; path=/; SameSite=Lax";


*/



/* 
Are Cookies the best option for Authentication, what are the alternates, are alternates better & if better, in what cases are they better ?


Would you like to build a working version of this example using:

Node.js backend?

HTML + JS frontend?
Let me know — I can guide you hands-on.

*/


