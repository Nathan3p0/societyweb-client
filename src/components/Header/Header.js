import React from 'react';
import LeaderLogin from '../LeaderLogin/LeaderLogin';
import MemberLogin from '../MemberLogin/MemberLogin';
import NewMemberSignUp from '../NewMemberSignUpForm/NewMemberSignUp'

const Header = () => {
    return (
        <header>
            <h2>Keep Your Team Connected!</h2>
            <p>Join Society Web...</p>
            <button>Have an invite code?</button>
            <NewMemberSignUp />
        </header>
    );
}

export default Header;