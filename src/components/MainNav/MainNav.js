import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import LoginInfoContext from '../../context/LoginInfoContext';

class MainNav extends Component {
    static contextType = LoginInfoContext;

    state = {}

    handleLogout = () => {
        TokenService.clearAuthToken();
    }

    renderLoginLink = () => {
        return (
            <div className="Main__nav-login">
                <button onClick={this.context.leaderLoginToggle}>Leader Login</button>
                <button>Member Login</button>
            </div>
        )
    }

    renderLogoutLink = () => {
        return (
            < div className="Main__nav-logout" >
                <button onClick={this.handleLogout}>Logout</button>
            </div >
        )
    }
    render() {
        return (
            <nav className="main__nav">
                <h1>SocietyWeb</h1>
                {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
            </nav>
        );
    }
}

export default MainNav;