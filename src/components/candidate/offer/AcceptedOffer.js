import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { undoJobAccepted } from '../../../actions/action';
import firebase from 'firebase';
import { currentUserAcceptedOffer } from '../../../actions/action';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';

const AcceptedOffer = ({ current, undoJobAccepted, currentUserAcceptedOffer }) => {
    const database = firebase.database();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalTerm, setModalTerm] = useState('');
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)

    }, [loading])

    useEffect(() => {
        database
        .ref('offer/acceptOffer/' + firebase.auth().currentUser.uid)
            .on('value', (snapshot) => {
            console.log(snapshot.val(), 'snapshot');
            const exp = [];
                snapshot.forEach((childSnap) => {
                console.log(childSnap.key, 'childSnap');
                exp.push({
                    key: childSnap.key,
                    ...childSnap.val()
                })
            })
            console.log(exp);
            setData(exp);
                
            
            ////// USED IN SEARCH FILTER COMPONENT////////////////////////////////////////////////////////////////////////////////////
            currentUserAcceptedOffer(exp)
            // final.push(exp);
            // exp.map((ele) => {
                //     const {obj} = ele
                //     return <h3>{obj.title}</h3>
                // })
                // exp === true ? final === exp : final === exp;
                // console.log(exp);
            })
        
        // console.log(snap);
    }, [database])
    const cancelOffer = (singleId) => {
        setTimeout(() => { 
        let findSingleJob = data.find((single) => single.id === singleId)
        let key = findSingleJob.key;
        delete findSingleJob.key;
        console.log(findSingleJob,key, 'find');
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
            console.log(ele, id)
            setTimeout(() => {
                ele.disabled = true;
                setModal(true);
                // term === 'accept' &&
                    setModalTerm(' OFFER CANCELLED SUCCESSFULLY')
                // term === 'reject' &&
                    // setModalTerm('SUCCESSFULLY REJECTED')
            }, 100);
            setTimeout(() => {
                ele.disabled = false;
                setModal(false);
            }, 700);
        })
    }
    
        if (loading) {
            return <Spinner size={3} />
        }
    
        if (data.length === 0) {
            return <h1>No Accepted Job To Display</h1>
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
                modal ? <h1>{modalTerm}</h1> : null
            }

            <Link to='search/acceptedOffer'>
                <i class="fas fa-search fa-3x"></i>
            </Link>
            <Link to='filter/acceptedOffer'>
                <i class="fas fa-filter fa-3x"></i>
            </Link>
            <Link to='sort/acceptedOffer'>
                <i class="fas fa-sort fa-3x"></i>
            </Link>
            {
                data.map(single => {
                    return (
                        <div key={single.id}>
                            <h3>{single.title}</h3>
                            <p>{single.company ? single.company : 'Anonymous'}, {single.location}</p>
                            <p>Accepted on Date</p>
                            <p>Status In Transit</p>
                            <p>Received Date</p>
                            <button name='btn' onClick={() => {
                                cancelOffer(single.id);
                                showModal(single.id)
                            }}>Cancel Offer</button>
                        </div>
                    )
                })
                // undoJobAccepted(single.id);
                
            
        }
        </div>
    )
    
}

const MapState = (state) => {
    console.log(state, 'received');
    return {
        current: state.accept
    }
}

export default connect(MapState, {undoJobAccepted, currentUserAcceptedOffer})(AcceptedOffer);
