import React from 'react';
import { Link } from 'react-router-dom';

const EventsListItem = (props) => {
    return (
        <Link to={`/admin/events/${props.id}`}>
            <li className="tableRow">
                <div className="col col-1" data-label="Event Date">{props.date}</div>
                <div className="col col-2" data-label="Event Name">{props.name}</div>
                <div className="col col-3" data-label="Event Time">{props.time}</div>
                <div className="col col-4" data-label="Customer Phone">{props.location}</div>
            </li>
        </Link>
    );
}

EventsListItem.defaultProps = {
    id: 0,
    date: '12/12/79',
    name: 'Default Name',
    time: '11:11:11',
    location: 'Default Location'
}

export default EventsListItem;