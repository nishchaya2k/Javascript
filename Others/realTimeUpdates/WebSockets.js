/*

- WebSockets: It's a persistent connection between client & server. That means once the connection is established, both can send data to each other at any time 
  (e.g., Trading App - Real-time data transfer).

- It's a bidirectional, full-duplex connection over a single TCP connection.

- How WebSockets work and how they are different from HTTP:

  1. HTTP is unidirectional, half-duplex, and stateless — the client sends a request, the server responds, and the connection is closed.

  2. Stateless = Server doesn’t remember anything about past requests.

  3. WebSockets are bidirectional, full-duplex, and stateful — the connection stays open, allowing continuous communication both ways.

  4. Stateful = The connection stays open, and both sides "remember" each other while it's active.

  5. WebSockets start with an HTTP handshake, then upgrade the protocol to WebSocket.

  6. If the server agrees, it responds with HTTP 101 Switching Protocols and the WebSocket connection begins.

  7. Ideal for real-time apps (e.g., chats, games, trading platforms), unlike HTTP which is request/response based.






- Single TCP connection: It's a stable connection established before data is exchanged between two devices to ensure data is delivered accurately and completely. The connection is maintained until all data has been transmitted or until one of the communication partners intentionally closes it.

*/
