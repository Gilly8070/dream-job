import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemovedLiveJobs } from '../../../actions/action';
import Spinner from '../../Spinner';

const LiveJobs = ({ current, startRemovedLiveJobs }) => {
    const [modal, setModal] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [loading])

    
    /// SHOW MODAL WHEN USER CLICK ON APPLY NOW BUTTON ////////////
    const showModal = (id, term) => {

        const btn = document.getElementsByName('btn');
        btn.forEach((ele) => { 
        if (term === 'accept') {
            setTimeout(() => {
                ele.disabled = true;
                setModal(true);
                // this.setState({ modal1: true })
            }, 100);
            setTimeout(() => {
                ele.disabled = false;
                setModal(false);
                // this.setState({ modal1: false })
            }, 1000);
        }
    })
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
    
    if (loading) {
        return <Spinner size={3} />
    }

    if (current.length === 0) {
        return <h1>No Jobs To Display</h1>
    }
    return (
        <div>
            {modal ? <h1>YOU SUCCESSFULLY APPLY FOR JOB</h1> : null}
            
            <Link to='search/liveJobs'>
                <i class="fas fa-search fa-3x"></i>
            </Link>
            <Link to='filter/liveJobs'>
                <i class="fas fa-filter fa-3x"></i>
            </Link>
            <Link to='sort/liveJobs'>
                <i class="fas fa-sort fa-3x"></i>
            </Link>
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

                            <button name='btn' onClick={() => {
                                showModal(id, 'accept');
                                setTimeout(() => {
                                    startRemovedLiveJobs(id, 'accept');
                                    }, 1400)
                                    window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            }}>Apply</button>{' '}
                            <button name='btn' onClick={() => {
                                showModal(id, 'reject');
                                    
                            }}>Reject</button>
                            <p>{'---------------------'}</p>
                        </div>
                    )
                })
            }
            <button onClick={() => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                    })}>top</button>
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
