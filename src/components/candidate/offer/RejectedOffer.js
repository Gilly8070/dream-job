import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { undoJobRejected } from '../../../actions/action';
import firebase from 'firebase';

const RejectedOffer = ({ current, undoJobRejected }) => {
    const database = firebase.database();

    const [data, setData] = useState([]);
    
    useEffect(() => {
        database
        .ref('offer/rejectOffer/' + firebase.auth().currentUser.uid)
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

    const cancelReject = (singleId) => {
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

        database.ref(`offer/rejectOffer/${firebase.auth().currentUser.uid}/${key}`).remove()
    }

    if (data.length === 0) {
        return <h1>No Rejected Jobs To Display</h1>
    }
    return (
        // className={` ${accepted ? 'hide': 'active'}`}
        <div >
            {
                data.map(single => {
                    return (
                        <div key={single.id}>
                            <h3>{single.title}</h3>
                            <p>{single.company ? single.company : 'Anonymous'}, {single.location}</p>
                            <p>Status Rejected Offer on Date</p>
                            <p>Feedback Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, iste.</p>
                            <p>Received Date</p>
                            <button onClick={() => cancelReject(single.id)}>Undo Rejected</button>
                        </div>
                    )
                })
                // undoJobRejected(single.id)
            }
        </div>
    )
}

const MapState = (state) => {
    console.log(state, 'received');
    return {
        current: state.reject
    }
}

export default connect(MapState, {undoJobRejected})(RejectedOffer);
