import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NewTeamSignUpSection from './NewTeamSignUpSection'

describe('Member Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NewTeamSignUpSection />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<NewTeamSignUpSection />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})