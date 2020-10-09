import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import './style.css';
import Header from './containers/Header/Header.jsx';
import Slider from './components/Slider/Slider.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Header />
      <main>
        <Slider />
      </main>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
