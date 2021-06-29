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

export const ALL_CANDIDATE_INTERVIEW_TIME = 'ALL_CANDIDATE_INTERVIEW_TIME';

export const REMOVE_INTERVIEW_FROM_REDUX = 'REMOVE_INTERVIEW_FROM_REDUX';

export const ALL_CANDIDATE_APPROVED_DATE = 'ALL_CANDIDATE_APPROVED_DATE';


export const ALL_CANDIDATE_INTERVIEW_LEFT = 'ALL_CANDIDATE_INTERVIEW_LEFT';

export const ALL_CANDIDATE_NAME = 'ALL_CANDIDATE_NAME';

export const ADD_DASHBOARD_SCHEDULE_INTERVIEW = 'ADD_DASHBOARD_SCHEDULE_INTERVIEW';

export const ADD_DASHBOARD_BOXES = 'ADD_DASHBOARD_BOXES';

export const CURRENT_USER_RECEIVED_OFFER = 'CURRENT_USER_RECEIVED_OFFER';
export const CURRENT_USER_ACCEPTED_OFFER = 'CURRENT_USER_ACCEPTED_OFFER';
export const CURRENT_USER_REJECT_OFFER = 'CURRENT_USER_REJECT_OFFER';

export const CHANGE_USER_PROFILE_NAME = 'CHANGE_USER_PROFILE_NAME';





// export const FAKE = 'FAKE';











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

// export const fakeData = (data) => ({
//     type:  FAKE,
//     data
// })

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

                                // let msg = firebase.database().ref(`msg/${child.key}`);
                                // let newMsg = msg.push();
                                // newMsg.set({
                                    // id: child.key,
                                    // ...child.val()
                                // })
                            })
                            // expeT.forEach((ele) => {
                            //     database
                            //     .ref(`update/${child.key}`).push({
                            //         ...ele,
                            //     })
                            //     // mnqzhjV1FQZZIgaJFHFK0ajTmhg2
                            // })
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
                                expe.map((ele) => {
                                    exp.map((ele1) => {
                                        let arr = [];
                                        if (ele1[0].userId === ele[0].userId)
                                        {
                                            // console.log(ele, ele1)
                                            
                                            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /// REMOVING COMMON JOBS/////////////////////////////////////////////////////////////////////////////////////////
                                            ele1.slice(1,).forEach((item) => {
                                                if (ele.every((item1) => item1.id !== item.id))
                                                    {
                                                    arr.push(item)
                                                    }
                                            })
                                            
                                            // })
                                            // console.log(ele,ele1, arr)
                                            // ele1.slice(1,).forEach((item) => ele.every((item1) => {
                                            //     if (item1.id !== item.id) {
                                                    
                                            //         arr.push(item);
                                            //     }
                                            // }
                                            // ))
                                            //     if (!ele.includes(item.id)) {
                                                // console.log(ele,arr)                                        // ele1.slice(1,).forEach((item) => {
                                            //         arr.push(item)
                                            //     }
                                            //     // !ele.includes(item) ? arr.push(item) : null 
                                            // })
                                        // console.log(ele, ele1,arr)
                                        // console.log(ele.concat(ele1.slice(1)))
                                        
                                        // console.log(delete ele1[0])
                                            // newArr.push(ele.concat(ele1.slice(1,)))
                                        newArr.push(ele.concat(arr))
                                            

                                    }
                                    })
                                    //  {jobMethod: "offer", userId: "NTLbU6BnA4ffUXKwRELnxCUwhrw2"}
                                    // console.log(newArr);
                                    // database
                                    // .ref('allCandidateAppliedJobs/')
                                    // .push({
                                    //     ...job,
                                    //     interviewTime: value,
                                    // })
                                    dispatch(allCandidateAppliedJobs(newArr))
                                    // dispatch(fakeData(newArr))
                                    // newArr.forEach((ele) => {
                                    //     database
                                    //     .ref(`upd/${child.key}`).set({
                                    //         ...ele,
                                    //     })
                            })

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
            // })
            
            // })
            //     database
            // .ref('upd/')
            // .once('value').then((snap) => {
            //     const expe = [];
            //     // const exp = []
            //     snap.forEach((child) => {
            //         expe.push([
            //             // id: child.key,
            //             ...child.val()
            //         ])
            //     })
                // dispatch(allCandidateAppliedJobs(expe))
            //     expe.forEach((single) => {
            //         if (single[0].userId === userId) {
            //                 // console.log(item1)
            //                 single.filter((item2) => {
            //                     if (item2.id === id) {
            //                         let ind = single.indexOf(item2);
            //                         // delete item1[ind]
            //                             console.log(item2, ind)
            //                     //     return item2
            //                     //     // let item = item2
            //                     //     // delete item
            //                     }
            //                 })
            //             }
            //     })
            //     console.log(expe);

            })
        
        // dispatch(allData([]))
            // database
            // .ref('UsersPersonalData/')
            //         .once('value').then((snap) => {
            //             const personalData = [];
            //             snap.forEach((child) => {
            //                 personalData.push({
            //                     // userID: ele.id,
            //                     id: child.key,
            //                     ...child.val()
            //                 })
            //             })
            //             // console.log(personalData);
            //             dispatch(allCandidatePersonalData(personalData))
            //             // dispatch()
            //         })
                    // console.log(arr);
    }

}


// FETCH ALL CANDIDATE PERSONAL DATA
export const startFetchCandidatePersonalData = () => {
    const database = firebase.database()
    return(dispatch) => {
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
                        // console.log(personalData);
                        dispatch(allCandidatePersonalData(personalData))
                        // dispatch()
                    })
    }
}



{/* USED IN CANDIDATE DASHBOARD FOR INTERVIEW SECTION */ }

// ALL CANDIDATE INTERVIEW TIME
export const allCandidateInterviewTime = (data) => ({
    type:  ALL_CANDIDATE_INTERVIEW_TIME,
    data
})

// // ALL CANDIDATE INTERVIEW TIME
// export const allCandidateInterviewTime = (data) => ({
//     type:  ALL_CANDIDATE_INTERVIEW_TIME,
//     data
// })

// // REMOVE CANDIDATE INTERVIEW FROM REDUX
// export const removeInterviewFromRedux = (userId, id)  => {
//     const action = {
//         type: REMOVE_INTERVIEW_FROM_REDUX,
//         userId,
//         id
//         // data
//     }
//     return action;
// }
// export const removeInterviewFromRedux = (data) => ({
//     type:  REMOVE_INTERVIEW_FROM_REDUX,
//     data
// })

export const startCandidatesInterviewTime = (userId, job, value, id) => {
    const database = firebase.database()
    return (dispatch) => {
        
        // findListJobs.map((ele) => {
                // if (ele.id === id) {
        // let arr = [];
                    database
                        .ref('CandidateInterviewTime/' + userId)
                        .push({
                            ...job,
                            interviewTime: value,
                        })

        
        //             database
        //             .ref('CandidateInterviewTime/')
        //             .once('value').then((snap) => {
        //                 const expe = [];
        //                     expe.push({ jobMethod: 'interview', userId: userId })
        //                 snap.forEach((child) => {
        //                     expe.push({
        //                         id: child.key,
        //                         ...child.val()
        //                     })
        //                 })
        //                 arr.push(expe)
        //                 // dispatch(allCandidateInterviewTime(expe))
        //             })
        // console.log(arr);
                        // dispatch(allCandidateInterviewTime(arr))
        
                // }
            // })
        
        // database/////////////////////////////////////////////////////
        //     .ref('CandidateInterviewTime/')
        //     .once('value').then((snap) => {
        //         const expe = [];
        //         // const exp = []
        //         const expeT = [];
        //         snap.forEach((child) => {
        //             console.log(child.key)
        //             database  //////////////////////////
        //                 .ref('CandidateInterviewTime/' + child.key)
        //                 .once('value').then((snap) => {
        //                     expeT.push({ jobMethod: 'applied', userId: child.key })
        //                     snap.forEach((child) => {
        //                         expeT.push({
        //                             // userID: ele.id,
        //                             id: child.key,
        //                             ...child.val()
        //                         })
        //                     })
        //                     expe.push(expeT)
        //                     console.log(expe, expeT)
        //                 })
        //                 dispatch(allCandidateInterviewTime(expe))
        //                 console.log(expe)
        //             })
        //     })///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // database
        //     .ref('upd/')
        //     .once('value').then((snap) => {
        //         const expe = [];
        //         // const exp = []
        //         snap.forEach((child) => {
        //             expe.push([
        //                 // id: child.key,
        //                 ...child.val()
        //             ])
        //         })
        //         expe.forEach((single) => {
        //             if (single[0].userId === userId) {
        //                     // console.log()
        //                     single.find((item2) => {
        //                         if (item2.id === id) {
        //                             let ind = single.indexOf(item2);
        //                             // delete item1[ind]
        //                             database.ref(`upd/${userId}/${ind}`).remove();
        //                                 console.log(userId, item2, ind)
        //                         //     return item2
        //                         //     // let item = item2
        //                         //     // delete item
        //                         }
        //                     })
        //                 }
        //         })
        //         console.log(expe);

        //     })
        // database
        //     .ref('upd/')
        //     .once('value').then((snap) => {
        //         const expe = [];
        //         // const exp = []
        //         snap.forEach((child) => {
        //             expe.push({
        //                 id: child.key,
        //             })
        //         })
        //     })
    }
}


export const startFetchInterviewTime = (userId) => {
    const database = firebase.database()
    return (dispatch) => {
        
        // database
        //     .ref('CandidateInterviewTime/')
        //     .once('value').then((snap) => {
        //         const expe = [];
        //         // const exp = []
        //         snap.forEach((child) => {
                    // console.log(userId)
                    database  //////////////////////////
                        .ref('CandidateInterviewTime/' + userId)
                        .once('value').then((snap) => {
                            const expeT = [];
                            // expeT.push({ jobMethod: 'applied', userId: child.key })
                            snap.forEach((child) => {
                                expeT.push({
                                    // userID: ele.id,
                                    id: child.key,
                                    ...child.val()
                                })
                            })
                            // expe.push(expeT)
                            // console.log(expeT)
                            dispatch(allCandidateInterviewTime(expeT))
                            // console.log(expe)
                        })
                    // })
            // })
    }
}



{/* USED IN CANDIDATE DASHBOARD FOR INTERVIEW SECTION */ }

// ALL CANDIDATE APPROVAL DATA
export const allCandidateApproved = (data) => ({
    type:  ALL_CANDIDATE_APPROVED_DATE,
    data
})


export const startAddCandidatesApprovals = (userId, job, value, id) => {
    const database = firebase.database()
    return (dispatch) => {
        
                    database
                        .ref('AllCandidateApproval/' + userId)
                        .push({
                            ...job,
                            approval: value,
                        })
        
    }
}

export const startFetchApprovalDate = (userId) => {
    const database = firebase.database();
    return (dispatch) => {
        
        // database
        //     .ref('CandidateInterviewTime/')
        //     .once('value').then((snap) => {
        //         const expe = [];
        //         // const exp = []
        //         snap.forEach((child) => {
                    console.log(userId)
                    database  //////////////////////////
                        .ref('AllCandidateApproval/' + userId)
                        .once('value').then((snap) => {
                            const expeT = [];
                            // expeT.push({ jobMethod: 'applied', userId: child.key })
                            snap.forEach((child) => {
                                expeT.push({
                                    // userID: ele.id,
                                    id: child.key,
                                    ...child.val()
                                })
                            })
                            // expe.push(expeT)
                            // console.log(expeT)
                            dispatch(allCandidateApproved(expeT))
                            // console.log(expe)
                        })
                    // })
            // })
    }
}


// ALL CANDIDATE Interview Left
export const allCandidateInterviewLeft = (data) => ({
    type:  ALL_CANDIDATE_INTERVIEW_LEFT,
    data
})

// ALL CANDIDATE Interview Left
export const allCandidateName= (data) => ({
    type:  ALL_CANDIDATE_NAME,
    data
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const startCheckForUnActionCandidate = (userId) => {
    const database = firebase.database();
    return (dispatch) => {


        database
            .ref('appliedLiveJobs/')
            .once('value').then((snap) => {
                const expe = [];
                const exp = [];
                // const inter = [];

                let newInter = []
                // let final = []
                let name = [];
                // let newArr = [];

                snap.forEach((child) => {
                    database  //////////////////////////
                        .ref('appliedLiveJobs/' + child.key)
                        .once('value').then((snap) => {
                            const expeT = [];
                            expeT.push({ jobMethod: 'applied', userId: child.key })
                            snap.forEach((child) => {
                                expeT.push({
                                    id: child.key,
                                    ...child.val()
                                })

                            })

                            expe.push(expeT);

                            database
                                .ref('offer/acceptOffer/' + child.key)
                                .once('value').then((snap) => {
                                    // const exp = [];
                                    const expS = [];
                                    expS.push({ jobMethod: 'offer', userId: child.key })
                                    snap.forEach((child) => {
                                        expS.push({
                                            id: child.key,
                                            ...child.val()
                                        })
                                    })
                                    let newArr = [];
                                    // let newInter = []
                                    // const inter = [];
                                    // console.log(exp, expe)
                                    exp.push(expS);
                                    expe.map((ele) => {
                                        exp.map((ele1) => {
                                            let arr = [];
                                            if (ele1[0].userId === ele[0].userId) {
                                    
                                                ele1.slice(1,).forEach((item) => {
                                                    if (ele.every((item1) => item1.id !== item.id)) {
                                                        arr.push(item)
                                                    }
                                                })
                                            

                                                newArr.push(ele.concat(arr))
                                            
                                            }
                                        })
                                        // dispatch(allCandidateAppliedJobs(newArr))
                                    })
                                
                                    // console.log(newArr, '111111111')
                                    // const inter = [];
                                    database  //////////////////////////
                                        .ref('CandidateInterviewTime/' + child.key)
                                        .once('value').then((snap) => {
                                            let inter = []
                                            inter.push({ userId: child.key })
                                            snap.forEach((child, ind) => {
                                                inter.push({
                                                    // userID: ele.id,
                                                    id: child.key,
                                                    ...child.val()
                                                })
                                                // newArr[ind].concat({
                                                //     // userID: ele.id,
                                                //     id: child.key,
                                                //     ...child.val()
                                                // })
                                            })
                                            // newArr.forEach((el, ind) => {
                                            //     el.concat(inter)
                                            
                                            // })
                                            // newArr
                                            // newInter.push(inter)
                                            
                                            newInter.push(inter)
                                            // console.log(inter)
                                            // console.log(newArr, '--------')
                                            // newArr.forEach((el, ind) => {
                                            //         final.push(el.concat(inter[ind]))
                                            
                                            // })
                                            // newArr.push(expS);
                                            // console.log(newArr, newInter)
                                            let num = []
                                            newArr.forEach((ele, ind) => {
                                                newInter.find((el) => {
                                                    if (ele[0].userId === el[0].userId) {
                                                        num.push(ele.length - el.length)
                                                        // console.log(ele.concat(el))
                                                    }
                                                    // console.log('-------------------')
                                                })
                                                
                                                // console.log(num);
                                                // console.log(newArr)
                                                // console.log(newInter)
                                                
                                            })
                                            dispatch(allCandidateInterviewLeft(num))
                                            
                                            // console.log(num, '--------')
                                        }) /////// applied finish here///////////
                                    
                                        // console.log(newArr)
                                    })
                            // let name = [];
                            
                        }) ///////////////////////////////////////////////
                    
                        database
                            .ref('UsersPersonalData/')
                            .once('value').then((snap) => {
                                const expe = [];
                                snap.forEach((child) => {
                                    expe.push({
                                        id: child.key,
                                        ...child.val()
                                    })
                                })
                                let find = expe.find((el) => el.id === child.key);
                                if (find) {
                                    name.push(find.name)
                                } else {
                                    name.push('noName')
                                }
                                // if (find) {
                                    // let nam = find.map()
                                    // name.push(expe.name)
                                    // console.log(child.key)
                                    
                                    // }
                                    // console.log(name)
                                dispatch(allCandidateName(name))
                                })
                        
                        
                        // console.log(child.key)
                    })
        
                /////////////////////////////////////////////////////////////////////////
                // database
                //     .ref('appliedLiveJobs/')
                //     .once('value').then((snap) => {
                //         const expe = [];
                //         const exp = []
                //         snap.forEach((child) => {
                //             // delete child.key
                //             // expe.push({
                //             //     id: child.key,
                //             //     // child.val().username
                //             // })
                //             // })
                //             // firebase.database().ref('appliedLiveJobs/' + expe[0].id).once('value').then(function(snapshot) {
                //             // const username = (snapshot.val() && snapshot.val().username)
                //             // console.log(username)
                //             // })
                //             // const expeT = [];
                //             // const expS = [];
                //             // expe.forEach((ele) => {
                //             // console.log(child.key);
                //             // let arr = []

                //             //     // if (ele.id === firebase.auth().currentUser.uid) {
                //             //     //     console.log(ele.id)
                        
                //             // //     // }
                // database  //////////////////////////
                //     .ref('CandidateInterviewTime/' + child.key)
                //     .once('value').then((snap) => {
                //         const expeT = [];
                //         expeT.push({ userId: child.key })
                //         snap.forEach((child) => {
                //             expeT.push({
                //                 // userID: ele.id,
                //                 id: child.key,
                //                 ...child.val()
                //             })

                //                         // let msg = firebase.database().ref(`msg/${child.key}`);
                //                         // let newMsg = msg.push();
                //                         // newMsg.set({
                //                         // id: child.key,
                //                         // ...child.val()
                //                         // })
                //                     })
                //                     console.log(expeT)
                //                 })
                //         })
                //     })







                // database
                //     .ref('CandidateInterviewTime/' + userId)
                //     .once('value').then((snap) => {
                //         // const expe = [];
                //         const exp = []
                //         snap.forEach((child) => {
                //             exp.push({
                //                 id: child.key,
                //                 ...child.val()
                //             })
                //         })
                //         console.log(exp)
                //     })
                // let final = []
                // database
                //     .ref('UsersPersonalData/')
                //     .once('value').then((snap) => {
                //         const expe = [];
                //         const exp = []
                //         snap.forEach((child) => {
                //                         expe.push({
                //                             id: child.id,
                //                             ...child.val()
                //                             })
                //                         })
                //                         expe.forEach((ele) => {
                //             console.log(ele.id)

                //             database  
                //                 .ref('AllCandidateApproval/' + userId)
                //                 .once('value').then((snap) => {
                //                     const expeT = [];
                //                     // expeT.push({ jobMethod: 'applied', userId: child.key })
                //                     snap.forEach((child) => {
                //                         expeT.push({
                //                             // userID: ele.id,
                //                             id: child.key,
                //                             ...child.val()
                //                         })
                //                     })
                //                     // expe.push(expeT)
                //                     // console.log(expeT)
                //                     // dispatch(allCandidateApproved(expeT))
                //                     // console.log(expe)
                //                 })
                //         })
                //             // })
                //     })
            })
    }
}


/////////////////// USED IN EMPLOYER DASHBOARD /////////////////////////////////////////////////////////////////////////////////////////////////
export const addDashboardScheduleInterview = (data) => {
    const action = {
        type: ADD_DASHBOARD_SCHEDULE_INTERVIEW,
        data
    }
    return action;
}


export const addDashboardBoxes = (data) => {
    const action = {
        type: ADD_DASHBOARD_BOXES,
        data
    }
    return action;
}


///////////////// USED IN OFFER SECTION OF CANDIDATE FOR SEARCH,     FILTER AND SORT ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FIND CURRENT USER RECEIVED OFFER
export const currentUserReceivedOffer = (data) => ({
    type: CURRENT_USER_RECEIVED_OFFER,
    data
})

// FIND CURRENT USER ACCEPTED OFFER
export const currentUserAcceptedOffer = (data) => ({
    type: CURRENT_USER_ACCEPTED_OFFER,
    data
})
// FIND CURRENT USER REJECT OFFER
export const currentUserRejectOffer = (data) => ({
    type: CURRENT_USER_REJECT_OFFER,
    data
})


//// USED IN LOGIN /////////////////////////////////////////////////////
export const changeUserProfileName = (user) => ({
    type: CHANGE_USER_PROFILE_NAME,
    user
})