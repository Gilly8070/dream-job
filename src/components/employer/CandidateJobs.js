import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

class CandidateJobs extends Component {
    state = {
        UserId: this.props.match.params.id,
        showDate: false,
        disabled: false,
        JobId: null,
        expe: [],

        // interviewTime: '',
        // userId: '',
    }
    componentDidMount() {
        firebase.database()
            .ref('CandidateInterviewTime/' + this.state.UserId)
            .once('value').then((snap) => {
                let exp = [];
                snap.forEach((child) => {
                    exp.push({
                        id: child.key,
                        ...child.val()
                    })
                })
                this.setState({
                    expe: exp
                })
                // this.state.expe
                // console.log(exp);
            })
        }
    showInput = (id) => {
        // this.setState({disabled: true})
        this.setState({ JobId: id, showDate: !this.state.showDate });
        // console.log(!this.state.showDate)
        const button = document.getElementsByName('button');
        button.forEach((ele) => {
            if (ele.id !== id && !this.state.showDate) {
        // console.log(!this.state.showDate)
                ele.disabled = true;
            }
            else if (ele.innerText === "Submit") {
                let value = document.getElementById('dateTime').value;
                let value1 = value.split('T').join(' , ');
                // this.setState({ interviewTime: value1 });
                // console.log(value1 === '')
                localStorage.setItem(`${this.state.UserId}${id}`, value1)
                
                value1 !== '' && 
                        this.props.current.find((item)  => item[0].userId === this.state.UserId).map((ele) => {
                        if (ele.id === id) {
                            return firebase.database()
                                .ref('CandidateInterviewTime/' + this.state.UserId)
                                .push({
                                    // JobId: id,
                                    ...ele,
                                    interviewTime: value1,
                                })
                            // console.log(ele);
                        }
                    })
                    
                
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
            // console.log(button)

        // let findListJobs = this.props.current.find((item) => item[0].userId === this.state.id);
        // this.props.current.map((ele) => {ele.id})
        // console.log('click', id);
        // findListJobs.find((ele) => {
            // if (ele.id === id) {
                // console.log(ele);
            // }
        // })
        // if (this.showDate) {
            
        // }
    }
render() {
    // const database = firebase.database()
    let findListJobs = this.props.current.find((item) => item[0].userId === this.state.UserId)
    console.log(findListJobs, this.state.expe);
        // let user = findListJobs[0].userId
        // this.setState({userId: user})
        // this.setState({arr: findListJobs})
        // console.log(findListJobs[0].userId, this.state.userId);
        return (
            <div>
                {
                    findListJobs.slice(1,).map((ele) => {
                        {/*this.state.expe.map((item) => {
                            {
                                { item.id === ele.id && <p>{item.interviewTime}</p> }
                            }
                            
                        })
                    */}
                    
                        const { title, location, date, companyLogo , companyName, salary, id} = ele;
                        return (
                            <div key={id}>
                                <img width='50px' src={companyLogo} alt="Logo" />
                                <h2>{title}</h2>
                                <div>{companyName}, {location}</div>
                                <div>Salary: {salary}</div>
                                <div>Date: {date}</div>
                                <div>Job Id: {id}</div>

                                <div>{localStorage.getItem(id) &&
                                    <p>Interview On : {localStorage.getItem(`${this.state.UserId}${id}`)}</p>}
                                </div>
                                
                                {this.state.showDate && this.state.JobId === id &&
                                    <div>
                                    <input id='dateTime' type='dateTime-local' /> 
                                    </div> 
                                }
                                <button id={id} name='button' onClick={() => this.showInput(id)}>
                                    {this.state.showDate && this.state.JobId === id ? 'Submit' :
                                    'Schedule Interview'}
                                </button>
                                <p>----------------------------</p>
                            </div>
                        )
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
    console.log(state);
    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {
        current: state.allCandidateAppliedJobs,
        // newCurrent: state.
        // personalData: state.allPersonalData,
    }
}

export default connect(MapState, null)(CandidateJobs); ;
