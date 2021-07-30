import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { undoJobAccepted } from '../../../actions/action';
import firebase from 'firebase';
import { currentUserAcceptedOffer, checkModalForOffer, checkSideComponentForOffer, } from '../../../actions/action';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';
import styled, {keyframes} from 'styled-components';

const AcceptedOffer = ({ current, undoJobAccepted, currentUserAcceptedOffer, currentUserAccepted, checkModalForOffer, displaySidebar, checkSideComponentForOffer }) => {
    const database = firebase.database();
    const [data, setData] = useState(currentUserAccepted);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalTerm, setModalTerm] = useState('');
    
    useEffect(() => {
        // setTimeout(() => {
        //     setLoading(false);
        // }, 3000)

    }, [loading])

    useEffect(() => {
        database
        .ref('offer/acceptOffer/' + firebase.auth().currentUser.uid)
            .on('value', (snapshot) => {
            // console.log(snapshot.val(), 'snapshot');
            const exp = [];
                snapshot.forEach((childSnap) => {
                // console.log(childSnap.key, 'childSnap');
                exp.push({
                    key: childSnap.key,
                    ...childSnap.val()
                })
            })
            console.log(exp);
            setData(exp);
                
            
            ////// USED IN SEARCH FILTER COMPONENT////////////////////////////////////////////////////////////////////////////////////
                // currentUserAcceptedOffer(exp);

                // checkSideComponentForOffer(exp);
                currentUserAcceptedOffer();
            })


        // setData(currentUserAccepted);

        setTimeout(() => {
            setLoading(false);
        }, 3000)
        // 
            // final.push(exp);
            // exp.map((ele) => {
                //     const {obj} = ele
                //     return <h3>{obj.title}</h3>
                // })
                // exp === true ? final === exp : final === exp;
                // console.log(exp);
        
        // console.log(snap);
    }, [loading])
    const cancelOffer = (singleId) => {
        setTimeout(() => { 
        let findSingleJob = data.find((single) => single.id === singleId)
        let key = findSingleJob.key;
            delete findSingleJob.key;
        delete findSingleJob.acceptedDate;
            
        // console.log(findSingleJob,key, 'find');
        database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid).push(findSingleJob)
        // .then(() => {
        //     console.log('added to accept')
        // }).catch(() => {
        //     console.log('not added to accept')
        // });

            database.ref(`offer/acceptOffer/${firebase.auth().currentUser.uid}/${key}`).remove()
            
            }, 1000)
        //     .then(() => {
        //     console.log('remove from receivedOffer')
        // }).catch(() => {
        //     console.log('not remove from receivedOffer')
        // });;
        // database
        //     .ref('offer/accept/' + firebase.auth().currentUser.uid)
        // .remove()
    }
        // console.log(data, 'data');
    
        // const handleAll = () => {
            // let final;
            // database
            // .ref('offer/accept/' + firebase.auth().currentUser.uid)
            // .once('value', (snapshot) => {
                //         const exp = [];
                //         snapshot.forEach((childSnap) => {
                    //             exp.push({
                        //                 id: childSnap.key,
                        //                 ...childSnap.val()
                        //             })
                        //         })
                        //     // exp.map((ele) => {
                            //     //     const {obj} = ele
                            //     //     return <h3>{obj.title}</h3>
                            //     // })
                            //     // exp === true ? final === exp : final === exp;
                            //         console.log(exp);
                            // })
                            // console.log(final);
                            // }
    const showModal = (id, term) => {
        // if (term === 'accept') {
        const btn = document.getElementsByName('btn')
        btn.forEach((ele) => {
            // console.log(ele, id)
            setTimeout(() => {
                ele.disabled = true;
                ele.style.pointerEvents = 'none';
                setModal(true);
                // term === 'accept' &&
                setModalTerm(' OFFER CANCELLED SUCCESSFULLY');
                checkModalForOffer(true);
                // term === 'reject' &&
                    // setModalTerm('SUCCESSFULLY REJECTED')
            }, 100);
            setTimeout(() => {
                ele.disabled = false;
                ele.style.pointerEvents = 'initial';
                setModal(false);
                checkModalForOffer(false);
            }, 2500);
        })
    }
    
    if (loading) {
        // currentUserAcceptedOffer();
            return <div ><Spinner onStart='yes' size={3} /></div>
        }
    
        if ((data.length === 0 && currentUserAccepted.length === 0) && !modal) {
            return <h1 style={{marginTop: '20px', marginLeft: '20px', marginBottom: '10px'}}>No Accepted Job</h1>
        }
        // if (data.length > 0) {
        //         setTimeout(() => {
        //             return '.....'
        //         }, 5000)
        //     }
    

    return (
        // className={` ${accepted ? 'active': 'hide'}`}
        <div >
            {
                        modal && <Rotate>
                    <Heading checkSidebar={displaySidebar ? true: false} >
                    <h1>{modalTerm}</h1>
                    </Heading>
                        </Rotate> 
                    }
            {/*
            <Link to='search/acceptedOffer'>
                <i class="fas fa-search fa-3x"></i>
            </Link>
            <Link to='filter/acceptedOffer'>
                <i class="fas fa-filter fa-3x"></i>
            </Link>
            <Link to='sort/acceptedOffer'>
                <i class="fas fa-sort fa-3x"></i>
            </Link>
            */}
            <DashJobsContainer>
            <JobsContainer>
            {
                data.map(single => {
                    return (
                        <SingleJobsContainer key={single.id}>
                            <Div>
                                
                            <Div1>
                            <img src={single.companyLogo} alt="Logo..." />
                            
                                    <div>
                                    <h3>{single.title}</h3>
                                    <p>{single.company ? single.company : 'Anonymous'}, {single.location}</p>
                                    <p>Accepted on Date: <span>{single.acceptedDate}</span> </p>
                                    </div>
                            </Div1>
                                
                                <Div4>
                                    <p>Status <span>In Transit</span> </p>
                            </Div4>
                                
                                <Div2>
                                    <div>
                                    <p>Received Date: <span>{single.receivedDate}</span> </p>
                                    </div>
                                    <Div3>
                                    <Button name='btn' onClick={() => {
                                        cancelOffer(single.id);
                                        showModal(single.id)
                                    }}>Cancel Offer</Button>
                                    </Div3>
                            </Div2>
                                    
                            </Div>
                                
                        </SingleJobsContainer>
                    )
                })
                // undoJobAccepted(single.id);
                }
            </JobsContainer>
            </DashJobsContainer>
            
        </div>
    )
    
}

const MapState = (state) => {
    // console.log(state, 'received');
    return {
        current: state.accept,
        currentUserAccepted: state.currentUserAcceptedOffer,
        displaySidebar: state.checkSidebarForModal,

    }
}

export default connect(MapState, {undoJobAccepted, currentUserAcceptedOffer, checkModalForOffer, checkSideComponentForOffer})(AcceptedOffer);





///////////// THE WHOLE CONTAINER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashJobsContainer = styled.div`
display: flex;
flex-direction: row;

`;

///////////////////// PARENT OF JOB CONTAINER /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const JobsContainer = styled.div`
width: 100%; /////// MOST IMPORTANT FOR THIS TYPE////////////
margin: 5px;
font-family: -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, sans-serif;
font-size: 1.1rem;

`;




///////////////// SINGLE JOB CONTAINER //////////////////////////////////////////////////////////////////////////////////////////////////
const SingleJobsContainer = styled.div`
/* border: 1px solid black; */
padding: 6px;
/* padding-left: 1px; */
/* margin-bottom: 10px; */
margin-left: 1px;
margin-right: 4px;


:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        position: relative;
        border-radius: 100%;
        background-color: black;
}

/* margin-top: 3px; */
>div {
/* display: flex;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
padding: 12px 8px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); */
}
`
/////////////////////////// PARENT OF SINGLE JOB FOR ALL VALUES /////////////////////////////////////////////////////////////////////////////////////////////////////////// 

const Div = styled.div`
display: flex;
flex-direction: row;
/* justify-content: space-between; */
/* align-content: space-between; */
padding: 12px 8px;
display: grid;
/* grid-template-rows: 40% 30% 30%; */
/* grid-template-columns: repeat(auto-fit, minmax(1px, 1fr)); */
/* grid-template-columns: 50% 30% 30%; */


@media (min-width: 992px) {
    display: flex;
flex-direction: row;
padding: 2px 10px 10px 10px;
display: grid;
grid-template-columns: 58% 21% 21%;
}
`;


/////////////////// FOR IMAGE, TITLE AND LOCATION //////////////////////////////////////////////////////////////////////////////////////////////////////////
const Div1 = styled.div` 
    display: flex;
    flex-direction: column;
    /* justify-content: baseline; */
    /* align-content: baseline; */
        /* border: 1px solid black; */

    text-transform: capitalize;
    >img {
        width: 60px;
        height: 40px;
        margin-top: 1px;
        /* border: 1px solid black; */

        /* margin-bottom: 5px; */
        
    }
    >div{
        /* margin-left: 40px; */
    /* flex-direction: ; */
        margin-top: 12px;
        margin-left: 20px;
        /* display: block; */
        padding: 0px 4px 4px 4px;
        >h3 {
            margin-bottom: 8px;
            margin-top: 5px;
            text-overflow: ellipsis; 
            overflow: hidden;
        /* border: 1px solid black; */
        }
        >p {
            margin-bottom: 8px;
            margin-top: 12px;
        /* border: 1px solid black; */
        text-overflow: ellipsis; 
            overflow: hidden;
            >span {
                margin-left: 12px;
        /* border: 1px solid black; */

            }
        }
    }
    @media (min-width: 768px) {
        >div {

        /* display: flex; */
        }
    }
    @media (min-width: 992px) {
        display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: center;
        /* border: 1px solid black; */
            display: grid;
grid-template-columns: 60px calc(100% - 60px);
/* border: 1px solid black; */
    >img {
        width: 50px;
        height: 50px;
        /* margin-top: 1px; */
        margin-top: 5px;
        /* align-items: center; */
    }
    >div{
        /* margin-left: 40px; */
        margin-top: 15px;
        margin-left: 40px;
        padding: 0px 4px 4px 4px;
        /* border: 1px solid black; */

        >h3 {
            margin-bottom: 14px;
            margin-top: 1px;
        /* border: 1px solid black; */

        }
        >p {
            margin-bottom: 8px;
        }
    }
}
`
/////////////////////////// FOR STATUS /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
const Div4 = styled.div`
        /* margin-top: 44px; */
        margin-top: 16px;

        /* border: 1px solid black; */
    margin-left:22px;
    padding-left: 4px;
        >p {
            /* margin-left: 20px; */

        >span {
        margin-left: 25px;

            /* display: block; */
        }
        }

    @media (min-width: 768px) {
        >p
        {
        >span {
        /* border: 1px solid black; */
        margin-left: 25px;
            /* display: inline-block; */

    }
    }
    }
    @media (min-width: 992px) {
        /* margin-top: 10px; */
        /* border: 1px solid black; */
        >p
        {
            /* display: block; */
            /* margin-top: 0px; */
        >span {
        margin-left: 55px;
            /* display: inline-block; */

        }
        }

    }
`

/////////////////////////// FOR DATE /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
const Div2 = styled.div`
display: flex;
    flex-direction: column;
    margin-left: 26px;

    /* justify-content: space-between; */
    /* align-content: space-between; */
        /* border: 1px solid black; */
        margin-top: 16px;
        >div>p>span {
        margin-left: 25px;
        /* border: 1px solid black; */
        }

    @media (min-width: 992px) {
        margin-top: 16px;
        >div>p {
            float: right;
            clear: both;
            /* margin-top: 1px; */
        /* border: 1px solid black; */
/* font-size: 1.1rem; */
            
    }
    }
`;

/////////////////////////// FOR BUTTON /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
const Div3 = styled.div`
/* width: 40px; */
/* margin */
/* border: 1px solid black; */
float: right;
display: flex;
flex-direction: row;
/* justify-content: flex-end; */
/* align-content: flex-end; */
margin-top: 20px;
@media (min-width: 992px) {
display: flex;
flex-direction: row;
justify-content: flex-end;
align-content: flex-end;
}
`;

const Button = styled.button`
/* border: 1px solid black; */
/* width: 120px; */
/* float: right; */
margin-left: 22px;
margin-right: 4px;
margin-bottom: 4px;
/* display: inline-block; */
cursor: pointer;

padding: 8px;
border: none;
border-radius: 3px;
font-size: 1.2rem;
box-shadow: 2px 3px 3px 1px;
:active {
transform: scale(0.98);
}
:hover {
    background-color: #d00000;

    color: #030202;
}
@media (min-width: 1200px) {
padding: 11px;
}
`;

/////////////////////////// FOR MODAL /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
const Heading = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    /* margin-bottom: 20px; */

>h1 {

    height: 100px;
    display: block;
    z-index: 999;
    background-color: whitesmoke;
    border-radius: 4px;
    box-shadow: 4px 4px 3px 1px;
    color: black;
    padding: 15px;
    /* padding-bottom: 10px; */
    /* margin-bottom: 10px; */
    position: fixed;
    top: 70px;
    /* border: 1px solid black; */
    margin-left: 25px;
        ///////////// HIDE MODAL WHEN SIDEBAR OPEN /////////////////
    display: ${props => props.checkSidebar && 'none'};
}

@media (min-width : 700px) {  //// NO MORE CHANGE ///////////////////
    >h1 {
        /* height: 100px; */
    padding-top: 35px;
    /* margin-left: 0px; */

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

