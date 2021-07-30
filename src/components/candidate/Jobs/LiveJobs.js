import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemovedLiveJobs } from '../../../actions/action';
import Spinner from '../../Spinner';
import styled, {keyframes} from 'styled-components';
import { fetchAllLiveJobsForCurrentUser } from '../../../actions/action';

const LiveJobs = ({ current, startRemovedLiveJobs, fetchAllLiveJobsForCurrentUser, displaySidebar }) => {
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('')
    const [loading, setLoading] = useState(true);
    const [disabledForReject, setDisabledForReject] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4500)

        //////////////// NEW ONE ///////////////////////////
        fetchAllLiveJobsForCurrentUser();

    }, [loading])

    
    /// SHOW MODAL WHEN USER CLICK ON APPLY NOW BUTTON ////////////
    const showModal = (id, term) => {

        const btn = document.getElementsByName('btn');
        btn.forEach((ele) => {
            if (term === 'accept') {
                setTimeout(() => {
                    ele.disabled = true;
                    ele.style.pointerEvents = 'none'

                    setModal(true);
                    setTimeout(() => {
                        setModalText('Please wait!!!. Sending Your Application')
                    }, 1);
                    setTimeout(() => {
                        setModalText('You Have Successfully Apply For Job')
                    }, 3000);
                    // this.setState({ modal1: true })
                }, 100);
                setTimeout(() => {
                    // ele.disabled = false;
                    ele.style.pointerEvents = 'initial'
                    setModal(false);
                    // this.setState({ modal1: false })
                }, 5000);
            }
        })
        if (term === 'reject') {
            if (window.confirm('YOU ARE ABOUT TO DELETE THE JOB. PLEASE CONFIRM')) {
                const btn = document.getElementsByName('btn');
                btn.forEach((ele) => {
                    setTimeout(() => {
                        ele.style.opacity = '0.1'
                        ele.style.pointerEvents = 'none'
                        setDisabledForReject(true);
                    }, 1);
                    setTimeout(() => {
                        ele.style.opacity = '1'
                        ele.style.pointerEvents = 'initial'
                        // window.body.style.backgroundColor = "black"
                        setDisabledForReject(false);
                    },3000 );
                    // ele.disabled = true;
                })
                startRemovedLiveJobs(id, 'reject')
            }
        }
            
        // else {
        //     if (window.confirm('DELETE')) {
        //         startRemovedLiveJobs(id, 'reject')  
        //     }
        // }
        
    }
    window.addEventListener('resize', e => {
        console.log(e.target.innerWidth)
    })
    if (loading) {
        return <div><Spinner onStart='yes' size={4} /></div> 
    }

    if (!modal && (current !== undefined && current.length === 0)) {
        return <h1 style={{marginTop: '20px', marginLeft: '40px', marginBottom: '10px'}}>No Jobs To Display</h1>
    }
    return (
        <SampleDiv>
            
            {
                        modal && <Rotate>
                    <Heading checkSidebar={displaySidebar ? true: false} >
                        <h1>{modalText}</h1>
                    </Heading>
                </Rotate>
                    
                    }
            <JobContainer modal2={modal ? true : null} checkingDisabled={disabledForReject ? true : null}>
                {/*
                    {modal ? <h1>YOU SUCCESSFULLY APPLY FOR JOB</h1> : null}
                */}
            
            <MainSingleJobContainer >
            {   current &&
                current.map(single => {
                    const { companyLogo, companyName, salary, title, location, shiftType, employmentType, experience, id } = single;
                    return (
                        <SingleJobContainer key={single.id}>
                            <Div>
                            <Div1>
                                <Div2>
                                    <div>
                                    <img src={companyLogo} alt="Logo" />
                                    <span>{salary && '$'+(parseInt(salary)/ 70 /1000).toFixed(1)+'k'}</span>
                                    </div>
                                    <h3>{title.toLowerCase()}</h3>
                                    <p>{companyName ? <span>{companyName.toLowerCase()}</span> : 'Anonymous'}, <span>{location.toLowerCase()}</span></p>
                                </Div2>
                            </Div1>
                                <Div3>
                                    <div>
                                        <div>
                                        <i className="fas fa-id-card"></i>
                                        <span>{ id.substr(0,8) }</span>
                                        </div>
                                        <div>
                                        <i className="fas fa-calendar"></i>
                                        <span>{ employmentType }</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                        <i className="fas fa-briefcase"></i>
                                            <span>{experience}{' '} yrs</span>
                                        </div>
                                        <div>
                                        <i className="far fa-clock"></i>
                                        <span>{shiftType}</span>
                                        </div>
                                    </div>
                                    </Div3>
                                    <span></span>

                            <Div4>
                                    <Button bgColor='#15ba53'
                                    checkDisabled={modal ? true : false}  name='btn' onClick={() => {
                                        startRemovedLiveJobs(id, 'accept');
                                    showModal(id, 'accept');
                                    // setTimeout(() => {
                                        // }, 1)
                                    //     window.scrollTo({
                                    //     top: 0,
                                    //     behavior: "smooth"
                                    // });
                                        }}>Apply
                                </Button>{' '}
                                    <Button bgColor='#d00000'
                                    checkDisabled={modal ? true : false}  name='btn' onClick={() => {
                                        showModal(id, 'reject');
                                    }}>Reject
                                </Button>
                            </Div4>
                            </Div>

                            
                        </SingleJobContainer>
                    )
                })
                }
            </MainSingleJobContainer>
                <SideComponent>
                <SingleSideComponent>
                <Link to='search/liveJobs'>
                <FontIcon className="fas fa-search"></FontIcon>
                </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                <Link to='filter/liveJobs'>
                <FontIcon className="fas fa-filter"></FontIcon>
                </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                <Link to='sort/liveJobs'>
                <FontIcon className="fas fa-sort"></FontIcon>
                </Link>
                </SingleSideComponent>
            </SideComponent>
            {/*
                <button onClick={() => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })}>top</button>
            */}
            </JobContainer>
        </SampleDiv>
            
    )
}

const MapState = (state) => {
    console.log(state.checkSidebarForModal, 'LiveJobs');
    return {
        current: state.allLiveJobs,
        displaySidebar: state.checkSidebarForModal
    }
}

export default connect(MapState, {startRemovedLiveJobs, fetchAllLiveJobsForCurrentUser})(LiveJobs)




// import React from 'react'

// const LiveJobs = () => {
//     return (
//         <div>
//             LiveJobs
//         </div>
//     )
// }

// export default LiveJobs


const SampleDiv = styled.div`
/* background-color:  ${props => props.modal2 ? 'rgba(0,0,0,0.4)': null}; */
/* filter: ${props => props.modal2 ? 'brightness(0.3)' : null}; */
/* margin: 0px; */
/* background-color: rgba(0,0,0,0.68); */
`;



const JobContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
font-size: 1.3rem;
margin-top: 10px;
margin: 8px;
/* filter: brightness(0.3); */
/* background-color: rgba(0,0,0,0.68); */
/* height: 100vh; */

/* background-color:  ${props => props.modal2 && 'rgba(0,0,0,0.68)'}; */
/* filter: ${props => props.modal2 ? 'brightness(0.3)' : null}; */
/* margin: ${props => props.modal2 ? '0px': '8px'}; */
pointer-events: ${props => (props.modal2 || props.checkingDisabled) && !props.checkSidebar && 'none'};
/* margin-top: ${props => props.modal2 ? '0px' : '13px'}; */
/* z-index: ${props => props.modal2 && '100'}; */



////////////////// FOR REJECT BUTTON ///////////////////////////////////
/* pointer-events: ${props => props.checkingDisabled ? 'none' : 'initial'}; */
/* background-color:  ${props => props.modal2 ? 'rgba(0,0,0,0.68)': null}; */



/* overflow-x: ${props => props.modal2 ? 'hidden': 'none'}; */

/* margin-top: 10px; */
/* margin: 8px; */
/* margin-top: 13px; */
@media (min-width: 768px) {
margin: 12px;
/* margin: ${props => props.modal2 ? '0px': '12px'}; */

}
`

const MainSingleJobContainer = styled.div`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

width: 100%; ////// FOR SETTING SIDE COMPONENTS /////

margin-right: 10px;

margin-right: 10px;
grid-gap: 10px;
@media (min-width: 768px) {
grid-gap: 15px;
margin-top: 8px;

/* margin: 20px; */
}

/* * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
} */


`




const SingleJobContainer  = styled.div`
border: 2px solid #3C7CD7;
border-radius: 10px;
padding: 12px;
margin: 5px 5px;
padding-right: 0px;
margin-right: 10px; ///////////
margin-left: 10px;
margin-top: 5px;
`
const Div = styled.div`
    /* border: 1px solid black;  */

>span {
    :after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        border-radius: 100%;
        width: 50px ;
        margin-bottom: 20px;
}
}
`;

const Div1 = styled.div`

>span {
    /* float: right;
    clear: both;
    margin-right: 20%;
    border: 1px solid black; */

}
`;
const Div2 = styled.div`
margin-bottom: 15px;
text-transform: capitalize;
    /* border: 1px solid black; */

>div>img {
    width: 60px;
    height: 40px;
}
>div>span {
float: right;
    clear: both;
    margin-right: 15%;
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
    margin-bottom: 10px;
    text-overflow: ellipsis; 
    overflow: hidden;

    >span {

    }
}
:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        border-radius: 100%;
        width: 50px ;
}
`;


const Div3 = styled.div`
display: flex;
flex-direction: row;
display: grid;
grid-template-columns: 54% 46%;
/* justify-content: space-between; */
>div {
    /* border: 1px solid black; */
    /* margin-right: 15px; */


    >div {
        display: flex;
        flex-direction: row;
        /* width: 200px; */
/* width: 150%; */
        /* margin-right: 10px; */
        margin-bottom: 25px;
        /* border: 1px solid black; */
        i {
        /* border: 1px solid black; */
            width: 44px;  ///////important to make span value in middle
            font-size: 28px;
        }
        >span {
        margin-right: 10px;
/* white-space: nowrap; */
        text-overflow: ellipsis; 
        overflow: hidden;
    /* border: 1px solid black; */

        }
    }
}


`;

const Div4 = styled.div`
display: flex;
/* >button{
            background-color: ${props => props.bgColor};
            width: 120px;
            padding: 5px;
            font-size: 1.2rem;
            border-radius: 5px;
            border: none;
            margin-left: 2px;
            text-align: center;
            margin-bottom: 16px;
            box-shadow: 2px 2.3px 2px 1.2px;
            cursor: pointer;
            margin-right: 50px;
            :active {
                transform: scale(0.94);
            }
        } */
`;
const Button = styled.div`
background-color: ${props => props.bgColor};
width: 120px;
padding: 7px;
font-size: 1.3rem;
border-radius: 5px;
border: none;
margin-left: 2px;
text-align: center;
margin-bottom: 16px;
box-shadow: 2px 2.3px 2px 1.2px;
cursor: pointer;
margin-right: 50px;
opacity: ${props => props.checkDisabled ? '0.4' : '1'};

    /* pointer-events: ${props => props.checkDisabled ? 'none' : 'initial'}; */


/* :disabled { */
    /* background-color: ${props => props.checkDisabled ? 'white' : 'initial'} */
/* }; */
:active {
    transform: scale(0.95);
}
`;



const SideComponent = styled.div`

    border: 2px solid black;
    width: 70px; //////// important //////////
margin-right: 5px;
margin-top: 4px;
/* height: 100vh; */
display: flex;
flex-direction: column;
justify-content: flex-start;
align-content: flex-start;
align-items: center;

@media (min-width: 768px) {
margin-top: 12px;
}
`

const SingleSideComponent = styled.div`
/* border: 1px solid red; */

margin-top: 25px;
padding-top: 15px;
text-align: center;
margin: 12px 10px;
font-size: 40px;

`



/////////////////////////// FOR MODAL /////////////////////////////////////////////////////////////////////////////////////////////////////////// 

const Heading = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
>h1 {

    height: 100px;
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
    /* margin-bottom: 5px; */
    padding-top: 15px;

    ///////////// HIDE MODAL WHEN SIDEBAR OPEN /////////////////
    display: ${props => props.checkSidebar && 'none'};

    /* padding-bottom: 50px; */
    
    /* margin-top: 40px; */
}

@media (min-width : 614px) {  //// NO MORE CHANGE ///////////////////
    >h1 {
    padding-top: 30px;
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