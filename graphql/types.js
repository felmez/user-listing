const { gql } = require('apollo-server');

module.exports = gql`
    type User{
        id: ID!
        name: String!
        email: String!
        role: String!
        createdAt: String!
    }
    input CreateInput{
        name: String!
        email: String!
        role: String!
        password: String!
        confirmPassword: String!
    }
    type Query {
        getUsers: [User]
    }
    type Mutation {
        # createUser(name: String!, email: String!, role: String!, password: String!, confirmPassword: String!): User! 
        createUser(createInput: CreateInput): User!
        deleteUser(userID: ID!): String!
    }
`