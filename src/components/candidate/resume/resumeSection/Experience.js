import React from 'react'

const Experience = ({ ExperienceDetails }) => {
    // const {} = ExperienceDetails;
    // console.log(ExperienceDetails, 'exp');
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
