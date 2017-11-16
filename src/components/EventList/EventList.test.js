import React from 'react'
import {shallow} from 'enzyme'
import EventList from './EventList'

const createProps = () => ({
    events: [
        {
            id: 1,
            name: 'name',
            short_name: 'short_name',
            parent_name: 'category',
            start_datetime: new Date('1990/10/10')
        }, {
            id: 2,
            name: 'name',
            short_name: 'short_name',
            parent_name: 'category',
            start_datetime: new Date('1990/10/10')
        }
    ],
    fetchData: jest.fn()
})

describe('EventList', () => {
    it('renders same as snapshot', () => {
        const props = createProps()
        const wrapper = shallow(<EventList {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })
    it('calls fetchData', () => {
        const props = createProps()
        const wrapper = shallow(<EventList {...props}/>)
        expect(props.fetchData).toBeCalled()
    })
})
