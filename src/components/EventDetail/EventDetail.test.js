import React from 'react'
import {shallow, mount} from 'enzyme'
import EventDetail from './EventDetail'
import moment from 'moment'
import {MemoryRouter} from 'react-router-dom'

const createProps = () => ({
    id: 1,
    event: {
        id: 1,
        name: 'name',
        short_name: 'short_name',
        parent_name: 'category',
        start_datetime: new Date('1990/10/10')
    },
    fetchData: jest.fn()
})

describe('EventDetail', () => {
    it('renders same as snapshot', () => {
        const props = createProps()
        const wrapper = shallow(<EventDetail {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })
    it('calls fetchData', () => {
        const props = createProps()
        const wrapper = mount(
            <MemoryRouter>
                <EventDetail {...props}/>
            </MemoryRouter>
        )
        expect(props.fetchData).toBeCalled()
    })
})
