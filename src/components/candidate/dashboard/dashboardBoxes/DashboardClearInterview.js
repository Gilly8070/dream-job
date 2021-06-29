import React from 'react';
import { connect } from 'react-redux';

const DashboardClearInterview = ({ candidateInterview, candidateApproved}) => {
    return (
        <div>
            <p>Clear Interview {candidateApproved.length} out {candidateInterview.length} Interview's </p>
        </div>
    )
}

const MapState = (state) => {
    console.log(state, 'ClearInterview');
    return {
        candidateInterview: state.allCandidateInterviewTime,
        candidateApproved: state.allCandidateApprovedDate,
    }
}

export default connect(MapState, null)(DashboardClearInterview);
