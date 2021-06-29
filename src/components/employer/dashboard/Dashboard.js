import React, { useState } from 'react';
import styled from 'styled-components';
// import img from '../../images/logo.jpg';
import { connect } from 'react-redux';
import { allApplied, personalData,  showAllCandidateJobs, startFetchCandidatePersonalData, startCheckForUnActionCandidate } from '../../../actions/action';
import { useEffect } from 'react';
// import firebase from 'firebase';
// import { useState } from 'react';
import UnAction from './Unaction';
import InterviewSchedule from './InterviewSchedule';
import DashboardBoxes from './DashboardBoxes';
import RecruitmentFunnel from './RecruitmentFunnel';
import Spinner from '../../Spinner';

const Dashboard = ({ startCheckForUnActionCandidate }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        startCheckForUnActionCandidate()
        setTimeout(() => setLoading(false), 2000)

    }, [startCheckForUnActionCandidate])

    
    if (loading) {
        return <Spinner size={3} />
    }
    // window.addEventListener('click',  e => {
        // console.log(e)
    // })
    return (
        // <DataOverview>
        // // </DataOverview>
        <React.Fragment>
            
            <DashboardBoxes />

            {/*
                <p><span>40</span>Total Hire</p>
                <p><span>20</span>Apps per hire</p>
                <p><span>30</span>Avg. Time to hire</p>
                <p><span>33</span>Avg. cost per hire</p>
                <p><span>27</span>Open position</p> */}
            <div>
                <div>
                    
                    <h4>UnActioned Candidates</h4>

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
                </div>
            <div>
                    <h4>Recruitment Funnel</h4>

                    <RecruitmentFunnel />
                    
                    {/*
                <p>Screen 100%</p>
                <p>Interview 65%</p>
                <p>Offer 50%</p>
                <p>Hire 40%</p>
                    */}
                </div>
                <div>
                <h4>Interview Schedule</h4>
                
                <InterviewSchedule />
                </div>
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
            </div>
            </React.Fragment>
    )
}

const MapState = (state) => {
    // console.log(state.allCandidateAppliedJobs, 'allAppliedJobs');
    // console.log(state, 'dashboard');

    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {
        allApplied: state.allCandidateAppliedJobs,
        forHire: state.EmployerDashboardBoxes,
        forInterview: state.addDashboardScheduleInterview,
        personalData: state.allPersonalData,
        // allName: state.allCandidateName,
        // allInterview: state.allCandidateInterviewLeft
        // allJobs: state.allJobs,
        // applied: state.appliedLiveJobs,
        // received: state.receivedOffer,
    }
}

export default connect(MapState, {showAllCandidateJobs, startFetchCandidatePersonalData, startCheckForUnActionCandidate})(Dashboard);

// export default Dashboard;

const Container = styled.div`
/* display: grid; */
/* grid-template-columns: 3fr; */
/* position: absolute; */
/* right: 600px; */
/* width: ${props => (props.openSide ? `calc(100vw-400px)` : `100vw`)}; */
/* width: 100vw; */
/* width: 100%; */
/* @media (max-width: 900px) { */
    display: flex;
flex-direction: column;
/* justify-content: space-between; */
/* align-items: center; */
/* } */

`

const MainContainer = styled.div`
/* display: grid; */
/* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
/* grid-template-rows: repeat(1,2fr); */
/* grid-area: 2/1/1/1; */
@media (max-width: 826px) {
    display: flex;
    flex-direction: column;
    text-align: center;
}
`


const DataOverview = styled.div`
display: flex;
flex-direction: row;
width: 100%;
border: 1px solid black;
justify-content: space-between;
/* grid-row: 2/2; */
/* align-items: flex-start; */

&>p {
margin: 0px 8px 30px 6px;
border: 1px solid black;
padding: 5px 20px 12px 2px ;
text-align: center;
/* width: 100%; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

@media (max-width: 826px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

/* @media (max-width: 900px) {
    justify-content: flex-start;
    /* flex-grow: 2; */
/* }  */
`

const SideContain = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: 4px;
padding: 10px;
`

