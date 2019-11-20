import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import LoginInfoContext from '../../context/LoginInfoContext';
import './MemberLogin.css'

class MemberLogin extends Component {
    static defaultProps = {
        memberLoginSuccess: () => { }
    }

    static contextType = LoginInfoContext;

    state = {
        error: null
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
                console.log(res)
                username.value = '';
                password.value = '';
                this.props.memberLoginSuccess();
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    render() {
        return (
            <form onSubmit={this.handleMemberLoginSubmit}>
                <ul className="memberLogin__form">
                    <h3>Team Member Login</h3>
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
                    <li>
                        <a href="#" onClick={this.context.memberJoinToggle}>Not a member? Click here to join.</a>
                    </li>
                </ul>
            </form>
        );
    }
}

export default MemberLogin;