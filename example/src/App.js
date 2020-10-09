import React from 'react';
import './App.css';
import { Container, Typography, Button, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions, DialogContentText} from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Header from './components/Header/Header.js';
import Slider from './components/Slider/Slider.js';

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
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.5)"
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

const cards = [1,2,3,4,5,6]

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Header />
    <main>
      <Slider />
      <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography
            variant="h2" align="center" color="textPrimary" gutterBottom>
              eLearning site
          </Typography>
          <Typography
            variant="h5" align="center" color="textSecondary" gutterBottom paragraph>
              kjjkhkjkj k jkjj jk jkhjh b b jbjh bhj bh hj hj bjh hj h bhjb hjbhj vh vg bh h
          </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">Start now</Button>
                </Grid> 
                <Grid item>
                  <Button variant="outlined" color="primary">Learn more</Button>
                </Grid>
              </Grid>
            </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} >
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia} 
                    image="https://source.unsplash.com/random"
                    title="image title"/>
                </Card> 
                <CardContent className={classes.cardContent} >
                  <Typography variant="h5" gutterBottom>
                    Some post
                  </Typography>
                  <Typography >
                    Some post Some postSome post Some post Some post
                  </Typography>
                </CardContent> 
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>  
    
    <footer>
      <Typography variant="h6" align="center" gutterBottom>footer</Typography>
      <BottomNavigation
          value={value}
          onchange={handleChange}
          className={classes.root} >
            <BottomNavigationAction 
              label="Recents"
              value="recents"
              icon={<RestoreIcon />}
              />
              <BottomNavigationAction 
              label="Favorites"
              value="favorites"
              icon={<FavoriteIcon />}
              />
              <BottomNavigationAction 
              label="Nearby"
              value="vearby"
              icon={<LocationOnIcon />}
              />
              <BottomNavigationAction 
              label="Folder"
              value="folder"
              icon={<FolderIcon />}
              />
      </BottomNavigation>
      <Typography 
        align="center" 
        color="textSecondary" 
        component="p" 
        variant="subtitle1">
          fffffffffff fffffffffff ffffffffffffffffff fffffffffffffff fffffffffffff 
      </Typography>
    </footer>
  </>
  );
}

export default App;
