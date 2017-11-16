import {uiReducer, dataReducer} from './reducer'
import {
    POPULAR_EVENTS_REQUESTED,
    POPULAR_EVENTS_SUCCEEDED,
    POPULAR_EVENTS_FAILED,
    EVENT_DETAIL_REQUESTED,
    EVENT_DETAIL_SUCCEEDED,
    EVENT_DETAIL_FAILED
} from './actions'

describe('uiReducer', () => {
    it('should return the initial state', () => {
        expect(uiReducer(undefined, {})).toEqual({
            popular: {
                state: 'init'
            },
            event: {
                state: 'init'
            }
        })
    })
    it('should handle POPULAR_EVENTS_REQUESTED', () => {
        const action = {
            type: POPULAR_EVENTS_REQUESTED
        }
        expect(uiReducer(undefined, action)).toMatchObject({
            popular: {
                state: 'loading',
                reason: undefined,
                updated: expect.any(Date)
            },
            event: {
                state: 'init'
            }
        })
    })
    it('should handle POPULAR_EVENTS_SUCCEEDED', () => {
        const action = {
            type: POPULAR_EVENTS_SUCCEEDED
        }
        expect(uiReducer(undefined, action)).toMatchObject({
            popular: {
                state: 'ok',
                reason: undefined,
                updated: expect.any(Date)
            },
            event: {
                state: 'init'
            }
        })
    })
    it('should handle POPULAR_EVENTS_FAILED', () => {
        const action = {
            type: POPULAR_EVENTS_FAILED,
            payload: {
                message: 'err'
            }
        }
        expect(uiReducer(undefined, action)).toMatchObject({
            popular: {
                state: 'error',
                reason: {
                    message: 'err'
                },
                updated: expect.any(Date)
            },
            event: {
                state: 'init'
            }
        })
    })
    it('should handle EVENT_DETAIL_REQUESTED', () => {
        const action = {
            type: EVENT_DETAIL_REQUESTED
        }
        expect(uiReducer(undefined, action)).toMatchObject({
            popular: {
                state: 'init'
            },
            event: {
                state: 'loading',
                reason: undefined,
                updated: expect.any(Date)
            }
        })
    })
    it('should handle EVENT_DETAIL_SUCCEEDED', () => {
        const action = {
            type: EVENT_DETAIL_SUCCEEDED,
            payload: {
                message: 'err'
            }
        }
        expect(uiReducer(undefined, action)).toMatchObject({
            popular: {
                state: 'init'
            },
            event: {
                state: 'ok',
                reason: undefined,
                updated: expect.any(Date)
            }
        })
    })
    it('should handle EVENT_DETAIL_FAILED', () => {
        const action = {
            type: EVENT_DETAIL_FAILED,
            payload: {
                message: 'err'
            }
        }
        expect(uiReducer(undefined, action)).toMatchObject({
            popular: {
                state: 'init'
            },
            event: {
                state: 'error',
                reason: {
                    message: 'err'
                },
                updated: expect.any(Date)
            }
        })
    })
})

describe('dataReducer', () => {
    it('should return the initial state', () => {
        expect(dataReducer(undefined, {})).toEqual({popular: [], events: {}})
    })
    it('should handle POPULAR_EVENTS_REQUESTED', () => {
        const action = {
            type: POPULAR_EVENTS_REQUESTED
        }
        expect(dataReducer(undefined, action)).toEqual({popular: [], events: {}})
    })
    it('should handle POPULAR_EVENTS_SUCCEEDED', () => {
        const action = {
            type: POPULAR_EVENTS_SUCCEEDED,
            payload: {
                results: ['results']
            }
        }
        expect(dataReducer(undefined, action)).toEqual({popular: ['results'], events: {}})
    })
    it('should handle EVENT_DETAIL_REQUESTED', () => {
        const action = {
            type: EVENT_DETAIL_REQUESTED,
            meta: {
                id: 1
            }
        }
        expect(dataReducer(undefined, action)).toEqual({
            popular: [],
            events: {
                1: undefined
            }
        })
    })
    it('should handle EVENT_DETAIL_SUCCEEDED', () => {
        const action = {
            type: EVENT_DETAIL_SUCCEEDED,
            payload: {
                event: {
                    id: 1,
                    name: 'event'
                }
            }
        }
        expect(dataReducer(undefined, action)).toEqual({
            popular: [],
            events: {
                1: {
                    id: 1,
                    name: 'event'
                }
            }
        })
    })
})