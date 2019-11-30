import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import LoginInfoContext from '../../context/LoginInfoContext';
import './LeaderLogin.css'

class LeaderLogin extends Component {
    static contextType = LoginInfoContext;

    static defaultProps = {
        leaderLoginSuccess: () => { }
    }

    state = {
        error: null,
        redirect: false
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
                this.setState({
                    redirect: true
                })
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    handleLeaderDemoLogin = () => {
        this.setState({
            error: null
        });

        AuthApiService.postLogin({
            username: 'demoAdmin',
            password: 'Password1.'
        })
            .then(res => {
                this.setState({
                    redirect: true
                })
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    render() {
        const { error } = this.state;

        if (this.state.redirect) {
            return <Redirect to="/admin" />
        }

        return (
            <form onSubmit={this.handleLeaderLoginSubmit}>
                <ul className="leaderLogin__form">
                    <h3>Team Leader Login</h3>
                    {error && <p className="error">{error}</p>}
                    <li>
                        <label htmlFor="leader-username">Username:</label>
                        <input type="text" name="username" id="leader-username" placeholder="Username" required />
                    </li>
                    <li>
                        <label htmlFor="leader-password">Password:</label>
                        <input type="password" name="password" id="leader-password" placeholder="Password" required />
                    </li>
                    <li className="button__container">
                        <button type="submit">Login</button>
                        <button type="button" onClick={this.handleLeaderDemoLogin}>Demo</button>
                    </li>
                </ul>
            </form>
        );
    }
}

export default LeaderLogin;