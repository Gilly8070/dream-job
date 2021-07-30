import React,{useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import ReceivedOffer from './ReceivedOffer';
import AcceptedOffer from './AcceptedOffer';
import RejectedOffer from './RejectedOffer';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { currentUserReceivedOffer, currentUserAcceptedOffer,currentUserRejectOffer } from '../../../actions/action';

const Offer = ({currentUserAccepted, currentUserReject, currentUserReceived, checkingModal, currentUserReceivedOffer, currentUserAcceptedOffer,currentUserRejectOffer, checkSideComponentForAllOffer }) => {
    const [received, setReceived] = useState(true);
    const [accepted, setAccepted] = useState(false);
    const [rejected, setRejected] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [checkState, setCheckState] = useState('receivedOffer');
    const [checkLength, setCheckLength] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        // setTimeout(() => {
        //     setLoading(false);
        // // }, 2300)
        // currentUserReceivedOffer();
        // currentUserAcceptedOffer();
        // currentUserRejectOffer();
        if (received) {
            setCheckState('receivedOffer')
            currentUserReceived &&
            setCheckLength(currentUserReceived.length)
        }
        if (accepted) {
            setCheckState('acceptedOffer')
            currentUserAccepted &&
            setCheckLength(currentUserAccepted.length)
        }
        if (rejected) {
            setCheckState('rejectOffer')
            currentUserReject &&
            setCheckLength(currentUserReject.length)
        }
        setTimeout(() => {
            setLoading2(false);   ///// loading2 false/////
        }, 5000)

    }, [loading,loading2, received, accepted, rejected, currentUserAccepted, currentUserReject, currentUserReceived])

    
    // const handleChangeOffer = (offerName) => {
        // if (offerName === 'received') {
        //     console.log('received')
        //     setReceived(true);
        //     // return <ReceivedOffer />
        // }
        // if (offerName === 'accepted') {
        //     console.log('accepted');
        //     setAccepted(!accepted);
        //     // return <AcceptedOffer />
        // }
        // if (offerName === 'rejected') {
        //     console.log('rejected')
        //     // return <RejectedOffer />
        // }
    // }

    if (loading) {
        return <div ><Spinner onStart='yes' size={4} /></div>
    }

    // window.addEventListener('resize', e => {
        // console.log(e.target.innerWidth)
    // })
    // console.log(checkState);
        

    return (
        <CheckContainer>
        <OfferContainer>
            {/*<Link to='/received'>
                Received Offers
            </Link>
            <Link to='/accepted'>
                Accepted Offers
            </Link>
            <Link to='/rejected'>
                Rejected Offers
            </Link> */}
            <OuterButtonContainer>
                <ButtonContainer>
                <Button bgColor={ received && 'received'} onClick={() => setTimeout(() => {
                    setReceived(true); setAccepted(false); setRejected(false);
                }, 300)}>Received Offers
                </Button>
                <Button bgColor={accepted && 'accepted'} onClick={() => setTimeout(() => { 
                    setAccepted(true); setReceived(false); setRejected(false); 
                }, 300)}>Accepted Offers
                </Button>
                <Button bgColor={rejected && 'reject'} onClick={() => setTimeout(() => { 
                    setRejected(true); setAccepted(false);
                    setReceived(false);
                }, 300)}>Rejected Offers
                </Button>
                </ButtonContainer>
                <DisplayLine></DisplayLine>
                </OuterButtonContainer>

                
                
                <div>
                {
                    received ? <ReceivedOffer />  : null
                }
                {
                    accepted ? <AcceptedOffer /> : null
                }
                {
                    rejected ? <RejectedOffer /> : null
                }
                </div>
            
            </OfferContainer>
            {(checkState && checkLength > 0 && !loading2)   ?
                    <SideComponent checkingModal={checkingModal ? true : false}>
                <SingleSideComponent>
                    <Link to={`search/${checkState}`}>
                    <FontIcon className="fas fa-search fa-3x"></FontIcon>
                    </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                    <Link to={`filter/${checkState}`}>
                    <FontIcon className="fas fa-filter fa-3x"></FontIcon>
                    </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                    <Link to={`sort/${checkState}`}>
                    <FontIcon className="fas fa-sort fa-3x"></FontIcon>
                    </Link>
                </SingleSideComponent>
            </SideComponent>
            : null}
        
            </CheckContainer>
            
    )
}


const MapState = (state) => {
    console.log(state, 'offer');
    return {
        // current: state.list
        currentUserAccepted: state.currentUserAcceptedOffer,
        currentUserReject: state.currentUserRejectOffer,
        currentUserReceived: state.currentUserReceivedOffer,
        checkSideComponentForAllOffer: state.checkSideComponentForOffer,
        // checkModalForAllOffer
        checkingModal: state.checkModalForAllOffer,
    }
}
export default connect(MapState, null)(Offer);

// const style = {
//     backgroundColor: 'red',
//     // display: 'none',
//     // border: '1px solid yellow'
// }
// {
            //     received ? <ReceivedOffer /> : null
            // }
            // {
            //     accepted ? <AcceptedOffer /> : null
            // }


const OfferContainer = styled.div`
/* border: 1px solid black; */
margin: 5px;
padding: 5px;
width: 100%; /////// MOST IMPORTANT FOR THIS TYPE////////////
>div {
/* height: 100vh; */

}
/* margin-right: 5px; */
`;


const CheckContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
margin: 10px;
/* height: 100vh; */

/* display: grid; */
/* grid-template-columns: 90% 10%; */
/* width: 100%; /////// MOST IMPORTANT FOR THIS TYPE//////////// */

/* grid-template-columns: repeat(auto-fit, minmax(90%, 1fr)); */
`;



const OuterButtonContainer = styled.div`
display: flex;
flex-direction: column;
margin: 6px;
margin-top: 4px;
margin-bottom: 8px;
/* border: 1px solid black; */
margin-right: 9px;

`

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 8px;
/* backgroun-color: black; */
`
const Button = styled.span`
margin: 6px;
margin-left: 18px;
margin-right: 18px;
padding: 0;
padding-top: 0;
padding-bottom: 0px;
border: none;
font-size: 1.2rem;
border-radius: 5px;
color: black;
cursor: pointer;
/* border: 1px solid black; */
/* font-weight: bold; */
/* background-color: ${props => props.bgColor ? 'white' : 'rgba(0,0,0,0.3)'} ; */
/* font-style: ${props => props.bgColor ? '1.5' : '0.4'}; */
opacity: ${props => props.bgColor ? '1' : '0.5'} ;
transform: ${props => props.bgColor ? 'scale(1.1)' : '0'} ;
font-weight: ${props => props.bgColor ? 'bold' : 'normal'} ;




`;

const DisplayLine = styled.div`
margin-left: 4px;
margin-right: 4px;

:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        position: relative;
        border-radius: 100%;
        background-color: black;
}
`;





///////////////// FOR ALL FONT AWESOME ICONS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SideComponent = styled.div`
border: 1px solid black;
margin: 4px;
width: 70px; ///////////// CHANGE WIDTH OF SIDE COMPONENT FROM HERE ////////
margin-right: 5px;
/* margin-top: -10px; */
height: 100vh;
margin-top: 18px;
pointer-Events: ${props => props.checkingModal && 'none'};

`;

//////////////// SINGLE FONT ICON //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SingleSideComponent = styled.div`
/* border: 1px solid red; */
margin-top: 35px;
/* margin-bottom: 20px; */
padding-top: 15px;
/* margin-bottom: 10px; */
text-align: center;
/* background-color: black; */
`

const FontIcon = styled.i`
font-size: 35px;
cursor: pointer;
color: black;
:hover {
    color: #15b153;
}
`;