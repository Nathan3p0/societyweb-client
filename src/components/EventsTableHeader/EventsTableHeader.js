import React from 'react';

const EventsTableHeader = () => {
    return (
        <li className='tableHeader'>
            <div className='col col-1'>Date Registered</div>
            <div className='col col-2'>Customer Name</div>
            <div className='col col-3'>Customer Email</div>
            <div className='col col-4'>Customer Phone #</div>
        </li>
    );
}

export default EventsTableHeader;