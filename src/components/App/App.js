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
import TeamInfoContext from '../../context/TeamInfoContext';
import AdminApiService from '../../services/admin-api-service';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberJoin: false,
      leaderLogin: false,
      memberLogin: false,
      userInfo: null,
      events: [],
      members: [],
      loggedIn: false,
      error: null
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

  fetchAllMembers = () => {
    AdminApiService.getAllMembers()
      .then(members => {
        this.setState({
          members: members.members
        })
      })
      .catch(res => {
        this.setState({
          error: res.error
        })
      })
  }

  fetchAllEvents = () => {
    AdminApiService.getAllEvents()
      .then(events => {
        this.setState((state) => ({
          events: events.events
        })
        )

        console.log('I ran')
      })
      .catch(res =>
        this.setState({
          error: res.error
        })
      )
  }

  setLoginStatus = () => {
    this.setState(state => ({
      loggedIn: !state.loggedIn
    }))
  }

  render() {
    const loginValue = {
      memberJoin: this.state.memberJoin,
      leaderLogin: this.state.leaderLogin,
      memberLogin: this.state.memberLogin,
      leaderLoginToggle: this.handleLeaderLoginToggle,
      memberLoginToggle: this.handleMemberLoginToggle,
      memberJoinToggle: this.handleMemberJoinToggle,
      fetchAllEvents: this.fetchAllEvents,
      events: this.state.events,
      loggedIn: this.state.loggedIn,
      setLoginStatus: this.setLoginStatus
    }

    const teamValue = {
      events: this.state.events,
      members: this.state.members,
      fetchAllMembers: this.fetchAllMembers,
      error: this.state.error
    }

    return (
      <div className='container'>
        <LoginInfoContext.Provider value={loginValue}>
          <TeamInfoContext.Provider value={teamValue}>
            <MainNav />
            <Switch>
              <PublicOnlyRoute exact path={'/'} component={LandingPage} />
              <PrivateRoute path={'/admin'} component={AdminDashboard} />
              <PrivateRoute path={'/member'} component={MemberDashboard} />
            </Switch>
            <Footer />
          </TeamInfoContext.Provider>
        </LoginInfoContext.Provider>
      </div>
    );
  }
}

export default App;
