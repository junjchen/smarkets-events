import React from 'react'
import {shallow} from 'enzyme'
import moment from 'moment'
import StatusBar from './StatusBar'

const createProps = (state, reason) => ({state, reason, updated: new Date('1990/10/10')})

describe('StatusBar', () => {
    it('renders same as snapshot', () => {
        const props = createProps()
        const wrapper = shallow(<StatusBar {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders fetching status', () => {
        const props = createProps('loading')
        const wrapper = shallow(<StatusBar {...props}/>)
        expect(wrapper.hasClass('status-bar--fetching')).toBe(true)
        expect(wrapper.contains(
            <p>Fetching...</p>
        )).toBe(true)
    })
    it('renders ok status', () => {
        const props = createProps('ok')
        const wrapper = shallow(<StatusBar {...props}/>)
        expect(wrapper.contains(
            <p>Ready</p>
        )).toBe(true)
    })
    it('renders error status', () => {
        const props = createProps('error', {name: 'reason'})
        const wrapper = shallow(<StatusBar {...props}/>)
        expect(wrapper.hasClass('status-bar--error')).toBe(true)
        expect(wrapper.contains(
            <p>Oops!</p>
        )).toBe(true)
        expect(wrapper.contains(
            <p>reason</p>
        )).toBe(true)
    })
})
