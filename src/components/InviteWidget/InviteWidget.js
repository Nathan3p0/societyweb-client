import React, { Component } from 'react';
import './InviteWidget.css';

class InviteWidget extends Component {
    state = {}

    render() {
        return (
            <section className="inviteWidget__container">
                <h3 className="inviteWidget__container-header">Invite</h3>
                <div className="inviteWidget__container-content">
                    <p>Simply enter your new member's phone number and we will send them an invite.</p>
                    <form>
                        <ul className="inviteWidget__form">
                            <li>
                                <label htmlFor="invite">Phone Number:</label>
                                <input type="tel" name="phone" id="invite" required />
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