import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../../Spinner';
import styled from 'styled-components';

const DashboardAlert = ({ candidateInterview }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000)

    }, [loading])

    if (loading) {
        return <div><Spinner onStart='yes' size={3} /></div> 
    }

    if (candidateInterview.length === 0) {
        return <h3 style={{marginTop: '20px', marginLeft: '10px', marginBottom: '10px'}}>NO MESSAGES</h3>
    }
    let sliArr = candidateInterview.reverse().slice(0, 2);
    // console.log(sliArr);
    return (
        <AlertContainer>
            {
                sliArr.map((item, ind) => {
                    const { companyName, description, id, interviewTime, } = item;
                    return (
                        <SingleAlertContainer key={ind}>
                            <div>
                                <div>
                                    <h2>
                                    {companyName}
                                    </h2>
                                    <span>
                                        <strong>{interviewTime}</strong>
                                    </span>
                                </div>
                            <p> </p>
                            </div>
                            <span>{description}</span>
                            
                        </SingleAlertContainer>
                    )
                })
            }
        </AlertContainer>
    )
}

const MapState = (state) => {
    // console.log(state, 'DashboardAlert');
    return {
        candidateInterview: state.allCandidateInterviewTime,
        // candidateApproved: state.allCandidateApprovedDate,
    }
}

export default connect(MapState, null)(DashboardAlert);


const AlertContainer = styled.div`
/* display: flex; */
/* flex-direction: column; */
    /* justify-content: space-between; */
    /* align-content: space-between; */
margin: 5px;
/* padding: 5px; */
@media (min-width: 768px) {
    /* display: grid; */
    /* grid-template-rows: 100%; */
/* display: flex; */
/* flex-direction: column; */
    /* justify-content: space-between; */
    /* align-content: space-between; */
/* border: 1px solid black; */
/* height: 100%; */
}
`;

const SingleAlertContainer = styled.div`
margin-top: 5px;
padding-top: 5px;
margin-bottom: 4px;
/* border: 1px solid black; */
/* display: flex;
flex-direction: column;
    justify-content: space-between;
    align-content: space-between; */
    
>div{
>div {
font-weight: bold;
/* font-size: 1.5rem; */
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    /* display: inline-block; */
    >h2 {
        /* border: 1px solid black; */
        text-overflow: ellipsis; 
        overflow: hidden;
    font-size: 1.4rem;

}
>span {
    font-size: 1.1rem;
    float: right;
    margin-right: 20px;
    padding-top: 7px;
    /* white-space: nowrap; */
    text-overflow: ellipsis; 
    overflow: hidden;
}
}
>p {
    margin-top: 4px;
    padding-top: 3px;
}
}
:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        width: 100%;
        position: relative;
        left: 1px;
        border-radius: 100%;
        background-color: black;
        margin-top: 8px;
        /* margin-bottom: 8px; */
}
>span {
    /* border: 1px solid black; */
font-size: 1.1rem;
margin-left: 5px;
text-overflow: ellipsis; 
    overflow: hidden;
}
`;
