import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class LandingPage extends Component {

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
            </>
        );
    }
}

export default LandingPage;