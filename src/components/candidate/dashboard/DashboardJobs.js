import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import firebase from 'firebase';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';

const DashboardJobs = ({ current }) => {
    // const [jobFromFirebase, setJobFromFirebase] = useState([]);
    // const database = firebase.database();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)

    }, [loading])

    

    //// THIS IS DONE FOR DIRECT FETCHING FROM FIREBASE BUT NOW WE ARE USING DIRECT FROM OUR STORE THEREFORE WE DON'T NEED IT ///////////////
    // useEffect(() => {
    //     database
    //         .ref('Jobs')
    //         .on('value', (snapshot) => {
    //             const exp = [];
    //             snapshot.forEach((childSnap) => {
    //                 exp.push({
    //                     id: childSnap.key,
    //                     ...childSnap.val()
    //                 })
    //             })
    //             // console.log(exp.length);
    //             setJobFromFirebase(exp);
    //         })
    // }, [database]);
    
    if (loading) {
        return <Spinner size={3} />
    }
    
    if (current.length === 0) {
        return <h1>No Jobs To Display</h1>
    }
    return (
        <div>
            <Link to='search/dashboardJobs'>
                <i className="fas fa-search fa-3x"></i>
            </Link>
            <Link to='filter/dashboardJobs'>
                <i className="fas fa-filter fa-3x"></i>
            </Link>
            <Link to='sort/dashboardJobs'>
                <i className="fas fa-sort fa-3x"></i>
            </Link>
            
            {
                current.map((ele) => {
                    return (
                        <div key={ele.id}>
                        <div>{ele.title}</div>
                            <p>{ele.companyName}</p>
                            <span>{ele.location}</span>
                            <p>{ele.status}</p>
                            <span>{ele.date}</span>
                            <p>{'--------------------------'}</p>
                        </div>
                    )
                })
            }
            {
                // current.forEach((single, index) => {
                //     return (
                //         <div key={index}>
                //             <h3>{single.title}</h3>
                //             <p>{single.companyName ? <p>single.companyName</p> : 'Anonymous'}</p>
                //             <p>{single.location}</p>
                //             <div>
                //                 <p>{single.status}</p>
                //                 <p>{single.date}</p>
                //             </div>
                //         </div>
                //     )
                // })
            }
        </div>
    )
}

const MapState = (state) => {
    // delete state.newJobs
    // delete state.fixedLiveJobs
    // console.log(state.allJobs.length)
    // console.log(state, 'DashboardJobs');
    return {
        current: state.allJobs
    }
}

export default connect(MapState, null)(DashboardJobs);
