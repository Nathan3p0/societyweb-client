import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './NewMemberSignUp.css';

class NewMemberSignUp extends Component {

    state = {
        error: null,
        success: false
    }

    handleNewMemberSubmit = (e) => {
        e.preventDefault();

        const { full_name, username, password, email, phone, invite_code } = e.target;
        const newMember = {
            full_name: full_name.value,
            username: username.value,
            password: password.value,
            email: email.value,
            phone: phone.value,
            invite_code: invite_code.value
        }

        this.setState({
            error: null
        })

        AuthApiService.postNewMember(newMember)
            .then(res => {
                full_name.value = '';
                username.value = '';
                password.value = '';
                email.value = '';
                phone.value = '';
                invite_code.value = '';

                this.setState({
                    success: true
                })
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    render() {
        const { error, success } = this.state;
        return (
            <>
                <form onSubmit={this.handleNewMemberSubmit}>
                    <ul className="newMember__signup-form">
                        <h3>New Member Signup</h3>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">You successfully signed up. Click Login as Member at the top.</p>}
                        <li>
                            <label htmlFor="fullname">Full Name:</label>
                            <input type="text" name="full_name" id="fullname" required />
                        </li>
                        <li>
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" required />
                        </li>
                        <li>
                            <label htmlFor="new-member-password">Password:</label>
                            <input type="password" name="password" id="new-member-password" required />
                        </li>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" required />
                        </li>
                        <li>
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" name="phone" id="phone" required />
                        </li>
                        <li>
                            <label htmlFor="invite_code">Invite Code:</label>
                            <input type="text" name="invite_code" id="invite_code" required />
                        </li>
                        <li>
                            <button type="submit">Sign Up</button>
                        </li>
                    </ul>
                </form>
            </>
        );
    }
}

export default NewMemberSignUp;