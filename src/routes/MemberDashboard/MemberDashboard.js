import React, { Component } from 'react';
import TeamInfoContext from '../../context/TeamInfoContext';
import MemberEventsList from '../../components/MemberEventsList/MemberEventsList';
import EventSignupWidget from '../../components/EventSignupWidget/EventSignupWidget';
import './MemberDashboard.css'
import MemberApiService from '../../services/member-api-service';

class MemberDashboard extends Component {
    static contextType = TeamInfoContext;

    state = {
        currentEvent: null,
        error: null,
        attending: '',
        success: false
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

        const { attending, currentEvent } = this.state;

        if (attending !== '') {
            this.setState({
                error: null
            })
        } else {
            this.setState({
                error: 'Please select an option.'
            })
        }

        const rsvp = {
            event_role: attending,
            event_id: currentEvent.id
        }

        MemberApiService.postNewRsvp(rsvp)
            .then(res => {
                this.setState({
                    error: null,
                    attending: '',
                    success: true
                })
            }
            )
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    render() {
        return (
            <section className="member__dashboard-main">
                <div className="member__dashboard-main--left">
                    <MemberEventsList findEvent={this.handleEventSelect} />
                </div>
                <div className="member__dashboard-main--right">
                    <EventSignupWidget event={this.state.currentEvent} handleInputChange={this.handleInputChange} handleSignupSubmit={this.handleSignupSubmit} error={this.state.error} success={this.state.success} />
                </div>
            </section>
        );
    }
}

export default MemberDashboard;