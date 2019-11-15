import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props)
        return (
            <>
                <Header />
            </>
        );
    }
}

export default LandingPage;