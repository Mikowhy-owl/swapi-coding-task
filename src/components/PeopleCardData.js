import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textContainer: {
    padding: theme.spacing(1, 0)
  }
}));

const PeopleCardData = props => {
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
          Height: {props.cardData.height}
        </Typography>
      </Grid>
      <Grid item className={classes.textContainer}>
        <Typography variant='h6' component='h2'>
          Mass: {props.cardData.mass}
        </Typography>
      </Grid>
      <Grid item className={classes.textContainer}>
        <Typography variant='h6' component='h2'>
          Birth year: {props.cardData.birth_year}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default PeopleCardData;
