const { ApolloServer, gql } = require("apollo-server");
const SessionsAPI = require("./datasources/sessions");

const typeDefs = require("./schema");

const resolvers = require("./resolvers");

const dataSources = () => ({
  sessionAPI: new SessionsAPI(),
});
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then((url) => {
  console.log(`Graphql is running at ${url.url}`);
});
