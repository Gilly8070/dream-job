import React, { Component } from 'react'
import SearchDashboard from './sideDashboard/SearchDashboard'
// import SearchReceivedOffer from './sideReceivedOffer/SearchReceivedOffer'
import { connect } from 'react-redux';

class Search extends Component {
    state = {
        searchName: this.props.match.params.searchName
    }
    render() {
        console.log(this.props.match.params.searchName)
        if (this.state.searchName === 'dashboardJobs') {
            return <SearchDashboard backTo='/' btn='Dashboard' current={this.props.allJobs} />
        }
        if (this.state.searchName === 'receivedOffer') {
            return <SearchDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserReceivedOffer} />
        }
        if (this.state.searchName === 'acceptedOffer') {
            return <SearchDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserAcceptedOffer} />
        }
        if (this.state.searchName === 'rejectOffer') {
            return <SearchDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserRejectOffer} />
        }
        if (this.state.searchName === 'liveJobs') {
            return <SearchDashboard backTo='/liveJob' btn='Live Jobs' current={this.props.allLiveJobs} />
        }
        if (this.state.searchName === 'mapJobs') {
            return <SearchDashboard backTo='/mapJob' btn='Map Jobs' current={this.props.allLiveJobs} />
        }
    // console.log(this.props)
        return (
            <div>
                Search
            </div>
        )
    }
}

const MapState = (state) => {
    console.log(state, 'SearchDashboard');
    return {
        allJobs: state.allJobs,
        currentUserReceivedOffer: state.currentUserReceivedOffer,
        currentUserAcceptedOffer: state.currentUserAcceptedOffer,
        currentUserRejectOffer: state.currentUserRejectOffer,
        allLiveJobs: state.allLiveJobs,
    }
}


export default connect(MapState, null)(Search);
