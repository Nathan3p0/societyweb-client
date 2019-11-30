import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import LoginInfoContext from '../../context/LoginInfoContext';
import './MainNav.css'

class MainNav extends Component {
    static contextType = LoginInfoContext;

    state = {}

    handleLogout = () => {
        this.context.clearStateOnLogout();
        TokenService.clearAuthToken();
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
                {!TokenService.hasAuthToken() ? <h1 className="main__nav-toggle" onClick={this.props.mainToggle}>SocietyWeb</h1> : <h1>SocietyWeb</h1>}
                {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
            </nav>
        );
    }
}

export default MainNav;