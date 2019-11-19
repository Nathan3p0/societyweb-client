import React, { useContext } from 'react';
import TeamInfoContext from '../../context/TeamInfoContext';

const TeamStatsWidget = (props) => {
    const team = useContext(TeamInfoContext);

    return (
        <section>
            <h3>{props.name}</h3>
            <h3>Welcome !</h3>
            <h4>Current Event Count:</h4>
            <p>{team.events.length || 0}</p>
            <h4>Active Member Count:</h4>
            <p>{team.members.length || 0}</p>
        </section>
    );
}

TeamStatsWidget.defaultProps = {
    admin: 'Loading'
}

export default TeamStatsWidget;