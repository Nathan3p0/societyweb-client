import React from 'react';
import { useHistory } from 'react-router-dom';

const EventPage = () => {
    let history = useHistory();

    const handleGoBack = () => {
        history.push('/admin/events')
    }

    return (
        <>
            <h1>I am the event page</h1>
            <button onClick={handleGoBack}>Go Back</button>
        </>
    );
}

export default EventPage;