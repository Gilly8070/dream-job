import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';
import { startFetchApprovalDate } from '../../../actions/action';
import Spinner from '../../Spinner';

class SingleApproval extends Component {
    state = {
        UserId: this.props.match.params.id,

        loading: true,
        // showDate: false,
        // // disabled: false,
        // JobId: null,
        // expe: [],

        // makeApproved: false,
        // ApprovedId: null,
        // interviewTime: '',
        // userId: '',
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
            // this.props.current = this.props.current
        // let CheckAllInterview = this.props.allInterview !== undefined ? this.props.allInterview : []
            
            // this.setState({ makeApproved: false });
            
            
            //////// THIS IS DONE TO MAKE BUTTON DISABLED COMPLETELY, WHICH IS NOW WORKING PROPERLY IN FIRST RENDER /////////////
            // this.setState({ allApprovalState: this.props.allApproval })
            
            }, 1200)
        this.props.startFetchApprovalDate(this.state.UserId)
        }
    render() {

        if (this.state.loading) {
        return <Spinner size={3} />
        }

        let findSingleApproval = this.props.allApproval
            // .find((item) => item[0].userId === this.state.UserId)


    if (findSingleApproval.length === 0) {
        return (
            <div>
                <h1>NO APPLIED JOBS AVAILABLE</h1>
                <Link to='/approvals'>
                    <button>Back</button>
                </Link>
            </div>
        )
    }
    console.log(this.state.UserId, findSingleApproval);
        return (
            <div>
                {
                    findSingleApproval.map((ele) => {
                        
                        
                        // console.log(item.map((ele) => ele.interviewTime &&ele));
                        const { title, location, date, companyLogo , companyName, salary, id} = ele;
                        return (
                            <div>
                            {
                                //     const company = () => {
                                    
                                // }
                            }
                            <div key={id}>
                                <img width='50px' src={companyLogo} alt="Logo" />
                                <h2>{title}</h2>
                                <div>{companyName}, {location}</div>
                                <div>Salary: {salary}</div>
                                <div>Date: {date}</div>
                                <div>Job Id: {id}</div>

                                
                                {this.state.showDate && this.state.JobId === id &&
                                    <div>
                                    <input min='today' id='dateTime' type='dateTime-local' /> 
                                    </div> 
                                }
                                
                                <p>----------------------------</p>
                                </div>
                            </div> ////////
                                
                        )
                    })
                }
                
                <Link to='/approvals'>
                    <button>Back</button>
                </Link>
            </div>
        )
    }
}

const MapState = (state) => {
    console.log(state.allCandidateApprovedDate, 'approval');
    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {
        // current: state.allCandidateAppliedJobs,
        // allInterview: state.allCandidateInterviewTime,
        allApproval: state.allCandidateApprovedDate
        // fake: state.fake
        // newCurrent: state.
        // personalData: state.allPersonalData,
    }
}

export default connect(MapState, {startFetchApprovalDate})(SingleApproval);


// let item = this.state.expe.map((item) => {
//                             // item.id === ele.id && item.interviewTime  && console.log(item)
//                             if (item.id === ele.id && item.hasOwnProperty('interviewTime')) {
//                                 console.log(item);
//                                 return item;
//                             }
//                         })