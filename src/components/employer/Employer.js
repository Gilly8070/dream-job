import React, { useState } from 'react';
import Navbar from '../Navbar';
import Dashboard from './Dashboard';
import Sidebar from './sidebar/Sidebar';
import styled from 'styled-components';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Jobs from './jobComponents/Jobs';
import AddJob from './jobComponents/AddJob';
import Search from './jobComponents/Search';
import Filter from './jobComponents/Filter';
import SingleJob from './jobComponents/SingleJob';
import Candidate from './Candidate';
import CandidateJobs from './CandidateJobs';

const Employer = ({ handleSignOut }) => {
    const [openSide, SetOpenSide] = useState(false);
    const openSideBar = () => {
        SetOpenSide(!openSide);
    }
    // useEffect(() => {
    //     const handleSide = () => {

    //     }
    // }, [openSide, handleSide])
    // const history = useHistory();
    // useEffect(() => {
    //     history.push('/')
    // })
    return (
        <div>
            <BrowserRouter>
            <Navbar openSideBar={openSideBar} handleSignOut={handleSignOut} />
            <TabWrapper>
            { openSide ?
                <Sidebar openSide={openSide} />
                : null
            }
            </TabWrapper>
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
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Employer;


const TabWrapper = styled.div`
    /* position: absolute; */
    /* top: 90px; */
    /* left: 0; */
    /* position: relative; */
    display: grid;
    grid-template-columns: 1fr 2fr; /////////////////////////////////////
    /* grid-template-columns: 20% 80%; */
    /* grid-template-columns: ${props => (props.openSide ? `8fr` : `1fr 2fr`)}; */
    /* grid-column-gap: 0px; */
    /* grid-template-columns: ${props => (props.openSide ? `repeat(auto-fit, minmax(100px,1fr))` : `repeat(2,1fr)`)}; */
    /* grid-column: ${props => (props.openSide ? `1/4` : `4/4`)}; */
    //
    /* display: flex;
    flex-direction: row;
    justify-content: center; */

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
// 