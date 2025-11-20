/**
Offline Support in Web Apps:

1. Service Worker
- Stores static assets: HTML, CSS, JS, images
- Makes the app shell load even when offline
- Intercepts network requests and serves cached files
- Can implement caching strategies (cache-first, network-first, stale-while-revalidate)
- Can access IndexedDB to read/write data if needed (e.g., background sync, push notifications)
- Can run background tasks even when the web page is closed
- Analogy: Library building (walls, shelves, lights)
- Purpose: Offline availability of the app interface
- Limitation: Not designed to store structured app data efficiently

2. IndexedDB
- Stores structured data: JSON, objects, user inputs, messages
- Allows reading/writing data offline
- Data can be synced with server when online
- Can be used by both the app and service worker
- Provides persistent storage that can hold large amounts of data
- Supports queries, indexes, and transactions for data management
- Analogy: Books inside the library
- Purpose: Offline availability of app content/data
- Limitation: Not efficient for storing large static files (images, CSS, JS)

Key Differences:
- Service Worker → manages app shell, caching of assets, intercepts network requests, can interact with IndexedDB
- IndexedDB → manages dynamic app data, persistent storage, queryable and structured
- Together → app loads + data available offline, can sync in background
- Interaction:
   - Service Worker can read/write IndexedDB data (e.g., store push notification info, save user changes offline)
   - IndexedDB should not be used to store large static assets; use Cache Storage via Service Worker instead
- Best Practice: Use Service Worker for static app assets and caching strategies; use IndexedDB for dynamic, structured, or user-generated data
*/
