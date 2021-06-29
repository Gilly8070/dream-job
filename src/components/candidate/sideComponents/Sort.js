import React, { Component } from 'react'
import SortDashboard from './sideDashboard/SortDashboard'
import { connect } from 'react-redux';

class Sort extends Component {
    state = {
        sortName: this.props.match.params.sortName
    }
    render() {
    
        if (this.state.sortName === 'dashboardJobs') {
            return <SortDashboard backTo='/' btn='Dashboard' current={this.props.allJobs} />
        }
        if (this.state.sortName === 'receivedOffer') {
            return <SortDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserReceivedOffer} />
        }
        if (this.state.sortName === 'acceptedOffer') {
            return <SortDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserAcceptedOffer} />
        }
        if (this.state.sortName === 'rejectOffer') {
            return <SortDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserRejectOffer} />
        }
        if (this.state.sortName === 'liveJobs') {
            return <SortDashboard backTo='/liveJob' btn='Live Jobs' current={this.props.allLiveJobs} />
        }
        if (this.state.sortName === 'mapJobs') {
            return <SortDashboard backTo='/mapJob' btn='Map Jobs' current={this.props.allLiveJobs} />
        }
    console.log(this.props)
        return (
            <div>
                Sort
            </div>
        )
    }
}

const MapState = (state) => {
    console.log(state, 'SortDashboard');
    return {
        allJobs: state.allJobs,
        currentUserReceivedOffer: state.currentUserReceivedOffer,
        currentUserAcceptedOffer: state.currentUserAcceptedOffer,
        currentUserRejectOffer: state.currentUserRejectOffer,
        allLiveJobs: state.allLiveJobs,
    }
}


export default connect(MapState, null)(Sort);