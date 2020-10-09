import React, {Fragment} from 'react';
import '../../style.css';
import { Container, Typography, Button, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Search from '../Search/Search.jsx';


const useStyles = makeStyles((theme) => ({
  root: {

  },
  mainFeaturesPost: {
    height: "85vh",
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(10),
    marginTop: theme.spacing(10),
    display: "flex",
    flexWrap: "wrap",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgb(59,128,255)",
    opacity: 0.9
},
}))

function Slider() {
  const classes = useStyles();

  return (
    <Fragment classes={classes.root}> 
      <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage: `url(https://news.pressfeed.ru/wp-content/uploads/2017/08/obuchenie.jpg)`}}
        > 
        <Container fixed>
          <div className={classes.overlay}/>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                {/* <Typography
                  component="h1"
                  variant="h4"
                  color="inherit"
                  gutterBottom>
                    Приветствуем на платформе онлайн-обучения eLearning
                </Typography>
                <Search /> */}
                {/* <Button color="secondary" variant="contained">
                  Learn more
                </Button> */}
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
  </Fragment>
  );
}

export default Slider;
