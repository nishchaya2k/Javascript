/*
- Short Polling: 

1. In short polling, the client repeatedly sends requests or hit api call to the server at regular intervals to check for updates or new data.

2. The server responds to these requests immediately, even if there is no new information available. This process continues at regular intervals, with the client periodically polling the server for updates.


e.g Analytics, Cricbuzz:

Explanation: On platforms like Cricbuzz, when you’re watching a live cricket match, the front end sends API calls at short intervals (e.g. every 5 seconds) to fetch the latest score, wickets, or over updates — even if the score hasn’t changed.


Disadvantage: 
High Server Load: The server must handle frequent repeated requests, even if there's no new data to return

*/