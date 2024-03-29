import React from 'react';
import moment from 'moment';

const MemberEventsListItem = (props) => {
    return (
        <li className="tableRow" onClick={() => props.findEvent(props.id)}>
            <div className="col col-1" data-label="Event Date">{moment(props.date).format('MMMM Do YYYY')}</div>
            <div className="col col-2" data-label="Event Name">{props.name}</div>
            <div className="col col-3" data-label="Event Time">{props.time}</div>
            <div className="col col-4" data-label="Customer Phone">{props.location}</div>
        </li>
    );
}

export default MemberEventsListItem;