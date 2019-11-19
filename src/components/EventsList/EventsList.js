import React, { Component } from 'react';
import EventListItem from '../EventsListItem/EventsListItem';
import AdminApiService from '../../services/admin-api-service';
import LoginInfoContext from '../../context/LoginInfoContext';

class EventsList extends Component {
    static contextType = LoginInfoContext;

    state = {
        events: [],
        error: null
    }

    componentDidMount() {
        this.context.fetchAllEvents();
    }

    render() {
        const { events } = this.context || [];
        let itemAmount = this.props.limit || events.length;
        const listItems = events.slice(0, itemAmount).map((event) =>
            <EventListItem key={event.id}
                id={event.id}
                date={event.event_date}
                name={event.event_name}
                time={event.event_time}
                location={event.event_location} />
        )
        return (
            <section>
                <h3>Events</h3>
                <ul>
                    {listItems}
                </ul>
            </section>
        );
    }
}

export default EventsList;