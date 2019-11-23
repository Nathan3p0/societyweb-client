import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './AppFeaturesSection.css';

const AppFeaturesSection = () => {
    const messaging = 'Our email system integrates with your team roster so you can easily communicate with your members from one system.';

    const events = 'Keep your upcoming events simple. Create event listings on the web and keep track of event registration.'

    const management = 'Always have an up-to-date roster of all members currently on your team. You will always have their contact information just a click away.'

    const payments = 'Coming Soon... With our in app payment feature, you can allow members to pay for event registration fees with ease. No more hassling with keeping track of in person payments.'

    return (
        <section className="features__main">
            <FeatureCard icon={'calendar-alt'} title={'Event Scheduling'} description={events} />
            <FeatureCard icon={'users'} title={'Team Management'} description={management} />
            <FeatureCard icon={'envelope'} title={'Messaging'} description={messaging} />
            <FeatureCard icon={'handshake'} title={'Payments'} description={payments} />
        </section>
    );
}

export default AppFeaturesSection;