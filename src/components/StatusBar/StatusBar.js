import React, {Component} from 'react'
import classNames from 'classnames'
import moment from 'moment'
import './StatusBar.css'

class StatusBar extends Component {
    render() {
        const {state, reason, updated} = this.props
        const fetching = state === 'loading'
        const error = state === 'error'
        const ok = state === 'ok'
        return (
            <div
                className={classNames('status-bar', {
                'status-bar--error': error,
                'status-bar--fetching': fetching
            })}>
                {ok && <p>Ready</p>}
                {fetching && <p>Fetching...</p>}
                {error && <p>Oops!</p>}
                {reason && <p>{reason.name}</p>}
                {updated && <p>Last updated: {moment(updated).format('MMMM Do YYYY, h:mm:ss a')}</p>}
            </div>
        )
    }
}

export default StatusBar