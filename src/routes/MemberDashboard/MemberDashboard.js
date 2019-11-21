import React, { Component } from 'react';
import TeamInfoContext from '../../context/TeamInfoContext';
import MemberEventsList from '../../components/MemberEventsList/MemberEventsList';
import EventSignupWidget from '../../components/EventSignupWidget/EventSignupWidget';
import './MemberDashboard.css'

class MemberDashboard extends Component {
    static contextType = TeamInfoContext;

    state = {
        currentEvent: null,
        error: null,
        attending: ''
    }

    componentDidMount() {
        this.context.fetchAllMemberEvents();
    }

    handleEventSelect = (id) => {
        const event = this.context.events.find(event => event.id === id)
        this.setState({
            currentEvent: event
        })
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSignupSubmit = (e) => {
        e.preventDefault();

        const { attending } = this.state;

        if (attending !== '') {
            this.setState({
                error: null
            })
        } else {
            this.setState({
                error: 'Please select an option.'
            })
        }
    }

    render() {
        return (
            <section className="member__dashboard-main">
                <div className="member__dashboard-main--left">
                    <MemberEventsList findEvent={this.handleEventSelect} />
                </div>
                <div className="member__dashboard-main--right">
                    <EventSignupWidget event={this.state.currentEvent} handleInputChange={this.handleInputChange} handleSignupSubmit={this.handleSignupSubmit} error={this.state.error} />
                </div>
            </section>
        );
    }
}

export default MemberDashboard;