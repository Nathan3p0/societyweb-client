import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MembersListItem from './MembersListItem'

describe('Members List Item Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<MembersListItem />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<MembersListItem />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})