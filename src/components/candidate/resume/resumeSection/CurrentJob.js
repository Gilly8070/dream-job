import React, { useEffect, useState } from 'react';
import Spinner from '../../../Spinner';

const CurrentJob = ({ CurrentDetails, AboutDetails }) => {
    const { currentDate, designation, imageSrc, location, salary, companyName } = CurrentDetails;
    const { firstName, lastName, summary } = AboutDetails;
    // console.log(CurrentDetails, 'currentJob');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300)

    }, [loading])

    if (loading) {
        return <Spinner size={3} />
    }
    return (
        <div>
        <h1>{firstName} {lastName}</h1>
        <p>{summary}</p>
        {
            companyName ?
                <div>
                    <img width='100px' src={imageSrc} alt="Profile Pic" />
                    <h3>Current Job</h3>
                    <div>Salary {salary}</div>
                    <div>Date of Joined {currentDate}</div>
                    <div>Designation {designation}</div>
                    <div>Location {location}</div>
                    <div>Company {companyName}</div>
                </div>
                    : 'NO CURRENT JOB'
            }
        </div>
    )
}

export default CurrentJob
