import React from 'react';
import './SimpleCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    borderRadius: "20px"
  },
  title: {
    fontSize: 14,
  },
  value: {
    fontWeight: 'bold'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card classes={{root: "custom-box-shadow"}} className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography className={classes.value} variant="h5" component="h2">
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
