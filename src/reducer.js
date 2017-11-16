import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {
    POPULAR_EVENTS_REQUESTED,
    POPULAR_EVENTS_SUCCEEDED,
    POPULAR_EVENTS_FAILED,
    EVENT_DETAIL_REQUESTED,
    EVENT_DETAIL_SUCCEEDED,
    EVENT_DETAIL_FAILED
} from './actions'

const _uiStateUpdateHelper = (key, state, reason) => ({
    [key]: {
        state,
        reason,
        updated: new Date()
    }
})

const uiReducer = (state = {
    popular: {
        state: 'init'
    },
    event: {
        state: 'init'
    }
}, action) => {
    switch (action.type) {
        case POPULAR_EVENTS_REQUESTED:
            return {
                ...state,
                ..._uiStateUpdateHelper('popular', 'loading')
            }
        case POPULAR_EVENTS_SUCCEEDED:
            return {
                ...state,
                ..._uiStateUpdateHelper('popular', 'ok')
            }
        case POPULAR_EVENTS_FAILED:
            return {
                ...state,
                ..._uiStateUpdateHelper('popular', 'error', action.payload)
            }
        case EVENT_DETAIL_REQUESTED:
            return {
                ...state,
                ..._uiStateUpdateHelper('event', 'loading')
            }
        case EVENT_DETAIL_SUCCEEDED:
            return {
                ...state,
                ..._uiStateUpdateHelper('event', 'ok')
            }
        case EVENT_DETAIL_FAILED:
            return {
                ...state,
                ..._uiStateUpdateHelper('event', 'error', action.payload)
            }
        default:
            return state
    }
}

const dataReducer = (state = {
    popular: [],
    events: {}
}, action) => {
    switch (action.type) {
        case POPULAR_EVENTS_REQUESTED:
            return {
                ...state,
                popular: []
            }
        case POPULAR_EVENTS_SUCCEEDED:
            return {
                ...state,
                popular: action.payload.results
            }
        case EVENT_DETAIL_REQUESTED:
            return {
                ...state,
                [action.meta.id]: undefined
            }
        case EVENT_DETAIL_SUCCEEDED:
            return {
                ...state,
                events: {
                    ...state.eventDetail,
                    [action.payload.event.id]: action.payload.event
                }
            }
        default:
            return state
    }
}

// For unit testing
export {uiReducer, dataReducer}

export default combineReducers({router: routerReducer, ui: uiReducer, data: dataReducer})