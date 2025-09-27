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
    }

    type Query {
        getAllUsers: [User]
        getUser(id: ID!): User
        getTodos: [Todo]
    }
`;

const resolvers = {
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
