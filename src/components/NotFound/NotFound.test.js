import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NotFound from './NotFound'

describe('New Event Form Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NotFound />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<NotFound />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})