import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getSpotsQuery = gql`
{
    spots{
      code
      name
      distance
      id  
    }
  }
`
const dataPull = (props) => (
  <Query query={getSpotsQuery} pollInterval={50}>
  {(loading, error, data, startPolling, stopPolling) => {
  if (loading) return null;
  if (error) return `Error!: ${error}`;
    return (
     <React.Fragment>
      {data.products.map(p => <div>{p.name}</div>)}
      <button onClick={()=> startPolling()}>Start polling</button>
      <button onClick={() => stopPolling()}>Stop polling</button>
    </React.Fragment>
    )
}}
</Query>
);
export { getSpotsQuery };