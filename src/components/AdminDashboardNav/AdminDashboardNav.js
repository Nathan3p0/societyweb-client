import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminDashboardNav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/admin" activeClassName="selected">Home</NavLink></li>
                <li><NavLink to="/admin/members" activeClassName="selected">Team Members</NavLink></li>
                <li><NavLink to="/admin/events" activeClassName="selected">Event Manager</NavLink></li>
                <li><NavLink to="/admin/alerts" activeClassName="selected">Team Alerts</NavLink></li>
                <li><NavLink to="/admin/invite" activeClassName="selected">Invite New Member</NavLink></li>
            </ul>
        </nav>
    );
}

export default AdminDashboardNav;