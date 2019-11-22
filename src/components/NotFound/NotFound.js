import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    let history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <section className="notfound__main">
            <h1>404</h1>
            <h2>Oops! That page couldn't be found.</h2>
            <button onClick={handleGoBack}>Don't be lost anymore</button>
        </section>
    );
}

export default NotFound;