import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {requestEventDetail} from '../actions'
import EventDetail from '../components/EventDetail'

const mapStateToProps = (state, ownProps) => {
    const {ui, data} = state
    const id = ownProps.match.params.id
    return {
        id,
        state: ui.event.state,
        reason: ui.event.reason,
        updated: ui.event.updated,
        event: data.events[id]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    fetchData: requestEventDetail
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail)