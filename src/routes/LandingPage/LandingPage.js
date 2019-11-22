import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import NewTeamSignUpSection from '../../components/NewTeamSignUpSection/NewTeamSignUpSection';
import LoginInfoContext from '../../context/LoginInfoContext';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import AppFeaturesSection from '../../components/AppFeaturesSection/AppFeaturesSection';

class LandingPage extends Component {
    static contextType = LoginInfoContext;

    state = {

    }

    handleLeaderLoginSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || `/admin`;
        history.push(destination);
    }

    handleMemberLoginSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || `/member`;
        history.push(destination);
    }

    render() {
        return (
            <>
                <Header leaderLoginSuccess={this.handleLeaderLoginSuccess} memberLoginSuccess={this.handleMemberLoginSuccess} />
                <main>
                    <NewTeamSignUpSection />
                    <TestimonialSection />
                    <AppFeaturesSection />
                </main>
            </>
        );
    }
}

export default LandingPage;