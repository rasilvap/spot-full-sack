import { Container, Grid, MenuItem } from '@material-ui/core';
import React, { Component } from 'react';
import Store from '../component/store/store'
import StoreDetails from "../component/storeDetail/storeDetails";

function createData(name, adress, distance, avaiableLunchDay, menu) {
    return { name, adress, distance, avaiableLunchDay, menu };
}

class StoreBuilder extends Component {


    state = {
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
        ],
        sotoresDetails: [
            createData('Frozen yoghurt', 159, 6.0, 24, 'Watch menu'),
            createData('Johan cocaine', 237, 9.0, 37, 'Watch menu'),
            createData('Eclair', 262, 16.0, 24, 'Watch menu'),
            createData('Cupcake', 305, 3.7, 67, 'Watch menu'),
            createData('Gingerbread', 356, 16.0, 49, 'Watch menu'),
        ]
    }
    //  this.renderDivisionOptions = this.renderDivisionOptions.bind(this);



    handleChangeDivision = event => {
        this.setState({ DivisionState: event.target.value });
        console.log("Eventing..")
    }

    renderDivisionOptions = () => {
        return this.state.DivisionData.map((dt, i) => {
            return (
                <MenuItem
                    key={i}
                    value={dt.divDeptShrtDesc}>
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
                        /></Grid>
                    <Grid>
                        <StoreDetails value={this.state.DivisionState}></StoreDetails>
                    </Grid>
                </Container>
            </div>
        );
    }
}
export default StoreBuilder;