import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MemberManagementPage from './MemberManagementPage'

describe('Member Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<MemberManagementPage />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<MemberManagementPage />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})