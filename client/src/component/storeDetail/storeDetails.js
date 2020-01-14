import React from 'react';
import { getSpotsQuery } from '../../queries/queries';
import { graphql } from 'react-apollo';


const TitlebarGridList = props => {
  return (
    <div>
     {props.showSpots()} 
    </div>
  );
}
export default graphql(getSpotsQuery)(TitlebarGridList)