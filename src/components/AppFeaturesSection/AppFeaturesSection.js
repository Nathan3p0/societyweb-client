import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './AppFeaturesSection.css';

const AppFeaturesSection = () => {
    return (
        <section className="features__main">
            <FeatureCard icon={'calendar-alt'} title={'Event Scheduling'} />
            <FeatureCard icon={'users'} title={'Team Management'} />
            <FeatureCard icon={'envelope'} title={'Messaging'} />
            <FeatureCard icon={'handshake'} title={'Payments'} />
        </section>
    );
}

export default AppFeaturesSection;