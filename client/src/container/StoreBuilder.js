import { Container, Grid, MenuItem } from '@material-ui/core';
import React, { Component } from 'react';
import Store from '../component/store/store'
import StoreDetails from "../component/storeDetail/storeDetails";
import { getSpotsQuery } from '../queries/queries';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { graphql } from 'react-apollo';

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

    displaySpots = () => {
        const useStyles = makeStyles(theme => ({
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
            },
            gridList: {
                width: 500,
                height: 450,
            },
            icon: {
                color: 'rgba(255, 255, 255, 0.54)',
            },
        }));

        const classes = useStyles();
        var data = this.props.data
        console.log(data);
        if (data.loading) {
            return (<div>Loading books...</div>);
        } else {
            if (data.spots !== undefined) {
                return (
                    <div className={classes.root}>
                        <GridList cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <ListSubheader component="div">Spots</ListSubheader>
                            </GridListTile>
                            {data.spots.map(spot => (
                                <GridListTile key={spot.id}>
                                    <img src={spot.img} alt={spot.title} />
                                    <GridListTileBar
                                        title={spot.name}
                                        subtitle={<span>by: {spot.author}</span>}
                                        actionIcon={
                                            <IconButton aria-label={`info about ${spot.title}`} className={classes.icon}>

                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                );
            }
        }
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
                        <StoreDetails showSpots={this.displaySpots}></StoreDetails>
                    </Grid>
                </Container>
            </div>
        );
    }
}
export default graphql(getSpotsQuery)(StoreBuilder)