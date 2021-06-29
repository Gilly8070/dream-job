import React, { useState } from 'react';
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


const Candidate = ({ handleSignOut }) => {
    const [openSide, SetOpenSide] = useState(false);
    const openSideBar = () => {
        SetOpenSide(!openSide);
    }
    return (
        <BrowserRouter>
            <Navbar openSideBar={openSideBar} handleSignOut={handleSignOut} />
            { openSide ?
                <Sidebar openSide={openSide} />
                : null
            }
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
        </BrowserRouter>
    )
}

export default Candidate;


// <Route exact path='/received'>
//             <ReceivedOffer />
//             </Route>
            // <Route exact path='/accepted'>
            //     <AcceptedOffer />
            // </Route>
            // <Route exact path='/rejected'>
            //     <RejectedOffer />
            // </Route>