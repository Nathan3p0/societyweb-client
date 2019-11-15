import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MainNav from './MainNav'

describe('Member Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<MainNav />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<MainNav />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})