import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import StatusBar from '../StatusBar'
import './EventDetail.css'

class EventDetail extends Component {
    componentDidMount() {
        const {fetchData, id} = this.props
        fetchData(id)
    }
    render() {
        const {event, state} = this.props
        return (
            <section className="event-detail">
                <StatusBar {...this.props}/> {!!event && (
                    <div>
                        <h1 className="event-detail__name">{event.name}
                            ({event.short_name})</h1>
                        <p className="event-detail__category">{event.parent_name}</p>
                        <p className="event-detail__date">{moment(event.start_datetime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                )}
                <Link className="event-detail__link" to="/popular">Go back</Link>
            </section>
        )
    }
}

export default EventDetail