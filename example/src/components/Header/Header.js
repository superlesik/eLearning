import React from 'react';
import '../../App.css';
import { Container, AppBar} from '@material-ui/core';
import NavigationPanel from '../NavigationPanel/NavigationPanel.js';

function Header() {
  return (

    <AppBar position="fixed">
      <Container fixed>
        <NavigationPanel />
      </Container>
    </AppBar>
  
  );
}

export default Header;