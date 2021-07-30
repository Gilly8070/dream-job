import React, { useState, useEffect } from 'react';
import fire from '../config/fire';
import { Content, MainContent, Headers, Heading1,Heading2, Heading3, FullContainer, FormContainer, Input, Label, Button, SocialButton, Button1, SocialButtonContainer, Heading4, IconsContainer, ErrorContainer} from '../styles/StyleAuth';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled from 'styled-components';
import firebase from 'firebase';
// import fire from '../config/fire';
// import { useCallback } from 'react'
import { connect } from 'react-redux';
import {changeUserProfile } from '../actions/action';
import Spinner from '../components/Spinner';
import BackImage from '../images/pexels-photo-6942385.jpeg';
import MainBack from '../images/pexels-photo-3205574.jpeg';
import '../styles/Navbar.css';

    const Login = ({ userProfile, changeUserProfile }) => {
    // const [name, setName] = useState('');
    const [showLogin, setShowLogin] = useState(true);
    const [error, setError] = useState(null);
    const database = firebase.database();
        const [loading, setLoading] = useState(true);
        
        // const [activeUser, setActiveUser] = useState('');

    // localStorage.getItem('name')
    // const [obj, setObj] = useState(null)
    // const [fetchFirebaseJobs, setFetchFirebaseJobs] = useState([]);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const [showSignUp, setShowSignUp] = useState(false);

    ////////////// fetch Jobs data from firebase   //////////////////
    useEffect(() => {
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
            database.ref('/InitialCheckProfile').once('value').then((snap) => {
                    changeUserProfile(snap.val());

                    })
    }, [database])
        
        ///// FOR DISABLE ERROR FROM SCREEN//////////////////////////////
        useEffect(() => {
                // setError(true);
            setTimeout(() => {
                setError(false);
            }, 3500)
        }, [error])
    
        useEffect(() => {
            // setLoading(true);
            setTimeout(() => {
            setLoading(false);
            }, 700)
            return () => {
      setLoading(false); // This worked for me
    };
        }, [loading])

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

        ////////////// DISABLED BUTTON AFTER USER CLICK FOR SOME TIME //////////////////////////////////////////////////////////////////////
        const btn = document.querySelectorAll('.btn')
        btn.forEach((ele) => {
        setTimeout(() => {
            ele.style.pointerEvents = 'none'
            ele.style.disabled = true;
            // ele.style.backgroundColor = 'black'
        }, 5)
        setTimeout(() => {
            ele.style.disabled = false;
            ele.style.pointerEvents = 'initial'
        }, 4000)
        })
            
        // console.log(btn);
        // const form = document.querySelector('#form');
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                
                // database.ref('offer/receivedOffer/' + u.user.uid)
                // .push([...new Set(fetchFirebaseJobs)]);
                // console.log('Logged In');
            })
            .catch((err) => {
                console.log('Error: ' + err.toString());
                console.log(err.message);
                setError(err.message.toString('').split(' ').slice(0, 15).join(' '))
                // setError('jddkddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd dkkdllskeiiiiiiiii dkkdiielsslslllll iiekdkdlllls iielllsllskdiiekkd iikekekekeidiikdkdkdk iiekekddiislls ikekelel')

            })
        // form.reset();
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const userName = document.querySelector('#userName').value;

        // console.log(userName);
        ////////////// DISABLED BUTTON AFTER USER CLICK FOR SOME TIME //////////////////////////////////////////////////////////////////////
        const btn = document.querySelectorAll('#btn')
        btn.forEach((ele) => {
        setTimeout(() => {
            ele.style.pointerEvents = 'none'
            ele.style.disabled = true;
            // ele.style.backgroundColor = 'black'
        }, 5)
        setTimeout(() => {
            ele.style.disabled = false;
            ele.style.pointerEvents = 'initial'
        }, 4000)
        })
        
        // const form = document.querySelector('#form');
        // fire.auth.creat
        // firebase.auth.create
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                if (u.additionalUserInfo.isNewUser && userProfile === 'Candidate') {
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
                console.log(err);
                console.log(err.message);
                // let err = err
                // setError(err.message);
                setError(err.message.toString('').split(' ').slice(0, 15).join(' '))
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
            // localStorage.setItem('name', name)
            // setName(name);

            // database.ref('InitialCheckProfile/').set(name);
            changeUserProfile(name);
        console.log(name);
        //     if (name === "Employer") {
        //     setActiveUser(name)
            
        // }
            // database.ref('/InitialCheckProfile').once('value').then((snap) => {
            //     setName(snap.val());
            //     console.log(snap.val())
            // })
            // this.setState({ name2: target })
            // localStorage.setItem('name', setName);
            // this.setState({ name: localStorage.setItem('name', setName) })
    }
    // useEffect(() => {
    //     const form = document.querySelector('#form');
    //     form.reset();
    //     // let name = localStorage.getItem('name');
    //     // setName(name);
    //     // database.ref('/InitialCheckProfile').once('value').then((snap) => {
    //     //     setName({ name: snap.val() });
    //     //     console.log(snap.val())
    //     // })
    // })
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
        console.log(provider);
        firebase.auth().signInWithPopup(provider)
        // firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((result) => {
                console.log(result)

                if (result.additionalUserInfo.isNewUser && userProfile === 'Candidate') {
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
                if (result.additionalUserInfo.isNewUser && userProfile === 'Candidate') {
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
            .catch(err => {
                console.log(err);
        })
        }
        window.addEventListener('resize', e => {
            console.log(e.target.innerWidth, e.target.innerHeight)
        })
        return (
            <FullContainer>
            {
                loading ? <Spinner text={'Loading2...'} size={5} /> :
                <div>
                <FadeComponent>
                    <BackgroundImage  />
                <Container>
                            <Content>
                                <Headers>
                                    <Heading1 bgColor={userProfile === 'Employer'  && 'Employer'} onClick={handleChange} >Employer </Heading1>
                                    <Heading1 bgColor={userProfile === 'Candidate' && 'Candidate'} onClick={handleChange} >Candidate</Heading1>
                                </Headers>
                            
                                {/*
                                        <Heading2>Register / Login as
                                            <span>
                                            {userProfile}
                                            </span>
                                        </Heading2>

                                <Login signIn={this.state.isSignedIn} userName={localStorage.getItem('name')} />*/}
                                <br />
                                
                                <form onSubmit={handleSignUp}  autoComplete="new-password" autoFocus id='form' action="">

                                    <ErrorContainer>
                                    {
                                        error ? error : null
                                    }
                                    </ErrorContainer>
                                    {
                                    showLogin ? <FormContainer>
                                        <div>
                                        
                                        <Heading3>Log in as
                                        <span>
                                        {userProfile}
                                        </span>
                                        </Heading3>
                                        </div>
                                        <br />
                                        <div>
                                        <Label htmlFor="">Email </Label>
                                        <Input  autoFocus  required autoComplete="new-password" autoSave='off' autocomplete='newddddww-wwwwww'
                                        id='email' type="text" placeholder='enter email' /><br />
                                        </div>
                                        <div>
                                        <Label htmlFor="">Password </Label>
                                        <Input required autocomplete='off'  id='password' type="password" placeholder='enter password' /><br />
                                        </div>
                                        <Button backgroundColor='#15BA53' onClick={handleLogin} className='btn'  type='submit'>Login</Button>
                                        <span>
                                        <Heading4>Don't have an account? <Button1 backgroundColor='#1e6091'  className='btn' name='signup' onClick={handleForm}>Sign up</Button1></Heading4>
                                        </span>
                                        </FormContainer> : null
                                    }
                
                                    {
                                    !showLogin ? <FormContainer>
                                    <div>
                                    <Heading3>Sign up for free</Heading3> <br />
                                    </div>
                                    <div>
                                        <Label htmlFor="">Username </Label>
                                        <Input 
                                            autocomplete='new_password' id='userName' required type="text" placeholder={`${userProfile} username`} /><br />
                                        </div>
                                        <div>
                                        <Label htmlFor="">Email </Label>
                                        <Input  autocomplete='new_password' required id='email' type="text" placeholder='Email' /><br />
                                        </div>
                                        <div>
                                        <Label htmlFor="">Password </Label>
                                        <Input   autocomplete='new_password' required id='password' type="password" placeholder='Your password' /><br />
                                        </div>
                                        <Button backgroundColor='#15BA53'  className='btn' type='submit'>Create Account</Button>
                                        <span>
                                        <Heading4>Already have an account? <Button1 backgroundColor='#004e89' className='btn'  name='login' onClick={handleForm}>Log in</Button1></Heading4>
                                        </span>
                                        </FormContainer> : null
                                    }

                                        </form>
                                {
                                    userProfile === 'Candidate' ?
                                    <IconsContainer>
                                    <h1>Or</h1>
                                    <SocialButtonContainer>
                                    <SocialButton onClick={handleSignInGoogle}><i className="fab fa-google"></i></SocialButton>
                                    <SocialButton onClick={handleSignInGithub}><i className="fab fa-github"></i></SocialButton>
                                    </SocialButtonContainer>
                                    </IconsContainer>
                                    : null
                                }
                                {/*
                            <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={fire.auth()}
                                    />
                            <Auth name={name} />*/}
                            </Content>
                        
                        </Container>
                        </FadeComponent>
                        </div>
                            
                }
        </FullContainer>
                
    )
}

const MapState = (state) => {
    // console.log(state);
    return {
        userProfile: state.changeUserProfileName
    }
}


export default connect(MapState, { changeUserProfile })(Login)


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


// const Heading3 = styled.h3`
// margin-bottom: 10px;
// font-size: 1.3rem;
// /* background-color: white; */
// `


const FadeComponent = styled.div`
animation: fadeIn ease-in 1;
animation-fill-mode: forwards;
animation-duration: 1.4s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            opacity: 1;
        }
    }

    
`

const BackgroundImage = styled.img`
    width: 100%;
    /* height: 100%; */
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MainBack}) center/cover no-repeat fixed;
    background-attachment: fixed;
    background-color:rgba(0, 0, 0, 0.5);
    padding: 0;
    margin-bottom: -5px;
    margin-left: -2px;
    /* position: relative; */
@media (max-width: 320px) {
    display: none;

}

`;

const Container = styled.div`
/* padding-top: 10px; */

    display: flex;
    justify-content: center;
    align-content: center;
    position: fixed; 
    left: 10px;
    right: 10px;
    top: 30px;
    bottom: 10px;



margin-left: 15px;
margin-right: 15px;
    /* position: -webkit-static; */
    /* webkifix */

    /* @media (max-width: 320px) {
padding-top: 0;
margin-top: 0;
display: flex;
    justify-content: center;
    align-content: center;
    position: absolute; 
    left: 0;
    right: 0;
    top: -30px;
    bottom: 0;
} */
    
`

const ContainerMain = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* align-content: center; */
    /* @media (max-width: 320px) {
padding-top: 0;
margin-top: 0;

} */
`