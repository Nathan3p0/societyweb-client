import React, { useContext } from 'react';
import LoginInfoContext from '../../context/LoginInfoContext';

const TeamStatsWidget = (props) => {
    const info = useContext(LoginInfoContext);
    console.log(info)
    return (
        <section>
            <h3>{props.name}</h3>
            <h3>Welcome !</h3>
            <h4>Current Event Count:</h4>
            <p>{props.totalEvents}</p>
            <h4>Active Member Count:</h4>
            <p>{props.totalMembers}</p>
        </section>
    );
}

TeamStatsWidget.defaultProps = {
    admin: 'Loading'
}

export default TeamStatsWidget;