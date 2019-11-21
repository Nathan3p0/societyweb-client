import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MemberEventsListItem from './MemberEventsListItem'

describe('Member Events List Item Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<MemberEventsListItem />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<MemberEventsListItem />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})