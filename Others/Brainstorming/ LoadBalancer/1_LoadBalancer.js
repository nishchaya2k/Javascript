/*
🔹 Load Balancer (Frontend Perspective)

🔹 What is it?
  A Load Balancer distributes incoming requests
  across multiple backend servers.


🔹 Why needed?
  - One server cannot handle all requests
  - Prevent server overload
  - Improve performance and reliability


🔹 Simple Example:

  User → Load Balancer → Server A
                         Server B
                         Server C

  Each request goes to different server


🔹 What problem it solves?
  - Too many API calls (like search on every keystroke)
  - Server crash prevention
  - Better response time


🔹 Types (basic awareness):
  - Round Robin → requests go one by one to servers
  - Least Connections → send to least busy server


🔹 As a Frontend Engineer, what you should know:

  🔹 You don’t implement it
  🔹 But you should understand:
     - Your API may hit different servers each time
     - System is distributed (not single backend)
     - Helps handle high traffic


🔹 Real World:
  Big systems like Amazon / Google use load balancers
  to handle millions of requests per second


🔹 Final Thought:
  Load balancer ensures:
  - Scalability
  - High availability
  - Faster responses
*/