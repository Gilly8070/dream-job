import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Spinner from '../../Spinner';

const Interview = ({ candidateInterview }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [loading])

    
    if (loading) {
        return <Spinner size={3} />
    }

    if (candidateInterview.length === 0) {
        return <h1>NO INTERVIEW YET</h1>
    }
    return (
        <div>
            {
                candidateInterview.map((item) => {
                    const { title, location, date, companyLogo, companyName, salary, id, experience, interviewTime } = item;
                    return <div key={id}>
                        <img width='50px' src={companyLogo} alt="Logo" />
                        <h2>{title}</h2>
                        <div>{companyName}, {location}</div>
                        <div>Salary: {salary}</div>
                        <div>Job Date: {date}</div>
                        <div>Job Id: {id}</div>
                        <div>Experience: {experience}</div>
                        <div>Interview Date: <strong>{interviewTime}</strong></div>
                    </div>
                })
            }
        </div>
    )
}



const MapState = (state) => {
    // console.log(state, 'Interview');
    return {
        candidateInterview: state.allCandidateInterviewTime,
        candidateApproved: state.allCandidateApprovedDate,
    }
}

export default connect(MapState, null)(Interview);

