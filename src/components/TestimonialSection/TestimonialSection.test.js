import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TestimonialSection from './TestimonialSection'

describe('New Event Form Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<TestimonialSection />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<TestimonialSection />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})