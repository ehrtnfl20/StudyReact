import React, { Component } from 'react';
import './App.css';
import Router from './route/Router';
import NavBar from './route/NavBar';

import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <NavBar />
        <Container>
          <Router />
        </Container>
      </div>
    );
  }
}

export default App;
