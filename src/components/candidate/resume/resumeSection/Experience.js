import React, { useEffect, useState } from 'react';
import Spinner from '../../../Spinner';

const Experience = ({ ExperienceDetails }) => {
    // const {} = ExperienceDetails;
    // console.log(ExperienceDetails, 'exp');
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
            {ExperienceDetails ?
                ExperienceDetails.map((ele) => {
                    const { company, expCity, expCountry, expDate, expState, role } = ele;
                    return (
                        <div>
                            <h3>{role},{company},{expCity} {expDate}</h3>
                        </div>
                    )
                }) : 'NO EXPERIENCE ADDED'
            }
        </div>
    )
}

export default Experience
