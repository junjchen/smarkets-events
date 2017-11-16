import {CALL_API} from 'redux-api-middleware'
import {push} from 'react-router-redux'

const herokuCorsProxy = 'https://cors-anywhere.herokuapp.com/'
const apiEndpoints = {
    popularEvents: 'https://fe-api.smarkets.com/v0/events/popular/',
    eventDetail: 'https://fe-api.smarkets.com/v0/events/id/'
}

export const POPULAR_EVENTS_REQUESTED = 'smarkets/POPULAR_EVENTS_REQUESTED'
export const POPULAR_EVENTS_SUCCEEDED = 'smarkets/POPULAR_EVENTS_SUCCEEDED'
export const POPULAR_EVENTS_FAILED = 'smarkets/POPULAR_EVENTS_FAILED'
export const EVENT_DETAIL_REQUESTED = 'smarkets/EVENT_DETAIL_REQUESTED'
export const EVENT_DETAIL_SUCCEEDED = 'smarkets/EVENT_DETAIL_SUCCEEDED'
export const EVENT_DETAIL_FAILED = 'smarkets/EVENT_DETAIL_FAILED'

export const requestPopularEvents = () => ({
    [CALL_API]: {
        endpoint: herokuCorsProxy + apiEndpoints.popularEvents,
        method: 'GET',
        types: [POPULAR_EVENTS_REQUESTED, POPULAR_EVENTS_SUCCEEDED, POPULAR_EVENTS_FAILED]
    }
})

export const requestEventDetail = id => ({
    [CALL_API]: {
        endpoint: herokuCorsProxy + apiEndpoints.eventDetail + id,
        method: 'GET',
        types: [
            {
                type: EVENT_DETAIL_REQUESTED,
                meta: {
                    id
                }
            },
            EVENT_DETAIL_SUCCEEDED,
            EVENT_DETAIL_FAILED
        ]
    }
})

export const selectEvent = id => push('/event/' + id)