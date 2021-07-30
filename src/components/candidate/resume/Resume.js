import React, { useEffect, useState } from 'react';
// import firebase from 'firebase';
import ShowResume from './ShowResume';
import AddResume from './AddResume';
import { connect } from 'react-redux';
import { startSetResume } from '../../../actions/action';
import Spinner from '../../Spinner';

const Resume = ({ startSetResume, current }) => {
    // const database = firebase.database();
    // const [getResumeData, setGetResumeData] = useState({});
    // const [passDataResume, setPassDataResume] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)

    }, [loading])

    

    useEffect(() => {
    //     database.ref('resume/' + firebase.auth().currentUser.uid)
    //     .once('value').then((snap) => {
    //         const exp = [];
    //         snap.forEach((child) => {
    //             exp.push({
    //                 id: child.key,
    //                 ...child.val()
    //             })
    //         })
    //         console.log(getResumeData, '1');
    //         setGetResumeData((prev) => ({...prev, exp}))
    //     })
        
        startSetResume()
    }, [startSetResume])
    // console.log(getResumeData, '2');

    if (loading) {
        return <div><Spinner onStart='yes'  size={4} /></div>
    }
    
    return (
        // startSetResume() 
        <div>
        {current !== undefined && current.length > 0  ?
            <ShowResume data={current} />
            :
            <AddResume />
        }
        </div>
        // {
        //         Object.keys(getResumeData).length !== 0 ? <ShowResume resumeDate = {getResumeData} /> : <AddResume />
        //     }
    )
}

const MapState = (state) => {
    // delete state[0]
    // delete state.addToFire
    console.log(state.fetchResumeFromFirebase, 'resume');
    return {
        current: state.fetchResumeFromFirebase
    }
}

export default connect(MapState, {startSetResume})(Resume);
