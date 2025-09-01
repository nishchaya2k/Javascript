/*
Introduction
In the dynamic world of web applications, real-time communication has become a fundamental requirement. Whether it's keeping users updated with live data, facilitating instant messaging, or enabling collaborative features, various methods are employed to achieve real-time communication between clients and servers.

- Long Polling: 

1. In long polling, the client sends a request or hit a api call to the server, and the server holds onto the request, waiting for updates or new data.

2. Untill server doesn't respond our api call remain in pending state in network tab

3. It doesn't respond immediately if there is no new information available. The server responds as soon as there is new data to send or after a certain timeout period like it will send pending status, and then the client immediately sends another request, creating a cycle of long-polling requests to maintain real-time communication.

4. Sometimes, when waiting time is so much, broswer automatically cancel the api call as timeout state of api


e.g Pipeline:

Explaination:- When I merge multiple pr's at a same time for deployment,
what we observe is untill 1st pr doesn't' complete second wait to run 

Disadvantages of Long Polling:

1. Latency: Not true real-time; there's still some delay based on server timing.

2. Resource-Intensive: Holding connections open consumes server resources (threads, memory).

*/