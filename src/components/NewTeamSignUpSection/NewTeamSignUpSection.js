import React, { Component } from 'react';
import NewTeamSignupForm from '../NewTeamSignupForm/NewTeamSignupForm';
import AuthApiService from '../../services/auth-api-service';
import './NewTeamSignUpSection.css'

class NewTeamSignUpSection extends Component {
    state = {
        error: null,
        full_name: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        group_name: '',
        confirmPassword: '',
        formErrors: {}
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormValidation = () => {
        const passwordCheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&])[\S]+/;
        const emailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/;
        const { full_name, username, password, email, phone, group_name, confirmPassword } = this.state;

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

        if(password !== confirmPassword) {
            validForm = false;
            formErrors['confirmError'] = 'Passwords do not match'
            this.setState({
                password: '',
                confirmPassword: ''
            })
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

        if (!group_name) {
            validForm = false;
            formErrors['teamError'] = 'Team Name is required';
        }

        this.setState({
            formErrors: formErrors
        });

        return validForm;
    }

    handleTeamSignupSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null,
            success: null
        });

        const { full_name, username, password, email, phone, group_name } = this.state;

        if(this.handleFormValidation()) {
        const newTeam = {
            full_name: full_name,
            username: username,
            password: password,
            email: email,
            phone: phone,
            group_name: group_name
        }

        AuthApiService.postNewTeam(newTeam)
            .then(res => {
                this.setState({
                    success: true,
                    full_name: '',
                    username: '',
                    password: '',
                    email: '',
                    phone: '',
                    group_name: '',
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
        const { error, success } = this.state
        return (
            <section className="newSignup__section">
                <div className="newSignup__section-benefits">
                    <h3>The benefits of Society Web</h3>
                    <p>When it comes to keeping your team organized, you can often get lost in the paperwork of regular calendars and address books.  Our goal is to provide an online application that simplifies keeping track of your team.  So that you can focus on the things that matter.</p>
                    <br />
                    <p>
                        SocietyWeb provides the key features that I have seen groups rely on and struggle with over the past few years.  Just in beginning stages of our launch we offer features like team messaging, event registration, member registration, calendar management, and much more to come.
                    </p>
                </div>
                <div className="newSignup__section-form">
                    <h3>New Team Signup</h3>
                    {error && <p className="error">{error}</p>}
                    {success && <p>Signup was successful. Click Leader Login at the top.</p>}
                    <NewTeamSignupForm
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleTeamSignupSubmit}
                        name={this.state.full_name}
                        username={this.state.username}
                        password={this.state.password}
                        email={this.state.email}
                        phone={this.state.phone}
                        team={this.state.group_name}
                        confirm={this.state.confirmPassword}
                        formErrors={this.state.formErrors}
                    />
                </div>
            </section>
        );
    }
}

export default NewTeamSignUpSection;