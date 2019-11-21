import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MemberLogin from './MemberLogin'
import LoginInfoContext from '../../context/LoginInfoContext';

describe('Member Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <LoginInfoContext.Provider value={{ memberJoinToggle: () => { } }}>
                <MemberLogin />
            </LoginInfoContext.Provider>
            , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(
            <LoginInfoContext.Provider value={{ memberJoinToggle: () => { } }}>
                <MemberLogin />
            </LoginInfoContext.Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})