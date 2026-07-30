/*
🔹 NGINX in Frontend (Micro-Frontend Setup)

🔹 What is this file?
  - Entry point of frontend system
  - Decides which frontend app to serve based on URL


🔹 Core Idea:
  User request → NGINX → correct frontend app


🔹 Why it exists in frontend repo?
  - Handles frontend routing at server level
  - Maps URL paths to different frontend apps
  - Needed for SPA + micro-frontend setup


🔹 Micro-Frontend Routing:

  Example:
  /inventory  → Inventory app
  /quotation  → Quotation app
  /pmt        → PMT app

  👉 All apps served from same domain
     (path-based routing)


🔹 How it works:

  1. User hits URL:
     /inventory/dashboard

  2. NGINX checks path:
     matches /inventory

  3. Serves:
     inventory app (index.html)

  4. React handles internal routing (/dashboard)


🔹 SPA Routing Fix:

  try_files $uri /index.html;

  - If route not found on server
  - Fallback to React app
  - Prevents 404 on refresh


🔹 Why not backend?
  - These are static files (HTML, JS, CSS)
  - NGINX serves faster than backend


🔹 Big Picture:

  User → NGINX → (decides app)

    /          → Main App
    /inventory → Inventory App
    /quotation → Quotation App


🔹 Final Thought:
  NGINX is the glue that connects all micro-frontends
  and serves the correct app based on URL.
*/