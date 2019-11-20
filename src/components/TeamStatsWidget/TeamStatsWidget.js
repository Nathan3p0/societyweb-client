import React, { useContext } from 'react';
import TeamInfoContext from '../../context/TeamInfoContext';
import './TeamStatsWidget.css';

const TeamStatsWidget = (props) => {
    const team = useContext(TeamInfoContext);

    return (
        <section className="teamstats__widget">
            <h3 className="teamstats__widget--header">{team.teamName}</h3>
            <div className="teamstats__widget--content">
                <h3>Welcome {team.memberName}!</h3>
                <h4>Current Event Count: <span className="teamstats__widget--count">{team.events.length || 0}</span></h4>
                <h4>Active Member Count: <span className="teamstats__widget--count">{team.members.length || 0}</span></h4>
            </div>
        </section>
    );
}

TeamStatsWidget.defaultProps = {
    admin: 'Loading'
}

export default TeamStatsWidget;