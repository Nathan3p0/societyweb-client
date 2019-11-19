import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import LoginInfoContext from '../../context/LoginInfoContext';
import './MainNav.css'

class MainNav extends Component {
    static contextType = LoginInfoContext;

    state = {}

    handleLogout = () => {
        TokenService.clearAuthToken();
        this.context.setLoginStatus();
    }

    renderLoginLink = () => {
        return (
            <div className="main__nav-login">
                <button onClick={this.context.leaderLoginToggle}>Leader Login</button>
                <button onClick={this.context.memberLoginToggle}>Member Login</button>
            </div>
        )
    }

    renderLogoutLink = () => {
        return (
            < div className="main__nav-logout" >
                <button onClick={this.handleLogout}>Logout</button>
            </div >
        )
    }
    render() {
        return (
            <nav className="main__nav">
                <h1>SocietyWeb</h1>
                {!this.context.loggedIn ? this.renderLogoutLink() : this.renderLoginLink()}
            </nav>
        );
    }
}

export default MainNav;