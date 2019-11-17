import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import LoginInfoContext from '../../context/LoginInfoContext';

class LeaderLogin extends Component {
    static defaultProps = {
        leaderLoginSuccess: () => { }
    }

    static contextType = LoginInfoContext;

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
                console.log(res)
                username.value = '';
                password.value = '';
                this.context.updateUserInfo();
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
                <h3>Team Leader Login</h3>
                {error && <p>{error}</p>}
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" required />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default LeaderLogin;