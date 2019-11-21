import React from 'react';
import './EventSignupWidget.css';

const EventSignupWidget = (props) => {
    const { event } = props;
    return (
        <section className="eventsignup__container">
            <h3 className="eventsignup__container-header">Event Signup:</h3>
            <div className="eventsignup__container-content">
                {event &&
                    <p><strong>Event Name:</strong> {event.event_name}</p>}
                {!event && <h4>Select an event to signup</h4>}
                {event &&
                    <>
                        <p><strong>Event Description:</strong> {event.event_description}</p>
                        <form onSubmit={props.handleSignupSubmit}>
                            <ul className="eventsignup__form">
                                <h3>Are you interested?</h3>
                                {props.error && <p className="error">{props.error}</p>}
                                <li>
                                    <input type="radio" id="yes" name="attending" value="Yes" onChange={props.handleInputChange} />
                                    <label htmlFor="yes">Yes?</label>
                                </li>
                                <li>
                                    <input type="radio" id="maybe" name="attending" value="Maybe" onChange={props.handleInputChange} />
                                    <label htmlFor="maybe">Maybe?</label>
                                </li>
                                <li>
                                    <input type="radio" id="no" name="attending" value="No" onChange={props.handleInputChange} />
                                    <label htmlFor="no">No?</label>
                                </li>
                                <li>
                                    <input type="radio" id="volunteer" name="attending" value="Volunteer" onChange={props.handleInputChange} />
                                    <label htmlFor="volunteer">Volunteer?</label>
                                </li>
                                <li>
                                    <button type="submit">Submit Signup</button>
                                </li>
                            </ul>
                        </form>
                    </>
                }
            </div>
        </section>
    );
}

export default EventSignupWidget;