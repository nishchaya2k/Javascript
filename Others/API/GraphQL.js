/*
- 🔹 GraphQL:

1. GraphQL is a query language for APIs that allows clients to request exactly the data they need.

2. All data operations—queries, mutations, and subscriptions—are sent through a single endpoint (commonly /graphql), simplifying API access.

3. Unlike REST, where you might use GET /users to fetch users and POST /users to create a user, GraphQL handles both through a single endpoint using the request body to define the operation—no need for multiple URLs or different HTTP methods.

3. GraphQL APIs are strongly typed and defined by a schema.

4. Clients define the structure of the response, avoiding over-fetching or under-fetching.

5. Supports both querying (reading) and mutations (writing/updating data).

6. Designed to be flexible, efficient, and developer-friendly.

- 🔹 Why we need it?

1. In REST APIs, data is spread across multiple endpoints. To fetch related data, multiple API calls are often required.

   Example:
   - GET /users/1 → returns full user data (name, email, phone, address, etc.)
   - GET /users/1/posts → returns all posts by user 1 (title, body, tags, comments, etc.)

   Problem:
   - We might only need the user's name and titles of their 3 latest posts.
   - REST returns a lot of unnecessary data (over-fetching).
   - Requires multiple network calls (slower, especially on mobile).

2. In GraphQL, we can get exactly what we need in a single request, with no extra data.

   Example GraphQL Query:
   {
     user(id: 1) {
       name
       posts(limit: 3) {
         title
       }
     }
   }

   Response:
   {
     "data": {
       "user": {
         "name": "Alice",
         "posts": [
           { "title": "Post 1" },
           { "title": "Post 2" },
           { "title": "Post 3" }
         ]
       }
     }
   }

   Advantages:
   - Only the required data is returned (avoids over/under-fetching).
   - Single network request for multiple related resources.
   - Cleaner, faster, and more efficient for both client and server.
   - Improves frontend performance, especially in mobile and low-bandwidth environments.
   - No need for API versioning — schema can evolve without breaking existing queries.
*/
