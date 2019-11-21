import React from 'react';

const AttendingMembersListItem = (props) => {
    return (
        <li className="tableRow">
            <div className="col col-1" data-label="Member Name">{props.name}</div>
            <div className="col col-2" data-label="Member Phone">{props.phone}</div>
            <div className="col col-3" data-label="Member Email">{props.email}</div>
            <div className="col col-4" data-label="RSVP Status">{props.attending}</div>
        </li>
    );
}

export default AttendingMembersListItem;