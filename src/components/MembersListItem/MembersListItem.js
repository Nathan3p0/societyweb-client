import React from 'react';

const MembersListItem = (props) => {
    return (
        <li className="tableRow">
            <div className="col col-1" data-label="Full Name">{props.fullname}</div>
            <div className="col col-2" data-label="Username">{props.username}</div>
            <div className="col col-3" data-label="Phone Number">{props.phone}</div>
            <div className="col col-4" data-label="Email">{props.email}</div>
        </li>
    );
}

export default MembersListItem;