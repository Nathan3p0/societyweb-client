import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AdminDashboardNav from './AdminDashboardNav'

describe('Member Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<AdminDashboardNav />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<AdminDashboardNav />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})