/*
- 🔹 Establishing a Connection

1. Once the browser has the correct IP address, it initiates a TCP (Transmission Control Protocol) connection with the server. If the site uses HTTPS (which most sites do today), an additional step occurs:

2. TCP Handshake: The browser and the server perform a three-way handshake to establish a connection. This involves sending and acknowledging SYN (Synchronize) and ACK (Acknowledge) messages.

3. TLS Handshake (For HTTPS): When connecting to the site is over HTTPS, the TLS handshake is done to ensure the connection is secure. While doing this, the server shows its SSL certificate and the browser validates this to ensure that the server is shown as genuine.
- to decrypt and encrypt data with the help of SSL certificate + Key (Public and Client/Private) ?


- 🔹 Sending the HTTP Request

1. With the connection established, the browser sends an HTTP request to the server

2. Method: Specifies the action the browser wants to take (GET, POST ... etc)

3. URL: The specific path to the resource being requested (e.g., /index.html for the homepage).

4. Headers: Metadata about the request, such as the browser type, preferred language, and any stored cookies.

5. Body: If it’s a POST or PUT request, the body contains data like form inputs.


- 🔹 The Server’s Response


1. After processing the request, the server sends back an HTTP response containing the requested resource and additional information.

2. The status of the request in a three-digit code. 200, 404, 500 etc

3. Headers: Information about the particular response for example, the content type or the cache control information

4. Body: The content that is actually being delivered, ie the HTML code for a page or a file.


- 🔹 Rendering the Webpage 

1. With the response in hand, the browser begins to render the webpage:

2. HTML Parsing: The browser reads the HTML and builds the DOM (Document Object Model) tree.

3. CSS Parsing: CSS files are downloaded and parsed to create the CSSOM (CSS Object Model).

4. Render Tree Construction: The DOM and CSSOM are combined to form the Render Tree, which contains only visible elements.

5. Layout (Reflow): The browser calculates the exact size and position for each node in the Render Tree.

6. Painting: The browser fills in pixels for text, colors, images, borders, etc.

7. Compositing: Layers are combined and displayed on the screen, rendering the final page to the user.

8. The rendering process can be iterative as additional resources like JavaScript or images load and update the page dynamically.

9. The process of rendering a web page is often iterative. As resources like images or JavaScript files are retrieved, the browser updates the page dynamically.







- 🔸 Real-World Analogy:

1. Think of DNS as a phonebook → It tells you the phone number (IP) of someone (server).

2. Then you call that number → During the call, you go through greetings (TCP handshake), and if it’s a secure line, you encrypt the call (TLS handshake).

3. Only after that do you actually talk (send real data).

*/