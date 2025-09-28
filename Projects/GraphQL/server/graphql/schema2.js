// server/graphql/schema2.js
const axios = require("axios");

const typeDefs = `
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        phone: String!
        website: String!
    }

    type Todo {
        id: ID!
        title: String!
        completed: Boolean
        userId: ID!         # Important!
        user: User
    }

    type Query {
        getAllUsers: [User]
        getUser(id: ID!): User
        getTodos: [Todo]
    }
`;

const resolvers = {
    Todo: {
        user: async (todo) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
            return response.data;
        }
    },
    Query: {
        getAllUsers: async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            return response.data;
        },
        getUser: async (_, { id }) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return response.data;
        },
        getTodos: async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            return response.data;
        }
    }
};

module.exports = {
    typeDefs,
    resolvers,
};


//Doubt. -> Can't we do in Rest API 1st and 2nd Point

/**
 * GraphQL Notes & Doubts
 *
 * 1. What is GraphQL doing differently than REST?
 *    - Single endpoint instead of multiple REST endpoints.
 *    - Client defines exactly what fields they want in a query.
 *    - Nested queries let you fetch related data in one request.
 *    - Schema strongly types the API.
 *    - No over-fetching or under-fetching like in REST.
 *
 * 2. How does resolver nesting work? Example:
 *    - Query getTodos returns todos array.
 *    - Each Todo's 'user' field is resolved by fetching user data separately.
 *    - This lets clients request nested data like todo -> user -> email.
 *
 * 3. Why does 'Todo.user' resolver fetch user by todo.id or todo.userId?
 *    - todo.id is the todo's own ID, not user ID.
 *    - Correct: fetch user using todo.userId to get the right user.
 *
 * 4. How to avoid N+1 problem when resolving nested fields?
 *    - Use batching tools like DataLoader to combine multiple user requests.
 *    - This reduces many HTTP calls into fewer calls.
 *
 * 5. How to add error handling in resolvers?
 *    - Use try/catch around async calls (axios.get).
 *    - Return null or a default value on failure to prevent crashes.
 *
 * 6. How to pass arguments for filtering in queries?
 *    - Define arguments in schema: getTodos(userId: ID, completed: Boolean): [Todo]
 *    - Filter results in resolver based on args.
 *
 * 7. What are mutations and how to implement them?
 *    - Mutations change data (create/update/delete).
 *    - Define Mutation type and resolvers.
 *    - Use input arguments or input types.
 *
 * 8. How to optimize performance for large datasets?
 *    - Limit the number of results (pagination).
 *    - Use caching and batching.
 *
 * 9. How to structure schema for bigger projects?
 *    - Split typeDefs and resolvers into modules/files.
 *    - Use tools like Apollo Federation for microservices.
 *
 * 10. How to secure GraphQL API?
 *     - Add authentication middleware.
 *     - Use authorization logic in resolvers.
 *     - Validate inputs.
 */




/**
- 🔹 Question: What to use GraphQL or Rest ?

1. **Use GraphQL if:**
 *    - You want flexibility to request exactly what you need.
 *    - Your product involves complex data relationships or nested data fetching.
 *    - You want to reduce the number of network requests from client apps.
 *    - You expect the API to evolve quickly and want a strongly typed schema to manage changes.
 *    - You have the expertise to build and maintain GraphQL servers.
 
2. **Use REST if:**
 *    - Your data needs and API requirements are simple and straightforward.
 *    - You want to leverage HTTP caching and tools easily.
 *    - Your want more familiar with REST and you want faster time-to-market.
 *    - You want to avoid the initial complexity of GraphQL.
 *
 3. **Hybrid approach:**
 *    - Start with REST for MVP speed.
 *    - Introduce GraphQL gradually, maybe as a gateway aggregating multiple REST or microservices APIs.
 *
4. **Considerations:**
 *    - Developer experience & available expertise.
 *    - Future scale and complexity of the app.
 *    - Tooling and ecosystem you plan to use.
 *
Summary:
 * if you expect complex client requirements and want to future-proof your API, GraphQL is an excellent choice.

 * But if you want simplicity and quick delivery, REST is still a valid and proven approach.
 */
