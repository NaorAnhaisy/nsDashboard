import React from 'react';
import './FwCards.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  value: {
    fontWeight: 'bold'
  }
});

export default function FwCards() {
  const classes = useStyles();

  return (
    <Card classes={{root: "custom-box-shadow"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Title
        </Typography>
        <Typography className={classes.value} variant="h5" component="h2">
          Value
        </Typography>
      </CardContent>
    </Card>
  );
}
