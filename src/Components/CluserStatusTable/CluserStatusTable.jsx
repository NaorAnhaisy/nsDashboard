import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  leftTd: {
    display: 'grid',
  },
  ipSpan: {

  },
  hostnameSpan: {

  },
  tableCell: {
    fontSize: '25px'
  }
});

function createData(NodeIP, NodeName, NodeStatus) {
  return { NodeIP, NodeName, NodeStatus };
}

const rows = [
  createData('190.36.3.251', 'FW-NR_Int-Node-1', 'ACTIVE'),
  createData('190.36.3.252', 'FW-NR_Int-Node-2', 'STANDBY'),
  createData('190.36.3.253', 'FW-NR_Int-Node-3', 'DOWN')
];

export default function CluserStatusTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} colspan={2}>Overview</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover={true} key={row.NodeIP}>
              <TableCell component="th" scope="row">
                <div className={classes.leftTd}>
                  <span className={classes.hostnameSpan}>{row.NodeName}</span>
                  <span className={classes.ipSpan}>{row.NodeIP}</span>
                </div>
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.NodeStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
