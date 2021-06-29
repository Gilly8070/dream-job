import React from 'react';
import { connect } from 'react-redux';
import { startFindJobs } from '../../../actions/action';
import DashboardJobs from './DashboardJobs'
import { useEffect, useState } from 'react';
// import DatePicker from "react-datepicker";
import firebase from 'firebase';
import { startFetchInterviewTime, startFetchApprovalDate } from '../../../actions/action';
import DashboardClearInterview from './dashboardBoxes/DashboardClearInterview';
import DashboardAlert from './dashboardBoxes/DashboardAlert';
// import "react-datepicker/dist/react-datepicker.css";
import Spinner from '../../Spinner';


const Dashboard = ({ allJobs, received, applied, startFindJobs, startFetchApprovalDate, startFetchInterviewTime }) => {
    const [lenAccept, setLenAccept] = useState([]);
    const [lenReject, setLenReject] = useState([]);
    const [salary, setSalary] = useState(null);
    const [loading, setLoading] = useState(true);
    const database = firebase.database()

    useEffect(() => {

        //////////// USED IN INTERVIEW SECTION ///////////////////////////
        startFetchInterviewTime(firebase.auth().currentUser.uid)
        startFetchApprovalDate(firebase.auth().currentUser.uid)
        setTimeout(() => setLoading(false), 2000)
    }, [])

    let month = new Date().toLocaleString("en-US", { month: "long" });
    useEffect(() => {
        startFindJobs()
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
                let checkAccept = acceptArr.length > 0 ? acceptArr.length : 0
                setLenAccept(checkAccept)
                let max = Math.max(...acceptArr);
                // localStorage.setItem('MaxSalary', max > 0 ? max : 0)
                setSalary(max);
                // console.log(acceptArr, acceptArr.length, max);
            })
        database.ref('offer/rejectOffer/' + firebase.auth().currentUser.uid)
            .once('value').then((snap) => {
                const rejectArr = [];
                snap.forEach((child) => {
                    rejectArr.push(
                        // id: child.key,
                        child.val().salary,
                        // ...child.val()
                    )
                })
                let checkReject = rejectArr.length > 0 ? rejectArr.length : 0
                setLenReject(checkReject)
                // rejectArr.length > 0 &&
                // localStorage.setItem('rejectLength', rejectArr.length > 0 ? rejectArr.length : 0)
                // setLenReject(acceptArr)
            })
    }, [database])
    if (loading) {
        return <Spinner size={3} />
    }
    return (
        <React.Fragment>
                
            
            {/************ ALL DASHBOARD BOXES FOR CANDIDATE ***********/}

            <div>
                    <p>Selected Jobs {applied.length > 0 ? applied.length : 0} out of {allJobs.length > 0 ? allJobs.length: 0} in {month}</p>
            </div>

            <div>
                <DashboardClearInterview />
            </div>

            <div>
                <p>Accepted offer {lenAccept} out of {received.length + + lenReject  + +lenAccept} in {month}</p>
            </div>

            <div>
                <p>Highest Salary {(salary / 100000).toFixed(2) ? (salary / 100000).toFixed(2) : 0} LPA  out of {received.length + + lenReject  + +lenAccept} offers in {month}</p>
            </div>

            <div>
                <h1>Alert</h1>

                <DashboardAlert />

                {/*
                <p>Company Name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, est.</p> 
            */}
            </div>

            <div>
                <h1>Resume Analysis</h1>
                <h2>Resume Name</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi dolores quos quae aliquam dicta fugit quis corrupti hic animi.</p>
            </div>

            {/********* END OF  ALL DASHBOARD BOXES FOR CANDIDATE ******/}


            <div>
                {
                    allJobs.slice(0,5).map((single) => {
                        return <div key={single.id}>
                            <h3>{single.title}</h3>
                        </div>
                    })
                }

                {/*
                <h4>Jobs</h4>
                <p>Job1</p>
                <p>Job2</p>
                */}
                
                
                <p>{'---------------------------'}</p>
            </div>
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

export default connect(MapState, { startFindJobs, startFetchApprovalDate, startFetchInterviewTime })(Dashboard);


