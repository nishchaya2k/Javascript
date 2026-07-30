/*
🔹 Load Balancer – How it decides server is overloaded?

🔹 Core Idea:
  Load balancer sits before servers
  and decides where each request should go.


🔹 How it detects overload?

  🔹 Health Checks:
     - LB continuously checks servers
     - Example:
       ping /health endpoint
     - If server not responding → marked DOWN


  🔹 Metrics Tracking:
     LB monitors:
     - Active connections
     - CPU usage (sometimes)
     - Response time

     If server is too busy → avoid sending traffic


🔹 Decision Strategies:

  🔹 Round Robin:
     - A → B → C → A → B → C
     - Simple, no load awareness


  🔹 Least Connections (Smart):
     - Send request to server with least active users
     - Helps avoid overloaded servers


  🔹 Weighted Distribution:
     - Powerful servers get more traffic
     - Weak servers get less


🔹 Where is this logic written?

  🔹 Inside Load Balancer itself:
     - Not in frontend code ❌
     - Not in backend API code ❌

  🔹 Managed by:
     - NGINX (software load balancer)
     - AWS ELB / ALB (cloud managed)

     👉 :contentReference[oaicite:0]{index=0}
     👉 :contentReference[oaicite:1]{index=1}


🔹 What happens when server is overloaded?

  - LB stops sending new requests to that server
  - Sends traffic to other healthy servers
  - If server recovers → added back


🔹 Important for Frontend Engineer:

  🔹 You don’t control this logic
  🔹 But you should know:
     - Your API calls may hit different servers
     - System is distributed
     - Failures are handled before request reaches backend


🔹 Final Thought:
  Load balancer = traffic manager
  It ensures:
  - No single server is overloaded
  - High availability
  - Smooth request handling
*/