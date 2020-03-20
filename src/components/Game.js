import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Button,
  Grid,
  Typography,
  CircularProgress,
  InputLabel,
  MenuItem,
  Paper,
  FormControl,
  Select
} from "@material-ui/core";
import CustomDialog from "./CustomDialog";
import PeopleCardData from "./PeopleCardData";
import StarshipsCardData from "./StarshipsCardData";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  cardContainer: {
    minWidth: 350
  },
  emptyCardContainer: {
    minWidth: 350,
    minHeight: 232
  },
  winsTextContainer: {
    padding: theme.spacing(1, 0)
  },
  paperContainer: {
    padding: theme.spacing(2)
  },
  resourceButton: {
    minWidth: 350,
    minHeight: 60,
    textTransform: "none"
  },
  playButton: {
    minWidth: 250,
    minHeight: 60,
    textTransform: "none"
  },
  dialogText: {
    color: "#f50057"
  }
}));

const Game = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogContent, setDialogContent] = React.useState("");
  const [firstCardData, setFirstCardData] = React.useState();
  const [secondCardData, setSecondCardData] = React.useState();
  const [cardsAttribute, setCardsAttribute] = React.useState();
  const [actualResource, setActualResource] = React.useState();
  const [firstPlayerPoints, setFirstPlayerPoints] = React.useState(0);
  const [secondPlayerPoints, setSecondPlayerPoints] = React.useState(0);

  const fetchCards = async resource => {
    setLoading(true);

    const url =
      resource === "people"
        ? "https://swapi.co/api/people/"
        : "https://swapi.co/api/starships/";

    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 50) + 1;
    };

    const fetchFirstCard = fetch(url + generateRandomNumber());
    const fetchSecondCard = fetch(url + generateRandomNumber());

    await Promise.all([fetchFirstCard, fetchSecondCard])
      .then(values => {
        return Promise.all(values.map(res => res.json()));
      })
      .then(res => {
        if (res[0].detail || res[1].detail) {
          setDialogContent(
            "There was a problem fetching card or cards. Please try again."
          );
          setOpenDialog(true);
        } else {
          setFirstCardData(res[0]);
          setSecondCardData(res[1]);
          setWinner(res);
        }
      })
      .catch(err => {
        console.log(err);
      });

    setLoading(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAttributeChange = event => {
    setCardsAttribute(event.target.value);
  };

  const setWinner = data => {
    let firstCardData = data[0][cardsAttribute];
    let secondCardData = data[1][cardsAttribute];

    if (firstCardData === "unknown" || secondCardData === "unknown") {
      setDialogContent(
        "One of the card attribute is unknown. Please try again."
      );
      setOpenDialog(true);
    } else {
      if (cardsAttribute === "birth_year") {
        firstCardData = firstCardData.substring(0, firstCardData.length - 3);
        secondCardData = secondCardData.substring(0, secondCardData.length - 3);
      }
      if (parseInt(firstCardData) > parseInt(secondCardData)) {
        setFirstPlayerPoints(firstPlayerPoints + 1);
        setDialogContent("First player scored!");
        setOpenDialog(true);
      } else {
        setSecondPlayerPoints(secondPlayerPoints + 1);
        setDialogContent("Second player scored!");
        setOpenDialog(true);
      }
    }
  };

  return (
    <>
      <Grid className={classes.mainContainer}>
        <Grid
          container
          direction='row'
          spacing={3}
          alignItems='center'
          justify='center'
        >
          <Grid item>
            <Grid
              item
              container
              justify='center'
              className={classes.winsTextContainer}
            >
              <Typography variant='h4'>Player 1</Typography>
            </Grid>
            <Grid item container className={classes.winsTextContainer}>
              <Typography variant='h5'>Wins: {firstPlayerPoints}</Typography>
            </Grid>
            {!loading && firstCardData ? (
              <Card className={classes.cardContainer}>
                <CardContent>
                  {actualResource === "people" ? (
                    <PeopleCardData cardData={firstCardData} />
                  ) : (
                    <StarshipsCardData cardData={firstCardData} />
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className={classes.emptyCardContainer} />
            )}
          </Grid>
          <Grid item>
            <Grid
              item
              container
              justify='center'
              className={classes.winsTextContainer}
            >
              <Typography variant='h4'>Player 2</Typography>
            </Grid>
            <Grid item container className={classes.winsTextContainer}>
              <Typography variant='h5'>Wins: {secondPlayerPoints}</Typography>
            </Grid>
            {!loading && secondCardData ? (
              <Card className={classes.cardContainer}>
                <CardContent>
                  {actualResource === "people" ? (
                    <PeopleCardData cardData={secondCardData} />
                  ) : (
                    <StarshipsCardData cardData={secondCardData} />
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className={classes.emptyCardContainer} />
            )}
          </Grid>
        </Grid>
        <Grid container spacing={3} direction='row' justify='center'>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              size='large'
              className={classes.resourceButton}
              // onClick={() => fetchCards("people")}
              onClick={() => setActualResource("people")}
              disabled={actualResource === "people"}
            >
              People
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              size='large'
              className={classes.resourceButton}
              // onClick={() => fetchCards("starships")}
              onClick={() => setActualResource("starships")}
              disabled={actualResource === "starships"}
            >
              Starships
            </Button>
          </Grid>
        </Grid>
        {actualResource && (
          <Grid container spacing={3} direction='row' justify='center'>
            <Grid item md={6}>
              <Paper className={classes.paperContainer}>
                {actualResource === "people" ? (
                  <FormControl
                    fullWidth
                    disabled={!actualResource || actualResource === "starships"}
                  >
                    <InputLabel>Attribute</InputLabel>
                    <Select
                      value={cardsAttribute ? cardsAttribute : ""}
                      onChange={handleAttributeChange}
                    >
                      <MenuItem value={"height"}>Height</MenuItem>
                      <MenuItem value={"mass"}>Mass</MenuItem>
                      <MenuItem value={"birth_year"}>Birth year</MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <FormControl
                    fullWidth
                    disabled={!actualResource || actualResource === "people"}
                  >
                    <InputLabel>Attribute</InputLabel>
                    <Select
                      onChange={handleAttributeChange}
                      value={cardsAttribute ? cardsAttribute : ""}
                    >
                      <MenuItem value={"cargo_capacity"}>
                        Cargo capacity
                      </MenuItem>
                      <MenuItem value={"cost"}>Cost</MenuItem>
                      <MenuItem value={"crew"}>Crew</MenuItem>
                    </Select>
                  </FormControl>
                )}
              </Paper>
            </Grid>
          </Grid>
        )}
        {actualResource && cardsAttribute && (
          <Grid container justify='center' spacing={3}>
            <Grid item>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                className={classes.playButton}
                onClick={() => fetchCards(actualResource)}
                disabled={!actualResource && !cardsAttribute}
              >
                {loading ? (
                  <CircularProgress color='#fff' />
                ) : (
                  <Typography variant='h5'>Play</Typography>
                )}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      <CustomDialog
        openDialog={openDialog}
        dialogContent={dialogContent}
        handleCloseDialog={handleCloseDialog}
        classes={classes}
      />
    </>
  );
};
export default Game;
