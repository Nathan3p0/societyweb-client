import React from 'react';

const EventsListItem = (props) => {
    return (
        <li>{props.date} | {props.name} | {props.time} | {props.location}</li>
    );
}

export default EventsListItem;