/*
- IndexedDB: it's a powerful tool for client-side storage in the browser

- Concepts:

1. Object Stores:
   - Like tables in a SQL database.
   - Stores JavaScript objects (records).
   - Each object must have a unique primary key.

2. Versioning:
   - A DB can't be created with version 0.
   - Once a version is set, future versions must be equal or higher.
   - `onupgradeneeded` is triggered only when version increases.

3. Creating Object Stores:
   - `db.createObjectStore(name, options)`
     - `name`: Name of the object store.
     - `keyPath`: Specifies which field will be the primary key (must be unique).
     - Can also use autoIncrement.

4. Indexes:
   - Use `createIndex(name, keyPath, { unique })`
   - Useful for searching fields other than primary key.
   - Example: create an index on the "email" field and enforce uniqueness.

5. Inserting Data:
   - `add()` — Adds a record. Fails if key already exists.
   - `put()` — Adds or updates. Safer for upserts (update if exists).

6. Transactions:
   - All read/write operations must be inside a transaction.
   - Use `db.transaction(storeName, mode)` — mode is "readonly" or "readwrite".

7. Reading Data:
   - `get(key)`, `getAll()`, `getAll(IDBKeyRange)`, `getKey(key)`
   - Can also query using indexes.

8. Deleting Data:
   - Use `store.delete(key)`

9. Common Events:
   - `onupgradeneeded`: Triggered on first creation or version upgrade.
   - `onsuccess`: Triggered when DB is opened successfully.
   - `onerror`: Catches errors in opening/transactions/requests.

10. Version Errors:
    - You **can't re-open** the DB with a **lower version** than previously created.
      → Example: If DB is created with version 6, trying to open with version 5 will throw a `VersionError`.
      → Solution: Always use a version >= current version.

11. Blocked Events:
    - `onblocked` fires if:
        a) You try to upgrade the DB but other tabs/pages have it open.
        b) An upgrade is waiting for other connections to close.
      → Fix: Ask the user to close other tabs or reload.

12. Version Change Lock:
    - During `onupgradeneeded`, the DB is locked to that version change.
    - Don't try to perform read/write operations during `onupgradeneeded` outside the upgrade transaction.

13. Don't Reuse Transactions:
    - Transactions are one-time-use.
      → Once `.complete` or `.abort` fires, it's finished.
      → You must create a new transaction for each new set of operations.

14. Key Constraints:
    - If you use `add()` and the key already exists, you get a `ConstraintError`.
    - If you use `put()` and a `unique` index has a duplicate value, also throws `ConstraintError`.

15. Index Creation Only During Upgrade:
    - You can only call `createIndex()` inside `onupgradeneeded`.
    - Trying to create or modify object stores/indexes outside upgrade phase = `InvalidStateError`.

16. Serialization Errors:
    - IndexedDB stores structured clones of objects.
    - You can’t store:
        - Functions
        - DOM elements
        - Objects with circular references
      → Will throw `DataCloneError`.

17. Auto-Increment Warning:
    - If you use `autoIncrement`, make sure you **don’t manually provide a key** that conflicts.
    - Or else, insertions may fail due to key collision.

18. Asynchronous by Nature:
    - IndexedDB is **fully asynchronous**.
    - Don't try to use return values directly from a `.get()` or `.put()`.
      → Always use `onsuccess` and `onerror` callbacks or wrap in Promises.

19. Readonly vs Readwrite:
    - If you open a transaction in `"readonly"` mode and try to `add`, `put`, or `delete`, you’ll get a `ReadOnlyError`.

20. Clean Up Old Object Stores:
    - You can remove outdated object stores in `onupgradeneeded` using `db.deleteObjectStore("storeName")`
    - Keeping unnecessary stores can bloat the DB.

21. Debugging Tip:
    - Use the "Application" tab in Chrome DevTools → IndexedDB section to:
        - View databases
        - Inspect object stores
        - Delete stores
        - Clear values

22. Browser Compatibility:
    - IndexedDB is well-supported but may behave slightly differently in edge cases across browsers.
    - Firefox handles `onblocked` and transaction auto-abort differently than Chromium.

23. Storage Limits:
    - Each browser has **different storage limits** (depends on quota system).
    - Mobile browsers may clear IndexedDB automatically under storage pressure.

24. IndexedDB Promises:
    - Modern browsers support [`indexedDB.databases()`](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB/databases) and libraries like:
        - **Dexie.js** (Promise-based wrapper)
        - **idb** from Google (minimal and clean)
    - You can also manually promisify IDB with `async/await` using `new Promise()`.

*/


// Open (or create) the IndexedDB database "collegeDB" with version 6
const openRequest = indexedDB.open("collegeDB", 6);

// SUCCESS: Runs every time DB is successfully opened (after any upgrade)
openRequest.onsuccess = (e) => {
    console.log("from success");

    let db = openRequest.result;

    // Start a read/write transaction on the "students" object store
    let transaction = db.transaction("students", "readwrite");
    let storeObject = transaction.objectStore("students");

    // Example operations — uncomment any one at a time:

    // Insert or update data (put will insert if new, or update if existing)
    // let request = storeObject.put({ id: 11, name: 'narulas1', email: 'narula1s@gmail.com' });

    // Get a record by key (e.g., id = 9)
    // let request = storeObject.get(11);

    // Get all records
    // let request = storeObject.getAll();

    // Get records in range (inclusive): between ID 9 and 10
    // let request = storeObject.getAll(IDBKeyRange.bound(9, 11));

    // Get just the key of record with ID 9
    // let request = storeObject.getKey(0);

    // Use an index to query by non-primary key (e.g., name = 'narulas')
    // let index = storeObject.index("name");
    // let request = index.get('narulas');

    // Delete a record by ID
    let request = storeObject.delete(11);

    // You must define request to avoid errors below
    // Handle success or error for the operation (if one is active)
    if (typeof request !== 'undefined') {
        request.onsuccess = (e) => {
            console.log("Result: ", e.target.result);
        };

        request.onerror = (e) => {
            console.error("Request Error: ", e.target.error);
        };
    }
}

// UPGRADE: Triggered when DB is created or version is increased
openRequest.onupgradeneeded = (e) => {
    console.log("Upgrade needed");

    let db = openRequest.result; // holds the actual database instance 

    // Create "students" object store only if it doesn't exist
    if (!db.objectStoreNames.contains("students")) {
        let request = db.createObjectStore("students", { keyPath: 'id' });

        // Add indexes to support fast lookups
        request.createIndex("name", "name", { unique: false });
        request.createIndex("email", "email", { unique: true });
    }
};

// ERROR: Catches DB open errors
openRequest.onerror = (e) => {
    console.error("Database open error: ", e);
};





/*

- UserCases:

1. Offline-First Web Apps:
   → Use Case: Store data locally so the app works without internet.
   → Example: Note-taking apps like Google Keep, Notion clone.
   → Why IndexedDB: Large structured data storage, works offline, syncs later when online.

2. Caching API Data (e.g., PWA):
   → Use Case: Cache product listings, user data, or articles locally.
   → Example: E-commerce app that loads products offline.
   → Why IndexedDB: More control and flexibility than cache API (e.g., structured data, indexed queries).

3. Storing User Preferences & App State:
   → Use Case: Save user themes, settings, layout positions.
   → Example: Dark mode preference, dashboard widgets layout.
   → Why IndexedDB: Better for storing structured and complex data than localStorage.

4. Large Data Sets in Browser:
   → Use Case: Handle large amounts of structured data on client side.
   → Example: Data analysis dashboards, medical records, offline CRM.
   → Why IndexedDB: Can handle hundreds of MBs (even GBs), unlike localStorage (~5MB).

5. Background Sync Queues:
   → Use Case: Store API requests when offline, and sync when back online.
   → Example: A delivery app that lets agents mark deliveries offline.
   → Why IndexedDB: Reliable persistence, supports read/write queues.

6. Secure and Persistent Form Drafts:
   → Use Case: Save long form data that users are filling over time.
   → Example: Job applications, tax filings, surveys.
   → Why IndexedDB: Survives reloads/crashes, unlike sessionStorage.

7. Media-heavy Applications:
   → Use Case: Store images, audio blobs, PDFs, or video files locally.
   → Example: Music streaming app caching tracks for offline use.
   → Why IndexedDB: Can store binary files (blobs), not just strings.

8. Web-Based Games:
   → Use Case: Save progress, levels, assets, settings.
   → Example: A puzzle game that remembers scores and player state offline.
   → Why IndexedDB: Fast read/write, large storage, offline-safe.

9. Document Editors:
   → Use Case: Offline editing and versioning of documents.
   → Example: Google Docs-style editor where changes are saved locally first.
   → Why IndexedDB: Structured record storage with indexing for changes.

10. Encrypted Local Storage:
    → Use Case: Secure storage of sensitive data locally (with encryption).
    → Example: Password manager storing vault locally before syncing.
    → Why IndexedDB: Not easily accessible like localStorage (can't just open in devtools), can encrypt and manage structured data.

11. On Page refresh data will be retained
*/




/*

- When NOT to Use IndexedDB

1. For tiny key/value storage → Use localStorage (e.g., "theme = dark").
2. For temporary data across tabs → sessionStorage may be enough.
3. For real-time data sync only → Consider WebSocket or server-side storage.
4. If your app doesn't require structured data or offline features.
*/
