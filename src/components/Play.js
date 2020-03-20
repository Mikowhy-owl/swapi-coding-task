import React from "react";
import { Avatar, Button, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayBackground from "../images/background2.jpg";
import AvatarImage from "../images/avatar.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundImage: `url(${PlayBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: "100%",
    position: "relative"
  },
  mainContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(4),
    backgroundColor: theme.palette.common.white,
    width: theme.spacing(8),
    height: theme.spacing(8)
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 600,
    textShadow: "1px 1px #000"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Play = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.main}>
      <Container
        component='main'
        maxWidth='xs'
        className={classes.mainContainer}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={AvatarImage}></Avatar>
          <Typography variant='h5' className={classes.title}>
            SWAPI Game
          </Typography>
          <Grid container justify='center'>
            <Button
              variant='contained'
              color='primary'
              size='large'
              className={classes.submit}
              onClick={() => history.replace("/game")}
            >
              START
            </Button>
          </Grid>
        </div>
      </Container>
    </Grid>
  );
};
export default Play;
