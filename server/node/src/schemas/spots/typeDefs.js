const { gql } = require('apollo-server-lambda');
 const typDef = gql`
   type Query {
    spots: [Spot!]
    spot(code: String): Spot
  }

  type Spot {
    id: ID!
    code: String
    name: String
    distance: String
  }
`;
module.exports = typDef;