import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { startCheckForUnActionCandidate } from '../../../actions/action';
// import { useEffect } from 'react';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import { startCheckForUnActionCandidate, startFindUsersPersonalData, startFindCandidateInterviewLeft, showAllCandidateJobs, totalAppliedJobForAllCandidate } from '../../../actions/action';
// import firebase from 'firebase';

class UnAction extends Component {
    state = {
        loading: true,
        acceptedOffer: null,
    }
    componentDidMount() {

        /////// THIS TWO ALREADY THERE IN REDUX STORE, INITIALLY ITS IS USED IN THIS SECTION BUT DUE TO ERROR THIS BOTH ACTION MODIFIED, HENCE THEY ARE NOT USED FURTHER ///////////////////////////////////
        // this.props.startCheckForUnActionCandidate()
        // this.props.startFindUsersPersonalData()
        //////////////////////////////////////////////////////////////////



        //////// THESE ARE TWO ACTION WE REQUIRED FOR THIS SECTION, BUT DUE TO SOME DELAY IN PROCESS BOTH ARE SHIFTED IN DASHBOARD.JS ///////////////////////////////////////////////

        // this.props.startFindCandidateInterviewLeft();
        // this.props.showAllCandidateJobs();

        /////////////////////// ITS END HERE //////////////////////////////////////


            
        
        
        /////////// THIS ONE IS LATEST WRITTEN, NOW ITS IS SHIFTED IN ACTION.JS  ////////////////////////////////////////////////////
    //     let arr = []
    //     let arr2 = []
    //             // let newArr = []; 
    //     firebase.database()
    //     .ref('appliedLiveJobs/').orderByChild('val')
    //     .once('value').then( (snap) => {
    //         snap.forEach((el) => {
    //             firebase.database()
    //             .ref('appliedLiveJobs/' + el.key)
    //             .once('value').then((snap2) => {
    //                 let newA = []
    //                 newA.push({ userId: el.key })
    //                     snap2.forEach((el2) => {
    //                             // console.log(el2.val());
    //                             newA.push(el2.val())
    //                     })
    //                 arr.push(newA)
    //                 // this.setState({acceptedOffer: arr})
    //                     // console.log(this.state.acceptedOffer, 'accepted');
    //             // })
    //             firebase.database()
    //             .ref('offer/acceptOffer/' + el.key)
    //             .once('value').then((snap2) => {
    //                 let newAA = []
    //                 newAA.push({ userId: el.key })

    //                     snap2.forEach((el2) => {
    //                             // console.log(el2.val());
    //                             newAA.push(el2.val())
    //                     })
    //                     arr2.push(newAA)
    //                     // console.log(arr2, 'accept');
    //             // })
    //             let newArr = []; 
    //                 // 
    //                 arr.map((ele) => {
    //                     arr2.map((ele1) => {
    //                         let arr3 = [];
    //                         if (ele[0] && ele1[0] && ele1[0].userId === ele[0].userId) {
    //                             ele1.forEach( (item) => {
    //                                 if (ele.every((item1) => item1.id !== item.id)) {
    //                                     arr3.push(item)
    //                                 } 
    //                             })
                                
    //                             newArr.push(ele.concat(arr3))
    //                         }
    //                     })
    //                 })
    //                 this.props.totalAppliedJobForAllCandidate(newArr)
    //                 console.log(newArr);
    //             })
    //         })
            
    //     })
        
    // })
    
    ////////////////////////////////// END OF LATEST WRITTEN ///////////////////////////////////////////////////////////////////

        setTimeout(() => this.setState({ loading: false }), 9000)

    }
    render() {
        
        //     
        // 
        // if (this.state.loading) {
        // return <div style={{marginTop: '20px', marginLeft: '20px', marginBottom: '10px'}}><Spinner  size={3} /></div>
        // }
        
        // console.log('starting')
        // const fun = () => {
        // setTimeout(() => {
        let interview = this.props.allInterview;
        let allName = this.props.allName;
        let totalApplied = this.props.totalApplied;
        let totalLeftJobs = [];
        let candidName = [];
        totalApplied !== undefined && totalApplied.length > 0 &&
        interview !== undefined && interview.length > 0 &&
        totalApplied.forEach((singleJob) => {
            // console.log(singleJob[0].userId)
            // interview.find((el) =>)
            interview.forEach((el) => {
                // console.log(el[0])

                if (el[0].userId === singleJob[0].userId) {
                    let checkLength = (singleJob.length - el.length) > 0 ?
                        (singleJob.length - el.length) : 0;
                    totalLeftJobs.push(checkLength)
                }





        // console.log(totalLeftJobs);
                    // console.log(singleJob.length, el.length)
                    // console.log(singleJob[0].userId, el[0].userId)
                // else {
                    // totalLeftJobs.push(0)
                // }
            })
            allName.forEach((el) => {
                if (el.id === singleJob[0].userId) {
                    let checkName = el.name ? el.name : 'NAME'
                    candidName.push(checkName)
                }
            })
        })

        // console.log(totalLeftJobs,candidName);
        // let interview2 = interview.slice();
        // let allName2 = allName.slice();

        // let arr1 = ''
        // let arr2 = ''
        // if (interview !== undefined && interview.length > 0) {
        //     // let sli1 = interview
        //     // let sli2 = allName
        //     // arr1.push(sli1)
        //     arr1 = interview.slice().reverse();
        //     arr2 = allName.slice().reverse();

        //     // a
        // }
        // let arr3 = arr1.slice(0, 3);
        // let arr4 = arr2.slice(0, 3);
            
        // if (interview !== undefined && interview.
        // let rand = interview.length > 0 && Math.floor(Math.random() * interview.length);
        // let sliInterview = interview.length > 0 && interview.slice(rand, rand + 3);
        // let sliName = allName.length > 0 && allName.slice(rand, rand + 3
        // }
            ;
        let nameArr = [];
        let sliceTotalLeftJobs = totalLeftJobs.slice(0,3)
        candidName && candidName.forEach((ele) => {
            // console.log(nameArr4, ele.toString('').split(' ').length);
            let name = ele.toString('').split(' ').length > 1 ? ele.toString('').split(' ').slice(0, 2).join(' ') : ele.toString('').split(' ').length === 1 ? ele.toString('').split('').slice(0, 10).join('') : ele;
            nameArr.push(name);
        })
            
        // console.log(sliceTotalLeftJobs, candidName, totalApplied, allName, interview)



        // let sliceName = Math.floor(Math.random() * interview.length)

        //     return interview.map((el, ind) => {
                            
                            
        //                         if (el > 0) {
        //                             return <div>
        //                             <p>{allName[ind]}</p>
        //                                 <h5>{el}</h5>
        //                             </div>
        //                         }
                        
                    
        //             return null
        //         })
        // }, 4000)
        // 
            
        // let find = this.props.allInterview.map((el, ind) => {
        //     if (el > 0) {
        //         <h5>{el}</h5>
                
        //     }
        // })
        // console.log(arr3, arr4)
        // if (!this.state.loading && sliInterview.length > 0) {
        //     return <h1>No Action To Take</h1>
        // }
        return (
            <Container>
                <HeadingContainer>
                <Headings>UnActioned Candidates</Headings>
                </HeadingContainer>
                {
                this.state.loading &&
                <div><Spinner onStart='yes' size={3} /></div>
                }
                {<div >
                    {
                        !this.state.loading && (totalApplied === undefined || totalApplied.length === 0 ||  interview === undefined || interview.length === 0 )  &&
                        <h2 style={{ marginTop: '40px', marginLeft: '40px', marginBottom: '10px'}}>No Action To Take</h2>
                    }

                </div>
                }
                {
                    !this.state.loading && totalLeftJobs.length > 0 && sliceTotalLeftJobs.map((el, ind) => {
                        if (el > 0) {
                            return <Div key={ind}>
                                <div>
                                <h5>Candidate Name :
                                </h5>
                                <span>{nameArr[ind]}</span>
                                </div>
                                <p><span >{el}</span> <p>Unread Jobs</p> </p>
                                {/*
                                    <PersonName>{sliName[ind]}</PersonName>
                                    <CenterNumber>
                                <DisNumber>{el}</DisNumber>
                        </CenterNumber> */}
                            </Div>
                        } 
                    return null
                })
            }
            
            </Container>
        )
    }
}


const MapState = (state) => {
    // console.log(state.allPersonalData,state.totalAppliedJobs, 'unAction')
    // console.log(state.allCandidateAppliedJob,s, 'allAppliedJobs');
    // console.log(state.allPersonalData, 'personal');

    // console.log(stat state.allPersonalData, 'Employer-Candidate ');
    // console.log(state)
    return {
        totalApplied: state.totalAppliedJobs,
        allName: state.allPersonalData,
        allInterview: state.allCandidateInterviewLeft
        // allApplied: state.allCandidateAppliedJobs,
        // personalData: state.allPersonalData,
        // allJobs: state.allJobs,
        // applied: state.appliedLiveJobs,
        // received: state.receivedOffer,
    }
}

export default connect(MapState, {startCheckForUnActionCandidate, startFindUsersPersonalData, startFindCandidateInterviewLeft, showAllCandidateJobs, totalAppliedJobForAllCandidate})(UnAction);


const Container = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-size: 1.2rem;
`;


const HeadingContainer = styled.div`
background-color: whitesmoke;
:after {
    content: '';
        display: block;
        border-bottom: 3px solid black;
        border-radius: 100%;
        margin: 0px 5px;
        margin-top: 3px;
}

`
const Headings = styled.h4`
text-align: center;
font-size: 1.4rem;
padding: 20px 0px;

`


const Div = styled.div`
display: flex;
flex-direction: column;
font-size: 1.4rem;
/* justify-content: flex-start; */
/* align-content: flex-start; */
margin: 8px 0px;
margin-left: 15px;
margin-bottom: 12px;
/* border: 1px solid black; */
>div {
display: flex;
flex-direction: row;
margin-bottom: 8px;
padding: 8px;
>h5 {
/* border: 1px solid black; */
        font-size: 1.3rem;
}
>span {
/* border: 1px solid black; */
        text-align: right;
        align-self: center;
        font-size: 1.2rem;
        font-weight: bold;
margin-left: 14px;
text-overflow: ellipsis; 
    overflow: hidden;
    }
}

>p {
display: flex;
    >span {

        margin-left: 15px;
        margin-right: 18px;
        font-weight: 700;
color: #0466c8;

    }
    >p {
        align-self: center;
        font-weight: 500px;
        font-size: 1.1rem;
color: #3da5d9;

    }
}

:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        border-radius: 100%;
        margin-right: 10px;
        margin-top: 14px;
}


@media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    justify-content: space-between;
    align-content: space-between;
}
`;












const Head2 = styled.h4`


@media (max-width: 320px) {
${Headings}:after {
        content: '';
        /* border: 2px solid red; */
        display: block;
        border-bottom: 1px solid blue;
        width: 100px;
        position: relative;
        left: 40px;
        /* left: 100px; */
        /* right: 30px; */
        border-radius: 100px;
        background-color: black;
        /* display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-self: center; */
        /* padding-bottom: 20px; */
        
        /* text-align: center; */
    }
}
`

const PersonName = styled.h5`
font-size: 1.1rem;
/* font-family: serif; */
margin-top: 10px;
margin-bottom: 10px;
text-transform: capitalize;

@media (max-width: 320px) {
/* background-color: black;
color: white;
width: 100px; */
font-size: 1.1rem;
font-family: serif;
margin-top: 3px;
margin-bottom: 3px;
}
`
const CenterNumber = styled.p`
display: flex;
    justify-content: center;
    align-content: center;




@media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-content: center;
}
`

const DisNumber = styled.p`
background-color: black;
color: whitesmoke;
border-radius: 50%;
width: 20px;
height: 20px;
margin-bottom: 3px;


@media (max-width: 320px) {
background-color: black;
color: whitesmoke;
border-radius: 50%;
width: 20px;
height: 20px;
margin-bottom: 3px;
/* position: absolute;
left: 120px;
bottom: 240px; */
/* display: block; */
/* display: flex; 
align-content: center;
justify-content: center; */
}
`