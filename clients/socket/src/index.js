// import Pusher from 'pusher'

// let pusher = new Pusher({
//   appId: '966022',
//   key: '21013063be02226d4848',
//   secret: 'c9799343ebe812e78301',
//   cluster: 'us2',
//   encrypted: true
// });

// pusher.trigger('my-channel', 'my-event', {
//   "message": "hello world"
// });

import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

// Construct a schema, using GraphQL schema language
let typeDefs = gql`
  type Query {
    msg: String
  }

`;

let rooms = []

// Provide resolver functions for your schema fields
let resolvers = {
  Query: {
    msg: () => 'hey',
  }
};

let server = new ApolloServer({ typeDefs, resolvers });

let app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);