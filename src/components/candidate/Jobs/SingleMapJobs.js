import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemovedLiveJobs } from '../../../actions/action';
import Spinner from '../../Spinner';

class SingleMapJobs extends Component {
    state= {
        id: this.props.match.params.id,
        modal1: false,
        modal: 'YOU SUCCESSFULLY APPLY FOR JOB',

        loading: true,
        // current: this.props.current
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
            }, 1000)
    }

    
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ modal1: true })
    //         // clearTimeout(() => x, 2000)
    //     }, 1000);
    //     // clearTimeout(() => x, 1000)
    //     setTimeout(() => {
    //         this.setState({ modal1: false })
    //     }, 2000);
    //     // var timer;
    //     // this.endAndStartTimer = () => {
    //     // clearTimeout(timer);
    //     // timer = setTimeout(() => {alert('Hello!');},1000); 
    //     // }
    //     // var x = setInterval(() => {
    //     //     this.setState({ modal1: true })
    //     // // whatever code
    //     //     // if (count > 5)
    //     //     // count++;
    //     // }, 1000); 
    //     // setInterval(() => {
    //     //     this.setState({ modal1: false })
    //     // }, 2000);
    //     // this.showModal = () => {
    //     // let i = setInterval(() => {
    //     //     this.setState({ modal1: true })
    //     // }, 1000);
    //     // let io = setInterval(() => {
    //     //     this.setState({ modal1: false })
    //     // }, 1500);
    //     // setTimeout(() => {
    //     //         // clearTimeout(x)
    //     // clearInterval(() => setInterval(() => {
    //     //     this.setState({ modal1: false })
    //     // }, 1000), 500)
    //     //     }, 1500)
    //     }
    // }
    // componentDidMount()
    /// SHOW MODAL WHEN USER CLICK ON APPLY NOW BUTTON ////////////
    showModal = (id) => {
        const btn = document.getElementById(`btn${id}`);
        setTimeout(() => {
            btn.disabled = true;
            this.setState({ modal1: true })
        }, 100);
        setTimeout(() => {
                btn.disabled = false;
            this.setState({ modal1: false })
        }, 1500);
    }
    render() {

        if (this.state.loading) {
        return <Spinner size={3} />
        }


        // var x = setInterval(() => {
        //     this.setState({ modal1: true })
        // // whatever code
        //     // if (count > 5)
        //     clearInterval(x)
        //     // count++;
        // }, 1000); 
        // setInterval(() => {
        //     // this.setState({ modal1: false })
        // }, 2000);
        // console.log(this.state.id);
        if (this.state.id) {
            let ans = this.props.current.find(single => this.state.id === single.id)
            const { title, location, experience, salary, qualification, skill, date, description, additionalInformation, assignRole, companyLogo, companyName, designation, employmentType, keyResponsibilities, openings, roleDescription, technicalExperience, id  } = ans;
            // console.log(this.props.current, ans);
            return <div>
                {this.state.modal1 ? <h1>{this.state.modal}</h1>: null} <br />
                <img width='100px' src={companyLogo} alt="Company Logo" />
                <p>Designation {designation}</p>
                <p>Assign Role {assignRole}</p>
                <p>Qualification {qualification}</p>
                <p>Skills: {skill}</p>

                <h2>{title}</h2>
                <p>{companyName}</p>
                <p>Company Description {description}</p>
                <p>Role Description {roleDescription}</p>
                <p>Key Responsibilities {keyResponsibilities}</p>
                <p>Technical Experience {technicalExperience}</p>
                <p>Additional Information {additionalInformation}</p>

                <h3>Salary: {salary}</h3>
                <p>Activated on: {date}</p>
                <p>Openings {openings}</p>
                <p>Location: {location}</p>
                <p>Employment Type {employmentType}</p>
                <p>Experience: {experience}</p>
                    <Link to='/mapJob'>
                        <button>Back</button>
                </Link>{' '}
                <button id={`btn${id}`} onClick={() => {
                    this.showModal(id);
                    setTimeout(() => {
                        this.props.startRemovedLiveJobs(id, 'accept');
                        this.props.history.push('/mapJob');
                    }, 1800);
                }} >
                        Apply Now
                    </button>
                </div>
                // Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, suscipit!
            // console.log('work done');
        }
        return (
            <div>
                
            </div>
        )
    }
}

const MapState = (state) => {
    console.log(state, 'MapSingleJobs');
    return {
        current: state.allLiveJobs
    }
}

export default connect(MapState, {startRemovedLiveJobs})(SingleMapJobs)





// import React from 'react'

// const SingleMapJobs = ({ id }) => {
//     console.log(id);
//     return (
//         <div>
//             SingleMapJobs
//         </div>
//     )
// }

// export default SingleMapJobs
