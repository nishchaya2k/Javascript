const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express4");
const cors = require("cors");
const axios = require("axios");

async function startServer() {
    const app = express();

    const server = new ApolloServer({
        typeDefs: `
            type User{
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
            }

            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
            }
        `,
        resolvers: {
            Query: {
                getTodos: async () => (await axios.get(
                    "https://jsonplaceholder.typicode.com/todos"
                )).data,
                getAllUsers: async () => (await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                )).data
            },

            // getTodos: () => [
            //     { id: 1, title: "Something Something", completed: false }
            // ]
        },
    },
    );

    await server.start();

    app.use(
        "/graphql",
        cors(), // Enable CORS for cross-origin requests
        express.json(), // Parse incoming JSON requests (req.body)
        expressMiddleware(server, {
            context: async ({ req, res }) => ({}), // Optional shared context for resolvers
        })
    );

    app.listen(8000, () =>
        console.log("🚀 Server started at http://localhost:8000/graphql")
    );
}

startServer();

/**
 * express                   -> Minimal web framework for Node.js
 * ApolloServer              -> Core GraphQL server engine from @apollo/server
 * expressMiddleware         -> Connects Apollo Server to Express
 * express.json()            -> Built-in middleware to parse JSON request bodies
 * cors()                    -> Enables cross-origin resource sharing (frontend ↔ backend)
 * app.use("/graphql")       -> All GraphQL queries/mutations go to this single endpoint
 * server.start()            -> Initializes the Apollo Server
 * app.listen(8000)          -> Starts the Express server on port 8000
 * 'typeDefs'                -> GraphQL schema definition (types, queries, etc.)
 * 'resolvers'               -> Functions that return data for each field in the schema
 * 'Query' in resolvers      -> Handles data fetching (e.g., getTodos)
 * 'Mutation' in resolvers   -> (Not used yet) Handles create/update/delete operations
 * 'context' function        -> Optional shared context (e.g., auth, DB) available in resolvers
 * Using JSONPlaceholder API as a fake data source since no database is set up yet

 */

/**
 
 You’ve built a basic GraphQL server using Express and Apollo Server that listens on http://localhost:8000/graphql. It defines a simple schema with a Todo type and a getTodos query that returns a hardcoded list of todo items.

The server uses middleware — specifically cors() to enable cross-origin requests from clients, and express.json() to parse incoming JSON request bodies before passing them to Apollo’s GraphQL middleware (expressMiddleware). This setup ensures your server correctly receives and handles GraphQL requests.

To start the server, you run the Node.js script (node index.js), which boots Express and Apollo, making your API ready to accept queries.

Even without a frontend app, you can test and interact with your GraphQL API by sending requests to /graphql using tools like Apollo Sandbox (a web-based GraphQL playground), Postman, or curl. These let you write and run queries such as getTodos and view the results directly.

This setup is a clean foundation for building a full-stack app where your frontend can fetch and mutate data through this GraphQL endpoint.

 */
