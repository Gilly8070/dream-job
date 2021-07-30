import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { EmployerDashboardBoxes, addDashboardScheduleInterview, allJobs } from '../../../actions/action';
import Spinner from '../../Spinner';
import styled from 'styled-components';
// import {findJobs} from '../../../actions/action'
// import firebase from 'firebase';
import { fetchDashboardBoxes, fetchDashboardBoxesInterviewTime } from '../../../actions/action';
import { startFetchJobs } from '../../../actions/actionForRedux';

class DashboardBoxes extends Component {

    state = {
        loading: true,

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
            
            // //////////// NEW ONE /////////////////////
            this.props.fetchDashboardBoxes();
            this.props.startFetchJobs();
            this.props.fetchDashboardBoxesInterviewTime();
        }, 3500)
        
        // firebase.database() 
        //             .ref('EmployerDashBoardBoxes/')
        //                 .once('value').then((snap) => {
        //                     const expeT = [];
        //                     snap.forEach((child) => {
        //                         expeT.push({
        //                             // id: child.key,
        //                             ...child.val()
        //                         })
        //                     })
        //                     // dispatch(dashboardBoxes(expeT))
        //                     console.lo
        //                 })
    }
    render() {

        if (this.state.loading) {
            

        return  <span style={{fontSize: '1.2rem'}}><Spinner onStart='yes' size={3} /></span>
        }
        let positionOpen = this.props.allJobs !== undefined && this.props.allJobs.length > 0 ? this.props.allJobs.length : 0;
        let totalHired = this.props.dashboardBoxes !== undefined && this.props.dashboardBoxes.length > 0 ? this.props.dashboardBoxes.length : 0;

        // console.log(totalHir
        
                // <i className="fas fa-spinner fa-pulse fa-5x"></i>

        //////////////////////// FOR SALARY //////////////////////////////
        let salaryArr = [];
        if (this.props.dashboardBoxes !== undefined && this.props.dashboardBoxes.length > 0) {
            this.props.dashboardBoxes.forEach((item) => {
                item.ele &&
                salaryArr.push(item.ele.salary);
                // console.log(item.ele.salary);
            })
        }
        let totalSalary = 0;
        // if (this.props.dashboardBoxes !== undefined) {
        salaryArr.forEach((item) => {
            totalSalary += +item
        })
        let salaryPerHire = totalSalary > 0 ? Math.floor((totalSalary / salaryArr.length) / 70) : 0;
        // console.log(salaryArr.length, totalSalary, salaryPerHire);
        //////////////////// END OF SALARY ///////////////////////////////

        /////////// AVERAGE TIME PER HIRE/////////////////////////////////
        let totalTimeOfApprovedDate = 0;
        if (this.props.dashboardBoxes !== undefined && this.props.dashboardBoxes.length > 0  ) {
            this.props.dashboardBoxes.forEach((item) => {
                let ApprovedDate = item.approvedDate
                // console.log(ApprovedDate)
                let dateDiff = new Date(ApprovedDate).getTime();
                totalTimeOfApprovedDate += (dateDiff);
                // salaryArr.push(item.salary);
                // console.log(item.salary);
            
            })
        }
        // 2021-07-25
        // 2021-07-30
        // console.log(totalTimeOfApprovedDate)
        let totalTimeOfInterviewDate = 0;
        if (this.props.interviewSchedule !== undefined && this.props.interviewSchedule.length > 0) {
            this.props.interviewSchedule.forEach((item) => {
                let interviewDateAndTime = item.interviewDate
                // console.log(interviewDateAndTime)
                let interviewDate = interviewDateAndTime.toString('').split(',')[0]
                let dateDiff = new Date(interviewDate).getTime();
                totalTimeOfInterviewDate += (dateDiff);
                // salaryArr.push(item.salary)
                // console.log(item

            })
        }
        // console.log(totalTimeOfApprovedDate - totalTimeOfInterviewDate)
        let avgTimeInHrs = Math.floor(Math.abs(( totalTimeOfInterviewDate - totalTimeOfApprovedDate) / 1000 / 3600)) 
        // console.log(totalTimeOfApprovedDate,totalTimeOfInterviewDate, avgTimeInHrs)

        //////////////////// END OF AVERAGE TIME /////////////////////////

        return (
            <div>
                {
                    <BoxesContainer>
                        <SingleBoxesContainer>
                            <h3> {totalHired} </h3>
                            <span>
                            Total Hire
                            </span>
                        </SingleBoxesContainer>
                        <SingleBoxesContainer>
                            <h3>{totalHired > 10 ? Math.floor(totalHired / 2.5) : 0}</h3>
                            <span>
                            Apps per hire
                            </span>
                        </SingleBoxesContainer>
                        <SingleBoxesContainer>
                            <h3>{avgTimeInHrs}</h3>
                            <span>
                            Avg. Time to hire
                            </span>
                        </SingleBoxesContainer>
                        <SingleBoxesContainer>
                            <h3>${salaryPerHire}</h3>
                            <span>
                            Avg. Salary per hire
                            </span>
                        </SingleBoxesContainer>
                        <SingleBoxesContainer>
                            <h3>{positionOpen} </h3>
                            <span>
                            Open position
                            </span>
                        </SingleBoxesContainer>
                    </BoxesContainer>
                }
            </div>
        )
    }
}


const MapState = (state) => {
    console.log(state, 'dashboardBoxes');
    return {
        dashboardBoxes: state.EmployerDashboardBoxes,
        interviewSchedule: state.addDashboardScheduleInterview,
        allJobs: state.fetchJobs,
    }
}

export default connect(MapState, {fetchDashboardBoxes, startFetchJobs, fetchDashboardBoxesInterviewTime})(DashboardBoxes);


const BoxesContainer = styled.div`
/* width: 100%; */
/* display: grid;
grid-template-rows: repeat(autoFit, minmax(100px, 1fr));
grid-gap: 8px; */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 14px;
/* margin: 5px; */
/* grid-template-columns: repeat(5, 1fr); */

/* display: flex;
flex-direction: row;
margin: 10px 0; */

font-size: 1.2rem;
font-family: Arial, Helvetica, sans-serif;

@media (min-width: 768px) {
    /* display: inline-block; */
/* grid-template-columns: repeat(5, 1fr); */
/* display: grid; */
grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
/* grid-gap: 8px; */



/* display: flex;
flex-direction: row;
margin: 10px 5px; */

}
`

const SingleBoxesContainer = styled.span`
border: 1px solid black;
/* margin: 0 260px; */
/* padding: 10px 0; */
text-align: center;

/* margin: 4px 2px 2px 4px; */

font-weight: 500;
margin-bottom: 5px;
padding-bottom: 5px;
>h3 {
font-weight: 700;

    margin: 20px 0px;
}
>span {
margin-bottom: 5px;

}

@media (max-width: 320px) {
/* border: 1px solid black; */
text-align: center;
margin: 4px 2px 2px 4px;

/* padding: 10px 0;
margin: 0 2px; */
}

@media (min-width: 768px) {

>span {
/* margin-bottom: 19px; */
/* padding-bottom: 70px; */

}

}
`