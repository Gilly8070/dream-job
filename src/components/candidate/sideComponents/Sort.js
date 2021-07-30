import React, { Component } from 'react'
import SortDashboard from './sideDashboard/SortDashboard'
import { connect } from 'react-redux';
import { currentUserReceivedOffer, currentUserAcceptedOffer, currentUserRejectOffer, fetchAllJobsForCurrentUser,
        fetchAllLiveJobsForCurrentUser, } from '../../../actions/action';
class Sort extends Component {
    state = {
        sortName: this.props.match.params.sortName
    }
    componentDidMount() {
        
        /////// NEW ONE ///////////

        if (this.state.sortName === 'dashboardJobs') {
            this.props.fetchAllJobsForCurrentUser();
        }
        if (this.state.sortName === 'receivedOffer') {
            this.props.currentUserReceivedOffer();
        }
        if (this.state.sortName === 'acceptedOffer') {
            this.props.currentUserAcceptedOffer();
        }
        if (this.state.sortName === 'rejectOffer') {
            this.props.currentUserRejectOffer();
        }
        if (this.state.sortName === 'liveJobs' || this.state.sortName === 'mapJobs') {
            this.props.fetchAllLiveJobsForCurrentUser();
        }
    }
    render() {
    
        if (this.state.sortName === 'dashboardJobs') {
            return <SortDashboard backTo='/' btn='Dashboard' current={this.props.allJobs} />
        }
        if (this.state.sortName === 'receivedOffer') {
            return <SortDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserReceived} />
        }
        if (this.state.sortName === 'acceptedOffer') {
            return <SortDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserAccepted} />
        }
        if (this.state.sortName === 'rejectOffer') {
            return <SortDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserReject} />
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
        currentUserReceived: state.currentUserReceivedOffer,
        currentUserAccepted: state.currentUserAcceptedOffer,
        currentUserReject: state.currentUserRejectOffer,
        allLiveJobs: state.allLiveJobs,
    }
}


export default connect(MapState, {currentUserReceivedOffer, currentUserAcceptedOffer, currentUserRejectOffer, fetchAllJobsForCurrentUser, fetchAllLiveJobsForCurrentUser,})(Sort);