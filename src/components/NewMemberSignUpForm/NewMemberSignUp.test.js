import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NewMemberSignUp from './NewMemberSignUp'

describe('Member Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NewMemberSignUp />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<NewMemberSignUp />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})