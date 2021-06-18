import {
    SEARCH_JOB,
    ADD_JOB,
    ACCEPT_JOB,
    REJECT_JOB,
    UNDO_JOB_ACCEPTED,
    UNDO_JOB_REJECTED,
    ADD_RESUME,
    SET_RESUME,
    LIVE_JOBS,
    NEWS_JOBS,
    FIND_JOBS,
    FIND_NEW_JOBS,
    ALL_LIVE_JOBS,
    RECEIVED_OFFER,
    NEW_RECEIVED_OFFER,
    REMOVE_LIVE_JOBS,
    APPLIED_LIVE_JOBS,
    ADD_APPLIED_LIVE_JOBS,
    All_CANDIDATE_APPLIED_JOBS,
    ALL_PERSONAL_DATA,
    // All_CANDIDATE_OFFER_JOBS,
} from '../actions/action';
// import { data } from '../data';

// localStorage.setItem('data', JSON.stringify(data));
// let getAns = localStorage.getItem('data', JSON.stringify(data))

export const initialState = {
    list: [],
    // accept: [null],
    // reject: [null],
    some: [],
    // fixedLiveJobs: [],
    // temporaryLiveJobs: [],
    // newJobs: [],
    addResumeToFirebase: [],
    fetchResumeFromFirebase: [],
    allJobs: [],
    allNewJobs: [],
    allLiveJobs: [],
    receivedOffer: [],
    // newReceivedOffer: [],
    appliedLiveJobs: [],
    allCandidateAppliedJobs: [],
    allPersonalData: [],
    // allCandidateOfferJobs: []
}
// let some = [initialState.list];
    // {
    //     id: '',
    //     title: [],
    //     date: '',
    //     location: '',
    //     status: '',
    //     offer: '',
    //     initial: data,
    // },


export default function reducer(state=initialState, action) {
    switch (action.type) {
        case ADD_JOB:
            return {
                ...state,
                // list: [],
                // some: [],
                // fixedLiveJobs: [],
                // newJobs: [],
                list: [...state.list, action.addJob],
                some: [...state.list, action.addJob],
            }
        case SEARCH_JOB:

            // if (!action.text) {
            //     return state
            // }
            //     else {
            //     // let stats = [...state];
            //     let ind = state.map(single => single.title === action.text)
            //     // let right = state.indexOf(ind.map(el => el === true));
            //     // let ans = state[right];
            //     console.log(state[ind.find(el => el === true)]);
            //     return (
            //         // ans
            //         [state[ind.find(el => el === true)]]
            //         // state = data
            //     )
            // }
            
            return {
                ...state,
                // list: [state.list.map(single => single === action.text)]
                // initial: state.filter(single => single.title === action.text)
            
            }
        case ACCEPT_JOB:
            return {
                ...state,
                accept: [...state.accept, state.some.find(single => single.id === action.id)], // adding in accept array
                some: state.some.filter(single => single.id !== action.id),                  // removing from some array
            }
        case REJECT_JOB:
            return {
                ...state,
                reject: [...state.reject, state.some.find(single => single.id === action.id)], /// adding in reject array
                some: state.some.filter(single => single.id !== action.id),
                                    // removing from some array
            }
        case UNDO_JOB_ACCEPTED:
            return {
                ...state,
                some: [ ...state.some, state.list.find(single => single.id === action.id)],   // adding from list in some array
                accept: state.accept.filter(single => single.id !== action.id),              // removing from accept array
                // reject: state.accept.filter(single => single.id !== action.id && action.types === 'rejected'),
            }
        case UNDO_JOB_REJECTED:
            return {
                ...state,
                some: [ ...state.some, state.list.find(single => single.id === action.id)],
                // accept: state.accept.filter(single => single.id !== action.id && action.types === 'accepted'),
                reject: state.reject.filter(single => single.id !== action.id),
            }
        
        //// FROM HERE ADDING AND REMOVING FROM FIREBASE /////////////
        case ADD_RESUME:
            return {
                ...state,
                // addToFire: delete state.addToFire,
                addResumeToFirebase: action.data,
                // delete state.addToFire,
            }
        case SET_RESUME: 
            return {
                ...state,
                // fetchData: delete state.addToFire,
                fetchResumeFromFirebase: action.data
            }
        case LIVE_JOBS:
            // if (!state.fixedLiveJobs) {
            //     return {
            //         ...state,
            //         fixedLiveJobs : [state.list]
            //     }
            // } else {
            //     return {
            //         ...state,
            //         newJobs : [state.list.filter((ele) => !state.fixedLiveJobs.includes(ele.id))]
            //     }
            // }
            return {
                ...state,
                // fixedLiveJobs: [],
                // newJobs: [],
                fixedLiveJobs: action.data,
                // newJobs: action.data,
                // !state.fixedLiveJobs ? [[...state.list]] && 
                // fixedLiveJobs: !state.fixedLiveJobs ? [...state.list] : [state.list.filter((ele) => !state.fixedLiveJobs.includes(ele.id))],
                // fixedLiveJobs: !state.fixedLiveJobs ? action.data : [action.data.filter((ele) => !state.fixedLiveJobs.includes(ele.id))],
                // newJobs: !state.fixedLiveJobs ? null: [action.data.filter((ele) => !state.fixedLiveJobs.includes(ele.id))],
            }
        case NEWS_JOBS:
            return {
                ...state,
                // newJobs: [],
                newJobs: action.data,
            }
        case FIND_JOBS:
            return {
                ...state,
                // allJobs: [...state.allJobs, ...action.data],
                allJobs: action.data,
            }
        case ALL_LIVE_JOBS:
            return {
                ...state,
                // allLiveJobs: [...state.allLiveJobs, ...action.data],
                allLiveJobs: action.data,
            }
        case RECEIVED_OFFER:
            return {
                ...state,
                // allLiveJobs: [...state.allLiveJobs, ...action.data],
                receivedOffer: action.data,
            }
        case FIND_NEW_JOBS:
            return {
                ...state,
                allNewJobs: action.data,
                allJobs: [...state.allJobs, ...action.data],
                allLiveJobs: [...state.allLiveJobs, ...action.data],
                // receivedOffer: [...state.receivedOffer, ...action.data],
            }
        case NEW_RECEIVED_OFFER:
            return {
                ...state,
                // allLiveJobs: [...state.allLiveJobs, ...action.data],
                receivedOffer: [...state.receivedOffer, ...action.data],
            }
        case REMOVE_LIVE_JOBS:
            return {
                ...state,
                allLiveJobs: state.allLiveJobs.filter((ele) => ele.id !== action.id)
            }
        case APPLIED_LIVE_JOBS:
            return {
                ...state,
                appliedLiveJobs: action.data
            }
        case ADD_APPLIED_LIVE_JOBS:
            return {
                ...state,
                appliedLiveJobs: [...state.appliedLiveJobs, action.data]
            }
        case All_CANDIDATE_APPLIED_JOBS:
            return {
                ...state,
                allCandidateAppliedJobs: action.data,
                // allData: [],
                // all: [],
                // allData: [...state.allCandidateJobs],
                // allCandidateAppliedJobs: [...new Set([...state.allCandidateJobs, action.data])],
                // allData: [...action.data],
                // allData: [...new Set(state.allCandidateJobs)],
                // allCandidateJobs: [ ...action.data]
            }
        // case All_CANDIDATE_OFFER_JOBS:
        //     return {
        //         ...state,
        //         allCandidateOfferJobs: action.data,
        //         // allData: [...new Set(state.allCandidateJobs)],
        //         // allCandidateJobs: action.data,
        //         // allData: [...state.allCandidateJobs]
        //         // allCandidateJobs: [...state.allCandidateJobs, action.data]
        //     }
        case ALL_PERSONAL_DATA:
            return {
                ...state,
                // allPersonalData: [],
                allPersonalData: action.data,
                // allPersonalData: [...state.allPersonalData, action.data]
            }
        default:
            return state;
    }
}

// state.includes(action.text) ? [...state] : null
                // state.filter(single => single.title === action.text)
                // action.text