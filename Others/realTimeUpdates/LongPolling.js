/*
Introduction
In the dynamic world of web applications, real-time communication has become a fundamental requirement. Whether it's keeping users updated with live data, facilitating instant messaging, or enabling collaborative features, various methods are employed to achieve real-time communication between clients and servers.

- Long Polling: 

1. In long polling, the client sends a request to the server, and the server holds onto the request, waiting for updates or new data.

2. It doesn't respond immediately if there is no new information available. The server responds as soon as there is new data to send or after a certain timeout period like it will send pending status, and then the client immediately sends another request, creating a cycle of long-polling requests to maintain real-time communication.

*/