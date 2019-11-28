import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './AppFeaturesSection.css';

const AppFeaturesSection = () => {


    const featureDescriptions = {
        messaging: 'Our email system integrates with your team roster so you can easily communicate with your members from one system.',
        events: 'Keep your upcoming events simple. Create event listings on the web and keep track of event registration.',
        management: 'Always have an up-to-date roster of all members currently on your team. You will always have their contact information just a click away.',
        payments: 'Coming Soon... With our in app payment feature, you can allow members to pay for event registration fees with ease. No more hassling with keeping track of in person payments.'
    }

    return (
        <section className="features__main">
            <FeatureCard icon={'calendar-alt'} title={'Event Scheduling'} description={featureDescriptions.events} />
            <FeatureCard icon={'users'} title={'Team Management'} description={featureDescriptions.management} />
            <FeatureCard icon={'envelope'} title={'Messaging'} description={featureDescriptions.messaging} />
            <FeatureCard icon={'handshake'} title={'Payments'} description={featureDescriptions.payments} />
        </section>
    );
}

export default AppFeaturesSection;