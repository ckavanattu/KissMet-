const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    age: Int
    description: String
    username: String
    
    }
  
    type Query {
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
    }

`;

module.exports = typeDefs;