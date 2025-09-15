/*
- 🔹 DNS: Domain Name System (DNS) is a hierarchical and distributed system that translates human-readable domain names (like www.google.com) into IP addresses (like 142.250.72.196) that computers use to identify each other on the network.


- 🔹 Why DNS is Important:

1. Humans remember names (e.g., www.facebook.com)
2. Computers use IP addresses (e.g., 157.240.22.35)
3. DNS bridges this gap.


- 🔹 How DNS Works (Basic Flow):

1. When you type www.google.com
2. Your browser checks its cache to see if it already knows the IP.
3. If not, it asks the DNS resolver (usually provided by your ISP)
4. The resolver then queries the DNS hierarchy in steps:
   a. Root server
   b. Top-level domain (TLD)/Generic server (like .com, .org, .in, .mil, .edu)
   c. Authoritative Server
5. The final answer (IP address) is returned to your browser.
6. Your browser connects to that IP and loads the website.


- 🔹 DNS Components

1. Resolver (DNS Resolver / Recursive Resolver)

   a. Acts as the middleman between your computer and the DNS hierarchy.
   b. Takes your request and does the hard work of finding the IP address by querying other DNS servers.
   c. Provided by your ISP or you can use public ones like Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).
   d. Example: You type www.wikipedia.org → Resolver receives it and starts querying other servers to resolve it.

2. Root Server

   a. Top of the DNS hierarchy.
   b. It does not know the final IP address of domains but knows where to find TLD servers (like .com, .org, .net).
   c. There are 13 root server labels (A to M), but each has many instances worldwide using Anycast.
   d. Example: You ask for www.wikipedia.org → Root server replies: “Go ask the .org server.”


- 🔹 TLD (Top-Level Domain) Server

1. A Top-Level Domain (TLD) is the last part of a domain name:
2. Example: For www.google.com, the TLD is .com
3. These servers are responsible for maintaining information about domains under a specific TLD.
4. They don’t know the final IP, but they know where the authoritative DNS servers are for domains under their TLD.
5. Example: Query Flow
   a. You want to visit www.wikipedia.org
   b. The resolver asks the root server
   c. Root says: “Ask the .org TLD server”
   d. TLD server says: “Ask the authoritative server for wikipedia.org”


- 🔹 Authoritative DNS Server:

1. This is the final stop in the DNS lookup process.
2. It contains the actual DNS records for the domain, including:
   a. A (Address) records.
   b. MX (Mail) records
   c. CNAME (Canonical Name), etc.
3. It gives the final answer: “The IP address of www.wikipedia.org is 208.80.154.224”
4. Maintained by:
   a. Domain owners (e.g., Wikipedia, Google) or their hosting providers.
   b. Example: Cloudflare, GoDaddy, AWS Route 53, etc.


- 🔹 6. ISP (Internet Service Provider) and DNS

1. Role of ISP in DNS:
   a. Most ISPs provide their own DNS resolvers to customers.
   b. When your system sends a DNS query, it usually goes to your ISP’s resolver by default.
2. Example: If you're using a local provider like Airtel, Jio, or Comcast, their DNS resolver handles the query unless you manually change it to Google (8.8.8.8) or Cloudflare (1.1.1.1). -> How we gonna change ?


- 🔹 Caching in DNS

1. DNS caching is the process of storing previously looked-up domain name results (i.e., the IP addresses) temporarily, so that future requests for the same domain can be resolved faster, without repeating the full DNS lookup process.

2. DNS caching occurs at multiple levels:  Browser Cache, Operating System Cache, Resolver (ISP’s or public DNS resolver) Cache, Intermediate Devices (Routers or proxy servers)


- 🔹 DNS Request Flow (Expanded with Routing):

1. **Browser** to **Home Router**:
   - Your browser first checks its local DNS cache. If it doesn't have the IP address, it sends the request to the **Home Router**.
   - The **Home Router** also might cache DNS records. If it's not cached, it forwards the request to the **ISP’s DNS resolver**.

2. **Home Router** to **Area Router**:
   - If the DNS request is not cached in the Home Router, it will be sent to the **Area Router**. This is typically a router handling requests from a specific area or neighborhood.
   - The **Area Router** may have its own DNS cache or forwards the request to the next level.

3. **Area Router** to **City Router**:
   - If the DNS query is still unresolved, it goes to the **City Router**, which handles requests for an entire city or regional area. 
   - These routers handle a large volume of data and could cache DNS queries for faster resolution.

4. **City Router** to **State Router**:
   - The **State Router** handles traffic at a broader state level. It continues to propagate the request closer to the larger **Internet Backbone**.

5. **State Router** to **Country Router (India)**:
   - If the DNS query has not been resolved, it gets sent to **Country-Level Routers** (like in **India** for Indian requests). These are major routing points that can handle large-scale traffic and send DNS queries further into the global internet backbone.

6. **Country Router to Authoritative DNS Server**:
   - The DNS request will eventually reach the **Authoritative DNS Server** (after passing through the national and international backbone routers). This server holds the final DNS records for the domain (e.g., **www.google.com**) and provides the IP address.

7. **Backwards Flow**: Once the **IP address** is resolved, it travels back through the same network of routers (from **Country Router** to **Area Router**), reaching the **Home Router**, and finally sent back to the **Browser**. The browser can then initiate a **TCP connection** to the server, starting the process of data transfer.

- 🔹 **DNS Caching and Routing Summary:**

1. **Request Flow**:
  - **Browser → Home Router → Area Router → City Router → State Router → Country Router → Authoritative DNS Server → Browser**.

2.  **Caching at each step**: Routers (Home, Area, City, State) may have cached DNS responses, speeding up the lookup process for subsequent queries.

3. **Why This Routing Structure?**

4. **Efficiency**: This hierarchical system speeds up the DNS resolution process by caching answers at various levels, from **local routers** to **ISP DNS** to the **Internet Backbone**.

5. **Load Reduction**: By caching DNS queries, traffic and load on authoritative servers are minimized.

6. **Redundancy**: Multiple layers of routers ensure redundancy and efficiency in case of failures or network congestion at certain layers.



Q. Recursive and Iterative Approch to find IP Address, what way is best & why, or how we choose ? -> Both Ways Are best
Q. DNS Record in Authoritative Server ?
Q. IP Address Keeps on Changing ? Rotation/Shifting of Request, CNAME

*/