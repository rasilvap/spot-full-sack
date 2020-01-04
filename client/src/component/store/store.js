import { Container, Grid, Select, MenuItem } from '@material-ui/core';
import React, { Component } from 'react';

class Store extends Component {
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
        ]
    };
    handleChangeDivision(event) {
        this.setState({ DivisionState: event.target.value });
    }

    renderDivisionOptions() {
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
                <Container >
                    <Grid >
                        <Select value={this.state.DivisionState}
                            onChange={this.handleChangeDivision}
                        >
                            {this.renderDivisionOptions()}
                        </Select>
                    </Grid>
                </Container>
            </div>
        );
    }
}
export default Store;