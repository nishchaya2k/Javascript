/*
🔹 NGINX (What is it?)

  - NGINX is a web server
  - It serves frontend files (HTML, CSS, JS)
  - It can also act as:
    - Reverse proxy
    - Load balancer

  👉 In our case:
     It serves frontend apps and routes traffic


🔹 What does it do in our project?

  - Receives user request (URL)
  - Decides which frontend app to serve
  - Returns correct app (index.html)


🔹 Core Idea:
  User request → NGINX → correct frontend app


🔹 Why it exists in frontend repo?

  - Handles frontend routing at server level
  - Maps URL paths to different frontend apps
  - Required for SPA + micro-frontend setup


🔹 Micro-Frontend Routing:

  Example:
  /inventory  → Inventory app
  /quotation  → Quotation app
  /pmt        → PMT app

  👉 All apps served from same domain


🔹 How it works:

  1. User hits:
     /inventory/dashboard

  2. NGINX checks:
     matches /inventory

  3. Serves:
     inventory app (index.html)

  4. React handles:
     /dashboard internally


🔹 SPA Routing Fix:

  try_files $uri /index.html;

  - Prevents 404 on refresh
  - Always loads React app


🔹 Why not backend?

  - These are static files
  - NGINX serves faster than backend


🔹 Big Picture:

  User → NGINX → (decides app)

    /          → Main App
    /inventory → Inventory App
    /quotation → Quotation App


🔹 Final Thought:
  NGINX is the entry point and glue
  that connects all micro-frontends.
*/