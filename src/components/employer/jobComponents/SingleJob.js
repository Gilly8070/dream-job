import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class SingleJob extends React.Component {
    state = {
        id: this.props.match.params.id,
    }
    render() {
        console.log(this.state.id);
        // console.log(this.state.title, this.props.current.map(single => single.title));
        // let cur = this.props.current.map(single => single.title);
        if (this.state.id) {
            let ans = this.props.current.find(sing => this.state.id === sing.id)
            const { title, location, status, experience, salary, education, skill, date,roleDescription } = ans;
            console.log(ans);
                return <div>
                    <h2>Job Title: {title}</h2>
                    <p>Date: {date}</p>
                    <p>Location: {location}</p>
                    <p>Status: {status}</p>
                    <p>Experience: {experience}</p>
                    <p>Salary: {salary}</p>
                    <p>Job description: {roleDescription}</p>
                    <p>Education: {education}</p>
                    <p>Skill: {skill}</p>
                    <p></p>
                    <Link to='/jobs'>
                        <button>Back</button>
                    </Link>
                    
                </div>
            // console.log('work done');
        }
        // return (
        //     <div>{this.state.title}
        //     </div>
        // )
    }
}

// const SingleJob = ({ props, current }) => {
//     console.log(props.title);
//     return (
//         <div>
            // {
            //     current.map(ele =>
            //         <div key={ele.id}>
            //             <h2>{ele.title}</h2>
            //             <p>Date: {ele.date}</p>
            //             <p>Location: {ele.location}</p>
            //             <p>Status: {ele.status}</p>
            //             <p>Experience: {ele.experience}</p>
            //             <p>Salary: {ele.salary}</p>
            //             <p>Education: {ele.education}</p>
            //             <p>Skill: {ele.skill}</p>
            //         </div>)
            //     }
                // <Link to='/jobs'>
                //     <button>Back</button>
                // </Link>
//         </div>
//     )
// }

const MapState = state => {
    console.log(state, 'SingleJob');
    return {
        current: state.list
    }
}

export default connect(MapState, null)(SingleJob);
