
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/types');
const resolvers = require('./graphql/resolvers/')
const { MONGODB } = require('./config.js') || process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
}).then(() => {
    console.log("MongoDB Connected")
    return server.listen({ port: PORT });
}).then((res) => {
    console.log(`Server running at ${res.url}`);
}).catch(err => console.log(err.message));
