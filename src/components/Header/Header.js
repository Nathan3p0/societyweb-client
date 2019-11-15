import React from 'react';
import LeaderLogin from '../LeaderLogin/LeaderLogin';
import MemberLogin from '../MemberLogin/MemberLogin';
import NewMemberSignUp from '../NewMemberSignUpForm/NewMemberSignUp'

const Header = (props) => {
    return (
        <header>
            <h2>Keep Your Team Connected!</h2>
            <p>Join Society Web...</p>
            <button>Have an invite code?</button>
            <LeaderLogin leaderLoginSuccess={props.leaderLoginSuccess} memberLoginSuccess={props.memberLoginSuccess} />
        </header>
    );
}

export default Header;