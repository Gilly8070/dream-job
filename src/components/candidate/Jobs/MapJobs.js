import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';

const MapJobs = ({ current }) => {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [loading])
    
    
    if (loading) {
        return <Spinner size={3} />
    }

    if (current.length === 0) {
        return <h1>No Jobs To Display</h1>
    }
    return (
        <div>
            
            <Link to='search/mapJobs'>
                <i class="fas fa-search fa-3x"></i>
            </Link>
            <Link to='filter/mapJobs'>
                <i class="fas fa-filter fa-3x"></i>
            </Link>
            <Link to='sort/mapJobs'>
                <i class="fas fa-sort fa-3x"></i>
            </Link>
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