import React from 'react';
import { Link } from 'react-router-dom';

const EventsListItem = (props) => {
    return (
        <li><Link to={`/admin/events/${props.id}`}>{props.date} | {props.name} | {props.time} | {props.location}</Link></li>
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