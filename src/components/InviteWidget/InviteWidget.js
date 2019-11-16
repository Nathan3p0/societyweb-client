import React, { Component } from 'react';

class InviteWidget extends Component {
    state = {}

    render() {
        return (
            <section>
                <h3>Invite</h3>
                <p>Simply enter your new member's phone number and we will send them an invite.</p>
                <form>
                    <label htmlFor="invite">Phone Number:</label>
                    <input type="tel" name="phone" id="invite" required />
                    <button type="submit">Send Invite</button>
                </form>
            </section>
        );
    }
}

export default InviteWidget;