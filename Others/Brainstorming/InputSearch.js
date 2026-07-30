/*
🔹 Search Input Handling (Without Debounce/Throttle)

🔹 Problem:
  API is called on every keystroke.
  Cannot use debounce or throttle.


🔹 Core Idea:
  Don’t stop API calls,
  make them cheap + control results.


🔹 Approach (Like Amazon):

  🔹 Use Separate Suggestion API:
     - Don’t call full search API
     - Use lightweight API
     - Example:
       /suggestions?prefix=iphone


  🔹 Prefix-Based Search:
     - Match starting characters only
     - Example:
       "iph" → iphone, iphone 15


  🔹 Efficient Data Structure:
     - Use Trie (prefix tree) / search index
     - Avoid full DB scan
     - Fast lookup


  🔹 Limit Response:
     - Return only top results (10–15)
     - Keep payload small


  🔹 Cancel Previous Requests:
     - Only latest request should be active


  🔹 Avoid Stale Data:
     - Track latest request
     - Ignore old responses


  🔹 Input Check:
     - Skip API if empty or too short


🔹 Final Thought:
  Systems like Amazon are fast because:
  - Lightweight APIs
  - Prefix search
  - Optimized data structures
  - Limited response
  - Not because they reduce API calls
*/






/*
🔹 Search System (Backend Perspective)

🔹 Problem:
  API is called on every keystroke from frontend.
  High number of requests → risk of overload.


🔹 Core Idea:
  Don’t try to block requests,
  make each request fast, cheap, and scalable.


🔹 Backend Approach:

  🔹 Use Search Engine (Not Normal DB):
     - Avoid SQL LIKE queries
     - Use tools like Elasticsearch / Meilisearch
     - Pre-index data for fast lookup


  🔹 Prefix-Based Search:
     - Support fast prefix queries
     - Example:
       "iph" → iphone, iphone 15
     - No full database scan


  🔹 In-Memory / Indexed Data:
     - Store searchable data in optimized structures
     - Example:
       Trie / inverted index
     - Very fast response (ms level)


  🔹 Cache Frequent Queries:
     - Popular searches already stored
     - Example:
       "iphone" → cached result
     - Reduce computation


  🔹 Limit Response Size:
     - Return only top N results (10–15)
     - Avoid heavy payload


  🔹 Rate Limiting:
     - Limit requests per user/IP
     - Prevent abuse / overload


  🔹 Request Deduplication:
     - Same query hitting multiple times
     - Process once, reuse result


  🔹 Horizontal Scaling:
     - Multiple servers handle requests
     - Load balancer distributes traffic


🔹 Final Thought:
  Backend systems like Amazon/Google are fast because:
  - Pre-indexed data
  - In-memory search
  - Caching
  - Scalable architecture

  Not because they reduce API calls.
*/