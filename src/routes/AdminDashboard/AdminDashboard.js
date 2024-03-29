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
import TeamInfoContext from '../../context/TeamInfoContext';
import NotFound from '../../components/NotFound/NotFound';
import NewAlertForm from '../../components/NewAlertForm/NewAlertForm';
import './AdminDashboard.css';
import MembersList from '../../components/MembersList/MembersList';

class AdminDashboard extends Component {
    static contextType = TeamInfoContext;

    state = {
        error: null,
        success: false,
        emails: []
    }

    componentDidMount() {
        this.context.fetchAdminInfo();
        this.context.fetchAllEvents();
        this.context.fetchAllMembers();
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

    handleAddEmail = (email, e) => {
        const { emails } = this.state;
        if (emails.includes(email)) {
            this.setState({
                error: 'This email is already added.'
            })
        } else {
            this.setState({
                error: null,
                emails: [...this.state.emails, email]
            })
        }
    }

    handleEmailFormSubmit = (e) => {
        e.preventDefault();

        const { from, subject, text } = e.target;

        const message = {
            to: this.state.emails,
            from: from.value,
            subject: subject.value,
            text: text.value
        }

        this.setState({ error: null });

        AdminApiService.postNewEmail(message)
            .then(res => {

                from.value = '';
                subject.value = '';
                text.value = '';

                this.setState({
                    success: true,
                    emails: []
                })
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }

    render() {
        const { events } = this.context

        return (
            <>
                <AdminDashboardNav />
                <main>
                    <Switch>
                        <Route exact path="/admin">
                            <section className="admin__dashboard-main">
                                <div className="admin__dashboard-main--left">
                                    <TeamStatsWidget name={'Girl Scout Troop 45093'} totalEvents={events.length} totalMembers={1} />
                                    <EventsList limit={5} />
                                </div>
                                <div className="admin__dashboard-main--right">
                                    <InviteWidget />
                                </div>
                            </section>
                        </Route>
                        <Route exact path="/admin/events">
                            <section className="admin__events">
                                <div className="admin__events-list">
                                    <EventsList limit={false} />
                                </div>
                                <div className="admin__events-form">
                                    <NewEventForm error={this.state.error} handleSubmit={this.handleNewEventSubmit} />
                                </div>
                            </section>
                        </Route>
                        <Route path="/admin/events/:id" component={EventPage} />
                        <Route path="/admin/members" component={MemberManagementPage} />
                        <Route path="/admin/alerts">
                            <section className="admin__alerts">
                                <div className="admin__alerts-members">
                                    <MembersList limit={false} addEmail={this.handleAddEmail} />
                                </div>
                                <div className="admin__alerts-form">
                                    <NewAlertForm error={this.state.error} success={this.state.success} handleSubmit={this.handleEmailFormSubmit} emails={this.state.emails} />
                                </div>
                            </section>
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </>
        );
    }
}

export default AdminDashboard;