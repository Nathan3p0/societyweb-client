import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import LeaderLogin from './LeaderLogin'

describe('Leader Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<LeaderLogin />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<LeaderLogin />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})