import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { startCheckForUnActionCandidate } from '../../../actions/action';
// import { useEffect } from 'react';
import Spinner from '../../Spinner';


class UnAction extends Component {
    state = {
        loading: true
    }
    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 1700)
    }
    render() {
        if (this.state.loading) {
            return <Spinner size={2} />
        }

        
        // console.log('starting')
        // const fun = () => {
        //     // console.log('start')
        // setTimeout(() => {
        //     console.log('started')
        let interview = this.props.allInterview;
        let allName = this.props.allName;
        let rand = interview.length > 0 && Math.floor(Math.random() * interview.length);
        let sliInterview = interview.length > 0 && interview.slice(rand, rand + 3);
        let sliName = allName.length > 0 && allName.slice(rand, rand + 3);
        
        // let sliceName = Math.floor(Math.random() * interview.length)

        //     return interview.map((el, ind) => {
                            
                            
        //                         if (el > 0) {
        //                             return <div>
        //                             <p>{allName[ind]}</p>
        //                                 <h5>{el}</h5>
        //                             </div>
        //                         }
                        
                    
        //             return null
        //         })
        // }, 4000)
        // }
            
        // let find = this.props.allInterview.map((el, ind) => {
        //     if (el > 0) {
        //         <h5>{el}</h5>
                
        //     }
        // })
        // console.log(find)
        return (
            <div>
                {
                    // fun()
                    !this.state.loading && sliInterview.map((el, ind) => {
                        if (el > 0) {
                            return <div key={ind}>
                            <p>{sliName[ind]}</p>
                                <h5>{el}</h5>
                            </div>
                        }
                    return null
                })
            }
            
            </div>
        )
    }
}


const MapState = (state) => {
    // console.log(state.allCandidateName, state.allCandidateInterviewLeft, 'unAction')
    // console.log(state.allCandidateAppliedJobs, 'allAppliedJobs');
    // console.log(state.allPersonalData, 'personal');

    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {
        allName: state.allCandidateName,
        allInterview: state.allCandidateInterviewLeft
        // allApplied: state.allCandidateAppliedJobs,
        // personalData: state.allPersonalData,
        // allJobs: state.allJobs,
        // applied: state.appliedLiveJobs,
        // received: state.receivedOffer,
    }
}

export default connect(MapState, null)(UnAction);
