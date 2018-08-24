import React, { Component } from 'react';
import CardPage from './Card/CardPage';
// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Profile from './Components/Profile';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/study" component={CardPage} />
          <Route path="/profile" component={Profile} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
