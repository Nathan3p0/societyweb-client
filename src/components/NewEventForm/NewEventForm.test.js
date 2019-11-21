import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NewEventForm from './NewEventForm'

describe('New Event Form Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NewEventForm />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<NewEventForm />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})