import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { acceptJob, rejectJob } from '../../../actions/action';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { currentUserReceivedOffer, checkModalForOffer, checkSideComponentForOffer } from '../../../actions/action';
import Spinner from '../../Spinner';
import styled, {keyframes} from 'styled-components';

const ReceivedOffer = ({ current, acceptJob, rejectJob, currentUserReceivedOffer, currentUserReceived, checkModalForOffer, displaySidebar, checkSideComponentForOffer }) => {
    const [jobFromFirebase, setJobFromFirebase] = useState(currentUserReceived);   /////// THIS CHANGES FROM EMPTY ARRAY
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalTerm, setModalTerm] = useState('');

    // const [receivedJobFromFirebase, setReceivedJobFromFirebase] = useState([]);

    const database = firebase.database();
    // let sliced = current.slice(5);
    // let acceptArrayFromFirebase = [];
    // let final;
    // const [data, setData] = useState(null);
    // console.log(sliced);
    
    // let msgRef = firebase.database().ref('offer/accept/' + firebase.auth().currentUser.uid);
    // let newMsgRef = msgRef.push();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000)

    // }, [loading])


    useEffect(() => {
        database
            .ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
            .on('value', (snapshot) => {
                // console.log(snapshot.val(), 'snapshot');
                const exp = [];
                snapshot.forEach((childSnap) => {
                    // database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
                        exp.push({
                        key: childSnap.key,
                        ...childSnap.val()
                    });
                    // let id = childSnap.key;
                    // exp.push([id, ...childSnap.val()])
                    // exp.push({
                    //     id: childSnap.key,
                    //     ...childSnap.val()
                    // })
                })
                console.log(exp, 'received');
                setJobFromFirebase(exp);

                ////// USED IN SEARCH FILTER COMPONENT////////////////////////////////////////////////////////////////////////////////////
                // currentUserReceivedOffer(exp)

                // checkSideComponentForOffer(exp);
                currentUserReceivedOffer();
    })




        // setJobFromFirebase(currentUserReceived);

                // let sliced = exp.slice(1)
                // let single = exp.map((single) => single.slice(1))
                // console.log(single);
                // let concat = single.map(sing => sing.map((sin) => sin.concat()))
                // let merge = single && single.flat();
                // let another = merge.map((ele) => ele && ele)
                // console.log(another);
                // setJobFromFirebase(another);
            // database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
        // .push(jobFromFirebase);
        // database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
        //     .push(jobFromFirebase);
        
        setTimeout(() => {
            setLoading(false);
        }, 3000)

    }, [loading]);
    // console.log(jobFromFirebase);
    // useEffect(() => {
        // database
        //     .ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
        //     .once('value',
        //     // .then((snap) => {
        //     //     // let exp = [];

        //     //     console.log(snap.val(), '2')
        //     // })
        //         (snapshot) => {
        //         const exp = [];
        //         snapshot.forEach((childSnap) => {
        //             exp.push({
        //                 id: childSnap.key,
        //                 ...childSnap.val()
        //             })
        //         })
        //         // console.log(exp)
        //         // setReceivedJobFromFirebase(exp);
        //         console.log(exp[0]);
        //         setJobFromFirebase(exp[0]);
        //     })
    // }, [])
    // database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid).remove()

    
    
    const handleAccept = (singleId) => {
        // if(id ===)
        setTimeout(() => {
            let findSingleJob = jobFromFirebase.find((single) => single.id === singleId)
            let key = findSingleJob.key;
            let date = new Date().toLocaleString("en-US").split(',')[0];
            findSingleJob.acceptedDate = date;
        // findSingleJob.key = ''
        delete findSingleJob.key;
        // console.log(findSingleJob,key, 'find');
        database.ref('offer/acceptOffer/' + firebase.auth().currentUser.uid).push(findSingleJob)
        .then(() => {
            console.log('added to accept')
        }).catch(() => {
            console.log('not added to accept')
        });

        database.ref(`offer/receivedOffer/${firebase.auth().currentUser.uid}/${key}`).remove().then(() => {
            console.log('remove from receivedOffer')
        }).catch(() => {
            console.log('not remove from receivedOffer')
        });;

            }, 1000)
        // let arr = []; ////////////
        // database
        //     .ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
        //     .on('value', (snapshot) => {
        //         const exp = [];
        //         snapshot.forEach((childSnap) => {
        //             let id = childSnap.key;
        //             exp.push([id, ...childSnap.val()])
        //         })
        //         console.log(exp);
                
        //         let sliced = exp[0].slice(1);
        //         let findEle = sliced.find((ele) => ele.id === singleId);
        //         let index = sliced.indexOf(findEle) + 1;
        //         let key = exp[0][0];
        //         console.log(sliced, findEle, exp, key, index);
        //         // let single = exp.map((single) => single.slice(1))
        //         // let merge = single.flat();
        //         // setJobFromFirebase(merge);
        //         database.ref(`offer/receivedOffer/${firebase.auth().currentUser.uid}/${key}`).remove();
        //     }) ////////////////////
        // console.log(jobFromFirebase);
        // database.ref('offer/accept/' + firebase.auth().currentUser.uid).push(
        //     obj
        // );
        // database
        //     .ref('offer/accept/' + firebase.auth().currentUser.uid)
        //     .on('value', (snapshot) => {
        //         // acceptArrayFromFirebase = []
        //         const exp = [];
        //         snapshot.forEach((childSnap) => {
        //             // setData({
        //             //     id: childSnap.key,
        //             //     ...childSnap.val()
        //             // })
        //             exp.push({
        //                 // ...acceptArrayFromFirebase,
        //                 id: childSnap.key,
        //                 ...childSnap.val()
        //             })
        //             // return exp;
        //         })
        //         // let sli = exp.slice(1)
        //         // acceptArrayFromFirebase = sli;
        //         // setData(exp);
        //         acceptArrayFromFirebase.push(exp);
        //         // console.log(exp, 'final answer is here');
        //         // setData(exp)
        //         final = [...exp];
        //     }
        // )
        // console.log( final, 'answer');
        // newMsgRef.update({
        //     obj
        // })
        // database.ref('offer/accept' + firebase.auth().currentUser.uid).update({})
        // database
        //     .ref('offer/accept/' + firebase.auth().currentUser.uid)
        //     .on('value', (snapshot) => {
        //         const exp = [];
        //         snapshot.forEach((childSnap) => {
        //             exp.push({
        //                 id: childSnap.key,
        //                 ...childSnap.val()
        //             })
        //         })
        //         acceptArrayFromFirebase.push(exp);
        //         // console.log(exp, 'final answer is here');
        //         console.log(acceptArrayFromFirebase);
        
        //     }
                // , (e) => {
                // console.log('error' + e);
                // }
        // )
    }
    const handleReject = (singleId) => {
        setTimeout(() => {

        let findSingleJob = jobFromFirebase.find((single) => single.id === singleId)
        let key = findSingleJob.key;
            delete findSingleJob.key;
            let date = new Date().toLocaleString("en-US").split(',')[0];
            findSingleJob.rejectedDate = date;
        console.log(findSingleJob,key, 'find');
        database.ref('offer/rejectOffer/' + firebase.auth().currentUser.uid).push(findSingleJob)
        // .then(() => {
        //     console.log('added to accept')
        // }).catch(() => {
        //     console.log('not added to accept')
        // });

            database.ref(`offer/receivedOffer/${firebase.auth().currentUser.uid}/${key}`).remove()
            
            }, 1000)
        //     .then(() => {
        //     console.log('remove from receivedOffer')
        // }).catch(() => {
        //     console.log('not remove from receivedOffer')
        // });;
    }
        
    // useEffect(() => {
    //     acceptArrayFromFirebase= [...acceptArrayFromFirebase];
    //         // setData(acceptArrayFromFirebase
    
    // }, [])
    // console.log(final, 'data');

    const showModal = (id, term) => {
        // if (term === 'accept') {
                // setModal(true);
        
        const btn = document.getElementsByName('btn');
        btn.forEach((ele) => { 
            // console.log(ele, id)
            setTimeout(() => {
                ele.disabled = true;
                ele.style.pointerEvents = 'none';
                setModal(true);
                term === 'accept' &&
                setModalTerm('SUCCESSFULLY ACCEPTED')
                term === 'reject' &&
                setModalTerm('SUCCESSFULLY REJECTED')
                checkModalForOffer(true);
            }, 100);
            setTimeout(() => {
                ele.disabled = false;
                ele.style.pointerEvents = 'initial';
                setModal(false);
                checkModalForOffer(false);
            }, 2500);
        })
        // }
        // if (term === 'reject') {
            // if (window.confirm('YOU ARE ABOUT TO DELETE THE JOB. PLEASE CONFIRM')) {
                // startRemovedLiveJobs(id, 'reject')
            // }
        // }
        
    }
    
    if (loading) {
        // currentUserReceivedOffer();
        return <div ><Spinner onStart='yes' size={3} /></div>
    }

    // console.log(jobFromFirebase);
    if ((jobFromFirebase.length === 0 && currentUserReceived.length === 0)&& !modal) {
            return <h1 style={{marginTop: '20px', marginLeft: '20px', marginBottom: '10px'}}>No Received Jobs</h1>
        }
    return (
        // className={` ${accepted ? 'hide': 'active'}`}
        <div>
                    {
                        modal && <Rotate>
                    <Heading checkSidebar={displaySidebar ? true: false} >
                    <h1>{modalTerm}</h1>
                    </Heading>
                        </Rotate> 
                    }
        <DashJobsContainer>
            
            <JobsContainer modal={modal ? true : null}>
            {!loading &&
                jobFromFirebase.map(single => {
                    return (
                        <SingleJobsContainer key={single.id}>
                            <Div>
                                <Div1>
                                <img src={single.companyLogo} alt="Logo..." />
                                    <div>
                                    <h3>{single.title}</h3>
                                    <p>{single.company ? single.company : 'Anonymous'}, {single.location}</p>
                                    </div>
                                
                                </Div1>
                                <Div2>
                                    <div>
                                        <p>Received Date:
                                    <span>{single.receivedDate}</span>        </p>
                                    </div>
                                    <Div3>
                                    <Button bgColor='#15ba53' name='btn' onClick={() => { showModal(single.id, 'accept'); handleAccept(single.id); }} >Accept</Button>
                                        <Button bgColor='#d00000' name='btn' onClick={() => { handleReject(single.id); showModal(single.id, 'reject'); }}>Reject</Button>
                                    </Div3>
                                    
                                </Div2>
                                </Div>
                        </SingleJobsContainer>
                    )
                })
                }
            </JobsContainer>
                
            {/*<SideComponent>
                <SingleSideComponent>
                    <Link to='search/receivedOffer'>
                    <FontIcon className="fas fa-search fa-3x"></FontIcon>
                    </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                    <Link to='filter/receivedOffer'>
                    <FontIcon className="fas fa-filter fa-3x"></FontIcon>
                    </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                    <Link to='sort/receivedOffer'>
                    <FontIcon className="fas fa-sort fa-3x"></FontIcon>
                    </Link>
                </SingleSideComponent>
            </SideComponent> */}

            </DashJobsContainer>
        </div>
            
    )
}

const MapState = (state) => {
    console.log(state, 'received');
    return {
        current: state.list,
        currentUserReceived: state.currentUserReceivedOffer,
        displaySidebar: state.checkSidebarForModal,
    }
}
export default connect(MapState, {acceptJob, rejectJob, currentUserReceivedOffer, checkModalForOffer, checkSideComponentForOffer})(ReceivedOffer);




///////////// THE WHOLE CONTAINER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashJobsContainer = styled.div`
display: flex;
flex-direction: row;
/* background-color: black; */
`;

///////////////////// PARENT OF JOB CONTAINER /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const JobsContainer = styled.div`
width: 100%; /////// MOST IMPORTANT FOR THIS TYPE////////////
margin: 5px;
font-family: -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, sans-serif;
font-size: 1.1rem;

pointer-Events: ${props => props.modal ? 'none': 'initial'};

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


//////////////// PARENT OF SINGLE JOB FOR ALL VALUES /////////////////////////////////////////////////////////////////////////////////////////////////////////// 

const Div = styled.div`
/* display: flex;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
padding: 12px 8px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(1px, 1fr)); */

display: flex;
flex-direction: row;
/* justify-content: space-between; */
/* align-content: space-between; */
padding: 12px 8px;
display: grid;


@media (min-width: 768px) {
    /* display: flex;
flex-direction: row;
padding: 2px 10px 10px 10px; */


display: flex;
flex-direction: row;
padding: 2px 10px 10px 10px;
display: grid;
grid-template-columns:  60% 40%;
}
`;


/////////////////// FOR IMAGE, TITLE AND LOCATION //////////////////////////////////////////////////////////////////////////////////////////////////////////
const Div1 = styled.div` 
    display: flex;
    flex-direction: column;
    /* display: grid; */
/* grid-template-columns:  60% 40%; */
    /* justify-content: baseline; */
    /* align-content: baseline; */
    text-transform: capitalize;
    >img {
        width: 60px;
        height: 40px;
        margin-top: 1px;
        /* margin-bottom: 5px; */
        /* border: 1px solid black; */
        
    }
    >div{
        /* margin-left: 40px; */
        margin-top: 12px;
        margin-left: 20px;
        padding: 0px 4px 4px 4px;
        >h3 {
            margin-bottom: 9px;
            margin-top: 5px;
            text-overflow: ellipsis; 
            overflow: hidden;
        /* border: 1px solid black; */
    /* width: auto; */

        }
        >p{
        /* border: 1px solid black; */
text-overflow: ellipsis; 
    overflow: hidden;
    /* width: auto; */
/* white-space: nowrap; */

        }
    }

    @media (min-width: 768px) {
        display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: center;
    display: grid;
grid-template-columns: 60px calc(100% - 60px);
        /* border: 1px solid black; */
        
    >img {
        width: 50px;
        height: 50px;
        /* margin-top: 1px; */
        margin-top: 5px;
        /* border: 1px solid black; */
        /* align-items: center; */
    }
    >div{
        /* margin-top: 2px;
        margin-left: 40px;
        padding: 0px 4px 4px 4px; */

        margin-top: 15px;
        margin-left: 40px;
        padding: 0px 4px 4px 4px;

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

/////////////////////////// FOR DATE /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
const Div2 = styled.div`
display: flex;
    flex-direction: column;
    margin-left: 26px;

        /* margin-top: 40px; */

        margin-top: 20px;

        >div>p>span {
            /* float: right; */
            /* clear: both; */
        
        margin-left: 25px;

            
    }

    @media (min-width: 768px) {
        margin-top: 18px;
        >div>p {
            float: right;
            clear: both;


            /* margin-top: 1px; */
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
@media (min-width: 768px) {
display: flex;
flex-direction: row;
justify-content: flex-end;
align-content: flex-end;
}
`;

const Button = styled.button`
border: 1px solid black;
width: 80px;
/* float: right; */
margin-left: 25px;
margin-right: 4px;
margin-bottom: 4px;
cursor: pointer;
padding: 8px;
border: none;
border-radius: 2px;
font-size: 1.2rem;
box-shadow: 2px 3px 3px 1px;
:active {
transform: scale(0.98);
}
:hover {
    background-color: ${props => props.bgColor};
    /* color: red; */

}
@media (min-width: 992px) {
padding: 9px;
}
`;





///////////////// FOR ALL FONT AWESOME ICONS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SideComponent = styled.div`
border: 1px solid black;
margin: 4px;
width: 70px; ///////////// CHANGE WIDTH OF SIDE COMPONENT FROM HERE ////////
margin-right: 5px;
/* margin-top: -10px; */
/* height: 100vh; */
`;

//////////////// SINGLE FONT ICON //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SingleSideComponent = styled.div`
/* border: 1px solid red; */
margin-top: 25px;
padding-top: 15px;
text-align: center;

`

const FontIcon = styled.i`
font-size: 35px;
/* color: black; */
cursor: pointer;
:hover {
    color: grey;
    transform: scale(1.1);
    /* filter: brightness(0.4); */
    /* background-color: black; */
    /* border: 1px solid lavenderblush; */
}
`;


/////////////////////////// FOR MODAL /////////////////////////////////////////////////////////////////////////////////////////////////////////// 

const Heading = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    /* border: 1px solid black; */

    >h1 {
    /* align-self: center; */

    height: 100px;
    display: block;
    z-index: 999;
    background-color: whiteSmoke;
    border-radius: 4px;
    box-shadow: 4px 4px 3px 1px;
    
    color: black;
    padding: 15px;
    position: fixed;
    top: 70px;
    border: 1px solid black;
    margin-left: 25px;
    font-size: 1.7rem;
    padding-top: 35px;
        ///////////// HIDE MODAL WHEN SIDEBAR OPEN /////////////////
    display: ${props => props.checkSidebar && 'none'};
}

@media (min-width :768px) {  //// NO MORE CHANGE ///////////////////
    >h1 {
        font-size: 2rem;
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