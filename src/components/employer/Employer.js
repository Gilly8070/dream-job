import React,  { useState, useRef, useEffect } from 'react';
import Navbar from '../Navbar';
import Dashboard from './dashboard/Dashboard';
import Sidebar from './sidebar/Sidebar';
import styled, {keyframes} from 'styled-components';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Jobs from './jobComponents/Jobs';
import AddJob from './jobComponents/AddJob';
import Search from './jobComponents/Search';
import Filter from './jobComponents/Filter';
import SingleJob from './jobComponents/SingleJob';
import Candidate from './candidate/Candidate';
import CandidateJobs from './candidate/CandidateJobs';

import Approvals from './approvals/Approvals';
import SingleApproval from './approvals/SingleApproval';


const Employer = ({ handleSignOut }) => {
    // const wrapperRef = useRef(null);
    const sidebarRef = useRef(null);

    const [openSide, SetOpenSide] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const openSideBar = () => {
        SetOpenSide(!openSide);
        // console.log(sidebarRef.current.clientWidth);
    }
    // useEffect(() => {

    ////// WHEN USER CLICK ON ANY SIDEBAR LINK CLOSE THE SIDEBAR////////////////////////////////////////////////////////////////////////////////
    const handleClickOutside = e => {
        if (openSide && e.target.localName === 'a') {
            SetOpenSide(false);
            console.log(e.target.localName, sidebarRef);
            }
    };
    // }, []);

    /////// DETECTING OUTSIDE CLICK ON SIDEBAR /////////////////////////////////////////////////////////////////////////////////////////////////
    window.addEventListener('click', e =>  {
        // console.log(e.x , wrapperRef.current.offsetWidth, sidebarRef.current.offsetWidth)
        if (openSide && sidebarRef.current && e.x > sidebarRef.current.clientWidth) {
            SetOpenSide(false);
            // console.log(e.x);
        }
    })

    // useEffect(() => {
    //     const handleSide = () => {

    //     }
    // }, [openSide, handleSide])
    // const history = useHistory();
    // useEffect(() => {
    //     history.push('/')
    // })
    return (
        <UpperContainer  openSide={openSide}>
            <BrowserRouter>
                <EmpNavContainer>
                <Navbar openSideBar={openSideBar} handleSignOut={handleSignOut} />
                </EmpNavContainer>
        <Container  openSide={openSide}>
        {
                        openSide ?
                            <Rotate>
                    <TabWrapper onClick={handleClickOutside} ref={sidebarRef} valueSide = 'sidebarRef.current.clientWidth' openSide={openSide}>
                    {/*
                        <Sidebar openSide={openSide} />
                    */}
                        
                                <Sidebar openSide={openSide} />
                                </TabWrapper>
                            </Rotate>

                                : null
                            } 
                    <DashContainer
                    openSide={openSide}>
                    
                <Switch>{
                    
                    }
                    <Route exact path="/">
                        <Dashboard openSideBar={openSideBar}  />
                    </Route>
                    <Route exact path="/jobs">
                        <Jobs />
                    </Route>
                    <Route exact path='/addJob'>
                        <AddJob />
                    </Route>
                    <Route exact path='/search'>
                        <Search />
                    </Route>
                    <Route exact path='/filter'>
                        <Filter />
                    </Route>
                    <Route exact path='/singleJob/:id' component={SingleJob} />
                    <Route exact path='/candidate'>
                        <Candidate />
                    </Route>
                    <Route exact path='/Jobs/:id' component={CandidateJobs} />
                    <Route exact path='/approvals'>
                        <Approvals />
                    </Route>
                    <Route exact path='/candidateApproved/:id' component={SingleApproval} />
                        </Switch>
                    </DashContainer>
                </Container>
                    
            </BrowserRouter>
        </UpperContainer>
    )
}

export default Employer;

export const UpperContainer = styled.div`

    @media (max-width: 320px ) {
        /* position: fixed; */
        /* top: 70px; */
    }
`
export const EmpNavContainer = styled.div`
display: flex;
        flex-direction: row;
        background-color: rgb(166, 170, 170);
        width: 100%;
        top: 0;
        z-index: 10;

    @media (max-width: 320px ) {
        /* position: relative; */
        display: flex;
        flex-direction: row;
        background-color: rgb(166, 170, 170);
        /* height: 70px; */
        width: 100%;
        /* position: sticky; */
        top: 0;
        z-index: 10;
    }
`

const Container = styled.div`
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
        

        // TO MAKE BACKGROUND BLUR THIS 2 IMPORTANT///////////////////////
        background-color: ${props => props.openSide ? 'rgba(0, 0, 0, 0.68)' : null};
        top: 0;//////////////////////////////  2222222222

        /* top: ${props => props.openSide ? '70' : '0'}; */
        /* top: 70px; */
        /// TO MAKE WHOLE SCREEN BLUR FOR SIDEBAR
        z-index: ${props => props.openSide ? '90' : '7'};



    @media (max-width: 320px ) {
        /* z-index: 0; */
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
    } 
`
const DashContainer = styled.div`
        position: absolute;
        overflow-y: ${props => props.openSide ? 'hidden' : 'scroll'};
        position: ${props => props.openSide ? 'fixed' : 'relative'};
        bottom: ${props => props.openSide ? '0' : '0'};
        top: ${props => props.openSide ? '70px' : '70px'};

    @media (max-width: 320px ) {
        overflow-y: ${props => props.openSide ? 'hidden' : 'scroll'};
        position: ${props => props.openSide ? 'fixed' : 'relative'};
        bottom: ${props => props.openSide ? '0' : '0'};
        top: ${props => props.openSide ? '70px' : '70px'};    /// 2

    } 
`
const rotate = keyframes`
/* from {
    transform: ${props => 'translateX(-props.valueSide)'};
    /* opacity: 0.5; */
}
/* to{ */
    /* transform: translateX(0); */
    /* opacity: 0.8; */

/* } */ 
`
const Rotate = styled.div`
animation: ${rotate} 1s ease-in-out;
`

const TabWrapper = styled.div`
    position: absolute;
    top: 0px;
    z-index: 20;
    width: 300px;
    background-color: blue;
    position: ${props => props.openSide ? 'fixed' : 'absolute'};

    //// TO HIDE THE FAKE FIXED NAVBAR FROM SCREEN//////////////////
    /* display: ${props => props.openSide ? 'block' : 'none'}; */
    /* top: ${props => props.openSide ? '70' : '70'}; */
    bottom: ${props => props.openSide ? '0' : '0'};
    
    @media (max-width: 320px ) {
    position: absolute;
    /* top: 70px; */
    /* height: 100%; */
    z-index: 20;
    top: 0;
    width: 160px;
    /* overflow-y: ${props => props.openSide ? 'scroll' : null}; */
    background-color: red;
    position: ${props => props.openSide ? 'fixed' : 'absolute'};
    /* top: ${props => props.openSide ? '0' : '0'}; */
    /* display: ${props => props.openSide ? 'block' : 'none'}; */
    bottom: ${props => props.openSide ? '0' : null};
}

`

// const TabDash = styled.div`
// position: absolute;
// left: 400px;
// /* right: 600px; */
// /* width: 60%; */
// /* height: 100px; */
// /* top: 95px; */
// /* display: grid; */
// /* grid-template-columns: 60%; */

// `

// const Wrap = styled.div`
// display: flex;
//     flex-direction: row;
//     width: auto;
//     justify-content: flex-start;
//     display: block;
// `

// const Tab = ({ openSide }) => {
/* } */

// const Wrapper = styled.div`
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(300px,2fr));
/* display: flex; */
/* flex-direction: row; */
/* justify-content: space-between; */
/* align-items: center; */

/* grid-template-rows: 180px 180px; */
/* grid-gap: 14px; */

/* @media (max-width: 826px) {
/* grid-template-columns: repeat(2, 2fr); */
/* } */

// `;
