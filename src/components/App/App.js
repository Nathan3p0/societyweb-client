import React, { Component } from 'react';
import MainNav from '../MainNav/MainNav';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import { Switch } from "react-router-dom";
import LandingPage from '../../routes/LandingPage/LandingPage';
import AdminDashboard from '../../routes/AdminDashboard/AdminDashboard';
import MemberDashboard from '../../routes/MemberDashboard/MemberDashboard';
import LoginInfoContext from '../../context/LoginInfoContext';

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
    const value = {
      memberJoin: this.state.memberJoin,
      leaderLogin: this.state.leaderLogin,
      memberLogin: this.state.memberLogin,
      leaderLoginToggle: this.handleLeaderLoginToggle
    }
    return (
      <div className='App'>
        <LoginInfoContext.Provider value={value}>
          <MainNav />
          <Switch>
            <PublicOnlyRoute exact path={'/'} component={LandingPage} />
            <PrivateRoute path={'/admin'} component={AdminDashboard} />
            <PrivateRoute path={'/member'} component={MemberDashboard} />
          </Switch>
        </LoginInfoContext.Provider>
      </div>
    );
  }
}

export default App;
