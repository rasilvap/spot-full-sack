const {ApolloServer, gql} = require('apollo-server-lambda');
const { buildFederatedSchema } = require('@apollo/federation');

const modules = [
  require('./schemas/spots')
]


// Create an expres server and a GraphQL endpoint
//var app = express();
//app.use('/graphql', express_graphql({
 //   schema: schema,
   // graphiql: true
//}));

const server = new ApolloServer({ schema: buildFederatedSchema(modules)});
exports.graphqlHandler = server.createHandler();


//app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));