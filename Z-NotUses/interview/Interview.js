import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import { startFetchInterviewTime } from '../../../actions/action';
import firebase from 'firebase';

const Interview = ({ candidateInterview, startFetchInterviewTime }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [loading])

    
    if (loading) {
        //////////////// NEW ONE ////////////////////////////////////////
        startFetchInterviewTime(firebase.auth().currentUser.uid);

        return  <div><Spinner onStart='yes' size={4} /></div>
    }

    if (candidateInterview.length === 0) {
        return <h1 style={{marginTop: '20px', marginLeft: '30px', marginBottom: '10px'}}>NO INTERVIEW YET</h1>
    }
    return (
        <CandidateJobContainer>
            {
                candidateInterview.map((item) => {
                    const { title, location, date, companyLogo, companyName, salary, id, experience, interviewTime, shiftType } = item;
                    return <SingleCandidateJobContainer>
                    <div key={id}>
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
                                    <span>{id.substring(0,15)}</span>
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
                                    <div>
                                        <p>Interview Date:</p>
                                        <span><strong>{interviewTime}</strong></span>
                                    </div>
                                </Div3>
                        </div>
                    </SingleCandidateJobContainer>
                        
                })
            }
        </CandidateJobContainer>
    )
}



const MapState = (state) => {
    console.log(state, 'Interview');
    return {
        candidateInterview: state.allCandidateInterviewTime,
        // candidateApproved: state.allCandidateApprovedDate,
    }
}

export default connect(MapState, {startFetchInterviewTime})(Interview);






const CandidateJobContainer = styled.div`
/* border: 4px solid black; */
display: flex;
flex-direction: column;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
margin: 15px;
grid-gap: 15px;

/* @media (min-width: 646px) {
grid-gap: 22px;
margin: 20px;
} */
@media (min-width: 646px) {
/* grid-gap: 17px; */
margin: 15px;
}
@media (min-width: 768px) {
grid-gap: 22px;
margin: 20px;
}
/*
/* @media (min-width: 592px) {

grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

} */
/* @media (min-width: 768px) {

grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));


} */
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
    text-overflow: ellipsis; 
    overflow: hidden;
    /* width: 100%; */
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
        /* border: 1px solid black; */
        /* text-align: right; */
        /* width: 120px; */
        margin-right: 4px;
        font-weight: 600;
        margin: 3px 0px;
        /* margin-top: 5px; */
        /* margin-bottom: 5px; */
    }
    >span {
        /* border: 1px solid black; */
        text-align: right;
        /* float: right; */
        margin: 3px 0px;
        margin-right: 45px;
        white-space: nowrap;
        text-overflow: ellipsis; 
        overflow: hidden;
        /* margin-top: 5px; */
        /* margin-bottom: 5px; */
    }
}

@media (min-width: 646px) {
    >div {
/* justify-content: space-between; */
/* align-content: space-between; */
    >p {
        margin: 7px 0px;
        margin-right: 12px;
    }
    >span {

        margin: 7px 0px;
        margin-right: 5px;
    }
}
}
`