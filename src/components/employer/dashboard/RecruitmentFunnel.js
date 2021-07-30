import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spinner from '../../Spinner';
import styled from 'styled-components';

class RecruitmentFunnel extends Component {
    state = {
        loading: true,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
            }, 1500)
    }
    render() {
        
        // if (this.state.loading) {
        //     return <Spinner size={3} />
        //     }
        // let offerPercent = ((this.props.personalData.length / (this.props.personalData.length * +(1 + '.' + this.props.personalData.length))) * 100).toFixed();
        
        // console.log(1.+ this.props.personalData.length);
        
        let screenPercent = 0;
        let offerPercent = 0;
        if (this.props.personalData !== undefined && this.props.personalData.length > 0) {
            screenPercent = 100;
            offerPercent = ((this.props.personalData.length / (this.props.personalData.length * +(1 + '.' + this.props.personalData.length))) * 100).toFixed();
        }
        // console.log(offerPercent, (this.props.personalData.length / (this.props.personalData.length * +(1 + '.' + this.props.personalData.length))));
        let total = 0;
        if ( this.props.allApplied !== undefined && this.props.allApplied.length > 0) {
            this.props.allApplied.map((el) => {
                // console.log(el)
                total += (el.length);
                return null;
            })
        }
        let hireLength = 0;
        if (total > 0 && this.props.forHire !== undefined && this.props.forHire.length > 0 ) {
            hireLength = ((this.props.forHire.length / total) * 100).toFixed();
        }
        // console.log(this.props.forHire.length,hireLength, total)
        let interviewLength = 0;
        if (total > 0 &&  this.props.forInterview !== undefined && this.props.forInterview.length > 0) {
            interviewLength = ((this.props.forInterview.length / total ) * 100).toFixed();
        }
        // console.log(this.props.forInterview.length,interviewLength, total)

        // console.log(hireLength, interviewLength)
// console.log(+screenPercent)
        return (
            <Container>
                <HeadingContainer>
                    <Headings>Recruitment Funnel</Headings>
                </HeadingContainer>
                {
                this.state.loading &&
                <div><Spinner onStart='yes' size={3} /></div>
                }
                {
                    !this.state.loading &&
                <div>
                    <RecruitName>
                        <p>
                            <p>Screen</p>
                            <p>Interview</p>
                            <p>Offer</p>
                            <p>Hire</p>
                        </p>
                        <div>
                            <Span size={+screenPercent  >= 30 ? +screenPercent : 100}>{+screenPercent >= 30 ? screenPercent + '%' : "In process"}</Span>
                            <Span size={+interviewLength >= 30 ? +interviewLength : 100}>{+interviewLength >= 30 ? interviewLength + '%' : "In process"}</Span>
                            <Span size={+offerPercent >= 30 ? +offerPercent : 100}>{+offerPercent >= 30 ? offerPercent + '%' : "In process"}</Span>
                            <Span size={+hireLength >= 30 ? +hireLength : 100}>{+hireLength >= 30 ? hireLength + '%' : "In process"}</Span>
                        </div>
                        {/*
                        <p>Screen</p>
                        <div size={50}>
                        <RecruitDone size={50} >{screenPercent}%</RecruitDone>
                        </div>
                    </RecruitName>
                    <RecruitName>
                        <p>Interview</p>
                        <div size={20}>
                        <RecruitDone size={20} >{interviewLength}%</RecruitDone>
                        </div>
                    </RecruitName>
                    <RecruitName>
                        <p>Offer</p>
                        <div size={30}>
                        <RecruitDone size={30} >{offerPercent}%</RecruitDone>
                        </div>
                    </RecruitName>
                    <RecruitName>
                        <p>Hire</p>
                        <div size={40}>
                        <RecruitDone size={40} >{hireLength}%</RecruitDone>
                        </div>
                        */}

                    </RecruitName>
                    </div>
                }
            </Container>
        )
    }
}

const MapState = (state) => {
    // console.log(state, 'dashboard');

    return {
        allApplied: state.totalAppliedJobs,
        forHire: state.EmployerDashboardBoxes,
        forInterview: state.addDashboardScheduleInterview,
        personalData: state.allPersonalData,
    }
}

export default connect(MapState, null)(RecruitmentFunnel);



const Container = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-size: 1.2rem;

>div {
    /* margin: 10px 0px; */
}
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
padding: 20px 0px;
font-size: 1.4rem;





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
//     /* border-bottom: 1px solid red; */
// }
// `

// const Head2 = styled.h4`

// @media (max-width: 320px) {
// ${Headings}:after {
//         content: '';
//         /* border: 2px solid red; */
//         display: block;
//         border-bottom: 2px solid blue;
//         width: 100px;
//         position: relative;
//         left: 27px;
//         /* left: 100px; */
//         border-radius: 100px;
//         background-color: black;
//     }
// }
// `

const Span = styled.span`
width: ${props => props.size*2}px;
border: 1px solid black;
align-items: center;
align-self: center;
text-align: center;
margin: 10px 0px;
padding: 5px;
font-size: 1.3rem;

@media (min-width: 768px) {
width: ${props => props.size*1.5}px;
}
@media (min-width: 992px) {
width: ${props => props.size*2}px;

}
`

const RecruitName = styled.h5`
font-size: 1.4rem;
font-family: serif;
margin-top: 3px;
margin-bottom: 10px;
margin-top: 10px;
text-align: center;
display: flex;
flex-direction: row;
margin-left: 10px;

/* 
>p {
    margin-right: 40px;
border: 1px solid black;
    width: 10px;
    padding-left: 0px;
    padding-right: 100px;

}

>div {
    display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-self: center;
align-items: center;
border: 1px solid black;

} */


display: flex;
flex-direction: row;

>p {
margin-right: 50px;
/* margin-left: 10px; */
margin-left: 5%;
/* border: 1px solid black; */
display: flex;
    flex-direction: column;
    margin-top: 10px;
    >p {
padding: 5px 5px 5px 0px;
font-size: 1.3rem;
/* border: 1px solid black; */
padding-right: 110px;
/* margin-top: 10px; */
margin: 10px 0px;

    }
}

>div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    padding-right: 4px;
    /* border: 1px solid black; */
    /* margin-right: 100px; */
}


@media (min-width: 768px) {
    /* display: flex; */
    /* flex-direction: column; */
    /* display: grid; */
/* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */

    >p {
        margin-right: 0px;
        margin-left: 0px;
        /* display: block; */
        >p {
            /* padding-right: 50px; */
        }
    }
    >div {
        /* display: flex; */
    /* flex-direction: column; */
    /* display: grid; */
/* grid-template-columns: ; */
        margin-right: 0px;
        margin-left: 0px;
        /* background-color: black; */
    }
}

@media (min-width: 992px) {
>p {
margin-left: 5%;
    >p {

    }
}
>div {

}
}


/* @media (max-width: 320px) {
font-size: 1rem;
font-family: serif;
margin-top: 3px;
margin-bottom: 3px;
padding-right: 10px;
} */
`

/* const RecruitDone = styled.span`
font-size: 1.3rem;

border: 1px solid black;


@media (max-width: 320px) {
    margin: 0 2px;
font-size: 1.1rem;

}
` */