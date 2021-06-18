import { initialState } from '../reducers/reducer';
import firebase from 'firebase';
export const ADD_JOB = 'ADD_JOB';
export const FILTER_JOB = 'FILTER_JOB';
export const SEARCH_JOB = 'SEARCH_JOB';
export const ACCEPT_JOB = 'ACCEPT_JOB';
export const REJECT_JOB = 'REJECT_JOB';
export const UNDO_JOB_ACCEPTED = 'UNDO_JOB_ACCEPTED'
export const UNDO_JOB_REJECTED = 'UNDO_JOB_REJECTED'
export const ADD_RESUME = 'ADD_RESUME';
export const SET_RESUME = 'SET_RESUME';

// CANDIDATE JOB SECTION
export const LIVE_JOBS = 'LIVE_JOBS'
export const NEWS_JOBS = 'NEWS_JOBS'
export const FIND_JOBS = 'FIND_JOBS'
export const FIND_NEW_JOBS = 'FIND_NEW_JOBS'
export const ALL_LIVE_JOBS = 'ALL_LIVE_JOBS';
export const RECEIVED_OFFER = 'RECEIVED_OFFER';
export const NEW_RECEIVED_OFFER = 'NEW_RECEIVED_OFFER';

export const REMOVE_LIVE_JOBS = 'REMOVE_LIVE_JOBS';
export const APPLIED_LIVE_JOBS = 'APPLIED_LIVE_JOBS';
export const ADD_APPLIED_LIVE_JOBS = 'ADD_APPLIED_LIVE_JOBS';

export const All_CANDIDATE_APPLIED_JOBS = 'All_CANDIDATE_APPLIED_JOBS';
// export const All_CANDIDATE_OFFER_JOBS = 'All_CANDIDATE_OFFER_JOBS';

export const ALL_PERSONAL_DATA = 'ALL_PERSONAL_DATA';






export const addNewJob = (addJob) => {
    const action = {
        type: ADD_JOB,
        addJob
    }
    return action;
}

export const searchJob = (text) => {
    const action = {
        type: SEARCH_JOB,
        text
    }
    return action;
}

export const acceptJob = (id) => {
    const action = {
        type: ACCEPT_JOB,
        id
    }
    return action;
}
export const rejectJob = (id) => {
    const action = {
        type: REJECT_JOB,
        id
    }
    return action;
}
export const undoJobAccepted = (id) => {
    const action = {
        type: UNDO_JOB_ACCEPTED,
        id,
    }
    return action;
}
export const undoJobRejected = (id) => {
    const action = {
        type: UNDO_JOB_REJECTED,
        id,
    }
    return action;
}
// action creator not uses in filter.js 
// export const filterJob = (text) => {
//     // dispatch({
//     //     type: FILTER_JOB,
//     //     payload: text
//     // })
//     const action = {
//         type: FILTER_JOB,
//         text
//     }
//     return action;
// }

// add resume 
export const addResume = (data) => ({
    type: ADD_RESUME,
    data
})

export const startAddResume = (resumeData = initialState) => {
const database = firebase.database();

    return (dispatch) => {
        // const {
        //     ...data
        // } = resumeData
        // const expense = {data}
        // let resumeData ={}
        database
            .ref('resume/' + firebase.auth().currentUser.uid)
            .push(resumeData).then(
                (ref) => {
                    dispatch(addResume({
                        id: ref.key,
                        ...resumeData
                    }))
                }
            )
    }
}

// set Resume data
export const setResume = (data) => ({
    type: SET_RESUME,
    data
})

export const startSetResume = () => {
    const database = firebase.database();
    return (dispatch) => {
        return database
            .ref('resume/' + firebase.auth().currentUser.uid)
            .once('value').then((snap) => {
                const exp = [];
                snap.forEach((child) => {
                    exp.push({
                        id: child.key,
                        ...child.val()
                    })
                })
                dispatch(setResume(exp))
                //// addResume dispatching here to check if data is not available or deleted from firebase, then make it empty instead of displaying the previous user data ////////////////
                dispatch(addResume(exp))
            })
    }
}

// find new jobs

// live jobs
export const liveJobs = (data) => ({
    type: LIVE_JOBS,
    data
})
export const newsJobs = (data) => ({
    type: NEWS_JOBS,
    data
})

export const startLiveJobs = (data = initialState) => {
    const database = firebase.database();
    return (dispatch) => {
        return database
        .ref('Jobs/')
        .once('value').then((snap) => {
            const exp = [];
            snap.forEach((child) => {
                exp.push({
                    id: child.key,
                    ...child.val()
                })
            })
            // })
            // if (data.fixedLiveJobs.length === 0) {
            //     let dat = data.fixedLiveJobs = [...exp];
            //     dispatch(liveJobs(dat))
            // }
            // if (data.fixedLiveJobs.length !== exp.length) {
            //     let filter = [exp.filter((ele) => data.fixedLiveJobs.includes(ele.id))]
                // let filter = exp.filter((ele) => ele.id !== data.fixedLiveJobs.map((single) => single.id))
                // dispatch(liveJobs(exp))
                // console.log(filter, '1')
            // }
            // console.log(data, 'data');

            // console.log(data.fixedLiveJobs, exp, 'liveJob');

                // dispatch(liveJobs([]))
            })
    }
}

// FIND ALL JOBS
export const findJobs = (data) => ({
    type: FIND_JOBS,
    data
})

// FIND NEW JOBS
export const findNewJobs = (data) => ({
    type: FIND_NEW_JOBS,
    data
})

// FIND ALL LIVE JOBS
export const allLiveJobs = (data) => ({
    type: ALL_LIVE_JOBS,
    data
})

// FIND RECEIVED JOBS
export const receivedJobs = (data) => ({
    type: RECEIVED_OFFER,
    data
})

// FIND ALL NEW RECEIVED JOBS
export const newReceivedJobs = (data) => ({
    type: NEW_RECEIVED_OFFER,
    data
})


////// FINDING ALL JOBS AND ALL NEW JOBS AND PUSHING INTO FIREBASE /////////
export const startFindJobs = () => {
    const database = firebase.database();
    return (dispatch) => {


        // console.log(firebase.auth().currentUser.metadata.creationTime, firebase.auth().currentUser.metadata.lastSignInTime )
        // if (firebase.auth().currentUser.metadata.creationTime === firebase.auth().currentUser.metadata.lastSignInTime) {
            // database.ref('UsersPersonalData/').push({
            //             id: firebase.auth().currentUser.uid,
            //             name: firebase.auth().currentUser.displayName,
            //             email: firebase.auth().currentUser.email,
            //         });
        // }
        //// FETCHING ALL DASHBOARD FROM FIREBASE ////////
        return database
        .ref('allJobs/' + firebase.auth().currentUser.uid)
        .once('value').then((snap) => {
            const allJobs = [];
            snap.forEach((child) => {
                allJobs.push({
                    id: child.key,
                    ...child.val()
                })
            })
            console.log(allJobs.length, 'allJobs from firebase')
            dispatch(findJobs(allJobs));

            /// MAKING EMPTY ARRAY FOR ALL LIVE JOBS FOR NEW USERS
            database
                .ref('allLiveJobs/' + firebase.auth().currentUser.uid)
                .once('value').then((snap) => {
                    const allLiveJob = [];
                    snap.forEach((child) => {
                        allLiveJob.push({
                            id: child.key,
                            ...child.val()
                        })
                    })
                    console.log(allLiveJob.length, 'allLiveJobs from firebase');
                    dispatch(allLiveJobs(allLiveJob));
                })
            /// MAKING EMPTY ARRAY FOR RECEIVED OFFER FOR NEW USERS
            database
                .ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
                .once('value').then((snap) => {
                    const received = [];
                    snap.forEach((child) => {
                        received.push({
                            id: child.key,
                            ...child.val()
                        })
                    })
                    console.log(received.length, 'receivedOffer from firebase')
                    dispatch(receivedJobs(received));
                })
            // /// MAKING EMPTY ARRAY FOR APPLIED LIVE JOBS FOR NEW USERS
            // database
            //     .ref('appliedLiveJobs/' + firebase.auth().currentUser.uid)
            //     .once('value').then((snap) => {
            //         const applied = [];
            //         snap.forEach((child) => {
            //             applied.push({
            //                 id: child.key,
            //                 ...child.val()
            //             })
            //             dispatch(appliedLiveJobs(applied));
            //         })
            //     })
            
            if (allJobs.length === 0) {
                    // dispatch(findJobs([]));
                    // dispatch(allLiveJobs([]));
                
                    //// FETCHING ALL JOBS FROM FIREBASE ///////
                    database
                    .ref('Jobs/')
                    .once('value').then((snap) => {
                        const exp = [];
                        snap.forEach((child) => {
                                // dispatch(findJobs([{id: child.key,
                                //     ...child.val()}]));
                                // dispatch(allLiveJobs([{id: child.key,
                                //     ...child.val()}]));
                            
                            
                            //// THIS DONE FOR REDUX STORE TO KEEP UPDATING///////
                            exp.push({
                                id: child.key,
                                    ...child.val()
                            })

                            // ///// PUSHING JOBS TO DASHBOARD JOBS IN FIREBASE ////////////////////
                            //     database
                            // .ref('allJobs/' + firebase.auth().currentUser.uid)
                            //     .push({
                            //         id: child.key,
                            //         ...child.val()
                            // })
                                // exp.push({
                                //     id: child.key,
                                //     ...child.val()
                                // })

                            
                        //     /////// PUSHING TO LIVE JOBS IN FIREBASE ////////////////
                        //         database
                        //         .ref('allLiveJobs/' + firebase.auth().currentUser.uid)
                        //             .push({
                        //                 id: child.key,
                        //                 ...child.val()
                        //             })
                        })

                        exp.forEach((elem) => {
                            ///// PUSHING JOBS TO DASHBOARD JOBS IN FIREBASE ////////////////////
                                database
                            .ref('allJobs/' + firebase.auth().currentUser.uid)
                                .push({
                                    id: elem.key,
                                    ...elem
                            })
                        })
                        exp.forEach((elem) => {
                            /////// PUSHING TO LIVE JOBS IN FIREBASE ////////////////
                                database
                                .ref('allLiveJobs/' + firebase.auth().currentUser.uid)
                                    .push({
                                        id: elem.key,
                                        ...elem
                                    })
                        })

                        // console.log(exp)
                        ///// PUSHING TO RECEIVED JOBS IN FIREBASE ////////////////
                        let num = exp.length < 10 ? exp.length/2 : (exp.length / 2) + 2;
                        let random = Math.floor(Math.random() * num) + 1;
                        let sliced = exp.slice(0, random);
                        console.log(random, '111111111111', sliced);
                                sliced.forEach((element) => {
                                    database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid).push({
                                        id: element.key,
                                        ...element
                                    })
                                })
                        // .push(element)
                            // console.log(num, random, sliced);
                            // console.log(exp);
                                    
                            
                            // if (exp.length < 10) {
                                //     let random = Math.floor(Math.random() * exp.length)
                                //     let sliced = exp.slice(0, random);
                                //     sliced.forEach((element) => {
                                    //         database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid).push(element)
                                    //     })
                                    //     dispatch(receivedJobs(sliced))
                                    // } else {
                                        //     let random = Math.floor(Math.random() * exp.length/2)
                                        //     let sliced = exp.slice(0, random);
                                        //     sliced.forEach((element) => {
                                            //         database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid).push(element)
                                            //     })
                                            //     dispatch(receivedJobs(sliced))
                                            // }
                                            
                                            
                                            
                                //// DISPATCHING ALL UPDATE TO REDUX STORE ///////////
                                    dispatch(findJobs(exp))
                                    dispatch(allLiveJobs(exp))
                                    dispatch(receivedJobs(sliced))

                        // database
                        // .ref('allJobs/' + firebase.auth().currentUser.uid)
                        // .push(exp)
                    })
                    // console.log(exp);
                }
            if (allJobs.length > 0) {

                //// FETCHING ALL FIREBASE JOBS ///////////
                database
                    .ref('Jobs/')
                    .once('value').then((snap) => {
                        const expe = [];
                        snap.forEach((child) => {
                            expe.push({
                                id: child.key,
                                ...child.val()
                            })
                        })

                        ////// FILTERING ALL FIREBASE JOBS WITH DASHBOARDS JOBS ///////
                        let fil = expe.filter(f => allJobs.every(item => item.id !== f.id))
                        if (fil.length > 0) {
                            // fil.forEach((ele) => {

                                // //// UPDATING DASHBOARD JOBS IN FIREBASE /////
                                // database
                                //     .ref('allJobs/' + firebase.auth().currentUser.uid)
                                //     .push({
                                //         id: ele.key,
                                //         ...ele
                                //     })
                                // ///// UPDATING LIVE JOBS IN FIREBASE ////////
                                // database
                                //     .ref('allLiveJobs/' + firebase.auth().currentUser.uid)
                                //     .push({
                                //         id: ele.key,
                                //         ...ele
                                //     })
                                    
                            // })
                            fil.forEach((element) => {
                                    //// UPDATING DASHBOARD JOBS IN FIREBASE /////
                                database
                                    .ref('allJobs/' + firebase.auth().currentUser.uid)
                                    .push({
                                        id: element.key,
                                        ...element
                                    })
                            })
                            fil.forEach((element) => {
                                    ///// UPDATING LIVE JOBS IN FIREBASE ////////
                                database
                                    .ref('allLiveJobs/' + firebase.auth().currentUser.uid)
                                    .push({
                                        id: element.key,
                                        ...element
                                    })
                                })
                                //// UPDATING RECEIVED JOBS //////////
                                let num = fil.length < 10 ? (fil.length/2)+1 : (fil.length / 2) + 2;
                            let random = Math.floor(Math.random() * num);
                            let sliced = fil.slice(0, random);
                            console.log(random, '22222222222222', sliced)
                                sliced.forEach((element) => {
                                    database.ref(`offer/receivedOffer/${firebase.auth().currentUser.uid}`).push(element)
                                })
                                //// UPDATING NEW JOBS IN REDUX STORE FOR RECEIVED OFFER //////
                                dispatch(newReceivedJobs(sliced));

                            /// UPDATING NEW JOBS IN REDUX STORE //////
                            dispatch(findNewJobs(fil));
                            // console.log(fil, '232');
                        }
                    })
                    // console.log('yes im here')
                }
                // dispatch(setResume(exp))
                // database
                //     .ref('allJobs/' + firebase.auth().currentUser.uid)
                //     .once('value').then((snap) => {
                //         const exp = [];
                //         snap.forEach((child) => {
                //             exp.push({
                //                 id: child.key,
                //                 ...child.val()
                //             })
                //         })
                //         dispatch(findJobs(exp));
                //         dispatch(allLiveJobs(exp));
                //     })
                //// FETCHING ALL APPLIED JOBS FOR DIFFERENT USER ////////
                        database
                            .ref(`appliedLiveJobs/${firebase.auth().currentUser.uid}`)
                            .once('value').then((snap) => {
                                const expe = [];
                                snap.forEach((child) => {
                                    expe.push({
                                        id: child.key,
                                        ...child.val()
                                    })
                                })
                                console.log(expe.length, 'appliedLiveJobs from firebase')

                            dispatch(appliedLiveJobs(expe))
                        })
        })
    }

}


// ////// FINDING ALL JOBS AND ALL NEW JOBS AND PUSHING INTO FIREBASE /////////
// export const startFindLiveJobs = () => {
//     const database = firebase.database();
//     return (dispatch) => {

//         //// FETCHING ALL DASHBOARD FROM FIREBASE ////////
//         return database
//             .ref('allJobs/' + firebase.auth().currentUser.uid)
//             .once('value').then((snap) => {
//                 const allJobs = [];
//                 snap.forEach((child) => {
//                     allJobs.push({
//                         id: child.key,
//                         ...child.val()
//                     })
//                     dispatch(findJobs(allJobs));
//                 })
//             })
//     }
// }

// ////// FINDING ALL JOBS AND ALL NEW JOBS AND PUSHING INTO FIREBASE /////////
// export const startFindReceivedJobs = () => {
//     const database = firebase.database();
//     return (dispatch) => {

//         //// FETCHING ALL DASHBOARD FROM FIREBASE ////////
//         return database
//             .ref('allJobs/' + firebase.auth().currentUser.uid)
//             .once('value').then((snap) => {
//                 const allJobs = [];
//                 snap.forEach((child) => {
//                     allJobs.push({
//                         id: child.key,
//                         ...child.val()
//                     })
//                     dispatch(findJobs(allJobs));
//                 })
//             })
//     }
// }


// REMOVE JOBS FROM LIVE JOBS SECTION
export const removeLiveJobs = (id) => ({
    type: REMOVE_LIVE_JOBS,
    id
})

//  CHECKING ALL APPLIED JOBS FROM FIREBASE DATA FOR DIFFERENT USERS
export const appliedLiveJobs = (data) => ({
    type: APPLIED_LIVE_JOBS,
    data
})

// ADD APPLIED JOBS FROM LIVE JOBS SECTION
export const addAppliedLiveJobs = (data) => ({
    type: ADD_APPLIED_LIVE_JOBS,
    data
})


export const startRemovedLiveJobs = (id, term) => {
    const database = firebase.database();
    return (dispatch) => {
        return database
            .ref(`allLiveJobs/${firebase.auth().currentUser.uid}`)
            .once('value').then((snap) => {
                const exp = [];
                snap.forEach((child) => {
                    exp.push({
                        key: child.key,
                        ...child.val()
                    })
                })
                //// FETCHING ALL APPLIED JOBS FOR DIFFERENT USER OR
                ///// MAKING EMPTY FOR USERS FOR APPLIED JOBS ////////
                database
                    .ref(`appliedLiveJobs/${firebase.auth().currentUser.uid}`)
                    .once('value').then((snap) => {
                        const expe = [];
                        snap.forEach((child) => {
                            expe.push({
                                id: child.key,
                                ...child.val()
                            })
                        })
                    dispatch(appliedLiveJobs(expe))

                })
                if (term === 'reject') {
                    let filter = exp.find((ele) => ele.id === id)
                    let key = filter.key;
                    delete filter.key;
                    // console.log(filter, key, term);
                    database.ref(`allLiveJobs/${firebase.auth().currentUser.uid}/${key}`).remove();
                    dispatch(removeLiveJobs(id))
                    // console.log(filter, term);
                }
                if (term === 'accept') {
                    let filter = exp.find((ele) => ele.id === id)
                    // let key = filter.key;
                    let key = filter.key;
                    // let checkKey = key && delete filter.key;
                    delete filter.key
                    console.log(filter, key, term);
                    database.ref('appliedLiveJobs/' + firebase.auth().currentUser.uid).push(filter);

                    database.ref(`allLiveJobs/${firebase.auth().currentUser.uid}/${key}`).remove()
                    ;

                    dispatch(removeLiveJobs(id))
                    dispatch(addAppliedLiveJobs(filter))
                    // database.ref(`allLiveJobs/${firebase.auth().currentUser.uid}.${id}`)
                    // console.log(filter, term, key);
                }

                
            })
        
}
}

export const startShowAppliedJobs = () => {
    const database = firebase.database();
    return (dispatch) => {

        //// FETCHING ALL APPLIED JOBS FOR DIFFERENT USER OR
        ///// MAKING EMPTY FOR USERS FOR APPLIED JOBS ////////
        return database
            .ref(`appliedLiveJobs/${firebase.auth().currentUser.uid}`)
            .once('value').then((snap) => {
                const expe = [];
                snap.forEach((child) => {
                    expe.push({
                        id: child.key,
                        ...child.val()
                    })
                })
                console.log(expe.length, 'appliedLiveJobs from firebase')
                dispatch(appliedLiveJobs(expe))
            })
    }
}


// ALL CANDIDATE JOBS APPLIED JOBS
export const allCandidateAppliedJobs = (data) => ({
    type: All_CANDIDATE_APPLIED_JOBS,
    data
})

// ALL CANDIDATE PERSONAL DATA
export const allCandidatePersonalData = (data) => ({
    type:  ALL_PERSONAL_DATA,
    data
})

// // ALL CANDIDATE OFFER JOBS
// export const allCandidateOfferJobs = () => ({
//     type:  All_CANDIDATE_OFFER_JOBS,
//     // data
// })




export const showAllCandidateJobs = () => {
    const database = firebase.database();
    return (dispatch) => {
        // delete state.allCandidateJobs
        // console.log(state.allCandidateJobs)
        // dispatch(allCandidateJobs('data'))
        
        database
        .ref('appliedLiveJobs/')
        .once('value').then((snap) => {
            const expe = [];
            const exp = []
            snap.forEach((child) => {
                // delete child.key
                // expe.push({
                //     id: child.key,
                //     // child.val().username
                // })
            // })
            // firebase.database().ref('appliedLiveJobs/' + expe[0].id).once('value').then(function(snapshot) {
                // const username = (snapshot.val() && snapshot.val().username)
                // console.log(username)
                // })
                // const expeT = [];
                // const expS = [];
            // expe.forEach((ele) => {
                // console.log(child.key);
                    // let arr = []

                //     // if (ele.id === firebase.auth().currentUser.uid) {
                //     //     console.log(ele.id)
                        
                // //     // }
                    database  //////////////////////////
                        .ref('appliedLiveJobs/' + child.key)
                        .once('value').then((snap) => {
                            const expeT = [];
                            expeT.push({ jobMethod: 'applied', userId: child.key })
                            snap.forEach((child) => {
                                expeT.push({
                                    // userID: ele.id,
                                    id: child.key,
                                    ...child.val()
                                })
                            })
                            expe.push(expeT);
                            // dispatch(allCandidateAppliedJobs(expe))
                            // expe.push(expeT);

                // console.log(expe);
                            
                            // let jobs
                            database
                            .ref('offer/acceptOffer/' + child.key)
                            .once('value').then((snap) => {
                                // const exp = [];
                                const expS = [];
                                expS.push({ jobMethod: 'offer', userId: child.key })
                                snap.forEach((child) => {
                                    expS.push({
                                        // userID: ele.id,
                                        id: child.key,
                                        ...child.val()
                                    })
                                })
                                let newArr = [];
                                // console.log(expe.map((ele) => ele));
                                exp.push(expS);
                                // console.log(exp)
                                expe.map((ele) => {
                                    exp.map((ele1) => {
                                    if(ele1[0].userId === ele[0].userId)
                                    {
                                        // console.log(ele.concat(ele1.slice(1)))
                                        
                                        // console.log(delete ele1[0])
                                        newArr.push(ele.concat(ele1.slice(1,)))

                                    }
                                    })
                                    //  {jobMethod: "offer", userId: "NTLbU6BnA4ffUXKwRELnxCUwhrw2"}
                                    // console.log(newArr);
                                    dispatch(allCandidateAppliedJobs(newArr))
                                })
                // console.log(expe, expeT);

                            //     // console.log(ele.id,exp, expeT)
                            //     // console.log(expeT.concat(exp))
                            //     // let jobs = expeT.concat(exp)
                            //     // state.allCandidateJobs.push(jobs)
                            //     // console.log(arr);
                            //     // dispatch(allCandidateJobs(jobs))
                            //     // console.log(expS)
                            //  
                            // let jobs = expeT.concat(expe)
                                
                        })

                            // console.log(expeT)
                                // console.log(expeT, expS)
                                // dispatch(allData([]))
                                
                        })
                // console.log(expe);
                
                // console.log(arr);
                // }) ///////////////////////////////////////////////
                // console.log(expe)
                // if (expe[2].id === firebase.auth().currentUser.uid) {
                //     console.log(firebase.auth())
                    
                // }
                // var newEmail = '';
                // // var database = app.database().ref('User/Uid');
                // database.ref(`appliedLiveJobs/Uid/${expe[3].id}`).once('value', function(snapshot) {
                // newEmail = snapshot.val().email;
                // });
            })
            
            })
                            // console.log(arr);
        
        // dispatch(allData([]))
            database
            .ref('UsersPersonalData/')
                    .once('value').then((snap) => {
                        const personalData = [];
                        snap.forEach((child) => {
                            personalData.push({
                                // userID: ele.id,
                                id: child.key,
                                ...child.val()
                            })
                        })
                        console.log(personalData);
                        dispatch(allCandidatePersonalData(personalData))
                    })
                    // console.log(arr);
    }

}