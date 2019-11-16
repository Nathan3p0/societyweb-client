import React from 'react';

const LoginInfoContext = React.createContext({
    memberJoin: false,
    leaderLogin: false,
    memberLogin: false,
    leaderLoginToggle: () => { }
});

export default LoginInfoContext;
