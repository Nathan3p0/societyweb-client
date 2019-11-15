import React, { Component } from 'react';
import MainNav from '../MainNav/MainNav';
import Header from '../Header/Header';

// import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='App'>
        <MainNav />
        <Header />
      </div>
    );
  }
}

export default App;
