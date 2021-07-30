import firebase from 'firebase';
export const CANDIDATE_APPLIED_JOBS = 'CANDIDATE_APPLIED_JOBS';

export const FETCH_JOBS = 'FETCH_JOBS';
export const CHECK_SIDEBAR_FOR_MODAL = 'CHECK_SIDEBAR_FOR_MODAL';


// export const CANDIDATE_APPLIED_JOBS = 'CANDIDATE_APPLIED_JOBS';
// export const CANDIDATE_APPLIED_JOBS = 'CANDIDATE_APPLIED_JOBS';
// export const CANDIDATE_APPLIED_JOBS = 'CANDIDATE_APPLIED_JOBS';
// export const CANDIDATE_APPLIED_JOBS = 'CANDIDATE_APPLIED_JOBS';





//////////////////////// USED IN CANDIDATE JOBS IN EMPLOYER/////////////////////////////////////////////////////////////////////////////////////////
// ALL CANDIDATE PERSONAL DATA
export const candidateAppliedJobs = (data) => ({
    type:  CANDIDATE_APPLIED_JOBS,
    data
})


export const startFetchCandidateAppliedJobs = (userId) => {
    // const database = firebase.database();
    return (dispatch) => {
        
        
                            // dispatch(candidateAppliedJobs(expeT))
                    
        
        let arr = []
        let arr2 = []
                // let newArr = []; 
        // firebase.database()
        // .ref('appliedLiveJobs/').orderByChild('val')
        // .once('value').then( (snap) => {
        //     snap.forEach((el) => {
                firebase.database()
                .ref('appliedLiveJobs/' + userId)
                .once('value').then((snap2) => {
                    let newA = []
                        snap2.forEach((el2) => {
                        newA.push(el2.val())
                        })
                    arr.push(newA)
                firebase.database()
                .ref('offer/acceptOffer/' + userId)
                .once('value').then((snap2) => {
                    let newAA = []
                        snap2.forEach((el2) => {
                                newAA.push(el2.val())
                        })
                        arr2.push(newAA)
                let newArr = []; 
                    arr.map((ele) => {
                        arr2.map((ele1) => {
                            let arr3 = [];
                                ele1.forEach( (item) => {
                                    if (ele.every((item1) => item1.id !== item.id)) {
                                        arr3.push(item)
                                    } 
                                })
                                newArr.push(ele.concat(arr3))
                        })
                    })
                    
                    dispatch(candidateAppliedJobs(newArr))
                    
                })
            })
            
        // })
        
        // })////////////
    }
}


//////////////////////// USED IN JOBS SECTION IN EMPLOYER/////////////////////////////////////////////////////////////////////////////////////////
// ALL CANDIDATE PERSONAL DATA
export const fetchJobs = (data) => ({
    type:  FETCH_JOBS,
    data
})


export const startFetchJobs = () => {
    // const database = firebase.database();
    return (dispatch) => {
        let arr2 = []
        firebase.database()
            .ref('Jobs/')
            .once('value').then((snap) => {
                let newAA = []
                snap.forEach((el2) => {
                    newAA.push({
                        id: el2.key,
                        ...el2.val()
                    })
                })
                // console.log(newAA)
                arr2.push(newAA)
                    dispatch(fetchJobs(newAA))
            })

}
}





//////////////////////// USED IN LIVE JOBS IN CANDIDATE SECTION, HIDING MODAL FOR SIDEBAR ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const checkSidebarForModal = (data) => ({
    type:  CHECK_SIDEBAR_FOR_MODAL,
    data
})