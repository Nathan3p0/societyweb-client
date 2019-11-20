import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TeamInfoContext from '../../context/TeamInfoContext';
import './EventPage.css';

const EventPage = (props) => {
    let history = useHistory();
    const value = useContext(TeamInfoContext);
    const { id } = props.match.params;
    const event = value.events.find(event => event.id == id);

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <>
            <section className="eventPage__main">
                <section className="eventPage__event-info">
                    <h3>Event: {event.event_name}</h3>
                    <p>Date: {event.event_date}</p>
                    <p>Time: {event.event_time}</p>
                    <p>Location: {event.event_location}</p>
                    <p>Description: {event.event_description}</p>
                    <button onClick={handleGoBack}>Go Back</button>
                </section>
                <section className="eventPage__event-attending">
                    <h3>Members Attending</h3>
                    <ul>
                        <li>Joe Schmo</li>
                    </ul>
                </section>
            </section>
        </>
    );
}

export default EventPage;