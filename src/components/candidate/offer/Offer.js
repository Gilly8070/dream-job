import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import ReceivedOffer from './ReceivedOffer';
import AcceptedOffer from './AcceptedOffer';
import RejectedOffer from './RejectedOffer';


const Offer = () => {
    const [received, setReceived] = useState(true);
    const [accepted, setAccepted] = useState(false);
    const [rejected, setRejected] = useState(false);
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
    
    return (
        <div>
            {/*<Link to='/received'>
                Received Offers
            </Link>
            <Link to='/accepted'>
                Accepted Offers
            </Link>
            <Link to='/rejected'>
                Rejected Offers
            </Link> */}
            <button onClick={() => setTimeout(() => {
                setReceived(true); setAccepted(false); setRejected(false);
            }, 300)}>Received Offers
            </button>
            <button onClick={() => setTimeout(() => { 
            setAccepted(true); setReceived(false); setRejected(false); 
            }, 300)}>Accepted Offers
            </button>
            <button onClick={() => setTimeout(() => { 
                setRejected(true); setAccepted(false);
                setReceived(false);
            }, 300)}>Rejected Offers
            </button>
            {
                received ? <ReceivedOffer /> : null
            }
            {
                accepted ? <AcceptedOffer /> : null
            }
            {
                rejected ? <RejectedOffer /> : null
            }
            
            
        </div>
    )
}

export default Offer;

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