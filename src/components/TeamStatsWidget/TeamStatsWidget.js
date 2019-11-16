import React from 'react';

const TeamStatsWidget = (props) => {
    return (
        <section>
            <h3>{props.name}</h3>
            <h4>Current Event Count:</h4>
            <p>{props.totalEvents}</p>
            <h4>Active Member Count:</h4>
            <p>{props.totalMembers}</p>
        </section>
    );
}

export default TeamStatsWidget;