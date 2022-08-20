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
type Status {
    _id: ID
    statusUpdate: String
    createdAt: String
    username: String
}

type Auth {
        token: ID!
        user: User
}
  
    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }


    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, description: String!, name: String! age: Int!): Auth
        addStatus(statusUpdate: String!): Status
        addFriend(friendId: ID!): User
    }



`;

module.exports = typeDefs;