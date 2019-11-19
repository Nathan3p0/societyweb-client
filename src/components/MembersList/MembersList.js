import React, { useContext } from 'react';
import MembersListItem from '../MembersListItem/MembersListItem';
import TeamInfoContext from '../../context/TeamInfoContext';

const MembersList = () => {
    const value = useContext(TeamInfoContext);
    let memberList
    if (value.members.length === 0) {
        memberList = <p>{value.error}</p>
    } else {
        memberList = value.members.map(member =>
            <MembersListItem key={member.id} />
        )
    }
    return (
        <ul>
            {memberList}
        </ul>
    );
}

export default MembersList;