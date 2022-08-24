const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    age: Int
    description: String
    image: String
    }
type Status {
    _id: ID
    statusUpdate: String
    createdAt: String
    name: String
}

type Auth {
        token: ID!
        user: User
}
  
    type Query {
        me: User
        users: [User]
        user(name: String!): User
    }


    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(name: String!, email: String!, password: String!, description: String!, age: Int!, image: String!): Auth
        addStatus(statusUpdate: String!): Status
        addFriend(friendId: ID!): User
    }



`;

module.exports = typeDefs;