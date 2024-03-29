import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AttendingMembersList from './AttendingMembersList'

describe('Attending Member List Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<AttendingMembersList />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<AttendingMembersList />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})