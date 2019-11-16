import React from 'react';
import EventListItem from '../EventsListItem/EventsListItem'

const EventsList = (props) => {
    const { events } = props;
    const listItems = events.map((event) =>
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

export default EventsList;