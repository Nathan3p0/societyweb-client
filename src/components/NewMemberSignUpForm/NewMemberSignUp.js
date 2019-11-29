import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './NewMemberSignUp.css';

class NewMemberSignUp extends Component {

    state = {
        error: null,
        success: false,
        full_name: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        invite_code: '',
        formErrors: {}
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormValidation = () => {
        const passwordCheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&])[\S]+/;
        const emailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/;
        const { full_name, username, password, email, phone, invite_code } = this.state;

        let formErrors = {};
        let validForm = true;

        if (!full_name) {
            validForm = false;
            formErrors['fullNameError'] = 'Full Name is required';
        }

        if (!username) {
            validForm = false;
            formErrors['usernameError'] = 'Username is required'
        }

        if (!password) {
            validForm = false;
            formErrors['passwordError'] = 'Password is required';
        } else if (!passwordCheck.test(password)) {
            validForm = false;
            formErrors['passwordError'] = 'Password must contain 1 Upper & Lower Case Letter, Number and Special Character'
        } else if (password.length < 8) {
            validForm = false;
            formErrors['passwordError'] = 'Password must be longer than 8 characters'
        } else if (password.length > 72) {
            validForm = false;
            formErrors['passwordError'] = 'Password must be less than 72 characters'
        } else if (password.startsWith(' ') || password.endsWith(' ')) {
            validForm = false;
            formErrors['passwordError'] = 'Password must not start or end with empty spaces'
        }

        if (!email) {
            validForm = false;
            formErrors['emailError'] = 'Email is required';
        } else if (!emailCheck.test(email)) {
            validForm = false;
            formErrors['emailError'] = 'Invalid email format';
        }

        if (!phone) {
            validForm = false;
            formErrors['phoneError'] = 'Phone is required';
        } else if (!phoneCheck.test(phone)) {
            validForm = false;
            formErrors['phoneError'] = 'Invalid phone number';
        }

        if (!invite_code) {
            validForm = false;
            formErrors['inviteError'] = 'Invite Code is required';
        }

        this.setState({
            formErrors: formErrors
        });

        return validForm;
    }

    handleNewMemberSubmit = (e) => {
        e.preventDefault();

        const { full_name, username, password, email, phone, invite_code } = this.state;
        if (this.handleFormValidation()) {
            const newMember = {
                full_name: full_name,
                username: username,
                password: password,
                email: email,
                phone: phone,
                invite_code: invite_code
            }

            this.setState({
                error: null
            })

            AuthApiService.postNewMember(newMember)
                .then(res => {
                    this.setState({
                        success: true,
                        full_name: '',
                        username: '',
                        password: '',
                        email: '',
                        phone: '',
                        invite_code: ''
                    })
                })
                .catch(res => {
                    this.setState({
                        error: res.error
                    })
                })
        }
    }

    render() {
        const { error, success } = this.state;
        const { fullNameError, usernameError, passwordError, emailError, phoneError, inviteError } = this.state.formErrors;

        return (
            <>
                <form onSubmit={this.handleNewMemberSubmit}>
                    <ul className="newMember__signup-form">
                        <h3>New Member Signup</h3>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">You successfully signed up. Click Login as Member at the top.</p>}
                        <li>
                            <label htmlFor="fullname">Full Name:</label>
                            <input type="text" name="full_name" id="fullname" value={this.state.full_name} onChange={this.handleInputChange} placeholder="Full Name" required />
                        </li>
                        {fullNameError && <li> <p className="formError">{fullNameError}</p> </li>}
                        <li>
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Username" required />
                        </li>
                        {usernameError && <li> <p className="formError">{usernameError}</p> </li>}
                        <li>
                            <label htmlFor="new-member-password">Password:</label>
                            <input type="password" name="password" id="new-member-password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" title="Password must contain 1 Upper & Lower Case Letter, Number and Special Character" required />
                        </li>
                        {passwordError && <li> <p className="formError">{passwordError}</p> </li>}
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required />
                        </li>
                        {emailError && <li> <p className="formError">{emailError}</p> </li>}
                        <li>
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" name="phone" id="phone" placeholder="123-555-4567" value={this.state.phone} onChange={this.handleInputChange} required />
                        </li>
                        {phoneError && <li> <p className="formError">{phoneError}</p> </li>}
                        <li>
                            <label htmlFor="invite_code">Invite Code:</label>
                            <input type="text" name="invite_code" id="invite_code" placeholder="Invite Code" value={this.state.invite_code} onChange={this.handleInputChange} required />
                        </li>
                        {inviteError && <li> <p className="formError">{inviteError}</p> </li>}
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