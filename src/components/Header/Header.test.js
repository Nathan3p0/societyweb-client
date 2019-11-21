import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Header from './Header'
import LoginInfoContext from '../../context/LoginInfoContext';

describe('Header Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <LoginInfoContext.Provider value={{ memberJoin: true }}>
                <Header />
            </LoginInfoContext.Provider>
            , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(
            <LoginInfoContext.Provider value={{ memberJoin: true }}>
                <Header />
            </LoginInfoContext.Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})