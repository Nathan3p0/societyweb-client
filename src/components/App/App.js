import React, { Component } from 'react';
import MainNav from '../MainNav/MainNav';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import { Switch } from "react-router-dom";
import LandingPage from '../../routes/LandingPage/LandingPage';
import AdminDashboard from '../../routes/AdminDashboard/AdminDashboard';
import MemberDashboard from '../../routes/MemberDashboard/MemberDashboard';
import Footer from '../../components/Footer/Footer'
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
      this.setState({
        leaderLogin: true,
        memberJoin: false,
        memberLogin: false
      })
    }
  }

  handleMemberLoginToggle = () => {
    if (!this.state.memberLogin) {
      this.setState({
        leaderLogin: false,
        memberJoin: false,
        memberLogin: true
      })
    }
  }

  handleMemberJoinToggle = () => {
    if (!this.state.memberJoin) {
      this.setState({
        leaderLogin: false,
        memberJoin: true,
        memberLogin: false
      })
    }
  }


  render() {
    const value = {
      memberJoin: this.state.memberJoin,
      leaderLogin: this.state.leaderLogin,
      memberLogin: this.state.memberLogin,
      leaderLoginToggle: this.handleLeaderLoginToggle,
      memberLoginToggle: this.handleMemberLoginToggle,
      memberJoinToggle: this.handleMemberJoinToggle
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
          <Footer />
        </LoginInfoContext.Provider>
      </div>
    );
  }
}

export default App;
