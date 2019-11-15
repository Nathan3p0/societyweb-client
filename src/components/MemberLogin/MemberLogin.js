import React, { Component } from 'react';

class MemberLogin extends Component {
    static defaultProps = {
        memberLoginSuccess: () => { }
    }

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
                <h3>Team Member Login</h3>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" required />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default MemberLogin;