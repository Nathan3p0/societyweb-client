import React, { useContext } from 'react';
import MembersListItem from '../MembersListItem/MembersListItem';
import TeamInfoContext from '../../context/TeamInfoContext';
import './MembersList.css'

const MembersList = () => {
    const value = useContext(TeamInfoContext);
    let memberList
    if (value.members.length === 0) {
        memberList = <p className="error">{value.error}</p>
    } else {
        memberList = value.members.map(member =>
            <MembersListItem key={member.id} username={member.username} fullname={member.full_name} phone={member.phone} email={member.email} />
        )
    }
    return (
        <section className="membersList__main">
            <h3>Current Members:</h3>
            <ul className='responsiveTable'>
                <MembersTableHeader />
                {memberList}
            </ul>
        </section>
    );
}

export default MembersList;

const MembersTableHeader = () => {
    return (
        <li className='tableHeader'>
            <div className='col col-1'>Full Name</div>
            <div className='col col-2'>Username</div>
            <div className='col col-3'>Phone Number</div>
            <div className='col col-4'>Email</div>
        </li>
    );
}