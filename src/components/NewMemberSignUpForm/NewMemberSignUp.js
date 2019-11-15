import React from 'react';

const NewMemberSignUp = () => {
    return (
        <form>
            <h3>New Member Signup</h3>
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
            <label htmlFor="invite_code">Invite Code:</label>
            <input type="text" name="invite_code" id="invite_code" required />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default NewMemberSignUp;