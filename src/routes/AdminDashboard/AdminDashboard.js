import React, { Component } from 'react';
import AdminDashboardNav from '../../components/AdminDashboardNav/AdminDashboardNav';
import TeamStatsWidget from '../../components/TeamStatsWidget/TeamStatsWidget';
import InviteWidget from '../../components/InviteWidget/InviteWidget';
import EventsList from '../../components/EventsList/EventsList';

class AdminDashboard extends Component {
    state = {}

    [
        { event_date: '12/01/2019', event_time: '12:00:00', event_name: 'Slime Fest 2019', event_description: 'The biggest slime convention in the world.', event_group: 1 }
    ]

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
                    <TeamStatsWidget />
                    <EventsList events={tempEventsObjects} />
                    <InviteWidget />
                </main>
            </>
        );
    }
}

export default AdminDashboard;