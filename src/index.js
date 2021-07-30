import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { useEffect } from 'react';
// import { data } from './data';
import Spinner from './components/Spinner';
// import firebase from 'firebase/app';
import firebase from 'firebase';
// import 'firebase/<PACKAGE>';
// import './config/FireForRedux';
// import secondaryApp from './config/FireForRedux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 
// import { PersistGate } from 'redux-persist/integration/react'

// const {MongoClient} = require('mongodb');

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://gulrez123:gulrez123@https://cloud.mongodb.com/v2/5f2ffc4bbecf6628b010df52#clusters/detail/ContactKeeper/test?retryWrites=true&w=majority";
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);
// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
 
/////////////// FOR SECOND SPACE //////////////////////////////////////

// const secondaryServiceAccount = require('./config/FireForRedux');



///////////////// END OF SECOND SPACE /////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////// REDUX PERSIST START FROM HERE ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// const persistConfig = {
//     key: 'root',
//     storage,
// }

//check for Navigation Timing API support
// if (window.performance) {
//   console.info("window.performance works fine on this browser");
// }

// const persistedReducer = persistReducer(persistConfig, reducers)
// // export default () => {
//   let store = createStore(persistedReducer, applyMiddleware(thunk))
//   let persistor = persistStore(store)

// return { store, persistor }
// }

/////// END OF REDUX PERSIST ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setTimeout(() => {
//   // console.log(store.getState())
//   ReactDOM.render(
//     <div><Spinner text={'LoadingNew...'} size={5} /></div>,
//     document.getElementById('root')
//     )
//   // console.log('loooo')
// }, 1);


//////// HERE WE PERSISTING DATE IN REDUX WITH THE HELP OF LOCAL STORAGE BUT THE ERROR CAME AND WE STOPPED USING IT ////////////////////////////////////////////////////////////////////////////////////////////////////////

let ans = [];

const loadState = () => {
    // (async function () {
    // console.log('3333333333')
  

  
  //////// USING FIREBASE FOR REDUX ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // return new Promise(async function  (resolve) {
    //     resolve(
  //   let final = firebase.database().ref('state/').once('value').then( (value) => {
  //     let res = (value.val())
  //     ans = res;
  //     console.log(res);
  //     return res;
  //   })
  // console.log(final)
  // //   // )
  // //   // })
  // // // let final1 = await final
  //   return final;


  
  /////////////////////////// USING LOCAL STORAGE IN REDUX ///////////////////////////////////////////////////////////////////////////////////////////// 
    // console.log('3333333333')  ////// initially
    // try {
    //   const serializedState = localStorage.getItem("state");
    //   if (!serializedState) return undefined;
    //   else return JSON.parse(serializedState);
    // } catch(err) {
    //   return undefined;
    // }

  // })()
  };
  
const saveState = (state) => {
  // console.log('444444444444444')
  // const serializedState = localStorage.getItem("state");
  // let parse = JSON.parse(serializedState)

    // const serializedState = JSON.stringify(state); ////// initially
  // let state2 = await state;
  // console.log(state, 'state2');


  ///////////////////////// USING FIREBASE FOR REDUX /////////////////////////////
  // firebase.database().ref('state/').set(state)
///////////////////////////////////////////////////////////////////////////


  // firebase.database().ref('state3/').once('value').then((value) => {
  //         let res = value.val()
  //         console.log(res, 'resss')
  // })

  // firebase.database().ref('state/state/state').set(serializedState)

// FireForRedux.database().ref('state/').once('value').then( (value) => {
//           let res = JSON.parse( value.val())
//           // ans = res;
//           console.log(res, 'FireForRedux');
//           return res;
//         })


// const serializedState = JSON.stringify(state); ////// initially
    // localStorage.setItem("state3", serializedState);
  
  
  //////////////////// USING LOCAL STORAGE FOR REDUX //////////////////////////////////////////////////////////////
  // try {


  //   // const serializedState = JSON.stringify(state); ////// initially
  //   // localStorage.setItem("state", serializedState);


  // } catch(err) {
  //   console.log(err);
  // }
};



// (async function () {


    
    
  // await loadState()

  // let checkAns = ans ? ans : undefined;
  // let persistedStore = checkAns;
    // let persistedStore = firebase.database().ref('state/').once('value'). then( (value) => {
    //           let res = (value.val())
    //           ans = res;
    //           console.log(res);
    //           return res;
    //         });

  // console.log(ans, loadState())

  let persistedStore = loadState();


    // console.log(persistedStore, ans);

    

    
    // console.log(persistedStore, ans);



  // console.log(persistedStore)

const store = createStore(
  // ... your reducers
  reducers,
  // ...state,
  persistedStore,
  applyMiddleware(thunk),
);

///////////////////////// END OF PERSIST DATA WITH LOCAL STORAGE /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// setTimeout(() => {
  store.subscribe(() => {
    // console.log('store');

    // setTimeout(() => {
  saveState(store.getState());
    // }, 1);
    // console.log(store.getState().allLiveJobs, 'store222222222');
  });
// }, 5000);




console.log(store.getState(), 'store');

  
  
  
////// FROM HERE WE START ////////////////////////

const ScreenAfterLoading = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000)

  }, [loading])
  return (
    <div>
        {
          loading ? <Spinner text={'Loading...'} size={5} /> : <App loading={loading} />
        }
    </div>
  )
}

///////////////////// HERE ITS END ///////////////////////////////////////
  
  ReactDOM.render(
      <Provider store={store}>
          <ScreenAfterLoading />
    </Provider>
    
  // <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //       <ScreenAfterLoading />
  //     </PersistGate>
  //   </Provider>
      ,
      document.getElementById('root')
)
  
  // })()
  
// })()
/////// HERE WE ARE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setTimeout(() => {
  // ReactDOM.render(
  //     <Provider store={store}>
  //         <App />
  //     </Provider>
  //     ,
  //     document.getElementById('root')
  // )
// }, 1000)

