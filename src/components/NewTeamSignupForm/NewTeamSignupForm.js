import React from 'react';
import './NewTeamSignupForm.css';

const NewTeamSignupForm = (props) => {

    const { fullNameError, usernameError, passwordError, emailError, phoneError, teamError, confirmError } = props.formErrors;

    return (
        <form onSubmit={props.handleSubmit}>
            <ul className="signup__form">
                <li>
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" name="full_name" id="fullname" placeholder="Name" value={props.name} onChange={props.handleInputChange} required />
                </li>
                {fullNameError && <li> <p className="formError">{fullNameError}</p> </li>}
                <li>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" placeholder="Username" value={props.username} onChange={props.handleInputChange} required />
                </li>
                {usernameError && <li> <p className="formError">{usernameError}</p> </li>}
                <li>
                    <label htmlFor="team-signup-password">Password:</label>
                    <input type="password" name="password" id="team-signup-password" placeholder="Password" value={props.password} onChange={props.handleInputChange} title="Password must contain 1 Upper & Lower Case Letter, Number and Special Character" required />
                </li>
                {passwordError && <li> <p className="formError">{passwordError}</p> </li>}
                <li>
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" name="confirmPassword" id="confirm-password" placeholder="Confirm Password" value={props.confirm} onChange={props.handleInputChange} title="Password must contain 1 Upper & Lower Case Letter, Number and Special Character" required />
                </li>
                {confirmError && <li> <p className="formError">{confirmError}</p> </li>}
                <li>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" placeholder="Email" value={props.email} onChange={props.handleInputChange} required />
                </li>
                {emailError && <li> <p className="formError">{emailError}</p> </li>}
                <li>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" name="phone" id="phone" placeholder="123-455-0505" value={props.phone} onChange={props.handleInputChange} required />
                </li>
                {phoneError && <li> <p className="formError">{phoneError}</p> </li>}
                <li>
                    <label htmlFor="group_name">Team Name</label>
                    <input type="text" name="group_name" id="group_name" placeholder="Team Name" value={props.team} onChange={props.handleInputChange} required />
                </li>
                {teamError && <li> <p className="formError">{teamError}</p> </li>}
                <li>
                    <button type="submit">Sign Up</button>
                </li>
            </ul>
        </form>
    );
}

export default NewTeamSignupForm;