import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { startShowAppliedJobs } from '../../../actions/action';
import Spinner from '../../Spinner';
import styled from 'styled-components';

const AppliedJobs = ({ current, startShowAppliedJobs }) => {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000)
    }, [loading])

    

    useEffect(() => {
        startShowAppliedJobs();
    }, [])
    
    
    if (loading) {
        return <div><Spinner onStart='yes' size={4} /></div>
    }
    if (current.length === 0) {
        return <h1 style={{marginTop: '20px', marginLeft: '40px', marginBottom: '10px'}}>No Jobs To Display</h1>
    }

    return (
        <CandidateJobContainer>
            {
                current.map(single => {
                    const { companyLogo, companyName, salary, title, location, shiftType, employmentType, experience, id, date } = single;
                    return (
                        <SingleCandidateJobContainer>

                        <div key={single.id}>
                            <Div2>
                                    <div>
                                    <img src={companyLogo} alt="Logo" />
                                        <span>  {salary && '$' + (parseInt(salary) / 70 / 1000).toFixed(1) + 'k'} </span>
                                    </div>
                                    <h3>{title.toLowerCase()}</h3>
                                    <p>{companyName ? <span>{companyName.toLowerCase()}</span> : 'Anonymous'}, <span>{location.toLowerCase()}</span></p>
                                </Div2>
                                <Div3>
                                    <div>
                                    <p>Job Date:
                                    </p>
                                    <span> {date}</span>
                                    </div>
                                    <div>
                                    <p>Job Id:
                                    </p>
                                    <span>{id.substr(0,15)}</span>
                                    </div>
                                    <div>
                                    <p>Experience:
                                    </p>
                                    <span>{experience} years</span>
                                    </div>
                                    <div>
                                    <p>Shift Type:
                                    </p>
                                    <span>{shiftType}</span>
                                    </div>
                                </Div3>
                            </div>
                        </SingleCandidateJobContainer>
                            
                    )
                })
            }
        </CandidateJobContainer>
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





const CandidateJobContainer = styled.div`
/* border: 4px solid black; */
display: flex;
flex-direction: column;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
margin: 15px;
grid-gap: 15px;

/* @media (max-width: 320px) {
display: flex;
flex-direction: column;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
margin: 4px;
grid-gap: 4px;

} */

@media (min-width: 646px) {
/* grid-gap: 17px; */
margin: 18px;
}
@media (min-width: 768px) {
grid-gap: 22px;
margin: 20px;
}
`

const SingleCandidateJobContainer = styled.div`
/* @media (max-width: 320px) { */
border: 2px solid #3C7CD7;
padding: 4px;
border-radius: 10px;
display: flex;
flex-direction: column;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1rem;
font-size: 1.3rem;
padding: 15px;
`

const Div2 = styled.div`
/* margin-bottom: 15px; */
text-transform: capitalize;
    /* border: 1px solid black; */

>div>img {
    width: 60px;
    height: 40px;
}
>div>span {
float: right;
    clear: both;
    margin-right: 25%;
    font-weight: 800;
    /* border: 1px solid black; */
}
>h3 {
    margin: 5px 5px;
    /* border: 1px solid black; */
    /* width: 100%; */
    text-overflow: ellipsis; 
    overflow: hidden;
}
>p {
    margin: 5px 12px;
    /* border: 1px solid black; */
text-overflow: ellipsis; 
    overflow: hidden;
    /* margin-bottom: 10px; */
    >span {

    }
}
`;

const Div3 = styled.div`
>div {
display: flex;
flex-direction: row;
margin-top: 10px;
margin-bottom: 4px;
justify-content: space-between;
align-content: space-between;
    >p {
        font-weight: 600;
        margin: 3px 0px;
        
    }
    >span {
        margin: 3px 0px;
                    /* width: 200px; */

        margin-right: 55px;
        /* border: 1px solid black; */
        white-space: nowrap;
        text-overflow: ellipsis; 
        overflow: hidden;
    }
}


@media (min-width: 646px) {
    >div {
    >p {
        margin-top: 7px;
        margin-bottom: 7px;
        /* margin-right: 12px; */
    }
    >span {
        margin-top: 7px;
        margin-bottom: 7px;
        margin-right: 26px;
    }
}
}
`