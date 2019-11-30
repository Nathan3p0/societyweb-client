import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import AttendingMemberList from '../AttendingMembersList/AttendingMembersList';
import AdminApiService from '../../services/admin-api-service';
import './EventPage.css';

const EventPage = (props) => {
    let history = useHistory();
    const { id } = props.match.params;

    const [error, setError] = useState(null);
    const [event, setEvent] = useState({ event_name: 'loading' });

    const fetchEvents = () => {
        AdminApiService.fetchEventById(id)
            .then(res =>
                setEvent(res)
            )
            .catch(err =>
                setError(err)
            )
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    const handleGoBack = () => {
        history.goBack();
    }
    const date = new Date(event.event_date)
    return (
        <>
            <section className="eventPage__main">
                <section className="eventPage__event-info">
                    {error && <p className="error">{error}</p>}
                    <h3>Event: {event.event_name}</h3>
                    <div className="eventPage__event-info--content">
                        <p><strong>Date:</strong> {moment(date).format('MMMM Do YYYY')}</p>
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