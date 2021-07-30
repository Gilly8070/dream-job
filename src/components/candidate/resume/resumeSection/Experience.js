import React, { useEffect, useState } from 'react';
import Spinner from '../../../Spinner';
import styled from 'styled-components';

const Experience = ({ ExperienceDetails }) => {
    // const {} = ExperienceDetails;
    // console.log(ExperienceDetails, 'exp');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700)

    }, [loading])

    if (loading) {
        // style={{margin: '15px'}}
        return <div  ><Spinner onStart='yes' size = {3} /></div>
    }
    console.log(ExperienceDetails)
    return (
        <div>
            {ExperienceDetails ?
                ExperienceDetails.map((ele) => {
                    const { company, expCity, expCountry, expDate, expState, role, expDesc } = ele;
                    return (
                        <Div>
                            <h3>{role},{' '}{company}, {' '}{expCity} <span>{expDate}</span></h3>
                            <p>{expDesc}</p>
                        </Div>
                    )
                }) : <Div style={{marginTop: '25px', marginLeft: '20px'}}>NO EXPERIENCE ADDED</Div>
            }
        </div>
    )
}

export default Experience



const Div = styled.div`
font-size: 1.2rem;
margin: 9px;
margin-bottom: 4px;
margin-left: 15px;
margin-top: 30px;
h3 {
    margin-bottom: 10px;
    text-overflow: ellipsis; 
    overflow: hidden;
    span {
        /* float: right; */
        margin-left: 60px;
        /* clear: both; */
        font-weight: normal;
        /* text-align: right; */
        /* margin-right: 15%; */
        font-size: 1.15rem;
        text-overflow: ellipsis; 
        overflow: hidden;
    }
}
p {
    margin-bottom: 10px;
    margin-top: 15px;
    text-overflow: ellipsis; 
    overflow: hidden;
}


@media (min-width: 768px) {
h3 {
span {
    margin-left: 30px;
}
}
}
@media (min-width: 992px) {
h3 {
span {
    margin-left: 80px;
}
}
}
`;
