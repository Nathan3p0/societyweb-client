import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminDashboardNav.css'

const AdminDashboardNav = () => {
    return (
        <nav>
            <ul className="admin__nav">
                <li><NavLink to="/admin" activeClassName="selected">Home</NavLink></li>
                <li><NavLink to="/admin/members" activeClassName="selected">Team Members</NavLink></li>
                <li><NavLink to="/admin/events" activeClassName="selected">Event Manager</NavLink></li>
                <li><NavLink to="/admin/alerts" activeClassName="selected">Team Alerts</NavLink></li>
            </ul>
        </nav>
    );
}

export default AdminDashboardNav;