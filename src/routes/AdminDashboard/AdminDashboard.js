import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import AdminDashboardNav from '../../components/AdminDashboardNav/AdminDashboardNav';
import TeamStatsWidget from '../../components/TeamStatsWidget/TeamStatsWidget';
import InviteWidget from '../../components/InviteWidget/InviteWidget';
import EventsList from '../../components/EventsList/EventsList';
import EventPage from '../../components/EventPage/EventPage';
import MemberManagementPage from '../../components/MemberManagementPage/MemberManagementPage';
import NewEventForm from '../../components/NewEventForm/NewEventForm';
import AdminApiService from '../../services/admin-api-service';
import LoginInfoContext from '../../context/LoginInfoContext';
import TeamInfoContext from '../../context/TeamInfoContext';
import './AdminDashboard.css';

class AdminDashboard extends Component {
    static contextType = TeamInfoContext;

    state = {
        error: null
    }

    componentDidMount() {
        if (this.context.members.length === 0) {
            this.context.fetchAllMembers();
        }
    }

    handleNewEventSubmit = (e) => {
        e.preventDefault();

        const { event_name, event_time, event_date, event_location, event_description } = e.target;

        const newEvent = {
            event_name: event_name.value,
            event_time: event_time.value,
            event_date: event_date.value,
            event_location: event_location.value,
            event_description: event_description.value
        }

        this.setState({
            error: null
        })

        AdminApiService.postNewEvent(newEvent)
            .then(res => {
                event_name.value = '';
                event_time.value = '';
                event_date.value = '';
                event_location.value = '';
                event_description.value = '';
                this.handleNewEventSuccess(res.id);
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    handleNewEventSuccess = (id) => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || `/admin/events/${id}`;
        history.push(destination);
    }

    render() {

        const { events } = this.context

        return (
            <>
                <AdminDashboardNav />
                <main>
                    <Switch>
                        <Route exact path="/admin">
                            <TeamStatsWidget name={'Girl Scout Troop 45093'} totalEvents={events.length} totalMembers={1} />
                            <EventsList limit={5} />
                            <InviteWidget />
                        </Route>
                        <Route exact path="/admin/events">
                            <section className="admin__events">
                                <EventsList limit={false} />
                                <NewEventForm error={this.state.error} handleSubmit={this.handleNewEventSubmit} />
                            </section>
                        </Route>
                        <Route path="/admin/events/:id">
                            <EventPage />
                        </Route>
                        <Route>
                            <MemberManagementPage />
                        </Route>
                    </Switch>
                </main>
            </>
        );
    }
}

export default AdminDashboard;