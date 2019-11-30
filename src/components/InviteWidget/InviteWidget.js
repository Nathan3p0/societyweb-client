import React, { Component } from 'react';
import AdminApiService from '../../services/admin-api-service';
import './InviteWidget.css';

class InviteWidget extends Component {
    state = {
        phoneError: null,
        emailError: null,
        phoneSuccess: false,
        emailSuccess: false,
        phone: '',
        email: ''
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    validatePhoneNumber = (phone) => {
        const phoneRegEx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        return phoneRegEx.test(phone);
    }

    validateEmail = (email) => {
        const emailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        return emailCheck.test(email);
    }

    handleEmailInviteSubmit = (e) => {
        e.preventDefault();

        const { email } = this.state;

        if (!this.validateEmail(email)) {
            this.setState({
                emailError: 'Please enter a valid email'
            })
        } else {
            AdminApiService.inviteNewMemberEmail(email)
                .then(res => {
                    this.setState({
                        emailSuccess: true,
                        email: ''
                    })
                })
                .catch(res => {
                    this.setState({
                        emailError: res.error
                    })
                })
        }
    }

    handleSmsInviteSubmit = (e) => {
        e.preventDefault();

        const {phone} = this.state

        if (!this.validatePhoneNumber(phone)) {
            this.setState({
                phoneError: 'Please enter a valid phone number'
            })
        } else if (phone !== 7346735101 || 734 / -673 / -5101) {
            this.setState({
                phoneError: 'SMS Invite only works with authorized numbers during Trial.'
            })
        } else {
            AdminApiService.inviteNewMemberSms(phone)
                .then(res => {
                    this.setState({
                        phoneSuccess: true,
                        phone: ''
                    })
                })
                .catch(res => {
                    this.setState({
                        phoneError: res.error
                    })
                })
        }
    }

    render() {
        const { phoneError, emailError, phoneSuccess, emailSuccess } = this.state;
        return (
            <section className="inviteWidget__container">
                <h3 className="inviteWidget__container-header">Invite</h3>
                <div className="inviteWidget__container-content">
                    <p>Simply enter your new member's phone number and we will send them an invite.</p>
                    <form onSubmit={this.handleEmailInviteSubmit}>
                        <ul className="inviteWidget__form">
                            {emailError && <p className="error">{emailError}</p>}
                            {emailSuccess && <p className="success">Your invite was sent successfully!</p>}
                            <li>
                                <label htmlFor="email-invite">Email:</label>
                                <input type="email" name="email" id="email-invite" placeholder="john.doe@gmail.com" value={this.state.email} onChange={this.handleInputChange} required />
                            </li>
                            <li>
                                <button type="submit">Send Email Invite</button>
                            </li>
                        </ul>
                    </form>
                    <hr />
                    <form onSubmit={this.handleSmsInviteSubmit}>
                        <ul className="inviteWidget__form">
                        {phoneError && <p className="error">{phoneError}</p>}
                            {phoneSuccess && <p className="success">Your invite was sent successfully!</p>}
                            <li>
                                <label htmlFor="phone-invite">Phone Number:</label>
                                <input type="tel" name="phone" id="phone-invite" placeholder="123-555-0505" value={this.state.phone} onChange={this.handleInputChange} required />
                            </li>
                            <li>
                                <button type="submit">Send SMS Invite</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        );
    }
}

export default InviteWidget;