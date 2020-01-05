import { Container, Grid, Select } from '@material-ui/core';
import React from 'react';


const Store = props => {
    return (
      <div>
        <Container>
          <Grid>
            <Select value={props.value} onChange={props.onChange}>
              {props.render()}
            </Select>
          </Grid>
        </Container>
      </div>
    );
  };
export default Store;