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
