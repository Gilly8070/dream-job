import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { acceptJob, rejectJob } from '../../../actions/action';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { currentUserReceivedOffer } from '../../../actions/action';
import Spinner from '../../Spinner';

const ReceivedOffer = ({ current, acceptJob, rejectJob, currentUserReceivedOffer }) => {
    const [jobFromFirebase, setJobFromFirebase] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalTerm, setModalTerm] = useState('');

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
        setTimeout(() => {
            setLoading(false);
        }, 1000)

    }, [loading])


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

                ////// USED IN SEARCH FILTER COMPONENT////////////////////////////////////////////////////////////////////////////////////
                currentUserReceivedOffer(exp)
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
        setTimeout(() => {
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

            }, 1000)
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
        setTimeout(() => {

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
            
            }, 1000)
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

    const showModal = (id, term) => {
        // if (term === 'accept') {
        const btn = document.getElementsByName('btn');
        btn.forEach((ele) => { 
            console.log(ele, id)
            setTimeout(() => {
                ele.disabled = true;
                setModal(true);
                term === 'accept' &&
                    setModalTerm('SUCCESSFULLY ACCEPTED')
                term === 'reject' &&
                setModalTerm('SUCCESSFULLY REJECTED')
            }, 100);
            setTimeout(() => {
                ele.disabled = false;
                setModal(false);
            }, 700);
        })
        // }
        // if (term === 'reject') {
            // if (window.confirm('YOU ARE ABOUT TO DELETE THE JOB. PLEASE CONFIRM')) {
                // startRemovedLiveJobs(id, 'reject')
            // }
        // }
        
    }
    
    if (loading) {
        return <Spinner size={3} />
    }

    // console.log(jobFromFirebase);
    if (jobFromFirebase.length === 0) {
            return <h1>No Jobs To Display</h1>
        }
    return (
        // className={` ${accepted ? 'hide': 'active'}`}
        <div >
            {
                modal ? <h1>{modalTerm}</h1> : null
            }
            
            <Link to='search/receivedOffer'>
                <i class="fas fa-search fa-3x"></i>
            </Link>
            <Link to='filter/receivedOffer'>
                <i class="fas fa-filter fa-3x"></i>
            </Link>
            <Link to='sort/receivedOffer'>
                <i class="fas fa-sort fa-3x"></i>
            </Link>

            {
                jobFromFirebase.map(single => {
                    return (
                        <div key={single.id}>
                            <p>{single.id}</p>
                            <h3>{single.title}</h3>
                            <p>{single.company ? single.company : 'Anonymous'}, {single.location}</p>
                            <p>Received Date</p>
                            <button name='btn' onClick={() => { showModal(single.id, 'accept'); handleAccept(single.id);  }} >Accept</button>
                            <button name='btn' onClick={() => { handleReject(single.id); showModal(single.id, 'reject') }}>Reject</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const MapState = (state) => {
    // console.log(state, 'received');
    return {
        current: state.some
    }
}
export default connect(MapState, {acceptJob, rejectJob, currentUserReceivedOffer})(ReceivedOffer);
