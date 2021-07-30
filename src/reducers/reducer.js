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
    ALL_CANDIDATE_INTERVIEW_TIME,
    REMOVE_INTERVIEW_FROM_REDUX,
    ALL_CANDIDATE_APPROVED_DATE,

    ALL_CANDIDATE_INTERVIEW_LEFT,
    ALL_CANDIDATE_NAME,

    ADD_DASHBOARD_SCHEDULE_INTERVIEW,
    ADD_DASHBOARD_BOXES,

    CURRENT_USER_RECEIVED_OFFER,
    CURRENT_USER_ACCEPTED_OFFER,
    CURRENT_USER_REJECT_OFFER,

    CHANGE_USER_PROFILE_NAME,
    TOTAL_APPLIED_JOBS,
    CHECK_MODAL_FOR_OFFER,
CHECK_SIDE_COMPONENT_FOR_OFFER,


    
    // allCandidateInterviewTime,
    // FAKE,
    // startShowAppliedJobs
    // All_CANDIDATE_OFFER_JOBS,
} from '../actions/action';

/////////// REDUCER FOR SECOND ACTION /////////////////////////////////////
import {
    CANDIDATE_APPLIED_JOBS,
    FETCH_JOBS,
    CHECK_SIDEBAR_FOR_MODAL,
} from '../actions/actionForRedux';



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

    // fake: [],
    allCandidateInterviewTime: [],
    allCandidateApprovedDate: [],

    allCandidateInterviewLeft: [],
    allCandidateName: [],
    addDashboardScheduleInterview: [],
    EmployerDashboardBoxes: [],

    currentUserReceivedOffer: [],
    currentUserAcceptedOffer: [],
    currentUserRejectOffer: [],

    changeUserProfileName: '',

    totalAppliedJobs: [],
    checkModalForAllOffer: false,
    checkSideComponentForOffer: [],
    // allCandidateOfferJobs: []




    ////// FOR SECOND ACTION //////////////
    singleCandidateAppliedJobs: [],
    fetchJobs: [],
    checkSidebarForModal: false,
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
                // list: [action.addJob],
                // some: [action.addJob],
                // list : [state.list.concat(action.addJob)],
                // some : [state.some.concat(action.addJob)],

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
        case REMOVE_INTERVIEW_FROM_REDUX:
            // let sta = state.allCandidateAppliedJobs.find((ele) => ele[0].userId === action.userId)
            return {
                ...state,
                // allCandidateAppliedJobs: sta.filter((item2) => item2.id !== action.id)
                // allCandidateJobs: state.allCandidateAppliedJobs.filter((ele) => ele[0] !== action.userId)
            }
        // case FAKE:
        //     return {
        //         ...state,
        //         fake: action.data,
        //     }
        case ALL_CANDIDATE_INTERVIEW_TIME:
            return {
                ...state,
                // allCandidateInterviewTime: [],
                allCandidateInterviewTime: action.data,
                // allCandidateInterviewTime: [...state.allCandidateInterviewTime, ...action.data]
            }
        case ALL_CANDIDATE_APPROVED_DATE:
            return {
                ...state,
                // allCandidateInterviewTime: [],
                allCandidateApprovedDate: action.data,
                // allCandidateInterviewTime: [...state.allCandidateInterviewTime, ...action.data]
            }
        case ALL_CANDIDATE_INTERVIEW_LEFT:
            return {
                ...state,
                // allCandidateInterviewTime: [],
                allCandidateInterviewLeft: action.data,
            }
        case ALL_CANDIDATE_NAME:
            return {
                ...state,
                // allCandidateInterviewTime: [],
                allCandidateName: action.data,
                
            }
        case ADD_DASHBOARD_SCHEDULE_INTERVIEW:
            return {
                ...state,
                // addDashboardScheduleInterview: [],
                // addDashboardScheduleInterview: [...state.addDashboardScheduleInterview, action.data],
                addDashboardScheduleInterview: action.data,

                
            }
        case ADD_DASHBOARD_BOXES:
            return {
                ...state,
                // EmployerDashboardBoxes: [],
                // EmployerDashboardBoxes: [...state.EmployerDashboardBoxes, action.data],
                EmployerDashboardBoxes: action.data,


            }
        case CURRENT_USER_RECEIVED_OFFER:
            return {
                ...state,
                currentUserReceivedOffer: action.data,
            }
        case CURRENT_USER_ACCEPTED_OFFER:
            return {
                ...state,
                currentUserAcceptedOffer: action.data,
            }
        case CURRENT_USER_REJECT_OFFER:
            return {
                ...state,
                currentUserRejectOffer: action.data,
            }
        case CHANGE_USER_PROFILE_NAME:
            return {
                ...state,
                changeUserProfileName: action.user
                // changeUserProfileName: 'Employer'
            }
        case TOTAL_APPLIED_JOBS:
            return {
                ...state,
                totalAppliedJobs: action.data
                // changeUserProfileName: 'Employer'
            }
        case CHECK_MODAL_FOR_OFFER:
        return {
            ...state,
            checkModalForAllOffer: action.typeCheck
            // changeUserProfileName: 'Employer'
            }
        case CHECK_SIDE_COMPONENT_FOR_OFFER:
        return {
            ...state,
            checkSideComponentForOffer: action.data
            // changeUserProfileName: 'Employer'
            }
        // 
        
        ////// FOR SECOND ACTION ////////////////////
            
        case CANDIDATE_APPLIED_JOBS:
        return {
            ...state,
            singleCandidateAppliedJobs: action.data
            // changeUserProfileName: 'Employer'
            }
        case FETCH_JOBS:
        return {
            ...state,
            fetchJobs: action.data
            // changeUserProfileName: 'Employer'
            }
        case CHECK_SIDEBAR_FOR_MODAL:
        return {
            ...state,
            checkSidebarForModal: action.data
            }
        default:
            return state;
    }
}

// state.includes(action.text) ? [...state] : null
                // state.filter(single => single.title === action.text)
                // action.text