import React from 'react';

const InviteWidget = () => {
    return (
        <section>
            <h3>Invite</h3>
            <p>Simply enter your new member's phone number and we will send them an invite.</p>
            <form>
                <label for="invite">Phone Number:</label>
                <input type="tel" name="phone" id="invite" required />
                <button type="submit">Send Invite</button>
            </form>
        </section>
    );
}

export default InviteWidget;