import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TeamInfoContext from '../../context/TeamInfoContext';
import AttendingMemberList from '../AttendingMembersList/AttendingMembersList';
import './EventPage.css';

const EventPage = (props) => {
    let history = useHistory();
    const value = useContext(TeamInfoContext);
    const { id } = props.match.params;
    const event = value.events.find(event => event.id === id);

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <>
            <section className="eventPage__main">
                <section className="eventPage__event-info">
                    <h3>Event: {event.event_name}</h3>
                    <div className="eventPage__event-info--content">
                        <p><strong>Date:</strong> {event.event_date}</p>
                        <p><strong>Time:</strong> {event.event_time}</p>
                        <p><strong>Location:</strong> {event.event_location}</p>
                        <p><strong>Description:</strong> {event.event_description}</p>
                        <button onClick={handleGoBack}>Go Back</button>
                    </div>
                </section>
                <section className="eventPage__event-attending">
                    <AttendingMemberList id={id} />
                </section>
            </section>
        </>
    );
}

export default EventPage;