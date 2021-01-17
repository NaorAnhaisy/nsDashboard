import React, { useEffect, useState } from 'react';
import './FwCards.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import SimpleDialog from '../SimpleDialog/SimpleDialog';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  value: {
    fontWeight: 'bold'
  },
  centerGrid: {
    justifyContent: 'center'
  },
  media: {
    height: 140,
  },
  gridItem: {
    cursor: "pointer"
  }
});

export default function FwCards() {
  const classes = useStyles();
  const [firewalls, setFirewalls] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = (firewallIP) => {
    setOpen(true);
    setSelectedValue(firewallIP);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue("");
  };

  useEffect(() => {
    const fetchedFirewalls = [
      { Name: "Name A", IP: "YYY.XXX.XXX.XXX", Cluster: [{ IP: "XXX.XXX.XXX.XXX", State: "ACTIVE" }, { IP: "XXX.XXX.XXX.XXX", State: "STANDBY" }] },
      { Name: "Name A", IP: "XXX.XXX.XXX.XXX", Cluster: [{ IP: "XXX.XXX.XXX.XXX", State: "ACTIVE ATTENTION" }, { IP: "XXX.XXX.XXX.XXX", State: "DOWN" }] },
      { Name: "Name A", IP: "ZZZ.XXX.XXX.XXX", Cluster: [{ IP: "XXX.XXX.XXX.XXX", State: "ACTIVE" }, { IP: "XXX.XXX.XXX.XXX", State: "STANDBY" }] },
      { Name: "Name A", IP: "XXX.XXX.XXX.XXX", Cluster: [{ IP: "XXX.XXX.XXX.XXX", State: "ACTIVE ATTENTION" }, { IP: "XXX.XXX.XXX.XXX", State: "DOWN" }] },
      { Name: "Name A", IP: "XXX.XXX.XXX.XXX", Cluster: [{ IP: "XXX.XXX.XXX.XXX", State: "ACTIVE ATTENTION" }] },
      { Name: "Name A", IP: "XXX.XXX.XXX.XXX", Cluster: [{ IP: "XXX.XXX.XXX.XXX", State: "ACTIVE ATTENTION" }] },
      { Name: "Name A", IP: "XXX.XXX.XXX.XXX", Cluster: [{ IP: "XXX.XXX.XXX.XXX", State: "ACTIVE ATTENTION" }] }
    ];

    setFirewalls(fetchedFirewalls);
  }, [])

  const createFwCards = (firewalls) => {
    let returnedHtml = [];
    firewalls.forEach((firewall, i) => {
      returnedHtml.push(
        <Grid key={i} item xs={4} className={classes.gridItem} onClick={() => handleClickOpen(firewall.IP)}>
          <Card classes={{ root: "custom-box-shadow" }}>
            <CardMedia
              className={classes.media}
              image="/images/aaa.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {firewall.IP}
              </Typography>
              <Typography className={classes.value} variant="h5" component="h2">
                {firewall.Name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    });

    return returnedHtml;
  }

  return (
    <div>
      <Grid container spacing={3} className={classes.centerGrid} >
        {createFwCards(firewalls)}
      </Grid>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>

  );
}
