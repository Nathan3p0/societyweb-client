import React from 'react';
import './NewAlertForm.css'

const NewAlertForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="admin__events-form">
            <h3>Send a new team alert:</h3>
            <p>Select team members to email by clicking on their cards.</p>
            <ul className="newAlert__form">
                <li>
                    <label htmlFor="to">To:</label>
                    <input type="text" name="to" id="to" placeholder="Member Email" required />
                </li>
                <li>
                    <label htmlFor="from">From:</label>
                    <input type="email" name="from" id="from" placeholder="Your Email" required />
                </li>
                <li>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="subject" id="subject" placeholder="Message Subject" required />
                </li>
                <li>
                    <label htmlFor="message">Message:</label>
                    <textarea name="text" id="message" placeholder="Your Message" required />
                </li>
                <li>
                    <button type="submit">Send Alert</button>
                </li>
            </ul>
        </form>
    );
}

export default NewAlertForm;