import React from 'react';
import '../../style.css';
import { Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../LogIn/Login.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
  offer: {
    flexGrow: 1,
    color: "grey"
  },
}))

function NavigationPanel() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <Typography variant="h6" className={classes.title}> eLearning</Typography> 
      <Typography variant="p" className={classes.offer}> Действуют скидки на самые популярные курсы</Typography> 
      <Login />
    </Toolbar>
  );
}

export default NavigationPanel;