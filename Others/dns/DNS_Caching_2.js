/*
- 🔹 Caching in DNS

1. DNS caching is the process of storing previously looked-up domain name results (i.e., the IP addresses) temporarily, so that future requests for the same domain can be resolved faster, without repeating the full DNS lookup process.

2. DNS caching occurs at multiple levels:  Browser Cache, Operating System Cache, Resolver (ISP’s or public DNS resolver) Cache, Intermediate Devices (Routers or proxy servers)

- 🔹 How Long Are Results Cached?

1. Each DNS record has a TTL (Time To Live) value — specified in seconds — that tells the resolver how long the result should be cached.

2. Example:
   a. If the TTL is 3600 seconds (1 hour), the record stays cached for 1 hour.
   b. After TTL expires, a fresh DNS query is made.

- 🔹 Why is DNS Caching Important?

   Benefits:
   a. Faster browsing (no need to query root, TLD, authoritative servers again)
   b. Reduced DNS traffic on the internet
   c. Lower latency(delay) for end-users
   d. Less load on authoritative DNS servers

- 🔹 What if a Domain's IP Changes?

1. If a domain’s IP changes but the cache still holds the old value:
2. Users may be sent to the wrong IP (stale cache).
3. That’s why setting a reasonable TTL is important:
   a. Short TTLs (e.g., 300s) for dynamic services
   b. Long TTLs (e.g., 86400s) for static or rarely-changing domains

*/