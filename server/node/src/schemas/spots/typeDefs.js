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
    avaiableLunchDay: String
    menus:[Menu!]!
  }
  type Menu {
    id: ID
    Description: String
    price: String
  }
`;
module.exports = typDef;