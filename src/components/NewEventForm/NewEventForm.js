import React from 'react';
import './NewEventForm.css'

const NewEventForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="admin__events-form">
            <h3>Create a new event:</h3>
            <ul className="flex-outer">
                <li>
                    <label htmlFor="event_name">Event Name:</label>
                    <input type="text" name="event_name" id="event_name" required />
                </li>
                <li>
                    <label htmlFor="event_time">Event Time:</label>
                    <input type="time" name="event_time" id="event_time" required />
                </li>
                <li>
                    <label htmlFor="event_date">Event Date:</label>
                    <input type="date" name="event_date" id="event_date" required />
                </li>
                <li>
                    <label htmlFor="event_location">Event Location:</label>
                    <input type="text" name="event_location" id="event_location" required />
                </li>
                <li>
                    <label htmlFor="event_description">Event Description:</label>
                    <textarea name="event_description" id="event_description" required />
                </li>
                <li>
                    <button type="submit">Sign Up</button>
                </li>
            </ul>
        </form>
    );
}

export default NewEventForm;