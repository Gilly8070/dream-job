import React from 'react';
import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import { showAllCandidateJobs } from '../../actions/action';
import { Link } from 'react-router-dom';

const Candidate = ({current, personalData, showAllCandidateJobs }) => {
    useEffect(() => {
        showAllCandidateJobs()
    }, [])
    if (personalData.length === 0) {
        return <h1>NO LIST TO DISPLAY</h1>
    }
    return (
        <div>
            
            {
                personalData.map((ele) => {
                    return (
                        <div>
                            <h2>Candidate Name: {ele.name}</h2>
                            <h3>Candidate Email: {ele.email}</h3>
                            <h5>Candidate User ID: {ele.id}</h5>
                            <Link to={`Jobs/${ele.id}`}>
                            <button>Show All Jobs</button>
                            </Link>
                            <p>-----------------------------</p>
                        </div>
                    )
                })
            }
            <div>
            <h1>Candidate</h1>
            </div>
        </div>
    )
}

const MapState = (state) => {
    // console.log(state);
    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {
        current: state.allCandidateAppliedJobs,
        personalData: state.allPersonalData,
        // allJobs: state.allJobs,
        // applied: state.appliedLiveJobs,
        // received: state.receivedOffer,
    }
}

export default connect(MapState, {showAllCandidateJobs})(Candidate);
