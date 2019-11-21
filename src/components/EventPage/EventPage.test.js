import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom';
import EventPage from './EventPage'

describe('Event Page Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<MemoryRouter><EventPage match={{ params: { id: 1 } }} /></MemoryRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<MemoryRouter><EventPage match={{ params: { id: 1 } }} /></MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})