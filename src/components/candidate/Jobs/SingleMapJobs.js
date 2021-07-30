import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemovedLiveJobs, fetchAllLiveJobsForCurrentUser } from '../../../actions/action';
import Spinner from '../../Spinner';
import styled, {keyframes} from 'styled-components';

class SingleMapJobs extends Component {
    state= {
        id: this.props.match.params.id,
        modal1: false,
        modal: 'YOU SUCCESSFULLY APPLY FOR JOB',
        disabledBtn: false,
        loading: true,
        // current: this.props.current
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
            }, 4500)

        
       //////////////// NEW ONE ///////////////////////////
        this.props.fetchAllLiveJobsForCurrentUser();


    //         window.addEventListener('resize', e => {
    //     console.log(e.target.innerWidth)
    // })
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
        const btn = document.getElementsByName(`btn`);
        // const btn1 = document.getElementById(`btn1${id}`);
        btn.forEach((ele) => {
            console.log(ele);
        setTimeout(() => {
            // ele.disabled = true;
            // ele.style.pointerEvents = 'none';
            // btn1.disabled = true;
            
            this.setState({ modal1: true })
            this.setState({ disabledBtn: true })

        }, 100);
        setTimeout(() => {
            // ele.disabled = false;
            // ele.style.pointerEvents = 'initial';
                // btn1.disabled = false;
            this.setState({ modal1: false })
        }, 4000);
        })
            
    }
    render() {

        if (this.state.loading) {
        return <div><Spinner onStart='yes' size={4} /></div> 
        }               ////////////////////// loading 


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
        if ((!this.props.current || this.props.current.length === 0) && !this.state.modal1) {
            return <h1 style={{marginTop: '20px', marginLeft: '30px', marginBottom: '10px'}}>No Jobs</h1>
        }
        if (this.state.id && this.props.current) {
            // current &&
            let ans = this.props.current && this.props.current.find(single => this.state.id === single.id)
            
                const { title, location, experience, salary, qualification, skill, date, description, additionalInformation, assignRole, companyLogo, companyName, designation, employmentType, keyResponsibilities, openings, roleDescription, technicalExperience, id  } = ans;
            // console.log(this.props.current, ans);
            // {this.state.modal1 ? <h1>{this.state.modal}</h1> : null} <br />
            return (
                <SampleContainer>
                {
                        this.state.modal1 && <Rotate>
                    <Heading checkSidebar={this.props.displaySidebar ? true: false}>
                        <h1>{this.state.modal}</h1>
                    </Heading>
                        </Rotate> 
                    }
                <MapContainer>
                        
                        <SideContainerFirst>
                            <p>
                            <img  accept="image/png, image/jpeg" width='100px' src={companyLogo} alt="Company Logo" />
                            </p>
                            <div>
                                <div>
                                    <p>Designation
                                    </p>
                                    <span> {designation}
                                    </span> 
                                </div>
                                <div>
                                    <p>Assign Role
                                    </p>
                                    <span>{assignRole}
                                    </span> 
                                </div>
                                <div>
                                    <p>Qualification
                                    </p>
                                    <span>
                                    {qualification}
                                    </span>
                                </div>
                                <div>
                                    <p>Skills
                                    </p>
                                    <span>
                                    {skill}
                                    </span>
                                </div>
                            </div>
                </SideContainerFirst>

                        <InformationContainer>
                                <div>
                            <h2>{title && title}</h2>
                            <div>
                            <p>{companyName}</p>
                            <span>
                            {description}
                            </span>
                            </div>
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
                        <Horizon>
                        </Horizon>
                <SalaryContainer>
                <h3>{salary && '$'+(parseInt(salary)/ 70 /1000).toFixed(1)+'k'} <span>Salary</span> </h3>
                            <div>
                            <p>Activated on: <span>{date}</span> </p>
                            <p>Openings: <span>{openings}</span> </p>
                            <p>Location: <span>{location}</span> </p>
                                {/*<p>Employment Type <span>{employmentType}</span> </p>*/}
                                <p>Experience: <span>{experience} { ' '}years</span> </p>
                            </div>

                            <ButtonContainer checkDisabled = {this.state.disabledBtn && true }>
                                <div>
                                <Link to='/mapJob'>
                                <Button name={`btn`} bgColor='#0096c7'>Back</Button>
                                </Link>{' '}
                                </div>
                                <div>
                            <Button bgColor='#15ba53' name={`btn`} onClick={() => {
                                        this.showModal(id);
                                        setTimeout(() => {
                                        }, 2000)
                                        // 
                                        setTimeout(() => {
                                    this.props.startRemovedLiveJobs(id, 'accept');
                                    this.props.history.push('/mapJob');
                                }, 4300);
                            }} >
                            Apply Now
                                    </Button>
                                </div>
                            </ButtonContainer>
                </SalaryContainer>
                        
                </MapContainer>
            </SampleContainer>
            )
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
        current: state.allLiveJobs,
        displaySidebar: state.checkSidebarForModal
    }
}

export default connect(MapState, {startRemovedLiveJobs, fetchAllLiveJobsForCurrentUser})(SingleMapJobs)





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


const SampleContainer = styled.div`

`;


const MapContainer = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin: 15px;
display: flex;
flex-direction: column;
display: grid;
    grid-gap: 10px;
    font-size: 1.2rem;
/* border: 2px solid black; */
    /* grid-template-columns: 280px calc(100% - 622px) 2px 320px; */

margin-top: 30px;   //// because of some top spacing is their ///////
margin-left: 15px;
@media (min-width: 768px) {
/* margin: 8px; */
font-size: 1.2rem;
margin-left: 15px;
}

@media (min-width: 992px) {
/* border: 2px solid black; */

    /* flex-direction: row; */
    grid-template-columns: 280px calc(100% - 622px) 2px 320px;
    margin-right: 20px;
    margin-left: 20px;
    grid-gap: 20px;
    font-size: 1.3rem;
    /* padding-right: 5px; */
    /* grid-gap: 20px; */
/* flex-direction: row; */
}
@media (min-width: 1200px) {
    grid-template-columns: 300px calc(100% - 672px) 2px 320px;
margin-right: 25px;
    margin-left: 25px;
    grid-gap: 30px;

    /* grid-template-columns: 400px calc(100% - 400px); */
    /* grid-gap: 30px; */

}
`;

const SideContainerFirst = styled.div`
/* border: 1px solid black; */
display: flex;
margin-left: 8px;
margin-right: 8px;
display: grid;
grid-template-columns: 220px calc(100% - 220px);

>p {
    display: flex;
    /* flex-direction: row; */
/* border: 1px solid black; */
/* width: 400px; */
        /* height: 250px; */
    /* align-items: center; */
    >img {
        /* text-align: center; */
        /* margin: 0px 10px; */
        border: 0.5px solid black;
        width: 600px;
        height: 250px;
        /* margin-bottom: 20px; */
    }
}

>div {
/* border: 1px solid black; */
    /* width: 100%; */
margin-left: 5%;
display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
}




>div>div {
/* border: 1px solid black; */
display: flex;
flex-direction: row;
display: grid;
grid-column-gap: 15px;
grid-template-columns: auto auto;
margin: 10px 0px;
margin-right: 1%;
>p {
font-weight: 600;
width: 120px;

/* border: 1px solid black; */
}
>span {
/* border: 1px solid black; */
font-weight: bold;
text-align: right;
/* white-space: nowrap; */
text-overflow: ellipsis; 
overflow: hidden;
/* width: 120px; */
}
}

@media (min-width: 768px) {

    /* grid-template-row: auto auto; */
/* border: 1px solid black; */
>div {
    margin-right: 10px;
    margin-left: 50px;
    font-size: 1.2rem;
}
>div>div {
    margin-right: 50px;
grid-template-columns: auto auto;
/* border: 1px solid black; */

>p{
    width: 120px;
/* border: 1px solid black; */

}
/* grid-template-columns: 140px calc(100%-140px); */
>span {
/* border: 1px solid black; */
/* margin-top: 0px; */

}
}
}


@media (min-width: 992px) {
    /* border: 1px solid black; */
/* flex-direction: column; */
    display: flex;
    flex-direction: column;
/* display: grid; */
margin-top: 0px;
font-size: 1.3rem;
>span {
    >img {
        /* text-align: center; */
        /* margin: 0px 10px; */
        /* border: 0.5px solid black; */
margin-top: 8px;
        width: 250px;
        height: 250px;
    }
}
>div {
    /* border: 1px solid black; */
    margin: 30px 0px;
    
    /* margin-top: 20px; */
    /* margin-right: 100px; */
}
>div>div {
    /* border: 1px solid black; */
    grid-column-gap: 15px;
    margin-bottom: 18px;
    /* border: 1px solid black; */
    margin-left: 4px;
/* margin-left: 5px; */
/* margin-right: 5px; */
/* width: 88%; */
        width: 240px;

/* margin-right: 200px; */
}
}

@media (min-width: 1200px) {
    font-size: 1.4rem;

    >span {
    >img {
        width: 300px;
        height: 300px;
    }
}
>div>div {
margin-left: 4px;
        width: 270px;
    
}
}
`;

const InformationContainer = styled.div`
/* border: 1px solid black; */
display: flex;
flex-direction: row;
padding: 5px;
        font-size: 1.2rem;
margin-top: 35px;
>div>h2 {
    margin-left: 6px;
    text-transform: capitalize;
    text-overflow: ellipsis; 
    overflow: hidden;
}
>div>div {
    margin: 8px;
    margin-bottom: 28px;
    >p {
        /* border: 1px solid black; */
        font-weight: bold;
        margin-bottom: 8px;
        font-size: 1.4rem;
        text-overflow: ellipsis; 
        overflow: hidden;
        /* text-transform: uppercase; */
    }
    >span {
        text-overflow: ellipsis; 
        overflow: hidden;
        /* border: 1px solid black; */
        /* margin-left: 4px; */
    }
}
@media (min-width: 768px) {
    font-size: 1.2rem;
/* margin-top: 0px; */
/* margin-left: 0px; */
}
@media (min-width: 992px) {
margin-top: 0px;
    font-size: 1.3rem;

/* margin-left: 0px; */
}
@media (min-width: 1200px) {
margin-top: 0px;
    font-size: 1.3rem;

/* margin-left: 0px; */
}
`;

const Horizon = styled.div`
@media (min-width: 992px) {
border-left: 4px solid black;
/* border-radius: 40%; */
}
`;


const SalaryContainer = styled.div`
/* border: 1px solid black; */
padding: 5px;
        font-size: 1.2rem;
/* margin-top: 8px; */
>h3 {
    margin-left: 5px;
    >span {
        font-weight: normal;
        margin-left: 10px;
        text-transform: lowercase;
    }
    :after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        border-radius: 100%;
        margin-top: 8px;
        margin-bottom: 5px;
        margin-right: 5px;
        /* width: 50px ; */
}
}

>div {
    margin-left: 10px;
    margin-bottom: 15px;
    /* margin-top: 5px; */
    >p {
        margin-top: 20px;
        margin-bottom: 25px;
        font-weight: 600;
        /* white-space: nowrap; */
        /* white-space: nowrap; */
            /* border: 1px solid black; */
        
        width: 400px;  ////to make span values not move away
        >span {
            float: right;
            text-overflow: ellipsis; 
            overflow: hidden;
            /* border: 1px solid black; */
            /* margin-right: 30%; */
        width: 250px; 

            /* padding-left: 70px; */
            text-align: right;
            font-weight: bold;
        }
    }
}

@media (min-width: 768px) {
font-size: 1.2rem;

}
@media (min-width: 992px) {
font-size: 1.3rem;

    >h3 {
    margin-left: 8px;
    >span {
        margin-left: 15px;
        /* width: 200px; */
        /* width: 120px;  */

    }
    :after {
        margin-right: 45px;
}
}
    >div {
        /* width: auto; */
        /* border: 1px solid black; */
        margin-right: 40px;
        /* margin-top: 10px; */
    /* margin-left: 10px; */
    /* margin-bottom: 15px; */
    >p {
        margin-bottom: 25px;
        margin-top: 15px;
        /* font-weight: 600; */
        >span {
            /* float: right; */
            /* margin-right: 10px; */
            font-weight: bold;
            /* margin-left: 30px; */
            width: 130px;
        }
    }
}
}


@media (min-width: 1200px) {
font-size: 1.3rem;

}
`;


const ButtonContainer = styled.div`
display: flex;
margin-top: 50px;


///////// BELOW TWO INITIALLY WRITTEN IN BUTTON BUT BUTTON LINK NOT GETTING DISABLED ON CLICK, HENCE IT IS WRITTEN HERE //////////////////////////////////////////////////////////////////////////////////////////////
opacity: ${props => props.checkDisabled && '0.4'};
pointer-events: ${props => props.checkDisabled && 'none'};

>div {

    margin-right: 50px;
    
    >a {
    background-color: black;
/* margin-left: 2px; */
    margin-right: 5px;

>button {
    }
}
>button { 
    margin-right: 5px;

}
}
@media (min-width: 992px) {
flex-direction: column;
/* width: 100%; */
/* border: 1px solid black; */
margin-top: 80px;
margin-left: 0;

}
`;

const Button = styled.button`
background-color: ${props => props.bgColor};
width: 130px;
padding: 8px;
font-size: 1.3rem;
border-radius: 5px;
border: none;
/* margin-left: 2px; */
text-align: center;
margin-bottom: 16px;
box-shadow: 2px 2.3px 2px 1.2px;
cursor: pointer;
/* margin-right: 5px; */
/* opacity: ${props => props.checkDisabled ? '0.4' : '1'};
pointer-events: ${props => props.checkDisabled ? 'none' : 'initial'}; */

font-size: 1.3rem;

:active {
    /* transform: scale(0.9); */
}


@media (min-width: 992px) {
font-size: 1.3rem;

}
@media (min-width: 992px) {
width: 96%;    ///// 100 is going out of box //
/* margin-left: 4px; */
margin-top: 20px;
font-size: 1.5rem;
padding: 8px;
}

`;






/////////////////////////// FOR MODAL /////////////////////////////////////////////////////////////////////////////////////////////////////////// 

const Heading = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
>h1 {

    height: 90px;
    display: block;
    z-index: 999;
    background-color: whiteSmoke;
    border-radius: 4px;
    box-shadow: 4px 3px 3px 1px;
    color: black;
    padding: 10px;
    position: fixed;
    top: 70px;
    border: 1px solid black;
    margin: 0px 20px;
    padding-top: 15px;
        ///////////// HIDE MODAL WHEN SIDEBAR OPEN /////////////////
    display: ${props => props.checkSidebar && 'none'};
    /* margin-top: 40px; */
}

@media (min-width :992px) {  //// NO MORE CHANGE ///////////////////
    >h1 {
    padding: 30px;
    }
}

`
const rotate = keyframes`
from  {
    transform: translateY(0px);
}
to{
    transform: translateY(300px);
}
/* 0%{
    transform: translateY(0px);
}
50%{
    transform: translateY(300px);
}
100%{
    transform: translateY(0px);
} */
`
const Rotate = styled.div`

animation: ${rotate} 0.1s ease;
`

const FontIcon = styled.i`
font-size: 35px;

cursor: pointer;
color: black;
:hover {
    color: #15b153;
}
`