import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MapJobs = ({ current }) => {
    
    if (current.length === 0) {
        return <h1>No Jobs To Display</h1>
    }
    return (
        <div>
            {
                current.map(single => {
                    const { companyLogo, companyName, salary, title, location, shiftType, employmentType, experience, id } = single;
                    return (
                        <div key={id}>
                            <img width='50' src={companyLogo} alt="Company Logo" />
                            <h3>{title}</h3>
                            <p>{companyName ? <span>{companyName}</span> : 'Anonymous'}</p>
                            <span>{location}</span>
                            <span>{salary}</span>
                            <span>{ id.substr(0,8) }</span>
                            <span>{ experience }</span>
                            <span>{ employmentType }</span>
                            <span>{shiftType}</span>
                            <Link to={`/SingleMapJobs/${id}`}>
                            <button>Map</button>
                            </Link>
                            <p>{'---------------------'}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const MapState = (state) => {
    console.log(state, 'MapJobs');
    return {
        current: state.allLiveJobs
    }
}

export default connect(MapState, null)(MapJobs)