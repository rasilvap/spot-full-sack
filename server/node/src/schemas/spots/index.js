//import  {makeExecutableSchema} from "graphql-tools";
const {ApolloServer, gql} = require('apollo-server-lambda');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');


module.exports = {
    resolvers,
    typeDefs,
  };