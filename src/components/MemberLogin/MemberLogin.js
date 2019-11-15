import React from 'react';

const MemberLogin = () => {
    return (
        <form>
            <h3>Team Member Login</h3>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
            <button type="submit">Login</button>
        </form>
    );
}

export default MemberLogin;