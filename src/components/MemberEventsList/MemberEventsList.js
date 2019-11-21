import React, { Component } from 'react';
import MemberEventsListItem from '../MemberEventsListItem/MemberEventsListItem';
import TeamInfoContext from '../../context/TeamInfoContext';
import './MemberEventsList.css'

class MemberEventsList extends Component {
    static contextType = TeamInfoContext;

    state = {
    }

    componentDidMount() {

    }

    render() {
        const { events } = this.context || [];
        const listItems = events.map((event) =>
            <MemberEventsListItem key={event.id}
                id={event.id}
                date={event.event_date}
                name={event.event_name}
                time={event.event_time}
                location={event.event_location} findEvent={this.props.findEvent} />
        )
        return (
            <section className="member__events">
                <h3>Current Events:</h3>
                <ul className='responsiveTable'>
                    <EventsTableHeader />
                    {listItems}
                </ul>
            </section>
        );
    }
}

export default MemberEventsList;


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