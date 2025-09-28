const { v4: uuidv4 } = require("uuid"); // For unique IDs

// Sample in-memory data
const users = [
    { id: "1", name: "Alice", username: "alice1", email: "alice@example.com", phone: "1234", website: "alice.dev" },
    { id: "2", name: "Bob", username: "bob2", email: "bob@example.com", phone: "5678", website: "bob.dev" },
];

let todos = [
    { id: "1", title: "Learn GraphQL", completed: false, userId: "1" },
    { id: "2", title: "Build an app", completed: true, userId: "2" },
];

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
    userId: ID!
    user: User
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID!): User
    getTodos: [Todo]
    getTodo(id: ID!): Todo
  }

  type Mutation {
    createTodo(title: String!, userId: ID!): Todo
    updateTodo(id: ID!, title: String, completed: Boolean): Todo
    deleteTodo(id: ID!): Boolean
  }
`;

const resolvers = {
    Todo: {
        user: (todo) => users.find(user => user.id === todo.userId),
    },
    Query: {
        getAllUsers: () => users,
        getUser: (_, { id }) => users.find(user => user.id === id),
        getTodos: () => todos,
        getTodo: (_, { id }) => todos.find(todo => todo.id === id),
    },
    Mutation: {
        createTodo: (_, { title, userId }) => {
            if (!users.find(u => u.id === userId)) {
                throw new Error("User not found");
            }
            const newTodo = {
                id: uuidv4(),
                title,
                completed: false,
                userId,
            };
            todos.push(newTodo);
            return newTodo;
        },
        updateTodo: (_, { id, title, completed }) => {
            const todo = todos.find(t => t.id === id);
            if (!todo) throw new Error("Todo not found");

            if (title !== undefined) todo.title = title;
            if (completed !== undefined) todo.completed = completed;

            return todo;
        },
        deleteTodo: (_, { id }) => {
            const index = todos.findIndex(t => t.id === id);
            if (index === -1) return false;
            todos.splice(index, 1);
            return true;
        }
    }
};

module.exports = {
    typeDefs,
    resolvers,
};



/*

- 🔹 What is a Mutation?

1. queries are used to read/fetch data, mutations are used to create, update, or delete data.
2. They allow clients to tell the server: "Hey, please modify the data this way."
3. Mutations also let you specify what data you want back after the change, similar to queries.


- 🔹 Why use _ for the first param?

1. The result of the previous resolver in the resolver chain.
2. Common JavaScript/Node.js convention for unused parameters.

- 🔹 All data operations—queries, mutations, and subscriptions—are sent through a single endpoint. How?

1. GraphQL exposes **one single HTTP endpoint** (e.g., `/graphql`) for all operations.
2. The frontend sends the entire query or mutation as a string in the **request 
body**.
3. This body specifies:
   - The **operation type** (`query` or `mutation`),
   - The **operation name** (optional),
   - The **fields to fetch or modify**.
4. This lets clients precisely control what data they want or want to change, avoiding multiple REST endpoints.

- 🔹 Example: Sending a mutation to create a new Todo from frontend

POST /graphql

{
  "query": "mutation CreateNewTodo($title: String!, $userId: ID!) { createTodo(title: $title, userId: $userId) { id title completed user { name email } } }",
  "variables": {
    "title": "Write tests",
    "userId": "1"
  }
} 


5. Yes, all GraphQL operations—queries, mutations, and subscriptions—are typically sent as HTTP POST requests to the single GraphQL endpoint.
*/