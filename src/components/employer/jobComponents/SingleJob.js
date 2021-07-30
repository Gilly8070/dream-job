import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import {startFetchJobs} from '../../../actions/actionForRedux'


class SingleJob extends React.Component {
    state = {
        id: this.props.match.params.id,
        loading: true,
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({loading: false})
        }, 7000)
        // console.log(this.props.current)
    }


    render() {


        if (this.state.loading) {

        /////////// NEW ONE //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.props.startFetchJobs()
        return <div ><Spinner  onStart='yes'  size={4} /></div>
        }
        if (!this.props.current || this.props.current.length === 0) {
            return <h1 style={{marginTop: '20px', marginLeft: '20px', marginBottom: '10px'}}>No Jobs</h1>
        }
        console.log(this.state.id);
        // console.log(this.state.title, this.props.current.map(single => single.title));
        // let cur = this.props.current.map(single => single.title);
        // if()
        if (this.state.id) {
            let ans = this.props.current.find(sing => sing && this.state.id === sing.id);
            // ans.title ? 
            // if (!ans.title) {
            //     return 'no'
            // }
            const { title, location, status, experience, salary, qualification, skill, date, roleDescription, id, companyName, description, keyResponsibilities, technicalExperience, additionalInformation } = ans;
            console.log(ans);
            return <SingleJobContainer>
            <h1>{title && title}
                </h1>
                <span>{companyName}, {location}</span>
                <BasicInformation>
                    <div>
                    <p>Date :
                    </p>
                    <span>{date}</span>
                    </div>
                    <div>
                    <p>Job Id :
                    </p>
                    <span>{id.substr(0,8)}</span>
                    </div>
                    <div>
                    <p>Status :
                    </p>
                    <span>{status}</span>
                    </div>
                    <div>
                    <p>Experience :
                    </p>
                    <span>{experience > 0 ?  experience + ' years': 'Fresher'} years</span>
                    </div>
                    <div>
                    <p>Salary :
                    </p>
                    <span>{salary && '$'+(parseInt(salary)/ 70 /1000).toFixed(1)+'k'}</span>
                    </div>
                    <div>
                    <p>Qualification :
                    </p>
                    <span>{qualification}</span>
                    </div>
                    <div>
                    <p>Skill :
                    </p>
                    <span>{skill}</span>
                    </div>
                    </BasicInformation>
                    
                <Div>
                <span>
                <h2>Job Description</h2> 
                <p></p>
                </span>
                </Div>
                    <InformationContainer>
                                <div>
                            
                            <div>
                            <p>Role Description
                            </p>
                            <span>
                            {roleDescription}
                            </span>
                            </div>
                            <div>
                            <p>Key Responsibilities
                            </p>
                            <span>
                            {keyResponsibilities}
                            </span>
                            </div>
                            <div>
                            <p>Technical Experience
                            </p>
                            <span>
                            {technicalExperience}
                            </span>
                            </div>
                            <div>
                            <p>Additional Information
                            </p>
                            <span>
                            {additionalInformation}
                            </span>
                                </div>
                            </div>
                            
                                
                </InformationContainer>
                <AboutCompany>
                <p>About Company</p>
                <span>{description}</span>
                </AboutCompany>
                <div>
                        <Link to='/jobs'>
                        <button>Back</button>
                        </Link>
                </div>
                </SingleJobContainer>
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
    console.log(state.fetchJobs, 'SingleJob');
    return {
        current: state.fetchJobs
    }
}

export default connect(MapState, {startFetchJobs})(SingleJob);


const SingleJobContainer = styled.div`
font-family: Arial, Helvetica, sans-serif;
/* border: 1px solid black; */
margin: 15px;
margin-left: 40px;
margin-top: 30px;
/* padding: 6px; */
>h1 {
    font-size: 1.7rem;
    text-transform: capitalize;
    margin-bottom: 10px;
}
>span {
    /* margin-left: 16px; */
    font-size: 1.3rem;
}
>div {
>a>button{
            border-radius: 6px;
            background-color: #23C5C5;
            width: 300px;
            font-size: 1.5rem;
            color: white;
            border: none;
            cursor: pointer;
            text-align: center;
            margin-top: 3px;
            padding: 7px 0;
            }
    }

`

const BasicInformation = styled.div`
/* border: 1px solid black; */
margin-top: 8px;
>div {
    display: flex;
    flex-direction: row;
    font-size: 1.4rem;
    margin: 20px 0px;
    /* margin-left: 4px; */
    >p {
        width: 240px;
        font-weight: 550;
        margin-bottom: 20px;
    }
    >span {
        font-size: 1.3rem;
        text-overflow: ellipsis; 
        overflow: hidden;
        /* font-weight: 540; */
    }
}

/* @media (min-width: 768px) {
    font-size: 1.2rem;
}
@media (min-width: 992px) {
    font-size: 1.3rem;
}
@media (min-width: 1200px) {
    font-size: 1.3rem;
} */
`


const InformationContainer = styled.div`
display: flex;
flex-direction: row;
/* padding: 5px; */
font-size: 1.2rem;
margin-top: 15px;

>div>div {
    /* margin: 8px; */
    /* margin-left: 4px; */
    /* border: 1px solid black; */
    margin-right: 70px;
    margin-bottom: 28px;
    >p {
        font-weight: bold;
        margin-bottom: 12px;
        font-size: 1.4rem;
    }
    >span {
        font-size: 1.2rem;
        margin-left: 2px;
        text-overflow: ellipsis; 
        overflow: hidden;
    }
}
/* @media (min-width: 768px) {
    font-size: 1.2rem;
}
@media (min-width: 992px) {
    font-size: 1.3rem;
}
@media (min-width: 1200px) {
    font-size: 1.3rem;
} */
`;


const Div = styled.div`
opacity: 0.4;
margin-top: 25px;
margin-bottom: 30px;
/* margin-left: 4px; */

>span {
    display: flex;
    flex-direction: row;
    display: grid;
    grid-template-columns: 190px calc(100% - 190px);
    >h2 {
    
}
    >p {
:after {
    content: '';
    display: block;
    margin-top: 13px;
    border-bottom: 2px solid black;
    border-radius: 100%;
    margin-right: 10px;
    }
}
}
    `;

const AboutCompany = styled.div`
margin-top: 20px;
margin-bottom: 30px;
font-weight: bolder;
/* border: 1px solid black; */
    margin-right: 70px;
>p {
        margin-bottom: 12px;
        font-size: 1.7rem;
}
>span {
font-size: 1.2rem;
font-weight: normal;
        margin-left: 2px;
}
`

// export const SingleJobContainer = styled.div`

// @media (max-width: 320px) {
// * {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// }

// display: flex;
// flex-direction: column;
// justify-content: center;
// align-content: center;

// &>h2{
//     font-size: 1.7rem;
//     &>span {
//         /* margin-left:5px; */
//         margin-right: 10px;
//         padding-left: 10px;
//         font-size: 1.6rem;
//     /* background-color: black; */
//     }
// }

// &>p {
//     font-weight: bold;
//     font-size: 1rem;
//     margin: 5px;
//     /* padding: 5px; */
//     /* background-color: black; */
//     &>span {
//         display: block;
//         margin-left: 4px;
//         font-weight: normal;
//     }
// }
// &>div
// >a {

//     display: flex;
//     justify-content: center;
//     align-content: center;
//     background-color: #23C5C5;
//     border-radius: 5px;
//             color: #23C5C5;
//             text-align: center;
//             margin: 0 3px 3px 3px;

//     &>button{

//             background-color: #23C5C5;

//             font-size: 1.5rem;
//             color: white;
//             border: none;

//             text-align: center;
//             margin-top: 3px;
//             padding: 5px 0;
  
//             }
//     }
// }

// `