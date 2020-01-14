import gql from "graphql-tag";

const getSpotsQuery = gql`
{
    spots{
      code
      name
      distance
      id  
      img
      avaiableLunchDay
    }
  }
`

export { getSpotsQuery };