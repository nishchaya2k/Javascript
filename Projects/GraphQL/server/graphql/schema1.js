// server/graphql/schema1.js
const axios = require("axios");

const typeDefs = `
    type Todo {
        id: ID!
        title: String!
        completed: Boolean
    }

    type Query {
        getTodos: [Todo]
    }
`;

const resolvers = {
    Query: {
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



/*
- 🔹 What is a GraphQL Schema?

1. A schema is the contract between the client and the server. It defines:
2. What types of data can be queried or mutated
3. What queries and mutations the client can make
4. The shape of the data (fields, their types, and relationships)
5. Its basically a blueprint or a map for the GraphQL API. It tells both the client and server


- 🔹 Schema is made of two main parts:

1. Types — Define the shape of your data
2. Operations — Define what actions (queries or mutations) can be performed

- 🔹 What are Resolvers in GraphQL?

1. The resolvers define how to get that data when someone asks for it

- 🔹 Why do you need resolvers?

1. When a client sends a query like:
    query {
        getUser(id: "1") {
            name
            email
        }
    }

2. The GraphQL server looks at the schema, sees the getUser query, then calls the resolver function for getUser to get the actual user data from wherever it lives (database, API, in-memory, etc).


- 🔹 Difference in typeDefs and Schema 

1. typeDefs: 

- Schema definitions written in GraphQL SDL (strings describing types and operations)
- eg. The blueprint or plan of a building

2. Schema

- The whole GraphQL API structure combining typeDefs + resolvers, defining what’s available and how to get it
- eg. The building itself — the plan + actual construction

*/