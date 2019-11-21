import React, { Component } from 'react';
import AdminApiService from '../../services/admin-api-service';
import './InviteWidget.css';

class InviteWidget extends Component {
    state = {
        error: null,
        success: false
    }

    validatePhoneNumber = (phone) => {
        const phoneRegEx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        return phoneRegEx.test(phone);
    }

    handleInviteSubmit = (e) => {
        e.preventDefault();

        const { phone } = e.target;
        const { value } = phone;

        if (!this.validatePhoneNumber(value)) {
            this.setState({
                error: 'Please enter a valid phone number'
            })
        } else {

            AdminApiService.inviteNewMemberSms(value)
                .then(res => {
                    phone.value = '';
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
    }

    render() {
        const { error, success } = this.state
        return (
            <section className="inviteWidget__container">
                <h3 className="inviteWidget__container-header">Invite</h3>
                <div className="inviteWidget__container-content">
                    <p>Simply enter your new member's phone number and we will send them an invite.</p>
                    <form onSubmit={this.handleInviteSubmit}>
                        <ul className="inviteWidget__form">
                            {error && <p className="error">{error}</p>}
                            {success && <p className="success">Your invite was sent successfully!</p>}
                            <li>
                                <label htmlFor="invite">Phone Number:</label>
                                <input type="tel" name="phone" id="invite" placeholder="123-555-0505" required />
                            </li>
                            <li>
                                <button type="submit">Send Invite</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        );
    }
}

export default InviteWidget;