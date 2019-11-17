import React, { Component } from 'react';
import NewTeamSignupForm from '../NewTeamSignupForm/NewTeamSignupForm';
import AuthApiService from '../../services/auth-api-service';
import './NewTeamSignUpSection.css'

class NewTeamSignUpSection extends Component {
    state = {
        error: null
    }

    handleTeamSignupSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null,
            success: null
        });

        const { fullname, username, password, email, phone, group_name } = e.target;

        const newTeam = {
            full_name: fullname.value,
            username: username.value,
            password: password.value,
            email: email.value,
            phone: phone.value,
            group_name: group_name.value
        }

        AuthApiService.postNewTeam(newTeam)
            .then(res => {
                fullname.value = '';
                username.value = '';
                password.value = '';
                email.value = '';
                phone.value = '';
                group_name.value = '';
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
        const { error, success } = this.state
        return (
            <section className="newSignup__section">
                <div className="newSignup__section-benefits">
                    <h3>The benefits of Society Web</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sed, explicabo molestiae iste consectetur mollitia voluptate voluptatum, est eius modi saepe, ad exercitationem numquam harum quo quasi asperiores repellat incidunt ab fuga sit id sapiente aspernatur similique! Nostrum enim quibusdam voluptatum ea velit odit impedit consequuntur totam adipisci, mollitia eos!</p>
                </div>
                <div className="newSignup__section-form">
                    <h3>New Team Signup</h3>
                    {error && <p className="error">{error}</p>}
                    {success && <p>Signup was successful. Click Leader Login at the top.</p>}
                    <NewTeamSignupForm handleSubmit={this.handleTeamSignupSubmit} />
                </div>
            </section>
        );
    }
}

export default NewTeamSignUpSection;