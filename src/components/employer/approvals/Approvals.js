import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startFetchCandidatePersonalData } from '../../../actions/action';
import { Link,  useHistory } from 'react-router-dom';
import Spinner from '../../Spinner';

const Approvals = ({ current, personalData, showAllCandidateJobs, startFetchCandidatePersonalData }) => {
    const history = useHistory();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

    }, [loading])

    useEffect(() => {
        startFetchCandidatePersonalData()
    }, [startFetchCandidatePersonalData])


    if (loading) {
        return <Spinner size={3} />
    }


    if (personalData === undefined || personalData.length === 0) {
        return <h1>NO LIST TO DISPLAY</h1>
    }
    return (
        <div>
            
            {
                personalData.map((ele, ind) => {
                    return (
                        <div key={ind}>
                            <h2>Candidate Name: {ele.name}</h2>
                            <h3>Candidate Email: {ele.email}</h3>
                            <h5>Candidate User ID: {ele.id}</h5>
                            <button onClick={() => setTimeout(() => history.push(`candidateApproved/${ele.id}`), 200)}>
                                
                            SHOW ALL APPROVALS
                            </button>
                                <Link to={`candidateApproved/${ele.id}`}>
                                </Link>
                            <p>-----------------------------</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const MapState = (state) => {
    // console.log(state.allCandidateAppliedJobs);
    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {

        // current: state.allCandidateAppliedJobs,
        personalData: state.allPersonalData,
        // allJobs: state.allJobs,
        // applied: state.appliedLiveJobs,
        // received: state.receivedOffer,
    }
}

export default connect(MapState, {startFetchCandidatePersonalData})(Approvals);





















// import React from 'react'

// const Approvals = () => {
//     return (
//         <div>
//             Approvals
//         </div>
//     )
// }

// export default Approvals