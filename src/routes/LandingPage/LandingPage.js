import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class LandingPage extends Component {

    state = {

    }

    handleLeaderLoginSuccess = (id) => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || `/admin/${id}`;
        history.push(destination);
    }

    handleMemberLoginSuccess = (id) => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || `/member/${id}`;
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