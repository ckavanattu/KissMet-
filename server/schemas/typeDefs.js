const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    age: Int
    description: String
    
    }
  
    type Query {
        users: [User]
        user(username: String!): User
    }

`;

module.exports = typeDefs;