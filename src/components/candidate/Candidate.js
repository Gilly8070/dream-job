import React, { useState, useRef } from 'react';
import Sidebar from '../candidate/Sidebar';
import Navbar from '../Navbar';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
// import ReceivedOffer from './offer/ReceivedOffer';
// import AcceptedOffer from './offer/AcceptedOffer';
// import RejectedOffer from './offer/RejectedOffer';
import Offer from './offer/Offer';
import Resume from './resume/Resume';
import LiveJobs from './Jobs/LiveJobs';
import MapJobs from './Jobs/MapJobs';
import AppliedJobs from './Jobs/AppliedJobs';
import SingleMapJobs from './Jobs/SingleMapJobs';
import Interview from './interview/Interview';
import Search from './sideComponents/Search';
import Filter from './sideComponents/Filter';
import Sort from './sideComponents/Sort';
import styled, {keyframes} from 'styled-components';
import { connect } from 'react-redux';
import { checkSidebarForModal } from '../../actions/actionForRedux';

const Candidate = ({ handleSignOut, checkSidebarForModal }) => {
    const [openSide, SetOpenSide] = useState(false);
    const sidebarRef = useRef(null);
    const openSideBar = () => {
        SetOpenSide(!openSide);
        checkSidebarForModal(true);
        // console.log(!openSide)
    }
    ////// WHEN USER CLICK ON ANY SIDEBAR LINK CLOSE THE SIDEBAR////////////////////////////////////////////////////////////////////////////////
    const handleClickOutside = e => {
        if (openSide && e.target.localName === 'a') {
            SetOpenSide(false);
        checkSidebarForModal(false);

            console.log(e.target.localName, sidebarRef);
            }
    };

    /////// DETECTING OUTSIDE CLICK ON SIDEBAR /////////////////////////////////////////////////////////////////////////////////////////////////
    window.addEventListener('click', e =>  {
        if (openSide && sidebarRef.current && e.x > sidebarRef.current.clientWidth) {
            SetOpenSide(false);
        checkSidebarForModal(false);
        // console.log(openSide)

        }
    })

    // window.addEventListener('w', e => {
        // console.log( window.screen.availWidth);
    // })

    return (
        <BrowserRouter>
            <CandidateNavContainer>
            <Navbar openSideBar={openSideBar} handleSignOut={handleSignOut} />
            </CandidateNavContainer>
            <Container openSide={openSide}>
                {openSide ?
                    <Rotate>
                        <TabWrapper onClick={handleClickOutside} ref={sidebarRef}  openSide={openSide}>
                            <Sidebar openSide={openSide} />
                        </TabWrapper>
                    </Rotate>
                : null
                }
                <DashContainer openSide={openSide}>
            <Switch>
            <Route exact path='/'>
                <Dashboard />
            </Route>
            <Route exact path='/offer'>
                <Offer />
            </Route>
            <Route exact path='/resume'>
                <Resume />
                </Route>
                <Route exact path='/liveJob'>
                <LiveJobs />
                    </Route>
                <Route exact path='/mapJob'>
                    <MapJobs />
                </Route>
                <Route exact path='/appliedJob'>
                    <AppliedJobs />
                    </Route>
                <Route exact path='/SingleMapJobs/:id' component={SingleMapJobs} />
                <Route exact path='/interview'>
                    <Interview />
                </Route>
                <Route exact path='/search/:searchName' component={Search} />
                <Route exact path='/filter/:filterName' component={Filter} />
                <Route exact path='/sort/:sortName' component={Sort} />
                    </Switch>
                </DashContainer>
                    
            </Container>
                
        </BrowserRouter>
    )
}

export default connect(null, {checkSidebarForModal})(Candidate);

// <Route exact path='/received'>
//             <ReceivedOffer />
//             </Route>
            // <Route exact path='/accepted'>
            //     <AcceptedOffer />
            // </Route>
            // <Route exact path='/rejected'>
            //     <RejectedOffer />
            // </Route>



export const CandidateNavContainer = styled.div`
        display: flex;
        flex-direction: row;
        background-color: rgb(166, 170, 170);
        width: 100%;
        top: 0;
        z-index: 10;

    /* @media (max-width: 320px ) {
        display: flex;
        flex-direction: row;
        background-color: rgb(166, 170, 170);
        width: 100%;
        top: 0;
        z-index: 10;
    } */
`

const Container = styled.div`
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
        

        // TO MAKE BACKGROUND BLUR THIS 2 IMPORTANT///////////////////////
        background-color: ${props => props.openSide ? `rgba(0, 0, 0, 0.68)` : null};
        top: 0;//////////////////////////////  2222222222
        /// TO MAKE WHOLE SCREEN BLUR FOR SIDEBAR
        z-index: ${props => props.openSide ? '90' : '0'};


    /* @media (max-width: 320px ) {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
    }  */
`
const DashContainer = styled.div`

////// SOLUTION 1 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /* position: absolute;
        overflow-y: ${props => props.openSide ? 'hidden' : 'scroll'};
        position: ${props => props.openSide ? 'fixed' : 'relative'};
        bottom: ${props => props.openSide ? '70px' : '70px'};
        top: ${props => props.openSide ? '70px' : '70px'};
         */

///////////////// END OF SOLUTION 1 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        /// TO HIDE THE BACKGROUND COLOR OTHER FROM SIDEBAR ///////////////////////////////////
        filter: ${props => props.openSide ? 'brightness(0.3)' : null};

        ///// AFTER ERROR FROM DASHBOARD THIS TWO ADDED/////////////////////
        left: ${props => props.openSide ? '0' : '0'};
        right: ${props => props.openSide ? '0' : '0'};
        /* z-index: 8; */

////////// SOLUTION 2 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        overflow-y: ${props => props.openSide ? 'hidden' : 'scroll'};
        position: absolute;
        top: 70px;
        bottom: 0;
        pointer-events: ${props => props.openSide ? 'none' : 'initial'};

////////////////// END OF SOLUTION 2 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /* @media (max-width: 320px ) {



        //////// TO DISABLED ALL THE BUTTONS AND CLICK WHEN OVERLAY IS ON///////////////////////////////////////////////////////////////////
        pointer-events: ${props => props.openSide ? 'none' : null};

        
        overflow-y: ${props => props.openSide ? 'hidden' : 'scroll'};
        position: absolute;
        top: 70px;
        bottom: 0;
    }  */
`

const TabWrapper = styled.div`
    position: absolute;
    top: 0px;
    z-index: 20;
    width: 300px;
    position: ${props => props.openSide ? 'fixed' : 'absolute'};

    //// TO HIDE THE FAKE FIXED NAVBAR FROM SCREEN//////////////////
    /* display: ${props => props.openSide ? 'block' : 'none'}; */
    /* top: ${props => props.openSide ? '70' : '70'}; */
    bottom: ${props => props.openSide ? '70' : '0px'};
    
    /* @media (max-width: 576px) {
    position: absolute;
    z-index: 20;
    top: 0;
    width: 300px;

    position: ${props => props.openSide ? 'fixed' : 'absolute'};

    bottom: ${props => props.openSide ? '70' : null};
} */

`

const rotate = keyframes`
from {
    transform: translateX(-300px);
}
to{
    transform: translateX(0px);
} 
`
const Rotate = styled(TabWrapper)`
animation: ${rotate} 0.5s ease;
`
