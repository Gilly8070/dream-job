import firebase from 'firebase';
// import * as firebas from 'firebase/app';
// import {initializeApp} from 'firebase/app'

const config = {
    apiKey: "AIzaSyAEAoBpFCDspyicISCwf6AJpEtfaSqXPlQ",
    authDomain: "fir-auth-2889f.firebaseapp.com",
    databaseURL: "https://fir-auth-2889f-default-rtdb.firebaseio.com",
    projectId: "fir-auth-2889f",
    storageBucket: "fir-auth-2889f.appspot.com",
    messagingSenderId: "107306707563",
    // appId: "APP_ID",
    // measurementId: "G-MEASUREMENT_ID",
    // apiKey: "AIzaSyAzkLGEgypyJv8MMw-i1HB8pCBDAE9SPcc",
    // authDomain: "dream-job-6dd80.firebaseapp.com",
    // databaseURL: "https://dream-job-6dd80.firebaseio.com",
    // projectId: "dream-job-6dd80",
    // storageBucket: "dream-job-6dd80.appspot.com",
    // messagingSenderId: "65211879809",
    // appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
    // measurementId: "G-8GSGZQ44ST"
};
// if (!firebase.apps.length) {
    
//     firebase.initializeApp(
//         config
//         //         // apiKey: "AIzaSyAEAoBpFCDspyicISCwf6AJpEtfaSqXPlQ",
//         //         // authDomain: "fir-auth-2889f.firebaseapp.com"
//     )
// }
// else {
//    firebase.app(); // if already initialized, use that one
// }

// const fire = firebase.initializeApp(config);
const fire = !firebase.apps.length ? firebase.initializeApp(config) :  firebase.app();
// const fire = firebase.auth();
// const database = firebase.database();
// firebase.database().ref().set('Hello')
firebase.database().ref(".info/connected").on("value", function(connectedSnap) {
    if (connectedSnap.val() === true) {
        console.log('connected', 'from fire.js')
        /* we're connected! */
    } else {
        console.log('not connected', 'from fire.js')

        /* we're disconnected! */
    }
});
export default fire;