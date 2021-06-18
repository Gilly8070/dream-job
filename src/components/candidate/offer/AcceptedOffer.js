import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { undoJobAccepted } from '../../../actions/action';
import firebase from 'firebase';

const AcceptedOffer = ({ current, undoJobAccepted }) => {
    const database = firebase.database();
    const [data, setData] = useState([]);
    
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
                data.map(single => {
                    return (
                        <div key={single.id}>
                            <h3>{single.title}</h3>
                            <p>{single.company ? single.company : 'Anonymous'}, {single.location}</p>
                            <p>Accepted on Date</p>
                            <p>Status In Transit</p>
                            <p>Received Date</p>
                            <button onClick={() => cancelOffer(single.id)}>Cancel Offer</button>
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

export default connect(MapState, {undoJobAccepted})(AcceptedOffer);
