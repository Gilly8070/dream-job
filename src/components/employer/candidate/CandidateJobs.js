import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';
import { startCandidatesInterviewTime, startFetchInterviewTime, startAddCandidatesApprovals, startFetchApprovalDate, addDashboardScheduleInterview, addDashboardBoxes } from '../../../actions/action';
import Spinner from '../../Spinner';

class CandidateJobs extends Component {
    state = {
        UserId: this.props.match.params.id,
        showDate: false,
        // disabled: false,
        JobId: null,
        expe: [],

        makeApproved: false,
        ApprovedId: null,
        // interviewTime: '',
        // userId: '',
        loading: true,
        allApprovalState: this.props.allApproval

    }

    
    componentDidMount() {

        setTimeout(() => {
            this.setState({ loading: false })
            // this.props.current = this.props.current
        // let CheckAllInterview = this.props.allInterview !== undefined ? this.props.allInterview : []
            
            this.setState({ makeApproved: false });
            
            
            //////// THIS IS DONE TO MAKE BUTTON DISABLED COMPLETELY, WHICH IS NOW WORKING PROPERLY IN FIRST RENDER /////////////
            // this.setState({ allApprovalState: this.props.allApproval })
            
            }, 1200)
        // console.log(this.props)
        // this.setState({
        //     interview: this.props.allInterview
        // })
            // this.setState({ allApprovalState: this.props.allApproval })
        
        this.props.startFetchInterviewTime(this.state.UserId)
        this.props.startFetchApprovalDate(this.state.UserId)

        
    //     firebase.database()
    //         .ref('CandidateInterviewTime/' + this.state.UserId)
    //         .once('value').then((snap) => {
    //             let exp = [];
    //             snap.forEach((child) => {
    //                 exp.push({
    //                     id: child.key,
    //                     ...child.val()
    //                 })
    //             })
    //             // let uniqueArray =  [...new Set(exp.map(JSON.stringify))].map(JSON.parse);

    //             let newSet = [...new Set(exp)]
    //             this.setState({
    //                 expe: newSet
    //             })
    //             // this.state.expe
    //             // console.log(uniqueArray);
    //         })
        }
    showInput = (id) => {
        // this.setState({disabled: true})
        this.setState({ JobId: id, showDate: !this.state.showDate });
        const button = document.getElementsByName(`button`);
        button.forEach((ele) => {
            // console.log('click', id, ele)
            if (ele.id !== id && !this.state.showDate) {
        // console.log(!this.state.showDate)
                ele.disabled = true;
            }
            else if (ele.innerText === "Submit") {
                // ele.disabled = true;
                let value = document.getElementById('dateTime').value;
                let value1 = value.split('T').join(' , ');
                // this.setState({ interviewTime: value1 });
                // localStorage.setItem(`${this.state.UserId}${id}`, value1)
                
                if (value1 !== '') {
                    console.log(value1)
                    let findListJobs = this.props.current.find((item) => item[0].userId === this.state.UserId)

                    // console.log(this.props.current)

                    // value1 !== '' && 
                    // this.props.fake.filter((item1) => {
                        // if (item1[0].userId === this.state.UserId) {
                        //     console.log(item1)
                        //     item1.filter((item2) => {
                        //         if (item2.id === id) {
                        //             let ind = item1.indexOf(item2);
                        //             delete item1[ind]
                        //                 console.log(item2, ind)
                        //         //     return item2
                        //         //     // let item = item2
                        //         //     // delete item
                        //         }
                        //     })
                        // }
                    // })
                    // console.log(currentR);
                    findListJobs.filter((ele) => {
                        if (ele.id === id) {

                            // ele.disabled = true;

                            this.props.startCandidatesInterviewTime(this.state.UserId, ele, value1, id)
                            this.props.startFetchInterviewTime(this.state.UserId)

                            this.props.addDashboardScheduleInterview({ ele,  interviewDate: value1, id: this.state.UserId, })
                            console.log({ ele,  interviewDate: value1, id: this.state.UserId, })
                            // this.setState({
                            //         interview: this.props.allInterview
                            //     })
                            // this.props.removeInterviewFromRedux(this.state.UserId, id)


                            //         return firebase.database()
                    //             .ref('CandidateInterviewTime/' + this.state.UserId)
                    //             .push({
                    //                 ...ele,
                    //                 interviewTime: value1,
                            // delete [ele];

                    //             })
                            
                        }
                        return null;
                    })

                }
                    
                
                // let user = findListJobs[0].userId;
                // this.setState({ userId: user })
                // firebase.database()
                //         .ref('CandidateInterviewTime/' + user)
                //             .push({
                //                 JobId: id,
                //                 interviewTime: value1,
                //         })
                // console.log(value1, id, user, 'submitted')
            }
            else {
                ele.disabled = false;
            }
            // console.log(ele.id === id)
        })
    }
    handleApproved = (id) => {
        this.setState({ ApprovedId: id, });
        // const button = document.getElementById(`Approved${id}`);
            console.log(this.state.makeApproved)
            // this.setState({ ApprovedId: id, makeApproved: true });
            // this.setState({ allApprovalState: this.props.allApproval })
        
        if (window.confirm('Approved It')) {

            // this.setState({ allApprovalState: this.props.allApproval })

            this.setState({ ApprovedId: id, makeApproved: true });
            console.log(!this.state.makeApproved)
            let approvedDate = new Date().toISOString().split("T")[0]
            console.log('approved', id, approvedDate)
                // button.disabled = true;
                let findListJobs = this.props.current.find((item) => item[0].userId === this.state.UserId)

            findListJobs.filter((ele) => {
                if (ele.id === id) {
                    this.props.startAddCandidatesApprovals(this.state.UserId, ele, approvedDate, id)
                    this.props.startFetchApprovalDate(this.state.UserId)

                    //////// FOR DASHBOARD BOXES//////////////////////////
                    this.props.addDashboardBoxes({ ele, approvedDate })

                    
                }
                return null;
            })
        } else {
            this.setState({ ApprovedId: id, makeApproved: false });
            // this.setState({ allApprovalState: this.props.allApproval })
            console.log(this.state.makeApproved)

        }
    }
    render() {
    
        let setApproval = this.props.allApproval
        if (this.state.loading) {
        return <Spinner size={3} />
        }
        
    let findListJobs = this.props.current.find((item) => item[0].userId === this.state.UserId)

    // let findInterview = this.props.allInterview.find((item) => item[0].userId === this.state.UserId);

    // FOR INITIAL RUN WERE NOT ANY INTERVIEW TIME ADDED FOR RESPECTIVE CANDIDATE ///////////////////////////////////////////////////
        let CheckAllInterview = this.props.allInterview !== undefined ? this.props.allInterview : []
            // this.props.allInterview !== undefined ? allInterview : []

    if (!findListJobs) {
        return (
            <div>
                <h1>NO APPLIED JOBS AVAILABLE</h1>
                <Link to='/candidate'>
                    <button>Back</button>
                </Link>
            </div>
        )
    }
    // console.log(this.props.allApproval);
        return (
            <div>
                {
                    findListJobs.slice(1,).map((ele) => {
                        
                        
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
                                {
                                    // id && ele.interviewTime ?
                                    //     <p>{ele.interviewTime}</p>
                                    //     // &&
                                    //     // document.getElementById(id)
                                    //     &&
                                    //         document.getElementById(id).style.display = 'none'
                                    //     :
                                    //     document.getElementById(id).style.display = 'block'
                                    //     // let buttonFind = document.getElementById(ele1.id)
                                    //     // console.log(buttonFind)
                                    //     // if (buttonFind) {
                                    //         // buttonFind.disabled = true
                                    //     // }
                                    // // return <p>{ele1.interviewTime}</p>
                                    
                                }
                                
                                {
                                        CheckAllInterview.map((ele1) => {
                                        // console.log('started')
                                        // return (
                                        
                                        //     ele1.id === ele.id && ele1.interviewTime ?
                                            
                                        //     <div>
                                        //     <p>{ele1.interviewTime}</p> 
                                                    
                                        //         {
                                        //             // document.getElementById(ele1.id) &&
                                                        
                                                            
                                                                
                                        //                         document.getElementById(ele1.id) ? document.getElementById(ele1.id).disabled = true : null
                                                            
                                                        
                                        //                 }
                                        //             </div>
                                        //             : null
                                            if (ele1.id === ele.id && ele1.interviewTime) {
                                                let buttonFind = document.getElementById(ele1.id)
                                                // console.log(this.state.interview)
                                                // buttonFind.forEach((but) => {
                                                //     if (ele1.interviewTime) {
                                                //         console.log(but)
                                                        // but.disabled = true
                                                    // }

                                                    // but.ele1.id.disabled = true;
                                                // })
                                                if (buttonFind) {
                                                    // console.log(buttonFind)
                                                buttonFind.disabled = true
                                                // buttonFind.style.display = 'none'
                                            } 
                                            return <p>Interview Date: {ele1.interviewTime}</p>                                                  
                                        //         // console.log(ele1)
                                        }
                                        // return <p>{ele1.interviewTime}</p>      
                                            // )
                                    // else {
                                    //     <button id={id} name='button' onClick={() => this.showInput(id)}>
                                    //     {this.state.showDate && this.state.JobId === id ? 'Submit' :
                                    //     'Schedule Interview'}
                                    //     </button>
                                    return null
                                    }
                                    )
                                }
                                {
                                    setApproval.map((ele1) => {
                                            if (ele1.id === ele.id && ele1.approval) {
                                                let buttonFind = document.getElementById(`Approved${id}`)
                                                if (buttonFind) {
                                                    // console.log(buttonFind)
                                                buttonFind.disabled = true
                                                // buttonFind.style.display = 'none'
                                            } 
                                            return <p>Approved On: {ele1.approval}</p>                                                  
                                        }
                                    return null
                                    }
                                    )
                                }

                                <button id={`${id}`} name='button' onClick={() => this.showInput(id)}>
                                    {this.state.showDate && this.state.JobId === id ? 'Submit' :
                                    'Schedule Interview'}
                                    </button>
                                    
                                <button id={`Approved${id}`} name='ApprovedBtn' onClick={() => this.handleApproved(id)}>
                                    {this.state.makeApproved && this.state.ApprovedId === id ? 'Approval Submitted' :
                                    'Approved'}
                                    </button> 
                                <p>----------------------------</p>
                                </div>
                            </div> ////////
                                
                        )
                        // findListJobs.slice(1,).map((ele) => { })
                    })
                }
                {/*
                {
                        this.state.expe.forEach((element) => {
                            // console.log(ele.id, ele.interviewTime)
                            return (
                                <div>{ element.id === id && <p>{element.id}</p> }</div>)
                        })
                }
            */}
                <Link to='/candidate'>
                    <button>Back</button>
                </Link>
            </div>
        )
    }
}

const MapState = (state) => {
    // state.EmployerDashboardBoxes
    console.log(state, 'candidateJobs');
    // console.log(state.addDashboardScheduleInterview, 'CandidateJobs');
    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {
        current: state.allCandidateAppliedJobs,
        allInterview: state.allCandidateInterviewTime,
        allApproval: state.allCandidateApprovedDate
        // fake: state.fake
        // newCurrent: state.
        // personalData: state.allPersonalData,
    }
}

export default connect(MapState, { startCandidatesInterviewTime, startFetchInterviewTime, startAddCandidatesApprovals, startFetchApprovalDate, addDashboardScheduleInterview, addDashboardBoxes})(CandidateJobs);


// let item = this.state.expe.map((item) => {
//                             // item.id === ele.id && item.interviewTime  && console.log(item)
//                             if (item.id === ele.id && item.hasOwnProperty('interviewTime')) {
//                                 console.log(item);
//                                 return item;
//                             }
//                         })