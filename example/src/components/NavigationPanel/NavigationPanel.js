import React from 'react';
import '../../App.css';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../LogIn/Login.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

function NavigationPanel() {
  const classes = useStyles();

  return (
    <Toolbar>
        <IconButton edge="start"color ="inherit" aria-label="menu" className={classes.menuButton}>
        <MenuIcon />
        </IconButton> 
        <Typography variant="h6" className={classes.title}>eLearning</Typography>
       <Login />
    </Toolbar>
  );
}

export default NavigationPanel;