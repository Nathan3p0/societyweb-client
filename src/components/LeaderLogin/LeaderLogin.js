import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import LoginInfoContext from '../../context/LoginInfoContext';
import './LeaderLogin.css'

class LeaderLogin extends Component {
    static contextType = LoginInfoContext;

    static defaultProps = {
        leaderLoginSuccess: () => { }
    }

    state = {
        error: null
    }

    handleLeaderLoginSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null
        });

        const { username, password } = e.target;

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                username.value = '';
                password.value = '';
                this.props.leaderLoginSuccess();
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    render() {
        const { error } = this.state;
        return (
            <form onSubmit={this.handleLeaderLoginSubmit}>
                <ul className="leaderLogin__form">
                    <h3>Team Leader Login</h3>
                    {error && <p className="error">{error}</p>}
                    <li>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" required />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" required />
                    </li>
                    <li>
                        <button type="submit">Login</button>
                    </li>
                </ul>
            </form>
        );
    }
}

export default LeaderLogin;