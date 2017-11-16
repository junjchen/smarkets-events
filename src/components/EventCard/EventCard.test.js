import React from 'react'
import {shallow} from 'enzyme'
import EventCard from './EventCard'

const createProps = () => ({
    name: 'name',
    parent_name: 'category',
    onSelect: jest.fn()
})

describe('EventCard', () => {
    it('renders same as snapshot', () => {
        const props = createProps()
        const wrapper = shallow(<EventCard {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })
    it('respond to click event', () => {
        const props = createProps()
        const wrapper = shallow(<EventCard {...props}/>)
        wrapper
            .find('.event-card')
            .simulate('click')
        expect(props.onSelect).toBeCalled()
    })
})
