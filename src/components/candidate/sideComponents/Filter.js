import React, { Component } from 'react'
import FilterDashboard from './sideDashboard/FilterDashboard'
import { connect } from 'react-redux';

class Filter extends Component {
    state = {
        filterName: this.props.match.params.filterName
    }
    render() {
        // console.log(this.props.match.params.filterName)

        if (this.state.filterName === 'dashboardJobs') {
            return <FilterDashboard backTo='/' btn='Dashboard' current={this.props.allJobs} />
        }
        if (this.state.filterName === 'receivedOffer') {
            return <FilterDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserReceivedOffer} />
        }
        if (this.state.filterName === 'acceptedOffer') {
            return <FilterDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserAcceptedOffer} />
        }
        if (this.state.filterName === 'rejectOffer') {
            return <FilterDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserRejectOffer} />
        }
        if (this.state.filterName === 'liveJobs') {
            return <FilterDashboard backTo='/liveJob' btn='Live Jobs' current={this.props.allLiveJobs} />
        }
        if (this.state.filterName === 'mapJobs') {
            return <FilterDashboard backTo='/mapJob' btn='Map Jobs' current={this.props.allLiveJobs} />
        }
    console.log(this.props)
        return (
            <div>
                Filter
            </div>
        )
    }
}

const MapState = (state) => {
    console.log(state, 'FilterDashboard');
    return {
        allJobs: state.allJobs,
        currentUserReceivedOffer: state.currentUserReceivedOffer,
        currentUserAcceptedOffer: state.currentUserAcceptedOffer,
        currentUserRejectOffer: state.currentUserRejectOffer,
        allLiveJobs: state.allLiveJobs,
    }
}


export default connect(MapState, null)(Filter);
