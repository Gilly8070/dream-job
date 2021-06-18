import React from 'react';
import { connect } from 'react-redux';
import { startFindJobs } from '../../../actions/action';
import DashboardJobs from './DashboardJobs'
import { useEffect, useState } from 'react';
// import DatePicker from "react-datepicker";
import firebase from 'firebase';

// import "react-datepicker/dist/react-datepicker.css";

const Dashboard = ({ allJobs, received, applied, startFindJobs }) => {
    // const [lenAccept, setLenAccept] = useState([])
    // const [lenReject, setLenReject] = useState([])
    // const [salary, setSalary] = useState(null)
    const database = firebase.database()

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
                localStorage.setItem('acceptLength', acceptArr.length > 0 ? acceptArr.length : 0)
                // setLenAccept( )
                let max = Math.max(...acceptArr);
                localStorage.setItem('MaxSalary', max > 0 ? max : 0)
                // setSalary(max);
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
                // rejectArr.length > 0 &&
                localStorage.setItem('rejectLength', rejectArr.length > 0 ? rejectArr.length : 0)
                // setLenReject(acceptArr)
            })
    }, [database])
    return (
        <React.Fragment>
            <div>
                    <p>Selected Jobs {applied.length > 0 ? applied.length : 0} out of {allJobs.length > 0 ? allJobs.length: 0} in {month}</p>
            </div>
            <div>
                <p>Clear Interview 0 out 0 in {month}</p>
            </div>
            <div>
                    <p>Accepted offer {localStorage.getItem('acceptLength')} out of {received.length + +localStorage.getItem('rejectLength') + +localStorage.getItem('acceptLength')} in {month}</p>
            </div>
            <div>
                <p>Highest Salary {(localStorage.getItem('MaxSalary') / 100000).toFixed(2) ? (localStorage.getItem('MaxSalary') / 100000).toFixed(2) : 0 } LPA  out of {received.length + +localStorage.getItem('rejectLength') + +localStorage.getItem('acceptLength')} offers in {month}</p>
            </div>
            <div>
                <h4>Alert</h4>
                <p>Company Name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, est.</p>
            </div>
            <div>
                <h4>Resume Analysis</h4>
                <h5>Resume Name</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi dolores quos quae aliquam dicta fugit quis corrupti hic animi.</p>
            </div>
            <div>
                {
                    allJobs.slice(0,5).map((single) => {
                        return <div key={single.id}>
                            <h3>{single.title}</h3>
                        </div>
                    })
                }
                <h4>Jobs</h4>
                <p>Job1</p>
                <p>Job2</p>
                <p>{'---------------------------'}</p>
            </div>
            <div>
                <DashboardJobs />
            </div>
        </React.Fragment>
    )
}

const MapState = (state) => {
    console.log(state, 'Dashboard');
    return {
        allJobs: state.allJobs,
        applied: state.appliedLiveJobs,
        received: state.receivedOffer,
    }
}

export default connect(MapState, { startFindJobs })(Dashboard);
