import React from 'react';
import './NewTeamSignupForm.css';

const NewTeamSignupForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <ul className="signup__form">
                <li>
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" name="full_name" id="fullname" placeholder="name" required />
                </li>
                <li>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" placeholder="username" required />
                </li>
                <li>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="password" required />
                </li>
                <li>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" placeholder="email" required />
                </li>
                <li>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" name="phone" id="phone" placeholder="123-455-0505" required />
                </li>
                <li>
                    <label htmlFor="group_name">Team Name</label>
                    <input type="text" name="group_name" id="group_name" placeholder="team name" required />
                </li>
                <li>
                    <button type="submit">Sign Up</button>
                </li>
            </ul>
        </form>
    );
}

export default NewTeamSignupForm;