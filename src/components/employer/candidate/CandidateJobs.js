import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { startCandidatesInterviewTime, startFetchInterviewTime, startAddCandidatesApprovals, startFetchApprovalDate, addDashboardScheduleInterview, addDashboardBoxes, showAllCandidateJobs,  } from '../../../actions/action';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import { startFetchCandidateAppliedJobs } from '../../../actions/actionForRedux';

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
            
            }, 9000)   ////// TIME FRAME IS IMPORTATNT
        // console.log(this.props)
        // this.setState({
        //     interview: this.props.allInterview
        // })
            // this.setState({ allApprovalState: this.props.allApproval })
        
        this.props.startFetchInterviewTime(this.state.UserId)
        this.props.startFetchApprovalDate(this.state.UserId)
    // console.log(this.props.allApproval, this.props.allInterview);

        
        ////// AFTER REFRESH THIS IS NOT WORKING , ADDED THIS NEW ////////
        // this.props.showAllCandidateJobs()

        ///////////////// NEW ONE //////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.props.startFetchCandidateAppliedJobs(this.state.UserId)

        // firebase.database() 
        //         .ref('EmployerDashBoardBoxes/')
        //             .once('value').then((snap) => {
        //                 const expeT = [];
        //                 snap.forEach((child) => {
        //                     expeT.push({
        //                         id: child.key,
        //                         ...child.val()
        //                     })
        //                 })
        //             this.props.addDashboardBoxes({ expeT })

        //                 // dispatch(dashboardBoxedForRedux(expeT))
        //             })
        
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
        const button1 = document.getElementsByName('ApprovedBtn')
        button.forEach((ele) => {
            // console.log('click', id, ele)
            if (ele.id !== id && !this.state.showDate) {
        // console.log(!this.state.showDate)
                ele.disabled = true;

                button1.forEach((el) => el.disabled = true)
            }
            else if (ele.innerText === "Submit") {
                // ele.disabled = true;
                let value = document.getElementById('dateTime').value;
                let value1 = value.split('T').join(' , ');
                // this.setState({ interviewTime: value1 });
                // localStorage.setItem(`${this.state.UserId}${id}`, value1)
                
                if (value1 !== '') {
                    console.log(value1)
                    let findListJobs = this.props.current
                        // .find((item) => item[0].userId === this.state.UserId)

                    //// AS SOON USER SUBMIT DISABLE THE BUTTON ///////////
                    if (ele.id === id) {
                        ele.style.pointerEvents = 'none';
                        // ele.style.backgroundColor = 'black';
                    }
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
                    findListJobs[0].filter((ele) => {
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
                button1.forEach((el) => el.disabled = false)
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
        const button1 = document.getElementsByName('ApprovedBtn');
        
        if (window.confirm('Approved It')) {

            // this.setState({ allApprovalState: this.props.allApproval })

            this.setState({ ApprovedId: id, makeApproved: true });
            console.log(!this.state.makeApproved)
            let approvedDate = new Date().toISOString().split("T")[0]
            console.log('approved', id, approvedDate)
                // button.disabled = true;
            let findListJobs = this.props.current
                // .find((item) => item[0].userId === this.state.UserId)
            

            //// AS SOON USER CLICK ON APPROVED DISABLE THE BUTTON ///////////
            button1.forEach((ele) => {
                // console.log(ele.id, 'Approved'+id);
                if (ele.id === 'Approved'+id) {
                ele.style.pointerEvents = 'none';
                        // ele.style.backgroundColor = 'black';
                }
            
            })
            

            findListJobs[0].filter((ele) => {
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
    
        ////// AFTER REFRESH THIS IS NOT WORKING , ADDED THIS NEW ////////
        // this.props.showAllCandidateJobs()


        let setApproval = this.props.allApproval
        if (this.state.loading) {
        return <div><Spinner  onStart='yes'  size={4} /></div>
        }
        
        let findListJobs = this.props.current
            // .find((item) => item[0].userId === this.state.UserId)

        // console.log(findListJobs);
    // let findInterview = this.props.allInterview.find((item) => item[0].userId === this.state.UserId);

    // FOR INITIAL RUN WERE NOT ANY INTERVIEW TIME ADDED FOR RESPECTIVE CANDIDATE ///////////////////////////////////////////////////
        let CheckAllInterview = this.props.allInterview !== undefined ? this.props.allInterview : []
            // this.props.allInterview !== undefined ? allInterview : []

        if (!findListJobs[0] || findListJobs[0].length === 0) {
        return (
            <div style={{margin: '20px', marginLeft: '30px'}}>
                <h1>NO APPLIED JOBS AVAILABLE</h1>
                <BackBtn>
                <Link to='/candidate'>
                <button>Back</button>
                </Link>
                </BackBtn>
            </div>
        )
    }
    // console.log(this.props.allApproval, CheckAllInterview);
        return (
            <CandidateJobContainer>
                {
                    findListJobs[0].map((ele) => {
                        // console.log(ele);
                        
                        // console.log(item.map((ele) => ele.interviewTime &&ele));
                        const { title, location, date, companyLogo , companyName, salary, id, experience} = ele;
                        return (
                            ele.title &&
                            <SingleCandidateJobContainer>
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
                                                return <div>
                                                <p>Interview Date :
                                                </p>
                                                <span>{ele1.interviewTime}</span> 
                                                </div>
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
                                                return <div>
                                                    <p>Approved On :
                                                    </p>
                                                        <span>{ele1.approval}</span>
                                                </div>
                                        }
                                    return null
                                    }
                                    )
                                }

                                    <ButtonContainer>
                                    <ShowBtn btnColor='#3d9970' checkInterviewForDisabled={CheckAllInterview.find((el) => el.id === id && el.interviewTime)} id={`${id}`} name='button' onClick={() => this.showInput(id)} >
                                    {this.state.showDate && this.state.JobId === id ? 'Submit' :
                                    'Schedule Interview'}
                                    </ShowBtn>
                                    
                                        <ShowBtn btnColor='#f72585'
                                            checkApprovalForDisabled={setApproval.find((el) => el.id === id && el.approval)} id={`Approved${id}`} name='ApprovedBtn' onClick={() => this.handleApproved(id)}>
                                    {this.state.makeApproved && this.state.ApprovedId === id ? 'Approval Submitted' :
                                    'Approved'}
                                    </ShowBtn> 
                                        </ButtonContainer>
                                </Div3>
                                        
                                </div>
                            </SingleCandidateJobContainer> ////////
                                
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
                {/*
                    <BackBtn>
                    <Link to='/candidate'>
                    <button>Back</button>
                    </Link>
                    </BackBtn>
                */}
            </CandidateJobContainer>
        )
    }
}

const MapState = (state) => {
    // state.EmployerDashboardBoxes
    console.log(state, 'candidateJobs');
    // console.log(state.addDashboardScheduleInterview, 'CandidateJobs');
    // console.log(state.allCandidateJobs, state.allPersonalData, 'Employer-Candidate ');
    return {
        // current: state.totalAppliedJobs,
        allInterview: state.allCandidateInterviewTime,
        allApproval: state.allCandidateApprovedDate,
        current: state.singleCandidateAppliedJobs,

        // fake: state.fake
        // newCurrent: state.
        // personalData: state.allPersonalData,
    }
}

export default connect(MapState, { startCandidatesInterviewTime, startFetchInterviewTime, startAddCandidatesApprovals, startFetchApprovalDate, addDashboardScheduleInterview, addDashboardBoxes, showAllCandidateJobs, startFetchCandidateAppliedJobs})(CandidateJobs);


// let item = this.state.expe.map((item) => {
//                             // item.id === ele.id && item.interviewTime  && console.log(item)
//                             if (item.id === ele.id && item.hasOwnProperty('interviewTime')) {
//                                 console.log(item);
//                                 return item;
//                             }
//                         })






const CandidateJobContainer = styled.div`
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

const SingleCandidateJobContainer = styled.div`
/* @media (max-width: 320px) { */
border: 2px solid #3C7CD7;
padding: 4px;
border-radius: 10px;
display: flex;
flex-direction: column;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1rem;
font-size: 1.3rem;
padding: 15px;
/* height: 500px; */
`

const Div2 = styled.div`
/* margin-bottom: 15px; */
text-transform: capitalize;
    /* border: 1px solid black; */

>div>img {
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
    text-overflow: ellipsis; 
    overflow: hidden;
    /* width: 100%; */
}
>p {
    margin: 5px 12px;
    /* border: 1px solid black; */
text-overflow: ellipsis; 
    overflow: hidden;
    /* margin-bottom: 10px; */
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
        font-weight: 600;
        margin: 3px 0px;
        margin-right: 6px;
    }
    >span {
        /* border: 1px solid black; */
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
        /* width: 100px; */
    }
}

@media (min-width: 646px) {
    >div {
    >p {
        margin-top: 7px;
        margin-bottom: 7px;
        /* margin-right: 12px; */
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
        /* margin-top: 10px; */
        /* width: 100%; */
        width: 200px;
        padding: 10px;
        background-color: #23C5C5;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 1.2rem;
    white-space: nowrap;

    }
}
`

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
/* margin-top: 19px; */

`;


const ShowBtn = styled.button`
width: 60%;
    /* margin-top: 90px; */
    margin: 5px;
    padding: 8px;
    font-size: 1.1rem;
    border-radius: 5px;
    margin-right: 10px;
    border: none;
    color: white;
    /* height: 200px; */
    text-align: center;
    cursor: pointer;
    /* position: fixed; */
    /* color: black; */
    background-color: ${props => props.btnColor || 'black'};
    &:disabled {
    background-color: ${props => props.checkInterviewForDisabled ? '#ccc' : '#ccc'};
    }
    &:disabled {
        background-color: ${props => props.checkApprovalForDisabled ? '#ccc' : '#ccc'};
    }
    pointer-events: ${props => props.checkApprovalForDisabled || props.checkInterviewForDisabled ? 'none' : 'initial'};

    /* pointer-events: ${props => props.checkInterviewForDisabled ? 'none' : 'initial'}; */

    /* display: ${props => props.checkApprovalForDisabled && props.checkInterviewForDisabled ? 'none' : 'initial'}; */
    /* display: ${props => props.checkInterviewForDisabled ? 'none' : 'initial'}; */

    /* cursor: ${props => props.checkInterviewForDisabled ? 'none' : 'pointer'}; */
    /* cursor: ${props => props.checkApprovalForDisabled ? 'none' : 'pointer'}; */
    /* cursor: not-allowed; */

`


////////// INITIALLY DONE ///////////////////////////////////////////////
// const CandidateJobContainer = styled.div`
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

// const SingleCandidateJobContainer = styled.div`
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
//             /* align-items: center; */
//             /* align-self: center; */
//             /* align-content: center; */
//             /* float: right; */
//             /* clear: both; */
//             /* margin-right: 120px; */
//         }
//     }
//     >div>input {
//         margin-top: 10px;
//         margin-bottom: 10px;
//         font-size: 1rem;

//     }
    
//     /* >div>button {
//         width: 80%;
//         margin-top: 4px;
//         margin: 5px;
//         padding: 5px;
//         font-size: 1.1rem;
//         border-radius: 5px;
//         border: none;
//         color: ${props => props.Color1 || 'none'};
//         background-color: ${props => props.btnColor || 'none'};
//     } */
    
// }
// }
// `

// const ShowBtn = styled.button`
// @media (max-width: 320px) {
    // width: 80%;
    // margin-top: 4px;
    // margin: 5px;
    // padding: 8px;
    // font-size: 1.1rem;
    // border-radius: 5px;
    // border: none;
    // color: white;
    // text-align: center;
    // background-color: ${props => props.btnColor || 'black'};


//     ///// SECOND #CCC IN FIRST CONDITION, IS FUNCTIONING FOR TEMPORARY DISABLED /////////////////////////////////////////////////////////////
    // &:disabled {
    // background-color: ${props => props.checkInterviewForDisabled ? '#ccc' : '#ccc'};
    // }
    // &:disabled {
    // background-color: ${props => props.checkApprovalForDisabled ? '#ccc' : null};
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