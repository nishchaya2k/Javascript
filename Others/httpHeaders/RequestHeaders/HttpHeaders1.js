/*
- 🔹 Host Header:

1.  Used in HTTP request headers to specify the domain (and optional port) of the server the client wants to reach.
2.  Mandatory in HTTP/1.1 requests.
3.  Enables virtual hosting — multiple websites can share the same IP address.
4.  Helps server identify which domain the client is requesting.
5.  Format:
    Host: <domain>[:<port>]

- 🔹 Example:
    Host: www.example.com
    Host: www.example.com:8080

- 🔹 Use Cases:

1.  Shared hosting: 
    > www.example1.com and www.example2.com on same server/IP.
2.  Cloud & container environments:
    > Host header used for routing in load balancers or reverse proxies.
3.  Port-specific services:
    > Host header includes custom port if needed.

- 🔹 Key Points:

1.  Essential for domain-based routing.
2.  Server uses Host to determine correct virtual site or app.
3.  Without it, server may return a 400 (Bad Request).


- 🔹 User-Agent Header:

1.  Identifies the client software making the request (browser, app, tool, etc.).
2.  Includes details like browser name/version, OS, device type.
3.  Helps servers tailor responses (e.g., mobile vs desktop layout).


- 🔹 Example:
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
                (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36

- 🔹 Use Cases:

1.  Responsive content:
    > Server sends mobile or desktop layout based on User-Agent.
2.  Analytics and logging:
    > Track what browsers/devices visitors use.
3.  Blocking bad bots or crawlers:
    > Filter out requests from non-browser User-Agents.
4.  Debugging/testing:
    > Devs spoof User-Agent to simulate different devices.

- 🔹 Key Points:

1.  Sent automatically by browsers and tools like curl, Postman.
2.  Can be spoofed → not reliable for authentication.
3.  Used for optimization, analytics, or browser-specific handling.






*/
