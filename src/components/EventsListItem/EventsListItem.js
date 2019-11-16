import React from 'react';
import { Link } from 'react-router-dom';

const EventsListItem = (props) => {
    return (
        <li><Link to={`/admin/events/${props.id}`}>{props.date} | {props.name} | {props.time} | {props.location}</Link></li>
    );
}

export default EventsListItem;