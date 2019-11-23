import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FeatureCard.css';

const FeatureCard = (props) => {
    return (
        <div className="features__main-card">
            <FontAwesomeIcon icon={props.icon} className="icon" size='6x' />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default FeatureCard;