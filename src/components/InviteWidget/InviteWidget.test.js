import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import InviteWidget from './InviteWidget'

describe('Invite Widget Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<InviteWidget />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<InviteWidget />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})