import React from 'react';
import './NewTeamSignupForm.css';

const NewTeamSignupForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <ul className="signup__form">
                <li>
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" name="full_name" id="fullname" placeholder="Name" required />
                </li>
                <li>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" placeholder="Username" required />
                </li>
                <li>
                    <label htmlFor="team-signup-password">Password:</label>
                    <input type="password" name="password" id="team-signup-password" placeholder="Password" required />
                </li>
                <li>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" placeholder="Email" required />
                </li>
                <li>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" name="phone" id="phone" placeholder="123-455-0505" required />
                </li>
                <li>
                    <label htmlFor="group_name">Team Name</label>
                    <input type="text" name="group_name" id="group_name" placeholder="Team Name" required />
                </li>
                <li>
                    <button type="submit">Sign Up</button>
                </li>
            </ul>
        </form>
    );
}

export default NewTeamSignupForm;