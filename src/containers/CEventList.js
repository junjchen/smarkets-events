import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {requestPopularEvents, selectEvent} from '../actions'
import EventList from '../components/EventList'

const mapStateToProps = (state, ownProps) => {
    const {ui, data} = state
    return {
        title: 'Popular Events',
        state: ui.popular.state,
        reason: ui.popular.reason,
        updated: ui.popular.updated,
        events: data.popular
    }
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    fetchData: requestPopularEvents,
    selectEvent
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventList)