import React, { useState } from 'react';
import styled from 'styled-components';
// import img from '../../images/logo.jpg';
import { connect } from 'react-redux';
import { allApplied, personalData,  showAllCandidateJobs, startFetchCandidatePersonalData, startCheckForUnActionCandidate, totalAppliedJobForAllCandidate, startFindCandidateInterviewLeft  } from '../../../actions/action';
import { useEffect } from 'react';
import firebase from 'firebase';
// import { useState } from 'react';
import UnAction from './Unaction';
import InterviewSchedule from './InterviewSchedule';
import DashboardBoxes from './DashboardBoxes';
import RecruitmentFunnel from './RecruitmentFunnel';
import Spinner from '../../Spinner';
// import Chart  from './Graph';
const Dashboard = ({ startCheckForUnActionCandidate, showAllCandidateJobs, startFetchCandidatePersonalData, totalAppliedJobForAllCandidate, startFindCandidateInterviewLeft }) => {

    const [loading, setLoading] = useState(true)
    // const [chartData, setChartData] = useState({})

    useEffect(() => {

        //////////////// THIS ACTION CREATOR COMMENTING UNNECESSARY LOOP 
        // FOR UN ACTION CANDIDATE SECTION WHICH GIVING US ERROR THAT WHY IS IT COMMENTED /////////////////////////////////////////////////////////////////////////////////
        // startCheckForUnActionCandidate()  ////// THIS IS ONE

        ////// ITS IS ALREADY THERE BUT NOT IN USED IN useEffect SO WE HAVE ADDED THIS ONE NEW
        // showAllCandidateJobs()

        // console.log('from dash');

            //////////// NEW ONE /////////////////////
        /////////////// USED IN UN ACTION SECTION /////////////////////
        startFetchCandidatePersonalData();
        startFindCandidateInterviewLeft();
        showAllCandidateJobs();


        setTimeout(() => setLoading(false), 3000)
        // let arr = []
        // let arr2 = []
        // firebase.database()
        // .ref('appliedLiveJobs/').orderByChild('val')
        // .once('value').then((snap) => {
        //     snap.forEach((el) => {
        //         firebase.database()
        //         .ref('appliedLiveJobs/' + el.key)
        //         .once('value').then((snap2) => {
        //             let newA = []
        //             newA.push({ userId: el.key })
        //                 snap2.forEach((el2) => {
        //                         // console.log(el2.val());
        //                         newA.push(el2.val())
        //                 })
        //                 arr.push(newA)
        //                 // console.log(arr, 'accepted');
        //         // })
        //         firebase.database()
        //         .ref('offer/acceptOffer/' + el.key)
        //         .once('value').then((snap2) => {
        //             let newAA = []
        //             newAA.push({ userId: el.key })

        //                 snap2.forEach((el2) => {
        //                         // console.log(el2.val());
        //                         newAA.push(el2.val())
        //                 })
        //                 arr2.push(newAA)
        //                 // console.log(arr2, 'accept');
        //         // })
        //         let newArr = []; 
        //             // 
        //             arr.map((ele) => {
        //                 arr2.map((ele1) => {
        //                     let arr3 = [];
        //                     if (ele[0] && ele1[0] && ele1[0].userId === ele[0].userId) {
        //                         ele1.forEach((item) => {
        //                             if (ele.every((item1) => item1.id !== item.id)) {
        //                                 arr3.push(item)
        //                             } 
        //                         })
                                
        //                         newArr.push(ele.concat(arr3))
        //                     }
        //                 })
        //             })
        //             totalAppliedJobForAllCandidate(newArr)
        //             console.log(newArr,'offer');
        //         })
        //         })

        //     })
            
        // })
    }, [ loading])

    // const getChartData = () => {
    // Ajax calls here
    // setChartData({
    //     let chartData = {
    //         labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge',],
    //         datasets:[
    //             {
    //             label: 'hh
    //             data:[
    //                 100,
    //                 80,
    //                 60,
    //                 40,
    //                 20,
    //                 10,
    //                 ],
    //             // data: [10, 15, 20, 30],
    //                 backgroundColor: [
    //                 'black'
    //                 ]
    //             },
    //         ],
    //                     xAxes: [
    //                         {
    //                             barPercentage: 0.1
    //                         }
    //                     ],
                    
    // }
    

    if (loading) {
        return <div><Spinner onStart='yes' size={4} /></div>
    }
    // window.addEventListener('resize',  e => {
    //     console.log(e.target.innerWidth)
    // })
    return (
        // <DataOverview>
        // // </DataOverview>
        <React.Fragment>
            <DashContainer>
            
            
            <DashContainerBox>
                <DashboardBoxes />
            </DashContainerBox>

            {/*
                <p><span>40</span>Total Hire</p>
                <p><span>20</span>Apps per hire</p>
                <p><span>30</span>Avg. Time to hire</p>
                <p><span>33</span>Avg. cost per hire</p>
                <p><span>27</span>Open position</p> */}

                <MainContainer>
                <DashContainerUnAction>
                    

                    <UnAction />

                    {/*
                    {
                        data.map((ele) => {
                            return (
                                <div>
                                    <h4>{ele.name}</h4>
                                    <h4>{ele.email}</h4>
                                </div>
                                )
                        })
                            // const {ele.id}
                            // console.log(ele)
                            // ṛeturn <h1>{ { ele.id }
                        // }</h1>
                        // })
                    }
                    <p>Job title, location</p>
                <p>Job title, location</p>
                <p>Job title, location</p>
                <p>Job title, location</p>*/}
                    </DashContainerUnAction>
                    <OtherContainer>
                        
                        <DashContainerInter>
                
                            <InterviewSchedule />
                        </DashContainerInter>
                        <DashContainerRecruit>

                            <RecruitmentFunnel />
                    
                    {/*
                <p>Screen 100%</p>
                <p>Interview 65%</p>
                <p>Offer 50%</p>
                <p>Hire 40%</p>
                    */}
                        </DashContainerRecruit>
                    
                    </OtherContainer>

                    </MainContainer>
                    {/*
                    {
                        name.forEach((el, ind) => {
                            console.log(el)
                            return <h4>{el}</h4>
                            // return (
                            //     <div>
                            //         <h4>{el}</h4>
                            //         <h5>ddddd</h5>
                            //     </div>
                            // )
                        })
                    }

                        // interviewed.map((ele) => {
                        //     return (
                        //         <div>
                        //         <h3>{name}</h3>
                        //             <span>{ele.date}</span>
                        //             <p>{ele.title}, {ele.location}</p>
                        //         </div>
                        //     )
                        // })
                    <div>
                    <p>Candidate Name</p>
                    <span>Job, Title, Place</span>
                    <p>Candidate Name</p>
                    <span>Job, Title, Place</span>
                    <p>Candidate Name</p>
                    <span>Job, Title, Place</span>
                </div> */}
                </DashContainer>
            </React.Fragment>
    )
}

const MapState = (state) => {
    // console.log(state.allCandidateAppliedJobs, 'allAppliedJobs');
    // console.log(state, 'dashboard');

    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {
        // allApplied: state.allCandidateAppliedJobs,
        // forHire: state.EmployerDashboardBoxes,
        // forInterview: state.addDashboardScheduleInterview,
        // personalData: state.allPersonalData,

        
        // allName: state.allCandidateName,
        // allInterview: state.allCandidateInterviewLeft
        // allJobs: state.allJobs,
        // applied: state.appliedLiveJobs,
        // received: state.receivedOffer,
    }
}

export default connect(MapState, {showAllCandidateJobs, startFetchCandidatePersonalData, startCheckForUnActionCandidate, totalAppliedJobForAllCandidate, startFindCandidateInterviewLeft})(Dashboard);


// const Container = styled.div`

//     display: flex;
// flex-direction: column;


// `

// const MainContainer = styled.div`

// @media (max-width: 826px) {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
// }
// `


// const DataOverview = styled.div`
// display: flex;
// flex-direction: row;
// width: 100%;
// border: 1px solid black;
// justify-content: space-between;
// /* grid-row: 2/2; */
// /* align-items: flex-start; */

// &>p {
// margin: 0px 8px 30px 6px;
// border: 1px solid black;
// padding: 5px 20px 12px 2px ;
// text-align: center;
// /* width: 100%; */
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// }

// @media (max-width: 826px) {
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
// }

// /* @media (max-width: 900px) {
//     justify-content: flex-start;
//     /* flex-grow: 2; */
// /* }  */
// `

// const SideContain = styled.div`
// border: 1px solid black;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// text-align: center;
// margin: 4px;
// padding: 10px;
// `



//////**************************************************************////////

const DashContainer = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
/* align-content: center; */
margin: 15px;
margin-right: 20px;
margin-left: 20px;

@media (min-width: 1200px) {
    /* font-size: 2rem; */
}
`
const DashContainerBox = styled.div`

/* @media (max-width: 320px) { */
/* } */

/* display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center; */
/* text-align: center; */
/* border: 1px solid black; */
margin-bottom: 20px;
`

const MainContainer = styled.div`
/* display: grid; */
@media (min-width: 768px) {
    display: flex;
    display: grid;
    flex-direction: row;
    grid-template-columns: 60% auto;
    /* grid-template-columns: 54% 43%; */

    grid-gap: 20px;
    /* grid-template-rows: 50% 100%; */
    /* grid-template-columns: repeat(auto-fit, minmax()); */
}
`;

const OtherContainer = styled.div`
/* float:  right; */
@media (min-width: 768px) {
    /* display: grid; */
    /* grid-template-columns: 49% 48%; */

    /* grid-gap: 20px; */
    /* float: right; */

}
`;




const DashContainerUnAction = styled.div`
border: 1px solid black;
/* text-align: center; */
margin-bottom: 20px;

`

const DashContainerRecruit = styled.div`
border: 1px solid black;
/* text-align: center; */
margin-bottom: 20px;

`
const DashContainerInter = styled.div`
border: 1px solid black;
/* text-align: center; */
margin-bottom: 20px;

`