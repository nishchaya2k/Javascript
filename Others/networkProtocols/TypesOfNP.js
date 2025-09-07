/*

Types of Network Protocol:

Network protocols can be broadly categorized based on the functions they perform in a network. 
Here are the main types:

1. IP (Internet Protocol). (***IGNORE***)
   - Any data which is sent between two devices is sent in the form of IP packets.
   - An IP packet has two parts header and data. The header has some information about the source, destination, and the version of IP such as IPV4 or IPV6 and packet size.
   - Assigns unique IP addresses to devices on a network.
   - Responsible for routing packets from source to destination across different networks.
   - Connectionless: Doesn’t guarantee delivery, order, or error handling.
   - Works alongside TCP or UDP for complete communication.

   Example:
   When you visit a website, IP helps route your data through routers to reach the correct server.

2. TCP (Transmission Control Protocol)
   - Ensures reliable, ordered, and complete delivery of data.
   - Breaks data into packets and reassembles them in the correct order at the destination.
   - Performs error checking using checksums.
   - Retransmits lost or corrupted packets.
   - Connection-oriented: Establishes a connection before data transfer.
   - 3 Way Handshaking ???
   - Data Mostly in kbs

   Example:
   Used in applications like emails, file transfers, and web browsing where accuracy is essential.

3. UDP (User Datagram Protocol)
   - Faster but less reliable than TCP  - why ?.
   - Sends packets without establishing a connection.
   - No error correction or packet retransmission.
   - Connectionless: Packets may arrive out of order or be lost.
   - Small amout of data loss is acceptable
   - No Handshaking ??

   Example:
   Used in real-time applications like video streaming, gaming, and VoIP where speed is more important than reliability. 

4. HTTP (HyperText Transfer Protocol)
   - Protocol used for communication between web browsers and servers.
   - Stateless and works on top of TCP.
   - Follows a request-response model: client sends a request, server sends a response.

   Example:
   When you load a website like http://example.com, your browser uses HTTP to fetch the page content.

5. HTTPS (HTTP Secure)
   - It enables user to request and access web pages, download files and, interact with web applications. 
   - HTTP defines how information is formatted, transmitted, and displayed on the web
   - Secure version of HTTP.
   - Uses SSL/TLS to encrypt data between browser and server, what ?.
   - Ensures confidentiality, integrity, and authentication.
   - small size data sets

   Example:
   Used on websites that require secure login or payment, like https://bank.com.

6. FTP (File Transfer Protocol)
   - Network protocol Used for tranferring files between devices over a network 
   - it allows user to navigate directories, transfer files and manager file permissions
   - Used to upload and download files over a network.
   - Requires both a client and a server.
   - May use authentication (username/password) or anonymous access.
   - Large Size data set, files in gb

   Example:
   Used by developers to transfer website files to a hosting server.


7. IMAP (Internet Message Access Protocol)
   - Used to access and manage emails directly on the server.
   - Supports syncing across multiple devices.
   - Allows folder management and doesn’t delete emails by default.

   Example:
   Used in modern email apps where you want the same view on your phone, laptop, and web browser.

8. DNS (Domain Name System)
    - Translates human-readable domain names (like openai.com) into IP addresses.
    - Acts like the "phonebook" of the internet.
    - Essential for locating services and websites.

    Example:
    When you type "google.com", DNS resolves it to an IP address so your browser can connect to the correct server.

*/



/*

- When I search any website, how do I reach the correct server?


1. You type a website URL (like www.example.com) into your browser.

2. The browser asks the DNS (Domain Name System) to translate the domain name into an IP address.
   - For example, www.example.com → 93.184.216.34

3. Your computer creates a data packet with:
   - Source IP: your device’s IP address (e.g., 192.168.1.2)
   - Destination IP: the website’s IP address (e.g., 93.184.216.34)

4. This packet is sent from your device and passes through multiple routers on the internet.
   - Each router checks the destination IP and forwards the packet closer to the target server.
   - This is called **routing**, and it's handled by the **IP protocol**.

5. Eventually, the packet reaches the destination server.
   - The server reads your request and sends back a response (like a web page),
     also using your IP address as the destination so the data knows where to return.

   In this process:
   - **DNS** translates the domain name.
   - **IP** routes the data between networks.
   - **TCP/UDP** handle how the data is sent.
   - **HTTP/HTTPS** define the rules for communication between your browser and the server.

*/




/*

How is a packet sent from your device and passes through multiple routers?

1. Once your device creates the packet, it sends it to the default gateway (usually your router at home).

2. The home router checks the destination IP address (e.g., 93.184.216.34) and forwards the packet to your ISP (Internet Service Provider).

3. From there, the packet travels through several intermediate routers on the internet.
   - Each router checks the destination IP in the packet.
   - Based on routing tables, each router decides the next best hop (next router) to send the packet closer to the destination.

4. Routers do not open or read the actual data — they just forward the packet based on IP headers.

5. Eventually, the packet reaches the destination server's network.
   - The final router delivers the packet directly to the server with the matching IP.

   This entire path can involve:
   - Local router → ISP router → backbone routers → data center router → destination server.

   Protocol Involved:
   - **IP (Internet Protocol)** is responsible for routing the packet from source to destination.

*/

