import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import  { getSpotsQuery } from '../../queries/queries';
import { graphql } from 'react-apollo';

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

const tileData = [
  {
    img: 'https://pbs.twimg.com/profile_images/943515859728896000/wrdqzQq5_400x400.jpg',
    title: 'Image',
    author: 'author1',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/943515859728896000/wrdqzQq5_400x400.jpg',
    title: 'Que mira',
    author: 'author',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/943515859728896000/wrdqzQq5_400x400.jpg',
    title: 'jijue',
    author: 'author',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/943515859728896000/wrdqzQq5_400x400.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/943515859728896000/wrdqzQq5_400x400.jpg',
    title: 'Image',
    author: 'caco',
  },
  {
    img: 'https://pbs.twimg.com/profile_images/943515859728896000/wrdqzQq5_400x400.jpg',
    title: 'Image',
    author: 'cat',
  }
];

const  TitlebarGridList= props => {
  const classes = useStyles();
 console.log("las props:" + props)
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Spots</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                 
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default graphql(getSpotsQuery)(TitlebarGridList)