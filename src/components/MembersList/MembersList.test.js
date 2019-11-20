import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MembersList from './MembersList'

describe('Member Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<MembersList />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<MembersList />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})