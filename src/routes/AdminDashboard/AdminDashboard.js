import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import AdminDashboardNav from '../../components/AdminDashboardNav/AdminDashboardNav';
import TeamStatsWidget from '../../components/TeamStatsWidget/TeamStatsWidget';
import InviteWidget from '../../components/InviteWidget/InviteWidget';
import EventsList from '../../components/EventsList/EventsList';
import EventPage from '../../components/EventPage/EventPage';

class AdminDashboard extends Component {
    state = {}

    render() {
        const tempEventsObjects = [
            {
                id: 1,
                event_date: '12/01/2019',
                event_time: '12:00:00',
                event_name: 'Cookie Booth',
                event_description: 'Cookie booth setup at local store',
                event_location: 'Harbor Freight'
            },
            {
                id: 2,
                event_date: '12/05/2019',
                event_time: '16:40:00',
                event_name: 'Cookie Booth',
                event_description: 'Cookie booth setup at local store',
                event_location: 'Kroger'
            }
        ]

        return (
            <>
                <AdminDashboardNav />
                <main>
                    <Switch>
                        <Route exact path="/admin">
                            <TeamStatsWidget name={'Girl Scout Troop 45093'} totalEvents={2} totalMembers={1} />
                            <EventsList events={tempEventsObjects} />
                            <InviteWidget />
                        </Route>
                        <Route exact path="/admin/events">
                            <EventsList events={tempEventsObjects} />
                        </Route>
                        <Route path="/admin/events/:id">
                            <EventPage />
                        </Route>
                    </Switch>
                </main>
            </>
        );
    }
}

export default AdminDashboard;