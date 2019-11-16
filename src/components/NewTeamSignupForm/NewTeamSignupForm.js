import React from 'react';

const NewTeamSignupForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" name="full_name" id="fullname" required />
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" required />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" name="phone" id="phone" required />
            <label htmlFor="group_name">Group Name</label>
            <input type="text" name="group_name" id="group_name" required />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default NewTeamSignupForm;