import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import EventsList from './EventsList'
import LoginInfoContext from '../../context/LoginInfoContext';

describe('Events List Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <LoginInfoContext.Provider value={{ events: [] }}>
                <EventsList />
            </LoginInfoContext.Provider>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(
            <LoginInfoContext.Provider value={{ events: [] }}>
                <EventsList />
            </LoginInfoContext.Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})