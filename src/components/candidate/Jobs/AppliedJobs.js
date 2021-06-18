import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { startShowAppliedJobs } from '../../../actions/action';

const AppliedJobs = ({ current, startShowAppliedJobs }) => {
    
    useEffect(() => {
        startShowAppliedJobs();
    },[])
    if (current.length === 0) {
        return <h1>No Jobs To Display</h1>
    }
    return (
        <div>
            {
                current.map(single => {
                    const { companyLogo, companyName, salary, title, location, shiftType, employmentType, experience, id } = single;
                    return (
                        <div key={single.id}>
                            <img width='50' src={companyLogo} alt="Company Logo" />
                            <h3>{title}</h3>
                            <p>{companyName ? <p>{companyName}</p> : 'Anonymous'}</p>
                            <p>{location}</p>
                            <p>{salary}</p>
                            <p>{ id.substr(0,8) }</p>
                            <p>{ experience }</p>
                            <p>{ employmentType }</p>
                            <p>{shiftType}</p>
                            <p>{'---------------------'}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const MapState = (state) => {
    console.log(state, 'AppliedJobs');
    return {
        current: state.appliedLiveJobs
    }
}

export default connect(MapState, {startShowAppliedJobs})(AppliedJobs)






// import React from 'react'

// const AppliedJobs = () => {
//     return (
//         <div>
//             AppliedJobs
//         </div>
//     )
// }

// export default AppliedJobs
