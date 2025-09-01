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


eg. 

- Online Games (e.g., PUBG)

1. In a game room with 100 players, each client maintains a WebSocket connection to the game server.

2. Players can send and receive updates instantly (like position, actions, chat).

3. No polling needed — just live, ongoing updates.

-  Meeting Rooms (e.g., Zoom, Google Meet)

1. Audio, video, and chat all rely on real-time, simultaneous streams.

2. WebSockets help coordinate these messages (alongside other protocols like WebRTC).

Disadvantage

1. in Trading when user is in crores server not able to build so much of individual connection with each user, as such scale we prefer short polling, 
as its consume less resource here

2. Each WebSocket connection stays open and uses server memory, CPU, and sometimes threads.

3. For millions (or crores) of users, maintaining open WebSocket connections becomes very resource-intensive.
*/
