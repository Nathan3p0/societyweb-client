import React, { useContext } from 'react';
import LeaderLogin from '../LeaderLogin/LeaderLogin';
import MemberLogin from '../MemberLogin/MemberLogin';
import NewMemberSignUp from '../NewMemberSignUpForm/NewMemberSignUp'
import LoginInfoContext from '../../context/LoginInfoContext';
import './Header.css'

const Header = (props) => {
    const loginInfo = useContext(LoginInfoContext)
    let loginDisplay
    if (loginInfo.memberJoin) {
        loginDisplay = <NewMemberSignUp />
    } else if (loginInfo.leaderLogin) {
        loginDisplay = <LeaderLogin leaderLoginSuccess={props.leaderLoginSuccess} />
    } else if (loginInfo.memberLogin) {
        loginDisplay = <MemberLogin memberLoginSuccess={props.memberLoginSuccess} />
    } else {
        loginDisplay = <button className="memberJoin__btn" onClick={loginInfo.memberJoinToggle}>Have an invite code?</button>
    }

    return (
        <header className="landingpage__header">
            <div className="landingpage__header-message">
                <h2>Keep Your Team Connected!</h2>
                <p>Join Society Web...</p>
            </div>
            <div className="landingpage__header-login">
                {loginDisplay}
            </div>
        </header>
    );
}

export default Header;