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

    handleMemberDemoLogin = () => {
        this.setState({
            error: null
        });

        AuthApiService.postLogin({
            username: 'demoMember',
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

        if (this.state.redirect) {
            return <Redirect to='/member' />
        }

        const { error } = this.state;

        return (
            <form onSubmit={this.handleMemberLoginSubmit}>
                <ul className="memberLogin__form">
                    <h3>Team Member Login</h3>
                    {error && <p className="error">{error}</p>}
                    <li>
                        <label htmlFor="member-username">Username:</label>
                        <input type="text" name="username" id="member-username" placeholder="Username" required />
                    </li>
                    <li>
                        <label htmlFor="member-password">Password:</label>
                        <input type="password" name="password" id="member-password" placeholder="Password" required />
                    </li>
                    <li className="button__container">
                        <button type="submit">Login</button>
                        <button type="button" onClick={this.handleMemberDemoLogin}>Demo</button>
                    </li>
                    <li>
                        <p className="member__join" onClick={this.context.memberJoinToggle}>Not a member? Click here to join.</p>
                    </li>
                </ul>
            </form>
        );
    }
}

export default MemberLogin;