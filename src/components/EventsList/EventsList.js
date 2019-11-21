import React, { Component } from 'react';
import EventListItem from '../EventsListItem/EventsListItem';
import LoginInfoContext from '../../context/LoginInfoContext';
import './EventsList.css'

class EventsList extends Component {
    static contextType = LoginInfoContext;

    state = {
        events: [],
        error: null
    }

    componentDidMount() {

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
            <section className="events__list">
                <h3>Current Events:</h3>
                <ul className='responsiveTable'>
                    <EventsTableHeader />
                    {listItems}
                </ul>
            </section>
        );
    }
}

export default EventsList;


const EventsTableHeader = () => {
    return (
        <li className='tableHeader'>
            <div className='col col-1'>Event Date</div>
            <div className='col col-2'>Event Name</div>
            <div className='col col-3'>Event Time</div>
            <div className='col col-4'>Event Location</div>
        </li>
    );
}