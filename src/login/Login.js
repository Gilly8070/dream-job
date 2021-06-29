import React, { useState, useEffect } from 'react';
import fire from '../config/fire';
import { Content, MainContent, Headers, Heading1,Heading2, Heading3, FullContainer, FormContainer, Input, Label, Button, SocialButton, SocialButtonContainer} from '../styles/StyleAuth';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled from 'styled-components';
import firebase from 'firebase';
// import fire from '../config/fire';
// import { useCallback } from 'react'
import { connect } from 'react-redux';
import { changeUserProfileName } from '../actions/action';
import Spinner from '../components/Spinner';
import BackImage from '../images/pexels-photo-6942385.jpeg';
import MainBack from '../images/pexels-photo-3205574.jpeg';
import '../styles/Navbar.css';

    const Login = ({ userProfile, changeUserProfileName }) => {
    // const [name, setName] = useState('');
    const [showLogin, setShowLogin] = useState(true);
    const [error, setError] = useState(null);
    const database = firebase.database();
    const [loading, setLoading] = useState(true);
    // localStorage.getItem('name')
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
    // database.ref('/InitialCheckProfile').once('value').then((snap) => {
    //             // setName(snap.val());
    //         changeUserProfileName(snap.val());

    //             console.log(snap.val())
    //         })
        
        ///// FOR DISABLE ERROR FROM SCREEN//////////////////////////////
        useEffect(() => {
            // error &&
            setTimeout(() => {
                setError(null);
            }, 2000)
        }, [error])
    
        useEffect(() => {
            setTimeout(() => {
            setLoading(false);
            }, 700)
            database.ref('/InitialCheckProfile').once('value').then((snap) => {
                // setName(snap.val());
            changeUserProfileName(snap.val());

                // console.log(snap.val())
            })
        }, [changeUserProfileName, database, loading])

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
                console.log(err.message);
                setError(err.message)
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
                setError(err.message);
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
            // setName(name);

            database.ref('InitialCheckProfile/').set(name);
            changeUserProfileName(name);

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
        return (
            <FullContainer>
            {
                loading ? <Spinner text={'Loading'} size={5} /> :
                <div>
                <FadeComponent>
                    <BackgroundImage  />
                <Container>
                <ContainerMain>
                        <MainContent>
                            <Content>
                                <Headers>
                                    <Heading1 onClick={handleChange} >Employer </Heading1>
                                    <Heading1 onClick={handleChange} >Candidate</Heading1>
                                </Headers>
                            
                                <Heading2>Register / Login as {userProfile}</Heading2>

                                {/*<Login signIn={this.state.isSignedIn} userName={localStorage.getItem('name')} />*/}
                                <br />
                                
                                <form id='form' action="">
            
                                    {
                                        error ? error : null
                                    }
                                    {
                                        showLogin ? <FormContainer  >
                                            <Heading3>Log in as {userProfile}</Heading3> 
                                            <br />
                                            <Label htmlFor="">Email </Label>
                                            <Input id='email' type="text" placeholder='enter email' /><br />
                                            <Label htmlFor="">Password </Label>
                                            <Input id='password' type="password" placeholder='enter password' /><br />
                                            <Button onClick={handleLogin} type='submit'>Login</Button>
                                            <h4>Don't have an account? <Button name='signup' onClick={handleForm}>Sign up</Button></h4>
                                        </FormContainer> : null
                                    }
                
                                    {
                                        !showLogin ? <FormContainer>
                                            <Heading3>Sign up for free</Heading3> <br />
                                            <Label htmlFor="">Username </Label>
                                            <Input id='userName' required type="text" placeholder={`${userProfile} username`} /><br />
                                            <Label htmlFor="">Email </Label>
                                            <Input required id='email' type="text" placeholder='Email' /><br />
                                            <Label htmlFor="">Password </Label>
                                            <Input required id='password' type="password" placeholder='Your password' /><br />
                                            <Button onClick={handleSignUp} type='submit'>Create Account</Button>
                                            <h4>Already have an account? <Button name='login' onClick={handleForm}>Log in</Button></h4>
                                        </FormContainer> : null
                                    }

                                        </form>
                                {
                                    userProfile === 'Candidate' ?
                                    <div>
                                    <h1>Or</h1>
                                    <SocialButtonContainer>
                                    <SocialButton onClick={handleSignInGoogle}><i class="fab fa-google fa-2x"></i></SocialButton>
                                    <SocialButton onClick={handleSignInGithub}><i class="fab fa-github fa-2x"></i></SocialButton>
                                    </SocialButtonContainer>
                                    </div>
                                    : null
                                }
                                {/*
                            <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={fire.auth()}
                                    />
                            <Auth name={name} />*/}
                            </Content>
                        </MainContent>
                        
                        </ContainerMain>
                        </Container>
                        </FadeComponent>
                        </div>
                            
                }
        </FullContainer>
                
    )
}

const MapState = (state) => {
    console.log(state.changeUserProfileName);
    return {
        userProfile: state.changeUserProfileName
    }
}


export default connect(MapState, { changeUserProfileName })(Login)


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

@media (max-width: 320px) {
    display: none;

}

`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute; 
    left: 0;
    right: 0;
    top: 30px;
    bottom: 0;

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
    display: flex;
    justify-content: center;
    align-content: center;
    /* @media (max-width: 320px) {
padding-top: 0;
margin-top: 0;

} */
`