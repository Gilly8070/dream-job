import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { startRemovedLiveJobs } from '../../../actions/action';

const LiveJobs = ({ current, startRemovedLiveJobs }) => {
    const [modal, setModal] = useState(false);

    /// SHOW MODAL WHEN USER CLICK ON APPLY NOW BUTTON ////////////
    const showModal = (id, term) => {
        if (term === 'accept') {
            
            setTimeout(() => {
                setModal(true);
                // this.setState({ modal1: true })
            }, 100);
            setTimeout(() => {
                setModal(false);
                // this.setState({ modal1: false })
            }, 1500);
        }
        if (term === 'reject') {
            if (window.confirm('YOU ARE ABOUT TO DELETE THE JOB. PLEASE CONFIRM')) {
                startRemovedLiveJobs(id, 'reject')
            }
        }
        // else {
        //     if (window.confirm('DELETE')) {
        //         startRemovedLiveJobs(id, 'reject')  
        //     }
        // }
        
        }
    if (current.length === 0) {
        return <h1>No Jobs To Display</h1>
    }
    return (
        <div>
            {modal ? <h1>YOU SUCCESSFULLY APPLY FOR JOB</h1> : null }
            {
                current.map(single => {
                    const { companyLogo, companyName, salary, title, location, shiftType, employmentType, experience, id } = single;
                    return (
                        <div key={single.id}>
                            <img width='50' src={companyLogo} alt="Company Logo" />
                            <h3>{title}</h3>
                            <span>{companyName ? <span>{companyName}</span> : 'Anonymous'}</span>
                            <span>{location}</span>
                            <span>{salary}</span>
                            <span>{ id.substr(0,8) }</span>
                            <span>{ experience }</span>
                            <span>{ employmentType }</span>
                            <span>{shiftType}</span>

                            <button onClick={() => { showModal(id, 'accept'); startRemovedLiveJobs(id, 'accept') }}  >Apply</button>{' '}
                            <button onClick={() => {
                                showModal(id, 'reject');
                                    
                            }}>Reject</button>
                            <p>{'---------------------'}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const MapState = (state) => {
    console.log(state, 'LiveJobs');
    return {
        current: state.allLiveJobs
    }
}

export default connect(MapState, {startRemovedLiveJobs})(LiveJobs)




// import React from 'react'

// const LiveJobs = () => {
//     return (
//         <div>
//             LiveJobs
//         </div>
//     )
// }

// export default LiveJobs
