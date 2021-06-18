import React, { useEffect, useState } from 'react';
import fire from '../config/fire';
import { Content, MainContent, Headers, Heading1 } from '../styles/StyleAuth';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled from 'styled-components';
import firebase from 'firebase';
// import fire from '../config/fire';
// import { useCallback } from 'react'

const Login = () => {
    const [name, setName] = useState(localStorage.getItem('name'));
    const [showLogin, setShowLogin] = useState(true);
    const [error, setError] = useState(null);
    const database = firebase.database();
    // const [obj, setObj] = useState(null)
    // const [fetchFirebaseJobs, setFetchFirebaseJobs] = useState([]);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const [showSignUp, setShowSignUp] = useState(false);

    ////////////// fetch Jobs data from firebase   //////////////////
    // useEffect(() => {
    //     database
    //         .ref('Jobs')
    //         .once('value', (snapshot) => {
    //             // console.log(snapshot.val(), 'snapshot');
    //             setObj(snapshot.val())
    //             const exp = [];
    //             snapshot.forEach((childSnap) => {
    //                 exp.push({
    //                     id: childSnap.key,
    //                     ...childSnap.val()
    //                 })
    //             })
    //             // console.log(exp);
    //             setFetchFirebaseJobs(exp);
    //             // console.log(fetchFirebaseJobs, '1');
    //             // console.log(fetchFirebaseJobs, '2');
    //         })
    // }, [database])

    const handleForm = (e) => {
        e.preventDefault();
        // let target = e.target
        let name = e.target.name;
        if (name === 'login') {
            console.log('login');
            setShowLogin(true);
        }
        if (name === 'signup') {
            console.log('signup');
            setShowLogin(false);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        // const form = document.querySelector('#form');
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                
                // database.ref('offer/receivedOffer/' + u.user.uid)
                // .push([...new Set(fetchFirebaseJobs)]);
                // console.log('Logged In');
            })
            .catch((err) => {
                console.log('Error: ' + err.toString());
                setError(err.toString())
            })
        // form.reset();
    }
    const handleSignUp = (e) => {
        console.log('submitted');
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const userName = document.querySelector('#userName').value;

        // const form = document.querySelector('#form');
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                if (u.additionalUserInfo.isNewUser) {
                    database.ref('UsersPersonalData/').push({
                        id: u.user.uid,
                        email: email,
                        name: userName,
                //         name: u.additionalUserInfo.profile.name,
                //         email: u.additionalUserInfo.profile.email,
                    });
                }
                // console.log(email, password, userName, u.user.uid, )
                // database.ref('offer/receivedOffer/' + u.user.uid)
                //     .push(fetchFirebaseJobs);
                // console.log(fetchFirebaseJobs);
                console.log(u, u.user.uid, 'SignUPP', 'from here see');
            })
            .catch((err) => {
                console.log('Error: ' + err.toString());
                setError('No user found');
            })
                ////////// fetch data from Jobs////////////////
            // database
            // .ref('Jobs')
            // .once('value', (snapshot) => {
            //     const exp = [];
            //     snapshot.forEach((childSnap) => {
            //         exp.push({
            //             id: childSnap.key,
            //             ...childSnap.val()
            //         })
            //     })
            //     setFetchFirebaseJobs(exp);
            // })
        
        // ////////// set data in firebase for respective user//////////
        // database.ref(`offer/receivedOffer/ + ${email}`)
        //     .push(fetchFirebaseJobs);
        // form.reset();
    }
    // const setData = () => {
        // database.ref('offer/receivedOffer/' + firebase.auth().currentUser.uid)
        //     .push(fetchFirebaseJobs);
    // }
    
        // console.log(fetchFirebaseJobs);
    
    const handleChange = (e) => {
            let target = e.target.innerText;
            let name = target;
            localStorage.setItem('name', name)
            setName(name);
            // this.setState({ name2: target })
            // localStorage.setItem('name', setName);
            // this.setState({ name: localStorage.setItem('name', setName) })
    }
    useEffect(() => {
        const form = document.querySelector('#form');
        form.reset();
        let name = localStorage.getItem('name');
        setName(name);
    }, [name])
    // let uiConfig = {
    //             signInFlow: "popup",
    //     signInOptions: [
    //                 // fire.auth().FacebookAuthProvider.PROVIDER_ID,
                    
    //                 firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //                 firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //                 // firebase.auth.EmailAuthProvider.PROVIDER_ID
    //             ],
    //             callbacks: {
    //                 signInSuccess: () => false
    //             }
    // }
    const handleSignInGoogle = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        // firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((result) => {
                console.log(result)

                if (result.additionalUserInfo.isNewUser) {
                    database.ref('UsersPersonalData/').push({
                        id: result.user.uid,
                        name: result.additionalUserInfo.profile.name,
                        email: result.additionalUserInfo.profile.email,
                    });
                // } else {
                    // console.log('no new user')
                // }
                // console.log(result.additionalUserInfo.profile.name,
                    // result.additionalUserInfo.profile.email,result.user.uid, result)

                // console.log(result);
                // if (result.additionalUserInfo.isNewUser) {
                //     console.log('new user from google');
                //     // database.ref('offer/receivedOffer/' + result.user.uid)
                //     //     .push(
                //     //////// first map then pushing to firebase ///////
                //             // fetchFirebaseJobs.map((ele) => {
                //             //     return database.ref('offer/receivedOffer/' + result.user.uid)
                //             //         .push(ele);
                //             // })
                //             // database
                //             // .ref('Jobs')
                //             //     .once('value').then((snap) => {
                //             //         snap.val()
                //             //     })
                //                     // (snapshot) => {
                //                 // const exp = [];
                //                 // snapshot.forEach((childSnap) => {
                //                 //     exp.push({
                //                 //         // childSnap.key,
                //                 //     })
                //                 // })
                //             // })
                //     // );
                //     // console.log(obj, 'obj');
                //     // [...new Set(fetchFirebaseJobs)]
                }
            })
    }
    const handleSignInGithub = () => {
        let provider = new firebase.auth.GithubAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result)
                if (result.additionalUserInfo.isNewUser) {
                    return database.ref('UsersPersonalData/').push({
                        id: result.user.uid,
                        name: result.additionalUserInfo.profile.name,
                        email: result.additionalUserInfo.profile.email,
                    });
                // } else {
                //     return null
                // }
                // // console.log(result);
                // if (result.additionalUserInfo.isNewUser) {
                //     console.log('new user from github');
                //     database.ref('offer/receivedOffer/' + result.user.uid)
                //     .push(fetchFirebaseJobs);
                }
            })
    }
    return (
        <div>
            <div>
                    <MainContent>
                        <Content>
                            <Headers>
                                <Heading1 onClick={handleChange} >Employer </Heading1>
                                <Heading1 onClick={handleChange} >Candidate</Heading1>
                            </Headers>
                            
                        <Heading3>Register / Login as {name}</Heading3>

                            {/*<Login signIn={this.state.isSignedIn} userName={localStorage.getItem('name')} />*/}
                            <br />
                            
            <form id='form' action="">
                {
                    error ? error: null
                }
                {
                    showLogin ? <div  >
                        <h1>Log in as {name}</h1> <br />
                        <label htmlFor="">Email </label>
                        <input id='email' type="text" placeholder='enter email' /><br />
                        <label htmlFor="">Password </label>
                    <input id='password' type="password" placeholder='enter password' /><br />
                    <button onClick={handleLogin}  type='submit'>Login</button>
                    <h4>Don't have an account? <button name='signup' onClick={handleForm}>Sign up</button></h4>
                </div> : null
                }
                
                {
                    !showLogin ? <div>
                        <h1>Sign up for free</h1> <br />
                        <label htmlFor="">Username </label>
                                    <input id='userName' required  type="text" placeholder={`${name} username`} /><br />
                        <label htmlFor="">Email </label>
                        <input required id='email' type="text" placeholder='Email' /><br />
                        <label htmlFor="">Password </label>
                    <input required id='password' type="password" placeholder='Your password' /><br />
                        <button onClick={handleSignUp} type='submit'>Create Account</button>
                    <h4>Already have an account? <button name='login' onClick={handleForm}>Log in</button></h4> 
                </div> : null
                }

                </form>
                        <h1>Or</h1>
                        <button onClick={handleSignInGoogle}>Google</button>
                        <button onClick={handleSignInGithub}>Github</button>
                        {/*
                            <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={fire.auth()}
                                    />
                            <Auth name={name} />*/}
                        </Content>
                    </MainContent>
                </div>
        </div>
    )
}

export default Login


// const Container = styled.div`
// display: flex;
// flex-direction: column;
// float: right;
// `

// const SmallContainer = styled.div`
// background-color: #bdc1ba;
// position: absolute;
// top: 90px;
// right: 0px;
// z-index: 1;
// width: auto;
// height: auto;
// padding: 50px;
// margin-right: 3px;
// text-align: center;
// align-items: center;
// border-radius: 10px;
// `

// const Image = styled.img`
// width: 65px;
// height: 65px;
// border-radius: 50%;
// position: absolute;
// top: 7px;
// right: 21px;
// /* left: -2px; */
// `


// const Button = styled.button`
// /* display: flex; */
// /* align-items: center; */
// /* justify-content: center; */
// /* float: right; */
// font-size: 1.5rem;
// color: black;
// background-color: #6dd6e7;
// width: auto;
// padding: 7px;
// margin-top: 0;
// text-align: center;
// height: auto;
// border: 1px solid black;
// border-radius: 8px;
// margin-top: 54px;
// /* margin-right: 4px; */

// &:hover {
//     background-color: #1cb3ca;
//     transform: rotate(5deg);
//     /* scale: 1; */
// }
// &:focus {
//     /* background-color: blue; */
//     transform: scale(0.9);
// }
// `

// const Heading3 = styled.h3`
// margin-bottom: 10px;
// font-size: 1.3rem;
// /* background-color: white; */
// `


const Heading3 = styled.h3`
margin-bottom: 10px;
font-size: 1.3rem;
/* background-color: white; */
`