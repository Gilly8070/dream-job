import React from 'react';
import { useEffect, useState} from 'react';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import { showAllCandidateJobs, startFetchCandidatePersonalData } from '../../../actions/action';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';

const Candidate = ({ current, personalData, showAllCandidateJobs, startFetchCandidatePersonalData }) => {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

    }, [loading])

    
    useEffect(() => {
        showAllCandidateJobs()
        startFetchCandidatePersonalData()
    }, [showAllCandidateJobs, startFetchCandidatePersonalData])

    console.log(personalData);

    
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
                            <Link to={`Jobs/${ele.id}`}>
                            <button>Show All Jobs</button>
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
        current: state.allCandidateAppliedJobs,
        personalData: state.allPersonalData,
        // allJobs: state.allJobs,
        // applied: state.appliedLiveJobs,
        // received: state.receivedOffer,
    }
}

export default connect(MapState, {showAllCandidateJobs, startFetchCandidatePersonalData})(Candidate);
