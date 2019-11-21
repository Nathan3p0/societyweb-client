import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import LoginInfoContext from '../../context/LoginInfoContext';
import './MemberLogin.css'

class MemberLogin extends Component {
    static defaultProps = {
        memberLoginSuccess: () => { },
        redirect: false
    }

    static contextType = LoginInfoContext;

    state = {
        error: null,
    }

    handleMemberLoginSubmit = (e) => {
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

    render() {

        if (this.state.redirect) {
            return <Redirect to='/member' />
        }

        return (
            <form onSubmit={this.handleMemberLoginSubmit}>
                <ul className="memberLogin__form">
                    <h3>Team Member Login</h3>
                    <li>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" placeholder="username" required />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="password" required />
                    </li>
                    <li>
                        <button type="submit">Login</button>
                    </li>
                    <li>
                        <a href="#" onClick={this.context.memberJoinToggle}>Not a member? Click here to join.</a>
                    </li>
                </ul>
            </form>
        );
    }
}

export default MemberLogin;