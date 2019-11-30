import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Switch } from "react-router-dom";
import { faCalendarAlt, faUsers, faEnvelope, faHandshake } from '@fortawesome/free-solid-svg-icons'
import MainNav from '../MainNav/MainNav';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import LandingPage from '../../routes/LandingPage/LandingPage';
import AdminDashboard from '../../routes/AdminDashboard/AdminDashboard';
import MemberDashboard from '../../routes/MemberDashboard/MemberDashboard';
import Footer from '../../components/Footer/Footer'
import LoginInfoContext from '../../context/LoginInfoContext';
import TeamInfoContext from '../../context/TeamInfoContext';
import AdminApiService from '../../services/admin-api-service';
import MemberApiService from '../../services/member-api-service';
import './App.css'

library.add(fab, faCalendarAlt, faUsers, faEnvelope, faHandshake)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberJoin: false,
      leaderLogin: false,
      memberLogin: false,
      main: true,
      userInfo: null,
      events: [],
      members: [],
      teamName: '',
      memberName: '',
      loggedIn: false,
      error: null
    }
  }

  handleLeaderLoginToggle = () => {
    if (!this.state.leaderLogin) {
      this.setState({
        leaderLogin: true,
        memberJoin: false,
        memberLogin: false,
        main: false
      })
    }
  }

  handleMemberLoginToggle = () => {
    if (!this.state.memberLogin) {
      this.setState({
        leaderLogin: false,
        memberJoin: false,
        memberLogin: true,
        main: false
      })
    }
  }

  handleMemberJoinToggle = () => {
    if (!this.state.memberJoin) {
      this.setState({
        leaderLogin: false,
        memberJoin: true,
        memberLogin: false,
        main: false
      })
    }
  }

  mainToggle = () => {
    if (!this.state.main) {
      this.setState({
        leaderLogin: false,
        memberJoin: false,
        memberLogin: false,
        main: true
      })
    }
  }

  fetchAllMembers = () => {
    AdminApiService.getAllMembers()
      .then(members => {
        this.setState({
          members: members
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
        this.setState({
          events: events.events
        })
      })
      .catch(res =>
        this.setState({
          error: res.error
        })
      )
  }

  fetchAllMemberEvents = () => {
    MemberApiService.getAllMemberEvents()
      .then(events => {
        this.setState({
          events: events.events,
          teamName: events.group,
          memberName: events.name
        })
      })
      .catch(res =>
        this.setState({
          error: res.error
        })
      )
  }

  fetchAdminInfo = () => {
    AdminApiService.getUserInfo()
      .then(info => {
        this.setState({
          teamName: info.group_name,
          memberName: info.name
        })
      })
      .catch(res => {
        this.setState({
          error: res.error
        })
      })
  }

  clearStateOnLogout = () => {
    this.setState({
      members: [],
      events: []
    })
  }

  render() {
    const loginValue = {
      memberJoin: this.state.memberJoin,
      leaderLogin: this.state.leaderLogin,
      memberLogin: this.state.memberLogin,
      main: this.state.main,
      leaderLoginToggle: this.handleLeaderLoginToggle,
      memberLoginToggle: this.handleMemberLoginToggle,
      memberJoinToggle: this.handleMemberJoinToggle,
      events: this.state.events,
      clearStateOnLogout: this.clearStateOnLogout
    }

    const teamValue = {
      events: this.state.events,
      teamName: this.state.teamName,
      members: this.state.members,
      fetchAdminInfo: this.fetchAdminInfo,
      fetchAllMembers: this.fetchAllMembers,
      fetchAllEvents: this.fetchAllEvents,
      fetchAllMemberEvents: this.fetchAllMemberEvents,
      error: this.state.error,
      memberName: this.state.memberName
    }

    return (
      <div className='container'>
        <LoginInfoContext.Provider value={loginValue}>
          <TeamInfoContext.Provider value={teamValue}>
            <MainNav mainToggle={this.mainToggle} />
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
