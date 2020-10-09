import React from 'react';
import '../../style.css';
import { Container, AppBar} from '@material-ui/core';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel.jsx';

function Header() {
  return (

    <AppBar position="fixed" style={{backgroundColor: 'white'}}>
      <Container fixed>
        <NavigationPanel />
      </Container>
    </AppBar>
  
  );
}

export default Header;