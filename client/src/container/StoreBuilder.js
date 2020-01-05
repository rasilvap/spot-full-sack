import { Container, Grid, MenuItem } from '@material-ui/core';
import React, { Component } from 'react';
import Store from '../component/store/store'

class StoreBuilder extends Component {

   constructor(props) {
    super(props);
       this.state = {
        DivisionState: 'Store 1',
        DivisionData: [
            {
                id: 1,
                divDeptShrtDesc: 'Store 1'
            },
            {
                id: 2,
                divDeptShrtDesc: 'Store 2'
            },
            {
                id: 3,
                divDeptShrtDesc: 'Store 3'
            }
        ]
    }
    this.renderDivisionOptions = this.renderDivisionOptions.bind(this);
    }

    handleChangeDivision = event =>{
        this.setState({ DivisionState: event.target.value });
        console.log("Eventing..")
    }
    

    renderDivisionOptions() {
        return this.state.DivisionData.map((dt, i) => {
          return (
            <MenuItem key={i} value={dt.divDeptShrtDesc}>
              {dt.divDeptShrtDesc}
            </MenuItem>
          );
        });
    }    

    render() {
        return (
          <div>
            <Container>
              <Grid>
                <Store
                  value={this.state.DivisionState}
                  onChange={this.handleChangeDivision}
                  render={this.renderDivisionOptions}
                />
              </Grid>
            </Container>
          </div>
        );
      }
}
export default StoreBuilder;