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
        group_name: ''
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleTeamSignupSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null,
            success: null
        });

        const { fullname, username, password, email, phone, group_name } = this.state;

        const newTeam = {
            full_name: fullname,
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
                    fullname: '',
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
                    />
                </div>
            </section>
        );
    }
}

export default NewTeamSignUpSection;