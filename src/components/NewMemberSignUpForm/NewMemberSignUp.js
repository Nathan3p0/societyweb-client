import React, { Component } from 'react';
import './NewMemberSignUp.css'

class NewMemberSignUp extends Component {
    state = {}
    render() {
        return (
            <>
                <form>
                    <ul className="newMember__signup-form">
                        <h3>New Member Signup</h3>
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
                            <label htmlFor="invite_code">Invite Code:</label>
                            <input type="text" name="invite_code" id="invite_code" required />
                        </li>
                        <li>
                            <button type="submit">Sign Up</button>
                        </li>
                    </ul>
                </form>
            </>
        );
    }
}

export default NewMemberSignUp;