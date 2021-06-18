import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { acceptJob, rejectJob } from '../../../actions/action';
import firebase from 'firebase';

const ReceivedOffer = ({ current, acceptJob, rejectJob }) => {
    const [jobFromFirebase, setJobFromFirebase] = useState([]);
    // const [receivedJobFromFirebase, setReceivedJobFromFirebase] = useState([]);

    const database = firebase.database();
    // let sliced = current.slice(5);
    // let acceptArrayFromFirebase = [];
    // let final;
    // const [data, setData] = useState(null);
    // console.log(sliced);
    
    // let msgRef = firebase.database().ref('offer/accept/' + firebase.auth().currentUser.uid);
    // let newMsgRef = msgRef.push();
    useEffect(() => {
        database
            .ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
            .on('value', (snapshot) => {
                console.log(snapshot.val(), 'snapshot');
                const exp = [];
                snapshot.forEach((childSnap) => {
                    // database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
                        exp.push({
                        key: childSnap.key,
                        ...childSnap.val()
                    });
                    // let id = childSnap.key;
                    // exp.push([id, ...childSnap.val()])
                    // exp.push({
                    //     id: childSnap.key,
                    //     ...childSnap.val()
                    // })
                })
                console.log(exp, 'received');
                setJobFromFirebase(exp);
                // let sliced = exp.slice(1)
                // let single = exp.map((single) => single.slice(1))
                // console.log(single);
                // let concat = single.map(sing => sing.map((sin) => sin.concat()))
                // let merge = single && single.flat();
                // let another = merge.map((ele) => ele && ele)
                // console.log(another);
                // setJobFromFirebase(another);
            })
            // database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
        // .push(jobFromFirebase);
        // database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
        //     .push(jobFromFirebase);
        
        
    }, []);
    // console.log(jobFromFirebase);
    // useEffect(() => {
        // database
        //     .ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
        //     .once('value',
        //     // .then((snap) => {
        //     //     // let exp = [];

        //     //     console.log(snap.val(), '2')
        //     // })
        //         (snapshot) => {
        //         const exp = [];
        //         snapshot.forEach((childSnap) => {
        //             exp.push({
        //                 id: childSnap.key,
        //                 ...childSnap.val()
        //             })
        //         })
        //         // console.log(exp)
        //         // setReceivedJobFromFirebase(exp);
        //         console.log(exp[0]);
        //         setJobFromFirebase(exp[0]);
        //     })
    // }, [])
    // database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid).remove()

    
    
    const handleAccept = (singleId) => {
        // if(id ===)
        let findSingleJob = jobFromFirebase.find((single) => single.id === singleId)
        let key = findSingleJob.key;
        // findSingleJob.key = ''
        delete findSingleJob.key;
        console.log(findSingleJob,key, 'find');
        database.ref('offer/acceptOffer/' + firebase.auth().currentUser.uid).push(findSingleJob)
        .then(() => {
            console.log('added to accept')
        }).catch(() => {
            console.log('not added to accept')
        });

        database.ref(`offer/receivedOffer/${firebase.auth().currentUser.uid}/${key}`).remove().then(() => {
            console.log('remove from receivedOffer')
        }).catch(() => {
            console.log('not remove from receivedOffer')
        });;

        // let arr = []; ////////////
        // database
        //     .ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
        //     .on('value', (snapshot) => {
        //         const exp = [];
        //         snapshot.forEach((childSnap) => {
        //             let id = childSnap.key;
        //             exp.push([id, ...childSnap.val()])
        //         })
        //         console.log(exp);
                
        //         let sliced = exp[0].slice(1);
        //         let findEle = sliced.find((ele) => ele.id === singleId);
        //         let index = sliced.indexOf(findEle) + 1;
        //         let key = exp[0][0];
        //         console.log(sliced, findEle, exp, key, index);
        //         // let single = exp.map((single) => single.slice(1))
        //         // let merge = single.flat();
        //         // setJobFromFirebase(merge);
        //         database.ref(`offer/receivedOffer/${firebase.auth().currentUser.uid}/${key}`).remove();
        //     }) ////////////////////
        // console.log(jobFromFirebase);
        // database.ref('offer/accept/' + firebase.auth().currentUser.uid).push(
        //     obj
        // );
        // database
        //     .ref('offer/accept/' + firebase.auth().currentUser.uid)
        //     .on('value', (snapshot) => {
        //         // acceptArrayFromFirebase = []
        //         const exp = [];
        //         snapshot.forEach((childSnap) => {
        //             // setData({
        //             //     id: childSnap.key,
        //             //     ...childSnap.val()
        //             // })
        //             exp.push({
        //                 // ...acceptArrayFromFirebase,
        //                 id: childSnap.key,
        //                 ...childSnap.val()
        //             })
        //             // return exp;
        //         })
        //         // let sli = exp.slice(1)
        //         // acceptArrayFromFirebase = sli;
        //         // setData(exp);
        //         acceptArrayFromFirebase.push(exp);
        //         // console.log(exp, 'final answer is here');
        //         // setData(exp)
        //         final = [...exp];
        //     }
        // )
        // console.log( final, 'answer');
        // newMsgRef.update({
        //     obj
        // })
        // database.ref('offer/accept' + firebase.auth().currentUser.uid).update({})
        // database
        //     .ref('offer/accept/' + firebase.auth().currentUser.uid)
        //     .on('value', (snapshot) => {
        //         const exp = [];
        //         snapshot.forEach((childSnap) => {
        //             exp.push({
        //                 id: childSnap.key,
        //                 ...childSnap.val()
        //             })
        //         })
        //         acceptArrayFromFirebase.push(exp);
        //         // console.log(exp, 'final answer is here');
        //         console.log(acceptArrayFromFirebase);
        
        //     }
                // , (e) => {
                // console.log('error' + e);
                // }
        // )
    }
    const handleReject = (singleId) => {
        let findSingleJob = jobFromFirebase.find((single) => single.id === singleId)
        let key = findSingleJob.key;
        delete findSingleJob.key;
        console.log(findSingleJob,key, 'find');
        database.ref('offer/rejectOffer/' + firebase.auth().currentUser.uid).push(findSingleJob)
        // .then(() => {
        //     console.log('added to accept')
        // }).catch(() => {
        //     console.log('not added to accept')
        // });

        database.ref(`offer/receivedOffer/${firebase.auth().currentUser.uid}/${key}`).remove()
        //     .then(() => {
        //     console.log('remove from receivedOffer')
        // }).catch(() => {
        //     console.log('not remove from receivedOffer')
        // });;
    }
        
    // useEffect(() => {
    //     acceptArrayFromFirebase= [...acceptArrayFromFirebase];
    //         // setData(acceptArrayFromFirebase
    
    // }, [])
    // console.log(final, 'data');
    console.log(jobFromFirebase);
    if (jobFromFirebase.length === 0) {
            return <h1>No Jobs To Display</h1>
        }
    return (
        // className={` ${accepted ? 'hide': 'active'}`}
        <div >
            {
                jobFromFirebase.map(single => {
                    return (
                        <div key={single.id}>
                            <p>{single.id}</p>
                            <h3>{single.title}</h3>
                            <p>{single.company ? single.company : 'Anonymous'}, {single.location}</p>
                            <p>Received Date</p>
                            <button onClick={() => { handleAccept(single.id) }} >Accept</button>
                            <button onClick={() => { handleReject(single.id)}}>Reject</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const MapState = (state) => {
    console.log(state, 'received');
    return {
        current: state.some
    }
}
export default connect(MapState, {acceptJob, rejectJob})(ReceivedOffer);
