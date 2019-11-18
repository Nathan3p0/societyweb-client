import React from 'react';
import './NewTeamSignupForm.css';

const NewTeamSignupForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <ul className="flex-outer">
                <li>
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" name="full_name" id="fullname" required />
                </li>
                <li>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" required />
                </li>
                <li>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required />
                </li>
                <li>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" required />
                </li>
                <li>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" name="phone" id="phone" required />
                </li>
                <li>
                    <label htmlFor="group_name">Group Name</label>
                    <input type="text" name="group_name" id="group_name" required />
                </li>
                <li>
                    <button type="submit">Sign Up</button>
                </li>
            </ul>
        </form>
    );
}

export default NewTeamSignupForm;