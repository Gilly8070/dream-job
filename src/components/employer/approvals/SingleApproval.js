import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';
import { startFetchApprovalDate } from '../../../actions/action';
import Spinner from '../../Spinner';
import styled from 'styled-components';

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
            
            }, 3500)
        this.props.startFetchApprovalDate(this.state.UserId)
        }
    render() {

        if (this.state.loading) {
        return <div><Spinner  onStart='yes'  size={4} /></div>
        }

        let findSingleApproval = this.props.allApproval
            // .find((item) => item[0].userId === this.state.UserId)


    if (findSingleApproval.length === 0) {
        return (
            <div style={{margin: '20px', marginLeft: '30px'}}>
                <h1>NO APPLIED JOBS AVAILABLE</h1>
                <BackBtn>
                <Link to='/approvals'>
                <button>Back</button>
                </Link>
                </BackBtn>
            </div>
        )
    }
    console.log(this.state.UserId, findSingleApproval);
        return (
            <ApprovalContainer>
                {
                    findSingleApproval.map((ele) => {
                        
                        
                        // console.log(item.map((ele) => ele.interviewTime &&ele));
                        const { title, location, date, companyLogo , companyName, salary,approval, id, experience} = ele;
                        return (
                            <SingleApprovalContainer>
                            {
                                //     const company = () => {
                                    
                                // }
                            }
                            <div key={id}>
                                <Div2>
                                    <div>
                                    <img src={companyLogo} alt="Logo" />
                                        <span>  {date} </span>
                                    </div>
                                    <h3>{title.toLowerCase()}</h3>
                                    <p>{companyName ? <span>{companyName.toLowerCase()}</span> : 'Anonymous'}, <span>{location.toLowerCase()}</span></p>
                                </Div2>
                                <Div3>
                                    <div>
                                    <p>Salary :
                                    </p>
                                    <span>{salary && '$' + (parseInt(salary) / 70 / 1000).toFixed(1) + 'k'}</span>
                                    </div>
                                    <div>
                                    <p>Job Id :
                                    </p>
                                    <span>{id.substring(0,15)}</span>
                                    </div>
                                    <div>
                                    <p>Experience :
                                    </p>
                                    <span>{experience > 0 ?  experience + ' years': 'Fresher'}</span>
                                        </div>
                                        <div>
                                            <p>Approved On :
                                            </p>
                                            <span>
                                            {approval}
                                            </span>
                                        </div>
                                    </Div3>
                                </div>
                            </SingleApprovalContainer> ////////
                                
                        )
                    })
                }
                {/*
                    <BackBtn>
                    <Link to='/approvals'>
                    <button>Back</button>
                </Link>
                </BackBtn>
            */}
            </ApprovalContainer>
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








const ApprovalContainer = styled.div`
/* border: 4px solid black; */
display: flex;
flex-direction: column;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
margin: 20px;
grid-gap: 20px;

/* @media (max-width: 320px) {
display: flex;
flex-direction: column;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
margin: 4px;
grid-gap: 4px;

} */

@media (min-width: 992px) {
    /* margin: 18px; */
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-gap: 25px;
margin: 25px;
}
/*
@media (min-width: 768px) {
grid-gap: 22px;
margin: 20px;
} */
`

const SingleApprovalContainer = styled.div`
border: 2px solid #3C7CD7;
padding: 4px;
border-radius: 10px;
display: flex;
flex-direction: column;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1rem;
font-size: 1.3rem;
padding: 15px;
`

const Div2 = styled.div`
text-transform: capitalize;

>div>img {
    /* width: 50px;
    height: 35px; */
    width: 60px;
        height: 40px;
}
>div>span {
float: right;
    clear: both;
    margin-right: 25%;
    /* font-weight: 800; */
    /* border: 1px solid black; */
}
>h3 {
    margin: 5px 5px;
    /* border: 1px solid black; */
    /* width: 100%; */
    text-overflow: ellipsis; 
    overflow: hidden;
}
>p {
    margin: 5px 12px;
    text-overflow: ellipsis; 
    overflow: hidden;
    >span {

    }
}
`;

const Div3 = styled.div`
>div {
display: flex;
flex-direction: row;
margin-top: 10px;
margin-bottom: 4px;
justify-content: space-between;
align-content: space-between;
    >p {
        /* border: 1px solid black; */
        font-weight: 600;
        margin: 3px 0px;
        margin-right: 6px;
    }
    >span {
        margin: 3px 0px;
        margin-right: 55px;
        text-align: right;
text-overflow: ellipsis; 
    overflow: hidden;
    white-space: nowrap;
    }
}

>div {
    >input {
        font-size: 1.4rem;
    }
}

@media (min-width: 646px) {
    >div {
    >p {
        margin-top: 7px;
        margin-bottom: 7px;
    }
    >span {
        margin-top: 7px;
        margin-bottom: 7px;
        margin-right: 26px;
    }
}
}
`

const BackBtn = styled.div`
margin-top: 40px;
margin-bottom: 3px;
margin-left: 40px;
>a {
background-color: red;
>button {
    width: 200px;
    padding: 10px;
    background-color: #23C5C5;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1.2rem;
    }
}

`














// const   ApprovalContainer = styled.div`
// /* border: 4px solid black; */
// display: flex;
// flex-direction: column;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
// margin: 4px;
// grid-gap: 4px;

// @media (max-width: 320px) {
// display: flex;
// flex-direction: column;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// margin: 4px;
// grid-gap: 4px;

// }
// `

// const SingleApprovalContainer = styled.div`
// @media (max-width: 320px) {
// border: 1px solid #3C7CD7;
// /* margin: 4px; */
// padding: 4px;
// border-radius: 5px;
// display: flex;
// flex-direction: column;
// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// font-size: 1rem;

// >div {
//     /* text-transform: capitalize; */
//     >img{
//         /* display: inline-block; */
//         margin-left: 4px;
//         border-radius: 6px;
//         /* background-color: black; */
//     }
//     >h2 {
//         margin-left: 8px;
//         margin-top: 2px;
//         font-size: 1.3rem;
//     }
//     >p {
//         margin-top: 6px;
//         margin-bottom: 2px;
//         font-size: 1.1rem;

//         >span {
//             margin-left: 10px;
//         }
//     }
// }
// }
// `
// const BackBtn = styled.div`
// @media (max-width: 320px) {
// /* margin-left: 20px; */
// margin-top: 10px;
// margin-bottom: 3px;
// >a>button {
//     margin-top: 10px;
//     width: 100%;
//     padding: 10px;
//     background-color: #23C5C5;
//     cursor: pointer;
//     border: none;
//     border-radius: 5px;
//     color: white;
//     font-size: 1.2rem;
//     }

// }
// `