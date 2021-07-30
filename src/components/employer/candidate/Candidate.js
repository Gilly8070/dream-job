import React from 'react';
import { useEffect, useState} from 'react';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import { showAllCandidateJobs, startFetchCandidatePersonalData } from '../../../actions/action';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import firebase from 'firebase';

const Candidate = ({ current, personalData, showAllCandidateJobs, startFetchCandidatePersonalData }) => {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1100)

        // const serializedState = localStorage.getItem("state");
        // let parse = JSON.parse(serializedState);
        // console.log(parse, 'fromLocalStorage');
    // firebase.database().ref('state/').set(JSON.stringify(parse))

        // firebase.database().ref('state/').once('value').then((snap) => {
    // console.log((snap.val()), 'fromFirebase')
    // })
    }, [loading])

    
    useEffect(() => {
        // showAllCandidateJobs()
        startFetchCandidatePersonalData()
    }, [startFetchCandidatePersonalData])

    // console.log(personalData);

    
    if (loading) {
        return <div><Spinner  onStart='yes'  size={4} /></div>
    }
    // window.addEventListener('resize', e => {
    //     console.log(e.target.innerWidth);
    // })
    if (personalData === undefined || personalData.length === 0) {
        return <h1 style={{marginTop: '20px', marginLeft: '20px', marginBottom: '10px'}}>NO LIST TO DISPLAY</h1>
    }
    return (
        <CandidateContainer>
                {
                    !loading &&
                    personalData.map((ele, ind) => {
                        return (
                            <SingleCandidateContainer key={ind}>
                                <div>
                                <p>Candidate Name:
                                </p>
                                <span>{ele.name}</span>
                                </div>
                                <div>
                                <p>Candidate Email:
                                </p>
                                <span>{ele.email}</span>
                                </div>
                                <div>
                                <p>Candidate User ID:
                                </p>
                                <span> {ele.id}</span>
                                </div>
                                <div>
                                <div>
                                <Link to={`Jobs/${ele.id}`}>
                                <button>Show All Jobs</button> 
                                </Link>
                                </div>
                                </div>
                            </SingleCandidateContainer>
                            )
                        })
                }
                
        </CandidateContainer>
    )
}

const MapState = (state) => {
    console.log(state, 'candidate');
    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {
        // current: state.allCandidateAppliedJobs,
        current: state.totalAppliedJobs,
        personalData: state.allPersonalData,
        // allJobs: state.allJobs,
        // applied: state.appliedLiveJobs,
        // received: state.receivedOffer,
    }
}

export default connect(MapState, {showAllCandidateJobs, startFetchCandidatePersonalData})(Candidate);

// const CheckContainer = styled.div`
// /* display: flex; */
// /* flex-direction: column; */
// /* display: grid; */
// /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
// @media (max-width: 320px) {
//     /* display: flex; */
// /* flex-direction: column; */
// /* display: grid; */
// /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */

// }
// `


const CandidateContainer = styled.div`
/* display: flex;
flex-direction: column;
justify-content: space-between;
align-content: space-between; */
/* display: grid; */
/* grid-column: 200px; */
/* grid-template-columns: repeat(auto-fit, minmax(100, 1fr)); */
/* grid-template-columns: 200px 200px; */
/* border: 4px solid black; */
display: flex;
flex-direction: column;
display: grid;
/* grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); */
/* margin-right: 10px; */
grid-gap: 20px;
margin: 20px;

@media (min-width: 768px) {
/* border: 4px solid black; */
/* display: flex; */
/* flex-direction: column; */
/* display: grid; */
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
/* margin-right: 4px; */

/* display: flex;
flex-direction: column;
justify-content: space-between;
align-content: space-between; */
/* display: grid; */
/* grid-template-rows: repeat(auto-fit, minmax(200, 1fr)); */
/* grid-gap: 4px; */
}
`
// const CheckContainer = styled.div`
// border: 1px solid red;
// /* display: grid; */
// /* grid-template-columns: 400px 200px; */
// /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
// `

const SingleCandidateContainer = styled.div`
border: 2px solid #EFC5C5;
border-radius: 8px;
padding: 10px;
margin: 4px;
display: flex;
flex-direction: column;
font-family: Arial, Helvetica, sans-serif;
/* padding-right: 0px; */
/* margin-right: 10px; */



>div {
    display: flex;
    flex-direction: row;
    display: grid;
    grid-template-columns: 210px calc(100% - 210px);
    /* grid-template-columns: repeat(auto-fit, minmax(80%, 1fr)); */
    /* justify-content: calc(100% - 210px) space-between; */
    /* align-content: space-between; */
    font-size: 1.4rem;
    margin: 13px 0px;
    margin-left: 6px;
    >p {
        /* width: 230px; */
        /* width: 100%; */
        /* border: 1px solid black; */
    }
        >span {
            font-weight: bold;
            /* background-color: black; */
            /* margin-top: 7px; */
            margin-left: 7px;
        /* border: 1px solid black; */
        text-overflow: ellipsis; 
        overflow: hidden;
        white-space: nowrap;

            /* text-align: right; */
            /* width: 300px; */
        }
}

@media (min-width: 768px) {
>div {
    /* grid-template-columns: 250px calc(100% - 250px); */

}
}

///////// BUTTON /////////////////////////////////////////////////////////
>div>div {
        /* margin-left: 20px; */
        /* margin-top: 20px; */
        >a {
    background-color: black;

    >button {
        margin-top: 10px;
        padding: 8px;
        background-color: #15ba53;
        cursor: pointer;
        border: none;
            white-space: nowrap;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 7px;
        color: white;
        font-size: 1.3rem;
    }
}

}


@media (max-width: 320px) {
border: 2px solid #EFC5C5;
border-radius: 8px;
padding: 6px;
margin: 6px;
display: flex;
flex-direction: column;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1rem;
margin-top: 4px;
padding-top: 4px;
    /* background-color: black; */
>p {
    margin-right: 3px;
    margin-top: 4px;
    padding-top: 4px;
}

>p >span {
        margin-left: 8px;
    }



//////////////////////////////////////////////////////////////////////////
///////////////////////// NO ERROR BUTTON //////////////////////////////////////////////////////////////////////////////////////////////////////////
>div {
        margin-left: 0px;
        margin-top: 10px;
>a>button {
        margin-top: 5px;
        padding: 10px;
        background-color: #23C5C5;
        cursor: pointer;
        border: none;
        border-radius: 6px;
        color: white;
        font-size: 1rem;
    }

}
}
`