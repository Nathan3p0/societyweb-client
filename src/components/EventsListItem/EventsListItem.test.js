import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import EventsListItem from './EventsListItem'
import { BrowserRouter } from 'react-router-dom'

describe('Events List item Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <EventsListItem />
            </BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <EventsListItem />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})