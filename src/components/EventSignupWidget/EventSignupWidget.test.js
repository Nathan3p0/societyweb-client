import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import EventSignupWidget from './EventSignupWidget'

describe('Event Signup Widget Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<EventSignupWidget />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<EventSignupWidget />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})