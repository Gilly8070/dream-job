import React, { Component } from 'react'
import SearchDashboard from './sideDashboard/SearchDashboard'
// import SearchReceivedOffer from './sideReceivedOffer/SearchReceivedOffer'
import { connect } from 'react-redux';
import { currentUserReceivedOffer, currentUserAcceptedOffer, currentUserRejectOffer, fetchAllJobsForCurrentUser,
        fetchAllLiveJobsForCurrentUser, } from '../../../actions/action';

class Search extends Component {
    state = {
        searchName: this.props.match.params.searchName,
    }
    componentDidMount() {
        
        /////// NEW ONE ///////////
        if (this.state.searchName === 'dashboardJobs') {
            this.props.fetchAllJobsForCurrentUser();
        }
        if (this.state.searchName === 'receivedOffer') {
            this.props.currentUserReceivedOffer();
        }
        if (this.state.searchName === 'acceptedOffer') {
            this.props.currentUserAcceptedOffer();
        }
        if (this.state.searchName === 'rejectOffer') {
            this.props.currentUserRejectOffer();
        }
        if (this.state.searchName === 'liveJobs' || this.state.searchName === 'mapJobs') {
            this.props.fetchAllLiveJobsForCurrentUser();
        }
    }
    render() {



        console.log(this.props.match.params.searchName)
        if (this.state.searchName === 'dashboardJobs') {
            // console.log(this.props.allJobs);
            return <SearchDashboard backTo='/' btn='Dashboard'
                current={this.props.allJobs}
            />
        }
        if (this.state.searchName === 'receivedOffer') {
            return <SearchDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserReceived}
            
            />
        }
        if (this.state.searchName === 'acceptedOffer') {
            return <SearchDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserAccepted}
            
            />
        }
        if (this.state.searchName === 'rejectOffer') {
            return <SearchDashboard backTo='/offer' btn='Received Offer' current={this.props.currentUserReject}
            
            />
        }
        if (this.state.searchName === 'liveJobs') {
            return <SearchDashboard backTo='/liveJob' btn='Live Jobs' current={this.props.allLiveJobs}
            
            />
        }
        if (this.state.searchName === 'mapJobs') {
            return <SearchDashboard backTo='/mapJob' btn='Map Jobs' current={this.props.allLiveJobs}
            
            />
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
        currentUserReceived: state.currentUserReceivedOffer,
        currentUserAccepted: state.currentUserAcceptedOffer,
        currentUserReject: state.currentUserRejectOffer,
        allLiveJobs: state.allLiveJobs,
    }
}


export default connect(MapState, {currentUserReceivedOffer, currentUserAcceptedOffer, currentUserRejectOffer, fetchAllJobsForCurrentUser, fetchAllLiveJobsForCurrentUser,})(Search);
