/*
- Network protocols are a set of rules to follow when two devices communicate with each other. 
  It’s like a common language that both devices and systems understand.

  Example:
  Just like two people speaking English can understand each other, 
  two computers using the HTTP protocol can successfully request and serve web pages.

  Source: https://medium.com/@rano3003/system-design-fundamentals-network-protocols-c0c8925f4c1f

- Need of Network Protocol

1. Network Protocols ensure that devices understand each other 
   Explanation:
   Different devices (phones, laptops, routers, etc.) are made by different manufacturers 
   and run different operating systems. Network protocols standardize how they format, send, 
   and receive data so they can work together.

   Example:
   Your Android phone can load a website hosted on a Linux server using the HTTP/HTTPS protocol 
   because both understand how to send and receive HTTP requests/responses.

2. Network Protocols ensure that data is transmitted reliably
   Explanation:
   When data is sent over the internet, it can get lost, duplicated, or arrive out of order. 
   Some protocols (like TCP) handle these problems automatically to ensure the data is 
   delivered completely and correctly.

   Example:
   When you send an email, the TCP protocol ensures the entire message reaches the recipient. 
   If any part is lost, TCP resends it.

3. Network Protocols provide security
   Explanation:
   Some protocols offer encryption, authentication, and data integrity to make sure that 
   communication is secure from hackers or eavesdroppers.

   Example:
   When you see a website with https://, the HTTPS protocol is being used. 
   It encrypts your data using SSL/TLS, so attackers can't read your passwords 
   or credit card info during transmission.

4. Network Protocols allow for interoperability
   Explanation:
   Protocols are standards followed globally, so devices from different vendors 
   (Apple, Samsung, HP, etc.) can still work together if they follow the same protocol.

   Example:
   A Windows laptop can connect to a Cisco router using the Wi-Fi (IEEE 802.11) protocol, 
   even though they are made by different companies.

*/





/*
- Ethernet: It's a type of Network Protocol that helps devices connect and communicate with each other in a LAN (Local Area Network).

  Example:
  When you connect your computer to a router using a LAN cable, you're using Ethernet to send and receive data on the network.

1. Ethernet uses a set of rules to transfer data in the form of packets 
   (where packets are like small packages of information that are sent from one device to another)

   Explanation:
   Ethernet breaks down large pieces of data into smaller units called packets. These packets are sent one at a time over the network.
   Each packet contains both the data and control information (like the destination address) so that it knows where to go.

   Example:
   If you're downloading a file from another computer on your LAN, Ethernet ensures that the file is divided into packets 
   and sent across the cable or Wi-Fi to your machine.

2. It ensures that these packets are delivered to the right destination in the correct order.

   Explanation:
   Ethernet includes addressing (using MAC addresses) to make sure data reaches the correct device. 
   It also includes error-checking mechanisms (like CRC checks) to detect if packets are corrupted during transmission. 
   If an error is detected, the packet can be resent.

   Example:
   When you're watching a video from a local media server, Ethernet ensures all the video data packets 
   arrive in the right sequence, without missing or mixing them up — so the video plays smoothly.
*/
