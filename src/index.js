import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { data } from './data';

// let initialState = {}
// let persistedState;

// let initialState = {
//     data: localStorage.getItem('data')
// }
    // initialState = localStorage.getItem('data', JSON.parse(data))

// localStorage.setItem('data', JSON.stringify(data));
// let getAns = localStorage.getItem('data', JSON.stringify(data))


// function saveToLocalStorage(state) {
//     try {
//         const serialisedState = JSON.stringify(state);
//         localStorage.setItem("persistantState", serialisedState);
//     } catch (e) {
//         console.warn(e);
//     }
// }
// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("persistantState");
//     if (JSON.stringify(serialisedState) === null) return undefined;
//     return JSON.stringify(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }
// const persistedState = localStorage.getItem('reduxState') 
//                        ? (localStorage.getItem('reduxState'))
//                        : {}

//                        localStorage.clear();
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch(err) {
    console.log(err);
  }
};
const persistedStore = loadState();
const store = createStore(
  // ... your reducers
    reducers,
  persistedStore,
  applyMiddleware(thunk),
);

store.subscribe(() => {
  saveState(store.getState());
});
// const store = createStore(reducers, data); ////////
// store.subscribe(()=>{
//   localStorage.setItem('reduxState', JSON.stringify(store.getState(JSON.stringify(data))))
// })
// let ans = localStorage.getItem(('data', store.getState(data)))
// store.subscribe(() => (ans));

// store.subscribe(() => {
//     localStorage.setItem('initial', JSON.stringify(store.getState()))
// })

// localStorage 
// window.onbeforeunload = () => {
    // store.subscribe(() => {
    //     localStorage.setItem('reduxState', JSON.stringify(store.getState(data.initial)))
    // })
// }
// persistedState = localStorage.getItem('reduxState') 
//                     ? JSON.parse(localStorage.getItem('reduxState'))
//                     : data.initial
// end of localStorage
console.log(store.getState(), 'store');

// console.log(  store.getState().newJobs, 'store2');

// store.subscribe()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)
