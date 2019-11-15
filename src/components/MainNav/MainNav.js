import React, { Component } from 'react';
import TokenService from '../../services/token-service';

class MainNav extends Component {
    state = {}

    renderLoginLink = () => {
        return (
            <div className="Main__nav-login">
                <button>Leader Login</button>
                <button>Member Login</button>
            </div>
        )
    }

    renderLogoutLink = () => {
        return (
            < div className="Main__nav-logout" >
                <button>Logout</button>
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