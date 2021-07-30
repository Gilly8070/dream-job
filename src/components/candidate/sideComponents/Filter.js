import React, { Component } from 'react'
import FilterDashboard from './sideDashboard/FilterDashboard'
import { connect } from 'react-redux';
import { currentUserReceivedOffer, currentUserAcceptedOffer, currentUserRejectOffer, fetchAllJobsForCurrentUser,
        fetchAllLiveJobsForCurrentUser, } from '../../../actions/action';
class Filter extends Component {
    state = {
        filterName: this.props.match.params.filterName
    }
    componentDidMount() {
        
        /////// NEW ONE ///////////

        if (this.state.filterName === 'dashboardJobs') {
            this.props.fetchAllJobsForCurrentUser();
        }
        if (this.state.filterName === 'receivedOffer') {
            this.props.currentUserReceivedOffer();
        }
        if (this.state.filterName === 'acceptedOffer') {
            this.props.currentUserAcceptedOffer();
        }
        if (this.state.filterName === 'rejectOffer') {
            this.props.currentUserRejectOffer();
        }
        if (this.state.filterName === 'liveJobs' || this.state.filterName === 'mapJobs') {
            this.props.fetchAllLiveJobsForCurrentUser();
        }
        // if (this.state.searchName === 'mapJobs') {
        //     this.props.fetchAllLiveJobsForCurrentUser();
        // }
    }
    render() {
        // console.log(this.props.match.params.filterName)
        if (this.state.filterName === 'dashboardJobs') {
            // console.log(this.props.allJobs)
            return <FilterDashboard backTo='/' btn='Dashboard' current={this.props.allJobs} />
        }
        if (this.state.filterName === 'receivedOffer') {
            return <FilterDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserReceived} />
        }
        if (this.state.filterName === 'acceptedOffer') {
            return <FilterDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserAccepted} />
        }
        if (this.state.filterName === 'rejectOffer') {
            return <FilterDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserReject} />
        }
        if (this.state.filterName === 'liveJobs') {
            return <FilterDashboard backTo='/liveJob' btn='Live Jobs' current={this.props.allLiveJobs} />
        }
        if (this.state.filterName === 'mapJobs') {
            return <FilterDashboard backTo='/mapJob' btn='Map Jobs' current={this.props.allLiveJobs} />
        }
    // console.log(this.props)
        return (
            <div>
                Filter
            </div>
        )
    }
}

const MapState = (state) => {
    console.log(state.currentUserReceivedOffer, 'FilterDashboard');
    return {
        allJobs: state.allJobs,
        currentUserReceived: state.currentUserReceivedOffer,
        currentUserAccepted: state.currentUserAcceptedOffer,
        currentUserReject: state.currentUserRejectOffer,
        allLiveJobs: state.allLiveJobs,
    }
}


export default connect(MapState, {currentUserReceivedOffer, currentUserAcceptedOffer, currentUserRejectOffer, fetchAllJobsForCurrentUser, fetchAllLiveJobsForCurrentUser,})(Filter);
