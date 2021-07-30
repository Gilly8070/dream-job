import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DashboardClearInterview = ({ candidateInterview, candidateApproved}) => {
    return (
        <SingleBox>
            <p>Clear Interview <span>{candidateApproved.length}</span>  out {candidateInterview.length} Interview </p>
        </SingleBox>
    )
}

const MapState = (state) => {
    // console.log(state, 'ClearInterview');
    return {
        candidateInterview: state.allCandidateInterviewTime,
        candidateApproved: state.allCandidateApprovedDate,
    }
}

export default connect(MapState, null)(DashboardClearInterview);



const SingleBox = styled.div`
/* border: 1px solid black; */
/* margin: 5px; */
/* padding: 15px; */

>p>span {
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
}
@media (min-width: 1200px) {
>p {
    margin-left: 3%;
}
}
`;