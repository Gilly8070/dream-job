import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../../Spinner';

const DashboardAlert = ({ candidateInterview }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2100)

    }, [loading])

    if (loading) {
        return <Spinner size={3} />
    }

    if (candidateInterview.length === 0) {
        return <h2>NO MESSAGES</h2>
    }
    let sliArr = candidateInterview.reverse().slice(0, 2);
    return (
        <div>
            {
                sliArr.map((item, ind) => {
                    const { companyName, description, id, interviewTime, } = item;
                    return (
                        <div key={ind}>
                            <h2>{companyName}</h2>
                            <p><strong>{interviewTime}</strong></p>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const MapState = (state) => {
    // console.log(state, 'DashboardAlert');
    return {
        candidateInterview: state.allCandidateInterviewTime,
        // candidateApproved: state.allCandidateApprovedDate,
    }
}

export default connect(MapState, null)(DashboardAlert);
