import React from 'react';
import { connect } from 'react-redux';
import { startFindJobs } from '../../../actions/action';
import DashboardJobs from './DashboardJobs'
import { useEffect, useState } from 'react';
// import DatePicker from "react-datepicker";
import firebase from 'firebase';
import { startFetchInterviewTime, startFetchApprovalDate, startShowAppliedJobs, fetchAllJobsForCurrentUser,fetchAllLiveJobsForCurrentUser,fetchReceivedOfferForCurrentUser } from '../../../actions/action';
import DashboardClearInterview from './dashboardBoxes/DashboardClearInterview';
import DashboardAlert from './dashboardBoxes/DashboardAlert';
// import "react-datepicker/dist/react-datepicker.css";
import Spinner from '../../Spinner';
// import styled from 'styled-components';
import styled from 'styled-components/macro'

// fetchAllJobsForCurrentUser(),fetchAllLiveJobsForCurrentUser(),fetchReceivedOfferForCurrentUser()
const Dashboard = ({ allJobs, received, applied, startFindJobs, startFetchApprovalDate, startFetchInterviewTime, startShowAppliedJobs, fetchAllJobsForCurrentUser,fetchAllLiveJobsForCurrentUser,fetchReceivedOfferForCurrentUser }) => {
    const [lenAccept, setLenAccept] = useState(0);
    const [lenReject, setLenReject] = useState(0);
    const [salary, setSalary] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);

    const database = firebase.database()

    useEffect(() => {
        
        //////////// USED IN INTERVIEW SECTION ///////////////////////////
        startFetchInterviewTime(firebase.auth().currentUser.uid)
        startFetchApprovalDate(firebase.auth().currentUser.uid)
        

        ///////////// NEW ONE /////////////////////
        startShowAppliedJobs();
        fetchAllJobsForCurrentUser();
        // fetchAllLiveJobsForCurrentUser();
        fetchReceivedOfferForCurrentUser();

        setTimeout(() => setLoading(false), 4000)
    }, [loading])

    useEffect(() => {
        setTimeout(() => setLoading2(false), 7000)
    }, [loading2])

    // let month = new Date().toLocaleString("en-US", { month: "long" });
    useEffect(() => {
        database.ref('offer/acceptOffer/' + firebase.auth().currentUser.uid)
            .once('value').then((snap) => {
                const acceptArr = [];
                snap.forEach((child) => {
                    acceptArr.push(
                        // id: child.key,
                        child.val().salary,
                        // ...child.val()
                    )
                })
                // localStorage.setItem('acceptLength', acceptArr.length > 0 ? acceptArr.length : 0)
                let checkAccept = acceptArr !== undefined && acceptArr.length > 0 ? acceptArr.length : 0
                setLenAccept(checkAccept)
                let max = Math.max(...acceptArr);
                // localStorage.setItem('MaxSalary', max > 0 ? max : 0)
                {max > 0 ? setSalary(max) : setSalary(0)}
                ;
                // console.log(acceptArr, acceptArr.length, max);
            })
        database.ref('offer/rejectOffer/' + firebase.auth().currentUser.uid)
            .once('value').then((snap) => {
                const rejectArr = [];
                snap.forEach((child) => {
                    rejectArr.push(
                        // id: child.key,
                        child.val().salary,
                        // ...child.val
                    )
                })
                let checkReject = rejectArr !== undefined && rejectArr.length > 0 ? rejectArr.length : 0
                setLenReject(checkReject)
                // rejectArr.length > 0 &&
                // localStorage.setItem('rejectLength', rejectArr.length > 0 ? rejectArr.length : 0)
                // setLenReject(acceptArr)
            })
    }, [database])
    
    if (loading) {
        /////// THIS ONE IS SPECIAL CASE REMEMBER IT IS STOPPING JOBS FROM ADDING TWICE ////////////////////////////////
        ////////// REMEMBER THIS ACTION FETCHING AND CHECKING ALL JOBS SUCH AS APPLIED JOBS, ALL JOBS, RECEIVED OFFER AND ALL LIVE JOBS FOR CURRENT USER /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        startFindJobs();

        return <div><Spinner onStart='yes'  size={4} /></div>
    }
    window.addEventListener('resize', e => {
        console.log(e.target.innerWidth)
    })
    // if (loading2) {
        // startFindJobs();
        // return <div><Spinner onStart='yes'  size={3} /></div>
    // }
    // if (allJobs.length > 0) {
    //     return <h1>No Jobs</h1>
    // }

    // let sortAllJobs = allJobs.reverse().slice(0, 5).sort((a, b) => b.title.length - a.title.length)
    // console.log(sortAllJobs);
    // console.log( window.addEventListener("resize"));
    return (
        <React.Fragment>
                
        {/************ ALL DASHBOARD BOXES FOR CANDIDATE ***********/}
        <OuterContainer>
        {loading2  ?  <div><Spinner onStart='yes'  size={3} /></div> :
                <BoxedContainer>
            <SingleBox>
                        <p>Selected Jobs {applied !== undefined && applied.length > 0  ? <span>{applied.length}</span> : <span>{0}</span> } out of {allJobs !== undefined && allJobs.length > 0 ? allJobs.length: 0} Jobs </p>
            </SingleBox>

            <SingleBox>
                <DashboardClearInterview />
            </SingleBox>
            <SingleBox>
                <p>Accepted offer <span>{lenAccept}</span> out of {(received.length + + lenReject  + +lenAccept) > 0 ? (received.length + + lenReject  + +lenAccept) : 0} offers </p>
            </SingleBox>
            <SingleBox>
                    <p>Highest Salary { salary > 0 && (salary / 100000).toFixed(1) ? <span>{(salary / 100000).toFixed(1)} LPA </span>  : <span>{0} LPA</span> } out of {(received.length + + lenReject  + +lenAccept) > 0 ? (received.length + + lenReject  + +lenAccept) : 0} offers </p>
            </SingleBox>
                </BoxedContainer>
            }
            <AlertContainer>
                <h1>Alert</h1>

                    <DashboardAlert />

                {/*
                <p>Company Name</p>
                <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, est.</
            */}
            </AlertContainer>

            <ResumeContainer>
                <h1>Resume Analysis</h1>
                    <h2>Resume Name</h2>
                    <div>
                        <span>Person Name</span>
                    <span>Email</span>
                    <span>Phone No.</span>
                    <span>Experience</span>
                    <span>Skills</span>
                    
                    </div>
                    </ResumeContainer>
                {/*
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi vitae, quas doloribus iste ratione error nulla asperiores. Dolorem laboriosam fuga, quaerat dolores, quisquam nesciunt sit fugiat possimus autem nemo ipsum reprehenderit accusamus maxime. Laudantium accusantium eius quos voluptates libero magni, ut quis explicabo in deleniti cumque natus perferendis omnis?</h3>
                    
                */ }
                    {/********* END OF  ALL DASHBOARD BOXES FOR CANDIDATE ******/}


                <JobContainer>
                    <h1>Jobs</h1>
                    {
                        allJobs !== undefined && allJobs.length > 0 ?
                    <div>
                    {   
                            allJobs.slice().reverse().slice(0,4).sort((a, b) => b.title.length - a.title.length).map((single, index) => {
                                let name = single.title.toString('').split(' ').length > 1 && (single.title.toString('').split('').length < 15)
                                    ?
                                    single.title.toString('').split(' ').slice(0, 2).join(' ')
                                    :
                                    single.title.toString('').split(' ').length === 1
                                    ?
                                    single.title.toString('').split('').slice(0, 15).join('') : single.title.toString('').split('').slice(0, 15).join('') ;
                            // console.log((name.toString('').split('').length) , index, name)
                                return single.title && <Div key={single.id}
                                    size4={(100 - ((index + 1) * 12) + '%')}
                                    // 400 * 40 px
                                >
                                <Heading3 bg='red'
                                        size3={
                                            (name.toString('').split('').length - (index * 7)) * (name.toString('').split('').length < 10 ? 15 : 6)
                                            + 'px'
                                        }
                                        >
                                        {single.title.toLowerCase()}
                                    </Heading3>
                                </Div>
                            })
                            
                    }
                            </div>
                            : <h2 style={{marginTop: '20px', marginLeft: '10px', marginBottom: '10px'}}>No Jobs</h2>
                    }

                {/*
                <h4>Jobs</h4>
                <p>Job1</p>
                <p>Job2</p>
                */}
                
                    
                    </JobContainer>
                    
            </OuterContainer>
                
            <div>
                <DashboardJobs />
            </div>
        </React.Fragment>
    )
}

const MapState = (state) => {
    // console.log(state, 'Dashboard');
    return {
        allJobs: state.allJobs,
        applied: state.appliedLiveJobs,
        received: state.receivedOffer,
    }
}

export default connect(MapState, { startFindJobs, startFetchApprovalDate, startFetchInterviewTime, startShowAppliedJobs, fetchAllJobsForCurrentUser,fetchAllLiveJobsForCurrentUser,fetchReceivedOfferForCurrentUser })(Dashboard);


const OuterContainer = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

display: flex;
flex-direction: column;
margin: 8px;
margin-bottom: 5px;
margin-top: 15px;

@media (min-width: 768px) {

    display: grid;
grid-template-columns: 50% 49%;

    /* grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); */
    /* grid: 10px; */
    margin: 8px;
margin-right: 12px;
grid-row-gap: 4px;
grid-column-gap: 1%;
margin-top: 15px;
}
@media (min-width: 992px) {

    /* display: grid; */
    /* grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); */
    /* grid: 10px; */
    margin: 12px;
    /* grid-row-gap: 5px; */
/* grid-column-gap: 5px; */
grid-row-gap: 5px;
margin-top: 20px;
margin-right: 15px;
}
`

const BoxedContainer = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1.2rem;
display: flex;
flex-direction: row;
/* margin: 5px; */
display: grid;
grid-template-columns: 50% 49%;
margin-bottom: 8px;
/* grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); */

/* margin: 3px; */
/* grid-gap: 4px; */
/* border: 1px solid black; */
grid-row-gap: 4px;
grid-column-gap: 1%;
@media (min-width: 768px) {
    grid-template-columns: 49% 50%;
/* margin-left: 0px; */
/* grid-template-columns: 50% 50%; */
grid-row-gap: 10px;
grid-column-gap: 1%;
/* margin-left: 5px; */
}
/* margin-right: 0; */
/* padding-right: 1px; */
/* font-weight: 5rem; */
`;

const SingleBox = styled.div`
border: 1px solid black;
margin: 5px;
margin-right: 5px;
margin-left: 5px;
/* margin-bottom: 1px; */
/* margin-bottom: 0px; */
padding: 10px;
    /* margin-right: 2px; */

/* padding-left: 3px; */

@media (min-width: 1200px) {
/* margin: 0px 5px; */
/* padding: 8px; */
>p {

    margin-left: 3%;
}
}
/* margin-left: 0; */
/* margin-right: 1px; */
/////////////////////// ALL BOXES VALUES /////////////////////////////////
>p>span {
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
}
`;


const AlertContainer = styled.div`
border: 1px solid black;
margin: 5px;
padding: 10px;
margin-bottom: 15px;

/* height: auto; */
/* >div {
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
} */
/* margin-top: -10px; */
>h1:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        width: 100%;
        position: relative;
        left: 1px;
        border-radius: 100%;
        background-color: black;
}
`

const ResumeContainer = styled.div`
border: 1px solid black;
margin: 5px;
/* margin-left: 4px; */
padding: 10px;
margin-bottom: 15px;

>h1:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        width: 100%;
        position: relative;
        left: 1px;
        border-radius: 100%;
        background-color: black;
}
>h2 {
    margin-top: 8px;
}
>h3 {
    margin-top: 5px;
    font-weight: normal;
}

>div {
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    margin-bottom: 10px;
    >span{
        /* width: 100%; */
        margin: 8px 0px;
        font-size: 1.4rem;
        }
    >span:after {
        content: '';
        display: block;
        /* width: 100%; */
        margin-left: 160px;
        margin-bottom: 4px;
        /* margin-right: 40px; */
        border-bottom: 2px solid black;
        /* color: black; */
    }
}
`

const JobContainer = styled.div`
border: 1px solid black;
margin: 5px;
padding: 10px;
text-transform: capitalize;
margin-bottom: 15px;

>h1:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        width: 100%;
        position: relative;
        left: 1px;
        border-radius: 100%;
        background-color: black;
}

>div {
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding-top: 5px;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 5px;
    /* border: 1px solid black; */
    >div{
    border: 1px solid black;
        /* width: 100%; */
        margin: 6px;
        padding: 4px;
        margin-bottom: 17px;
        margin-top: 4px;
        /* margin-top: 8px; */
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
    }
    
}
@media (min-width: 768px) {
>div {
    margin-top: 30px;
    >div {
        margin-bottom: 25px;
    }
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
    /* align-content: space-between; */
    /* background-color: black; */
}
}
`
const Div = styled.div`
width: ${props => (props.size4)};  ///// FINAL SOLUTION FOR JOB BOX ///////
text-overflow: ellipsis; 
overflow: hidden;
/* border: 1px solid black; */
`;



const Heading3 = styled.span`
        /* border: 1px solid black; */
        text-transform: capitalize;
        text-align: center;
        padding: 3px;

        /* padding-left: ${props => props.size3}; */
        /* padding-right: ${props => props.size3}; */
`;
