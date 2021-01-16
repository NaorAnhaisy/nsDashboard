import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../SimpleCard/SimpleCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    SimpleCard: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const info = [
    { title: "Version", value: "R80.40" },
    { title: "Version", value: "R80.40" },
    { title: "Version", value: "R80.40" },
    { title: "Version", value: "R80.40" }
]

export default function TopInfoCards() {
    const classes = useStyles();
    const createInfoCards = (infos) => {
        let returnedHtml = [];
        infos.forEach(info => {
            returnedHtml.push(
                <Grid item xs={3}>
                    <SimpleCard className={classes.SimpleCard} title={info.title} value={info.value} />
                </Grid>
            )
        });

        return returnedHtml;
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {createInfoCards(info)}
            </Grid>
        </div>
    );
}
