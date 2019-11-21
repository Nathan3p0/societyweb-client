import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MemberEventsList from './MemberEventsList'
import TeamInfoContext from '../../context/TeamInfoContext';

describe('Member Events List Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TeamInfoContext.Provider value={{ events: [] }}>
                <MemberEventsList />
            </TeamInfoContext.Provider>
            , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(
            <TeamInfoContext.Provider value={{ events: [] }}>
                <MemberEventsList />
            </TeamInfoContext.Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})