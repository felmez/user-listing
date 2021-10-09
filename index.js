
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
// const { makeExecutableSchema } = require('@graphql-tools/schema')
// const { createRateLimitRule } = require('graphql-rate-limit');
// const { shield } = require('graphql-shield')
// const { applyMiddleware } = require('graphql-middleware');

const typeDefs = require('./graphql/types');
const resolvers = require('./graphql/resolvers/')
const { MONGODB } = require('./config.js') || process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;


// const rateLimitRule = createRateLimitRule({ identifyContext: (ctx) => ctx.id });

// const permissions = shield({
//     Mutation: {
//         createUser: rateLimitRule({ window: "5s", max: 1, message: "10 saniye içerisinde en fazla 2 kayıt yapabilirsiniz, 90 saniye bekleyiniz" })
//     },
// });

// const schema = applyMiddleware(
//     makeExecutableSchema({
//         typeDefs,
//         resolvers,
//         context: ({ req }) => ({ req })
//     }),
//     permissions
// )

// const server = new ApolloServer({
//     schema
// })

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
