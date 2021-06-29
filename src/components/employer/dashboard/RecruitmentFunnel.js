import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spinner from '../../Spinner';

class RecruitmentFunnel extends Component {
    state = {
        loading: true,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
            }, 1900)
    }
    render() {
        
        if (this.state.loading) {
            return <Spinner size={2} />
            }
        // let offerPercent = ((this.props.personalData.length / (this.props.personalData.length * +(1 + '.' + this.props.personalData.length))) * 100).toFixed();
        
        // console.log(1.+ this.props.personalData.length);
        
        let screenPercent = 0;
        let offerPercent = 0;
        if (this.props.personalData !== undefined && this.props.personalData.length > 0) {
            screenPercent = 100;
            offerPercent = ((this.props.personalData.length / (this.props.personalData.length * +(1 + '.' + this.props.personalData.length))) * 100).toFixed();
        }

        let total = 0;
        if ( this.props.allApplied !== undefined && this.props.allApplied.length > 0) {
            this.props.allApplied.map((el) => {
                total += el.length;
                return null;
            })
        }
        let hireLength = 0;
        if (this.props.forHire !== undefined && this.props.forHire.length > 0 ) {
            hireLength = ((this.props.forHire.length / total) * 100).toFixed();
        }
        let interviewLength = 0;
        if (this.props.forInterview !== undefined && this.props.forInterview.length > 0) {
            interviewLength = ((this.props.forInterview.length / total ) * 100).toFixed();
        }

        // console.log(hireLength, interviewLength)

        return (
            <div>
                <div>Screen {screenPercent}%</div>
                <div>Interview {interviewLength}%</div>
                <div>Offer {offerPercent}%</div>
                <div>Hire {hireLength}%</div>
            </div>
        )
    }
}

const MapState = (state) => {
    // console.log(state, 'dashboard');

    return {
        allApplied: state.allCandidateAppliedJobs,
        forHire: state.EmployerDashboardBoxes,
        forInterview: state.addDashboardScheduleInterview,
        personalData: state.allPersonalData,
    }
}

export default connect(MapState, null)(RecruitmentFunnel);
