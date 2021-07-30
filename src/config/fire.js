import firebase from 'firebase';
// import * as firebas from 'firebase/app';
// import {initializeApp} from 'firebase/app'

const config = {

    ////// DATABASE IF FULL THEREFORE WE HAVE CHANGED IT /////////////////////////////////////////////////////////////////////////////////////////

    ////////////// FOR FIRST ONE FIREBASE-AUTH ///////////////////
    // apiKey: "AIzaSyAEAoBpFCDspyicISCwf6AJpEtfaSqXPlQ",
    // authDomain: "fir-auth-2889f.firebaseapp.com",
    // databaseURL: "https://fir-auth-2889f-default-rtdb.firebaseio.com",
    // projectId: "fir-auth-2889f",
    // storageBucket: "fir-auth-2889f.appspot.com",
    // messagingSenderId: "107306707563",
    




    ///////////////// SECOND ONE CHECK DREAM JOB /////////////////////
    // apiKey: "AIzaSyAGva2xkSC1bys4Cgm3Jqenn0BmW0ONQCc",
    // authDomain: "checkdreamjob.firebaseapp.com",
    // projectId: "checkdreamjob",
    // storageBucket: "checkdreamjob.appspot.com",
    // appId: "1:1058425391856:web:57211ca1ed3b143f265035",
    // measurementId: "G-M9ZFRZ5EWQ",
    // messagingSenderId: "1058425391856",
    // databaseURL: "https://checkdreamjob-default-rtdb.firebaseio.com",


    ///////////////// THIRD ONE CHECK JOB2 /////////////////////////
    apiKey: "AIzaSyBpPAw54hV8-HmHOwSYhQiLdRl3uWIZspU",
    authDomain: "dream-job2.firebaseapp.com",
    projectId: "dream-job2",
    storageBucket: "dream-job2.appspot.com",
    messagingSenderId: "1086429035204",
    appId: "1:1086429035204:web:280383c8d7410086032791",
    measurementId: "G-G4J94SYF91"

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();





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