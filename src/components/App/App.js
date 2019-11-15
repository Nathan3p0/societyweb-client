import React, { Component } from 'react';
import MainNav from '../MainNav/MainNav';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import { Route, Switch } from "react-router-dom";
import LandingPage from '../../routes/LandingPage/LandingPage';
import AdminDashboard from '../../routes/AdminDashboard/AdminDashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberJoin: false,
      leaderLogin: false,
      memberLogin: false
    }
  }

  handleLeaderLoginToggle = () => {
    if (!this.state.leaderLogin) {
      this.setState({ leaderLogin: !false })
    }
  }
  render() {
    return (
      <div className='App'>
        <MainNav toggleLeader={this.handleLeaderLoginToggle} />
        <Switch>
          <PublicOnlyRoute path={'/'} component={LandingPage} />
          <PrivateRoute path={'/admin'} component={AdminDashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
