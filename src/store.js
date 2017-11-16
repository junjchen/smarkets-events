import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {apiMiddleware} from 'redux-api-middleware'
import createHistory from 'history/createBrowserHistory'
import reducer from './reducer'

const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(apiMiddleware, routerMiddleware(history))

const store = createStore(reducer, composeEnhancers(middleware))

export {history}
export default store