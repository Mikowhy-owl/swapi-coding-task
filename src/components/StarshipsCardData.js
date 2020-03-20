import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textContainer: {
    padding: theme.spacing(1, 0)
  }
}));

const StarshipsCardData = props => {
  const classes = useStyles();

  return (
    <Grid container justify='center' alignItems='center' direction='column'>
      <Grid item className={classes.textContainer}>
        <Typography variant='h5' color='primary'>
          {props.cardData.name}
        </Typography>
      </Grid>
      <Grid item className={classes.textContainer}>
        <Typography variant='h6' component='h2'>
          Cargo capacity: {props.cardData.cargo_capacity}
        </Typography>
      </Grid>
      <Grid item className={classes.textContainer}>
        <Typography variant='h6' component='h2'>
          Cost: {props.cardData.cost_in_credits}
        </Typography>
      </Grid>
      <Grid item className={classes.textContainer}>
        <Typography variant='h6' component='h2'>
          Crew: {props.cardData.crew}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default StarshipsCardData;
