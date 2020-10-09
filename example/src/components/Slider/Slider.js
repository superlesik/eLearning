import React, {Fragment} from 'react';
import '../../App.css';
import { Container, Typography, Button, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  overlay: {
    position: "absolute",
    // zIndex: "3",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

function Slider() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  return (
    <Fragment> 
      <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage: `url(https://www.dvfu.ru/education/online-training/f-a-q/online_1.png)`, zIndex: '1' }}> 
        <div className={classes.overlay}/>
        <Container fixed>
          {/* <div className={classes.overlay}/> */}
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom>
                    eLearning
                </Typography>
                <Typography
                  component="h1"
                  variant="h5"
                  color="inherit"
                  paragraph>
                    loremlor emlore mloreml oremlore mlorem loremloremloremlorem   loremloremlorem loremlorem v v 
                </Typography>
                <Button color="secondary" variant="contained">
                  Learn more
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
  </Fragment>
  );
}

export default Slider;
