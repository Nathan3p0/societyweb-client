import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TeamStatsWidget from './TeamStatsWidget'
import TeamInfoContext from '../../context/TeamInfoContext';

describe('Team Stats Widget Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TeamInfoContext.Provider value={{
                teamName: '',
                events: [],
                members: []
            }}>
                <TeamStatsWidget />
            </TeamInfoContext.Provider>
            , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(
            <TeamInfoContext.Provider value={{
                teamName: '',
                events: [],
                members: []
            }}>
                <TeamStatsWidget />
            </TeamInfoContext.Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})