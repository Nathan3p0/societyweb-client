import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MainNav from './MainNav'
import LoginInfoContext from '../../context/LoginInfoContext';

describe('Main Nav Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <LoginInfoContext.Provider value={{
                setLoginStatusFalse: () => { },
                leaderLoginToggle: () => { },
                memberLoginToggle: () => { }
            }}>
                <MainNav />
            </LoginInfoContext.Provider>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(
            <LoginInfoContext.Provider value={{
                setLoginStatusFalse: () => { },
                leaderLoginToggle: () => { },
                memberLoginToggle: () => { }
            }}>
                <MainNav />
            </LoginInfoContext.Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})