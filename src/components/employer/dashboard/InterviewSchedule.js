import React, { Component }  from 'react'
// import { useEffect } from 'react';
import { connect } from 'react-redux';
// import { startFetchCandidatePersonalData, addDashboardScheduleInterview } from '../../../actions/action';
import Spinner from '../../Spinner';
import styled from 'styled-components';

class InterviewSchedule extends Component {
    state = {
        loading: true,
        arr: []
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 5000)
        // console.log(this.state.
        
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
        // if (this.state.loading) {
        //     return <Spinner size={2} />
        // }
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
        // if (arr.length > 0) {
        //     return <h2>No Interview Schedule</h2>
        // }
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
            <Container>
                <HeadingContainer>
                    <Headings>Interview Schedule</Headings>
                </HeadingContainer>
                {
                this.state.loading &&
                <div ><Spinner  onStart='yes' size={3} /></div>
                }
                {<div >
                    {
                        !this.state.loading && arr.length === 0 &&
                        <h2 style={{ marginTop: '40px', marginLeft: '40px', marginBottom: '10px'}}>No Interview Schedule</h2>
                    }
                </div>
                }
                {
                    
                    !this.state.loading && sliArr.length > 0 && sliArr.map((single, ind) => {
                        let name = single.name.toString('').split(' ').length > 1 ? single.name.toString('').split(' ').slice(0, 2).join(' ') : single.name.toString('').split(' ').length === 1 ? single.name.toString('').split('').slice(0, 10).join('') : single.name;
                        // console.log(single.name.toString('').split(' ').length, name.toString('').toLowerCase())
                            return (
                                <ContainerInter key={ind}>
                                    <PersonName>
                                    <h4>{name.toLowerCase()}</h4>    
                                    <p>{single.interviewDate}</p>
                                    </PersonName>
                                    <span>{single.title.toLowerCase()}, {single.location.toLowerCase()}</span>
                                </ContainerInter>
                                )
                        })
                }
                    
            </Container>

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
    // console.log(state.allPersonalData, state.addDashboardScheduleInterview, 'InterviewSchedule');
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



const ContainerInter = styled.div`
margin-left: 9px;
margin-top: 8px;
padding: 5px;

>span {
    font-size: 1.1rem;
    text-transform: capitalize;
    margin-left: 9px;
    /* border: 1px solid black; */
    text-overflow: ellipsis; 
    overflow: hidden;
/* margin-top: 8px; */
}
:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        border-radius: 100%;
        margin-right: 10px;
        margin-top: 16px;
        /* margin-left: 0px; */
}

@media (min-width: 768px) {

}
`


// const ContainerInter = styled.span`
// @media (max-width: 320px) {
//     &>p, &>span {
//         font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//         font-size: 1rem;
//     }
// }
// `




// const HeadingContainer = styled.div`

// @media (max-width: 320px) {
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     background-color: whitesmoke;
    
// }
// `

// const Headings = styled.h4`

// @media (max-width: 320px) {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     background-color: whitesmoke;
//     height: 30px;
// }
// `

// const Head2 = styled.h4`

// @media (max-width: 320px) {
// ${Headings}:after {
//         content: '';
//         display: block;
//         border-bottom: 1px solid blue;
//         width: 110px;
//         position: relative;
//         left: 20px;
//         border-radius: 100px;
//         background-color: black;
//     }
// }
// `

const PersonName = styled.div`
margin-bottom: 14px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
margin-top: 5px;
/* width: 300px; */
/* border: 1px solid black; */
>h4 {
/* border: 1px solid black; */
    text-transform: capitalize;
    font-size: 1.3rem;
    margin-right: 7px;
    text-overflow: ellipsis; 
    overflow: hidden;
}
>p {
/* border: 1px solid black; */

    /* font-weight: normal; */
    font-size: 1.1rem;
    /* float: right; */
    /* width: 100%; */
    margin-right: 60px;
        text-align: right;
    /* font-weight: 600px; */
}
/* @media (max-width: 320px) {
font-size: 1rem;
font-family: serif;
margin-top: 3px;
margin-bottom: 3px;
} */

@media (min-width: 768px) {
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); */
    /* grid-template-columns: 80% au; */

    >h4 {
        /* border: 1px solid black; */
        padding-right: 90px;
    }
    >p {
        /* border: 1px solid black; */
        margin-right: 10px;
        text-align: right;
    }
}

@media (min-width: 1400px) {
>p {
    margin-right: 10%;
}
}
@media (min-width: 1600px) {
>p {
    margin-right: 15%;
}
}
`