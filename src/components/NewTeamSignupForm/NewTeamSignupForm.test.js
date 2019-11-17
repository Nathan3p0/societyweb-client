import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NewTeamSignupForm from './NewTeamSignupForm'

describe('Member Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NewTeamSignupForm />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<NewTeamSignupForm />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})