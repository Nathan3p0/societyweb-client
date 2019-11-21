import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AttendingMembersListItem from './AttendingMembersListItem'

describe('Attending Member List Item Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<AttendingMembersListItem />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<AttendingMembersListItem />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})