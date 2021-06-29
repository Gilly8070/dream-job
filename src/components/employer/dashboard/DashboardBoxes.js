import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { EmployerDashboardBoxes, addDashboardScheduleInterview, allJobs } from '../../../actions/action';
import Spinner from '../../Spinner';

class DashboardBoxes extends Component {

    state = {
        loading: true,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
            }, 1500)
    }
    render() {

        if (this.state.loading) {
        return <Spinner size={2} />
        }
        let positionOpen = this.props.allJobs !== undefined && this.props.allJobs.length > 0 ? this.props.allJobs.length : 0;
        let totalHired = this.props.dashboardBoxes !== undefined && this.props.dashboardBoxes.length > 0 ? this.props.dashboardBoxes.length : 0;

        // console.log(totalHired)
        
                // <i className="fas fa-spinner fa-pulse fa-5x"></i>

        //////////////////////// FOR SALARY //////////////////////////////
        let salaryArr = [];
        if (this.props.dashboardBoxes !== undefined && this.props.dashboardBoxes.length > 0) {
            this.props.dashboardBoxes.forEach((item) => {
                salaryArr.push(item.ele.salary);
                // console.log(item.ele.salary);
            })
        }
        let totalSalary = 0;
        // if (this.props.dashboardBoxes !== undefined) {
        salaryArr.forEach((item) => {
            totalSalary += +item
        })
        let salaryPerHire = totalSalary > 0 ? Math.floor(totalSalary / salaryArr.length / 70) : 0;
        // console.log(salaryArr, totalSalary, salaryPerHire);
        //////////////////// END OF SALARY ///////////////////////////////

        /////////// AVERAGE TIME PER HIRE/////////////////////////////////
        let totalTimeOfApprovedDate = 0;
        if (this.props.dashboardBoxes !== undefined && this.props.dashboardBoxes.length > 0  ) {
            this.props.dashboardBoxes.forEach((item) => {
                let ApprovedDate = item.approvedDate
                let dateDiff = new Date(ApprovedDate).getTime();
                totalTimeOfApprovedDate += dateDiff;
                // salaryArr.push(item.salary);
                // console.log(item.salary);
            
            })
        }
        // console.log(totalTimeOfApprovedDate)
        let totalTimeOfInterviewDate = 0;
        if (this.props.interviewSchedule !== undefined && this.props.interviewSchedule.length > 0) {
            this.props.interviewSchedule.forEach((item) => {
                let interviewDateAndTime = item.interviewDate
                let interviewDate = interviewDateAndTime.toString('').split(',')[0]
                // console.log(interviewDate.toString('').split(',')[0])
                let dateDiff = new Date(interviewDate).getTime();
                totalTimeOfInterviewDate += dateDiff;
                // salaryArr.push(item.salary);
                // console.log(item.salary);

            })
        }
        // console.log(totalTimeOfApprovedDate - totalTimeOfInterviewDate)
        let avgTimeInHrs = Math.floor(Math.abs((totalTimeOfApprovedDate - totalTimeOfInterviewDate) / (1000 * 60 * 60)))
        console.log(totalTimeOfApprovedDate,totalTimeOfInterviewDate, avgTimeInHrs)

        //////////////////// END OF AVERAGE TIME /////////////////////////

        return (
            <div>
                {
                    <div>
                        <div><h3> {totalHired} </h3>Total Hire</div>
                        <div><h3>{totalHired > 10 ? Math.floor(totalHired / 2.5) : 0}</h3>Apps per hire</div>
                        <div><h3>{avgTimeInHrs}</h3>Avg. Time to hire</div>
                        <div><h3>${salaryPerHire}</h3>Avg. Salary per hire</div>
                        <div><h3>{positionOpen} </h3>Open position</div>
                    </div>
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
        allJobs: state.allJobs,
    }
}

export default connect(MapState, null)(DashboardBoxes);