import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import rows from "./rowsData";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const SimpleTable = props =>  {
  const classes = useStyles();
  console.log("propp =" + props.value)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Adress</TableCell>
            <TableCell align="right">Distance&nbsp;(g)</TableCell>
            <TableCell align="right">avaiableLunchDay&nbsp;(g)</TableCell>
            <TableCell align="right">Menus&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.adress}</TableCell>
              <TableCell align="right">{row.adress}</TableCell>
              <TableCell align="right">{row.avaiableLunchDay}</TableCell>
              <TableCell align="right">{row.menu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default SimpleTable;