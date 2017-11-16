import React, {Component} from 'react'
import './EventCard.css'

class EventCard extends Component {
    render() {
        const {name, parent_name, id, onSelect} = this.props
        return (
            <section className="event-card" onClick={onSelect.bind(null, id)}>
                <h3 className="event-card__title">{name}</h3>
                <p className="event-card__category">{parent_name}</p>
            </section>
        )
    }
}

export default EventCard