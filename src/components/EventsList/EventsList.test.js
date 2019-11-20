import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import EventsList from './EventsList'

describe('Member Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<EventsList />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<EventsList />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})