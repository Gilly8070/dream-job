import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startFetchCandidatePersonalData } from '../../../actions/action';
import { Link,  useHistory } from 'react-router-dom';
import Spinner from '../../Spinner';
import styled from 'styled-components';

const Approvals = ({ current, personalData, showAllCandidateJobs, startFetchCandidatePersonalData }) => {
    const history = useHistory();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)

    }, [loading])

    useEffect(() => {
        startFetchCandidatePersonalData()
    }, [startFetchCandidatePersonalData])


    if (loading) {
        return <div><Spinner onStart='yes'  size={4} /></div>
    }

    if (personalData === undefined || personalData.length === 0) {
        return <h1 style={{marginTop: '20px', marginLeft: '20px', marginBottom: '10px'}}>NO LIST TO DISPLAY</h1>
    }
    return (
        <ApprovalContainer>
            
            {
                personalData.map((ele, ind) => {
                    return (
                        <SingleApprovalContainer key={ind}>
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
                                <Link to={`candidateApproved/${ele.id}`}>
                                <button>Show All Approvals</button>
                                </Link>
                                </div>
                            </div>
                            {/*<button onClick={() => setTimeout(() => history.push(`candidateApproved/${ele.id}`), 200)}>
                                
                            SHOW ALL APPROVALS
                    </button> */}
                            
                        </SingleApprovalContainer>
                    )
                })
            }
        </ApprovalContainer>
    )
}

const MapState = (state) => {
    console.log(state.allCandidateAppliedJobs, 'approval');
    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {

        // current: state.allCandidateAppliedJobs,
        personalData: state.allPersonalData,
        // allJobs: state.allJobs,
        // applied: state.appliedLiveJobs,
        // received: state.receivedOffer,
    }
}

export default connect(MapState, {startFetchCandidatePersonalData})(Approvals);






const ApprovalContainer = styled.div`
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
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
}
`

const SingleApprovalContainer = styled.div`
border: 2px solid #EFC5C5;
border-radius: 8px;
padding: 10px;
margin: 4px;
display: flex;
flex-direction: column;
font-family: Arial, Helvetica, sans-serif;


>div {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    margin: 13px 0px;
    margin-left: 6px;
    display: grid;
    grid-template-columns: 210px calc(100% - 210px);
    >p {

    }
        >span {
            font-weight: bold;
            /* margin-top: 7px; */
            margin-left: 7px;
            text-overflow: ellipsis; 
            overflow: hidden;
            white-space: nowrap;
        }
}



///////// BUTTON /////////////////////////////////////////////////////////
>div>div {
>a {
    background-color: black;

>button {
        margin-top: 10px;
        padding: 8px;
        background-color: #15ba53;
        cursor: pointer;
        border: none;
        padding: 9px;
            white-space: nowrap;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 7px;
        color: white;
        font-size: 1.3rem;
    }
}

}

`











// const ApprovalContainer = styled.div`
// /* display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-content: space-between; */
// /* display: grid; */
// /* grid-column: 200px; */
// /* grid-template-columns: repeat(auto-fit, minmax(100, 1fr)); */
// /* grid-template-columns: 200px 200px; */
// /* border: 4px solid black; */
// display: flex;
// flex-direction: column;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
// margin-right: 4px;

// @media (max-width: 320px) {
// /* border: 4px solid black; */
// display: flex;
// flex-direction: column;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// margin-right: 4px;

// /* display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-content: space-between; */
// /* display: grid; */
// /* grid-template-rows: repeat(auto-fit, minmax(200, 1fr)); */
// /* grid-gap: 4px; */
// }
// `
// // const CheckContainer = styled.div`
// // border: 1px solid red;
// // /* display: grid; */
// // /* grid-template-columns: 400px 200px; */
// // /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
// // `

// const SingleApprovalContainer = styled.div`
// border: 2px solid #EFC5C5;
// border-radius: 8px;
// padding: 4px;
// margin: 4px;
// display: flex;
// flex-direction: column;
// /* padding-right: 0px; */
// /* margin-right: 10px; */


// ///////// BUTTON /////////////////////////////////////////////////////////
// >div {
//         margin-left: 20px;
//         margin-top: 20px;
// >a>button {
//         margin-top: 10px;
//         padding: 10px;
//         background-color: #23C5C5;
//         cursor: pointer;
//         border: none;
//         border-radius: 5px;
//         color: white;
//         font-size: 1.2rem;
//     }

// }

// @media (max-width: 320px) {
// border: 2px solid #EFC5C5;
// border-radius: 8px;
// padding: 6px;
// margin: 6px;
// display: flex;
// flex-direction: column;
// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// font-size: 1rem;
// margin-top: 4px;
// padding-top: 4px;
//     /* background-color: black; */
// >p {
//     margin-right: 3px;
//     margin-top: 4px;
//     padding-top: 4px;
// }

// >p >span {
//         margin-left: 8px;
//     }



// //////////////////////////////////////////////////////////////////////////
// ///////////////////////// NO ERROR BUTTON //////////////////////////////////////////////////////////////////////////////////////////////////////////
// >div {
//         margin-left: 0px;
//         margin-top: 10px;
// >a>button {
//         margin-top: 5px;
//         padding: 10px;
//         background-color: #23C5C5;
//         cursor: pointer;
//         border: none;
//         border-radius: 6px;
//         color: white;
//         font-size: 1rem;
//     }

// }
// }
// `


















// import React from 'react'

// const Approvals = () => {
//     return (
//         <div>
//             Approvals
//         </div>
//     )
// }

// export default Approvals