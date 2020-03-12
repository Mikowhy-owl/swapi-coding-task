import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PlayBackground from "../images/background2.jpg";
import AvatarImage from "../images/avatar.png";

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
    textShadow: "2px 1px #000"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Play() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
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
            >
              PLAY
            </Button>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
export default Play;
