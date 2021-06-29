import React, { Component }  from 'react'
// import { useEffect } from 'react';
import { connect } from 'react-redux';
// import { startFetchCandidatePersonalData, addDashboardScheduleInterview } from '../../../actions/action';
import Spinner from '../../Spinner';

class InterviewSchedule extends Component {
    state = {
        loading: true,
        arr: []
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 2000)
        // console.log(this.state.arr)
        
    }
    // myFunc = () => {
    //     // let arr = [1, 3, 4, 5, 6];
    //     // let arr1 = [1222222, 22443, 44445, 54432, 612445];
    
    //     // return (
            
    //         // this.props.scheduleInterview.forEach((el) => {
        
    //         return (
    //             <div>
    //                 {
    //                 // arr1.forEach((ele) => {
    //                 //     arr.map((el) => {
    //                 //         return <h1>{el, ele}</h1>
    //                 //     }
    //                 //     )
    //                 // })
                    
    //             }
    //             </div>
    //         )
    //         // })
        
    //     // return null
    //     // )
    //     }
    render() {
        if (this.state.loading) {
            return <Spinner size={2} />
        }
        let arr = []
        let interview = this.props.scheduleInterview;
        let personal = this.props.personalData;
        if (interview !== undefined && interview.length > 0) {
            
        interview.forEach((el) => {
            personal.find((item) => {
                if (el.id === item.id) {
                    const { title, location, } = el.ele
                    let final = { title, location, name:item.name, interviewDate: el.interviewDate }
                    arr.push(final)
                    // console.log(final)
                    // this.setState((prev) => ({ arr: [el] }))
                }
                return null
            })
        })
        }
        
        let sliArr = arr.reverse().slice(0, 3);
        if (arr.length === 0) {
            return <h2>No Interview Schedule</h2>
        }
        // console.log(sliArr)

        // if (sliArr.length > 0) {
            // sliArr.forEach((el) => {
            //     return <div>
            //         <h3>{el.title}</h3>
            //     </div>
            // })
        // } else {
        //     return <h1>No Interview</h1>
        // }
        // return null
        
        // if (this.props.scheduleInterview.length > 0) {
        //     !this.state.loading &&  this.props.scheduleInterview.forEach((el) => {
        //        
        //         // personalData.find((item) => {
        //         //     if (item.id === el.id) {
        //         //         // const { title, date, location } = el.ele
        //         //         return <div>
        //         //             <h3>{item.name}</h3>
        //         //             <span>jell</span>

        //         //         </div>
        //         //         // console.log(el)
        //         //     }
        //         //     return 'mnn'
        //         // })
        //     })
        // }
        // useEffect(() => {

        // }, [])
        // let reverseSchedule = scheduleInterview.reverse;
        // if (scheduleInterview.length > 0) {
        //     scheduleInterview.map((el) => {
        //         personalData.find((item) => {
        //             if (item.id === el.id) {
        //                 const { title, date, location } = el.ele
        //                 return <div>
        //                     <h3>{item.name}</h3>
        //                 </div>
        //                 // console.log(el)
        //             }
        //         })
        //     })
        // }
        // console.log(sliArr)
        // console.log(sliArr.forEach((el) => console.log(el)))
    
        return (
            <div>
                
                {
                    
                    !this.state.loading && sliArr.length > 0 && sliArr.map((single, ind) => {
                            return (
                                <div key={ind}>
                                    <h5>{single.name}</h5>
                                    <span>{single.title},</span>
                                    <span>{single.location}</span>
                                    <p>{single.interviewDate}</p>
                                </div>
                                )
                        })
                }
                    
            </div>

                        // interview.length > 0 ?  this.myFunc()  : null
                    //     interview.forEach((el) =>
                    //     {
                    //         return (
                                

                    //                 <h3>{el.id}</h3>
                            
                    //         )
                    //         // console.log(el.id)
                    //         // this.props.personalData.find((item) => {
                    //             //     if (item.id === el.id) {
                    //                 //         // const { title, date, location } = el.ele
                    //                 //         return <div>
                    //                 //             <h3>{item.name}</h3>
                    //                 //             <span>jell</span>
                                    
                    //                 //         </div>
                    //                 //         // console.log(el)
                    //                 //     }
                    //                 //     return 'mnn'
                    //                 // })
                                    
                    //             }
                    //                 )
                        
    )
}  
}

    
const MapState = (state) => {
    // console.log(state, state.allPersonalData, 'InterviewSchedule');
;
    return {
        // allApplied: state.allCandidateAppliedJobs,
        personalData: state.allPersonalData,
        scheduleInterview: state.addDashboardScheduleInterview,
        // allName: state.allCandidateName,
        // allInterview: state.allCandidateInterviewLeft

    }
}

export default connect(MapState, null)(InterviewSchedule);
