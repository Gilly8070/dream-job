import firebase from 'firebase';
// import * as firebas from 'firebase/app';
// import {initializeApp} from 'firebase/app'

const configForRedux = {
    // apiKey: "AIzaSyAGva2xkSC1bys4Cgm3Jqenn0BmW0ONQCc",
    // authDomain: "checkdreamjob.firebaseapp.com",
    // projectId: "checkdreamjob",
    // storageBucket: "checkdreamjob.appspot.com",
    // // messagingSenderId: "1058425391856",
    // // appId: "1:1058425391856:web:57211ca1ed3b143f265035",
    // appId: "1:1058425391856:web:57211ca1ed3b143f265035",
    // measurementId: "G-M9ZFRZ5EWQ",
    // messagingSenderId: "1058425391856",
    // databaseURL: "https://checkdreamjob-default-rtdb.firebaseio.com",




    // appId: "APP_ID",
    // measurementId: "G-MEASUREMENT_ID",
    
    apiKey: "AIzaSyAzkLGEgypyJv8MMw-i1HB8pCBDAE9SPcc",
    authDomain: "dream-job-6dd80.firebaseapp.com",
    databaseURL: "https://dream-job-6dd80-default-rtdb.firebaseio.com",
    projectId: "dream-job-6dd80",
    storageBucket: "dream-job-6dd80.appspot.com",
    messagingSenderId: "65211879809",
    appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
    measurementId: "G-8GSGZQ44ST"
};

// Initialize another app with a different config
var secondaryApp = firebase.initializeApp(configForRedux, "secondary");

// var secondaryApp = !firebase.apps.length ? firebase.initializeApp(configForRedux, "secondary") : firebase.initializeApp(configForRedux, "secondary");
    // firebase.initializeApp(configForRedux, "secondary");
// Access services, such as the Realtime Database
// secondaryApp.database();
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

// const FireForRedux = !firebase.apps.length ? firebase.initializeApp(configForRedux, "secondary") :  firebase.app();


// const fire = firebase.auth();
// const database = firebase.database();
// firebase.database().ref().set('Hello');
firebase.database().ref(".info/connected").on("value", function(connectedSnap) {
    if (connectedSnap.val() === true) {
        console.log('connected', 'from FireForRedux.js')
        /* we're connected! */
    } else {
        console.log('not connected', 'from FireFromRedux.js')

        /* we're disconnected! */
    }
});
export default secondaryApp;