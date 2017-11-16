import React, {Component} from 'react'
import EventCard from '../EventCard'
import StatusBar from '../StatusBar'
import './EventList.css'

class EventList extends Component {
    componentDidMount() {
        const {fetchData} = this.props
        fetchData()
    }
    render() {
        const {title, events, selectEvent} = this.props
        return (
            <div className="event-list">
                <StatusBar {...this.props}/>
                <h1 className="event-list__title">{title}</h1>
                {events.length > 0 && (
                    <div className="event-list__container">
                        {events && events.map((x, i) => <EventCard key={i} onSelect={selectEvent} {...x}/>)}
                    </div>
                )}
            </div>
        )
    }
}

export default EventList