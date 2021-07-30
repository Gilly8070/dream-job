import React, {useRef} from 'react';
// import Navbar from './Navbar';
// import firebase from 'firebase';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import LoginPage from './LoginPage';
// import { Content, MainContent, Headers, Heading1 } from '../styles/StyleAuth';
import styled from 'styled-components';
import Employer from './employer/Employer';
import Candidate from './candidate/Candidate';
import fire from '../config/fire'
// import firebase from 'firebase';

import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { startFetchCandidatePersonalData } from '../actions/action';
// import { changeUserProfileName } from '../actions/action';
// import Login from '../login/Login';
// import Navbar from './Navbar';
// import Candidate from './employer/Candidate';
// import Sidebar from './employer/sidebar/Sidebar';


// if (!firebase.apps.length) {
//     firebase.initializeApp({
//         apiKey: "AIzaSyAEAoBpFCDspyicISCwf6AJpEtfaSqXPlQ",
//         authDomain: "fir-auth-2889f.firebaseapp.com"
//     })
// }else {
//    firebase.app(); // if already initialized, use that one
// }

const Auth = ({signIn, signOut, handleSignOut, userProfile, startFetchCandidatePersonalData, personalData}) => {
    const myRef = useRef(null);
    const caretRef = useRef(null);

    const [candidName, setCandidName] = useState(null);
    // const [checkOutsideClick, setCheckOutsideClick] = useState(true);

    // useEffect(() => {
        // setCheckOutsideClick(signOut);
    // console.log(signOut, checkOutsideClick);
        // console.log(myRef.current, '111111111');
        // if (signOut) {
            // setCheckOutsideClick(true);
        // }
    
    // setCheckOutsideClick()
        // signIn = false;
        // handleSignOut()
        // offsetHeight offsetWidth
        // if (signIn && myRef.current.className) {
            
            // console.log(e.target.includes.className(myRef.current.className))
            // console.log(e.x, myRef.current && myRef.current.offsetWidth, myRef.current.offsetHeight);
            // console.log(e.target.className)
        // }
        // console.log(e.target.className, myRef.current && e.target.className === myRef.current.className);
        // console.log(e.x, e.y);
        // console.log(myRef);
        // console.log(e.target.classList === 'sc-WZYut ZaOLI')
        // if (openSide && sidebarRef.current && e.x > sidebarRef.current.clientWidth) {
        //     SetOpenSide(false);
        //     // console.log(e.x);
        // }
// }, [signOut]);
    
    
    //////////////// TO DETECT OUTSIDE CLICK OF CARET DOWN /////////////////////////////////////////////////////////////////////////////////////
    // console.log(personalData);
    // console.log(fire.auth().currentUser.uid)
    useEffect(() => {
        
        personalData.map((el) => {
            if (el.id === fire.auth().currentUser.uid) {
                // console.log(el.name);
                setCandidName(el.name);
            }
        })
    //////////////// FOR USER NAME //////////////////////////////
        startFetchCandidatePersonalData();

        // window.addEventListener('click', e => {
        //     console.log(e.path[0] === caretRef.current, caretRef)
        // })
        
    signOut && myRef.current !== null && window.addEventListener('click', e => {
        
        if (myRef.current !== null && (e.path[0] !== caretRef.current) && (
            e.x < myRef.current.offsetLeft ||
            e.x > (myRef.current.offsetLeft + myRef.current.offsetWidth)
            ||
            e.y < myRef.current.offsetTop ||
            e.y > (myRef.current.offsetTop + myRef.current.offsetHeight))) {
            console.log(caretRef,fire.auth().currentUser.photoURL, '22222222222222');
            // setCheckOutsideClick(false);
            handleSignOut();
                // signOut = false;
                // setCheckOutsideClick(false);
            }
    })
    }, [signOut])

        if (signIn && userProfile === 'Employer') {
            return <span>
                <Employer handleSignOut={handleSignOut} />
                {fire.auth().currentUser.photoURL && 
                    <Image className='signIn-logo' src={fire.auth().currentUser.photoURL} alt="" />
                }
                <FontIconCaret ref={caretRef} iconSize='30px' topSize='35px' leftSize='296px'  onClick={() => handleSignOut()} className="fas fa-caret-down fa-2x"></FontIconCaret>
                {signOut ?
                    <Container>
                        <SmallContainer ref={myRef}>
                            <h2>{
                                fire.auth().currentUser.displayName
                                ?
                                fire.auth().currentUser.displayName
                                : candidName
                            }
                            </h2>
                            <h3>{fire.auth().currentUser.email}</h3>
                            
                            <Button onClick={() => { fire.auth().signOut(); window.location.href="/"}}>Sign Out!</Button>
                        </SmallContainer>
                    </Container>
                    : null}
            </span>
        }
        else {
            if (signIn && userProfile === 'Candidate') {
                // console.log(fire.auth().currentUser, fire.auth().currentUser.displayName, fire.auth().currentUser.email)
                return (
                    <div >
                        <Candidate handleSignOut={handleSignOut} />
                        {fire.auth().currentUser.photoURL && 
                        <Image className='signIn-logo' src={fire.auth().currentUser.photoURL} alt="" />
                        }
                        <FontIconCaret ref={caretRef} iconSize='30px' topSize='35px' leftSize='296px'  onClick={() => handleSignOut()} className="fas fa-caret-down fa-2x"></FontIconCaret>
                        {signOut ?
                            <Container >
                                <SmallContainer ref={myRef}>
                                    <h2>{
                                        fire.auth().currentUser.displayName
                                            ?
                                            fire.auth().currentUser.displayName
                                            : candidName
                                    }
                                    </h2>
                                    <h3>{fire.auth().currentUser.email}</h3>
                                    <Button onClick={() => { fire.auth().signOut(); window.location.href="/"}}>Sign Out!</Button>
                                </SmallContainer>
                            </Container>
                            : null}
                        {/*<h1>Hello Candidate</h1>
                    <Navbar handleSignOut={this.handleSignOut} />
                    <Button onClick={() => fire.auth().signOut()}>Sign Out!</Button> */}
                    </div>
                )
            
            }
        }
    return (
        <div>
        
        </div>
    )
}

// class Auth extends React.Component {
//     constructor(props) {
//         super(props);
//         this.myRef = React.createRef();
//     }
//     // state = {
//     //     name: ''
//     // }
//     // componentDidMount() {
//     //     firebase.database().ref('/InitialCheckProfile').once('value').then((snap) => {
//     //         this.setState({name: snap.val()})
//     //         // setName(snap.val());
//     //         // console.log(snap.val())
//     //     })
        
//     // }
//     // constructor(props) {
//     //     super(props);
        
//     //     // this.state = {
//     //     //     // isSignedIn: false,
//     //     //     name: localStorage.getItem('name'),
//     //     //     name2: '',
//     //     //     // signOut: false,
//     //     //     // openSide: false,
//     //     // }
//     // }
//     // const [openSide, SetOpenSide] = useState(false);
//     // openSideBar = () => {
//         //     this.setState({openSide: !this.state.openSide});
//         // }
//         // handleChange = (e) => {
//         //     let target = e.target.innerText;
//         //     let setName = target;
//         //     this.setState({ name2: target })
//         //     // localStorage.setItem('name', setName);
//         //     this.setState({ name: localStorage.setItem('name', setName) })
//         // }
//         // componentDidMount(e) {
//             //     e.preventDefault();
//             // }
//             // handleSignOut = () => {
//             //     // this.setState({ signOut: true })
//             //     this.setState(prev => ({
//             //         signOut: !prev.signOut
//             //     }))
//             // }
            
//             // uiConfig = {
//             //     signInFlow: "popup",
//             //     signInOptions: [
//             //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             //         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//             //         // firebase.auth.EmailAuthProvider.PROVIDER_ID
//             //     ],
//             //     callbacks: {
//             //         signInSuccess: () => false
//             //     }
//             // }
//             // componentDidMount = () => {
//             //     firebase.auth().onAuthStateChanged(user => {
//             //         if (user) {
//             //             this.setState({isSignedIn: user });
//             //         } else {
//             //             this.setState({ user: null });
//             //         }
//             //         // this.setState({ isSignedIn: !!user });
//             //         // let target = e.target.innerText;
//             //         // this.setState({ name: target })
//             //         console.log(this.state, firebase.auth());
//             //     })
//             //     // console.log(window.innerWidth);
//             // }
//     // localStorage.getItem('name')
            
//     render() {
//         console.log(this.Ref)
//         window.addEventListener('click', e =>  {
//                 // console.log(e.x , this.Ref.current)
//                 // if (openSide && this.Ref.current && e.x > this.Ref.current.clientWidth) {
//                     // SetOpenSide(false);
//                     // console.log(e.x);
//                 // }
//             })



//         const {signIn, signOut, handleSignOut} = this.props
//         if (signIn && this.props.userProfile === 'Employer') {
//             return <span ref={this.myRef}>
//                 <Employer handleSignOut={handleSignOut} />
//                 <Image className='signIn-logo' src={fire.auth().currentUser.photoURL} alt="" />
//                 {signOut ?
//                     <Container>
//                         <SmallContainer>
//                             <h2>{fire.auth().currentUser.displayName}</h2>
//                             <h4>{fire.auth().currentUser.email}</h4>
                            
//                             <Button onClick={() => { fire.auth().signOut(); window.location.href="/"}}>Sign Out!</Button>
//                         </SmallContainer>
//                     </Container>
//                     : null}
//             </span>
//         }
//         else {
//             if (signIn &&  this.props.userProfile === 'Candidate') {
//                 return (
//                     <div ref={this.myRef}>
//                         <Candidate handleSignOut={handleSignOut} />
//                         <Image className='signIn-logo' src={fire.auth().currentUser.photoURL} alt="" />
//                         {signOut ?
//                             <Container >
//                                 <SmallContainer >
//                                     <h2>{fire.auth().currentUser.displayName}</h2>
//                                     <h4>{fire.auth().currentUser.email}</h4>
//                                     <Button onClick={() => { fire.auth().signOut(); window.location.href="/"}}>Sign Out!</Button>
//                                 </SmallContainer>
//                             </Container>
//                             : null}
//                         {/*<h1>Hello Candidate</h1>
//                     <Navbar handleSignOut={this.handleSignOut} />
//                     <Button onClick={() => fire.auth().signOut()}>Sign Out!</Button> */}
//                     </div>
//                 )
            
//             }
//         }

//         return (
//             <div className="App">
//                 {
//                     // this.state.isSignedIn && this.state.name === 'Employer' ? (
//                     //     <span>
//                     //         <Navbar />
//                     //         <div>Signed In!</div>
//                     //         <button  onClick={() => fire.auth().signOut()}>Sign Out!</button>
//                     //         <h1>Welcome {fire.auth().currentUser.displayName}</h1>
//                     //         <img className='signIn-logo' src={firebase.auth().currentUser.photoURL} alt="profile picture" />
//                     //     </span>
//                     // ) : (
//                     <div>
//                         {/*
//                         <MainContent>
//                         <Content>
//                             <Headers>
//                                 <Heading1 onClick={this.handleChange} >Employer </Heading1>
//                                 <Heading1 onClick={this.handleChange} >Candidate</Heading1>
//                             </Headers>
                            
//                             <Heading3>Register / Login as {localStorage.getItem('name')}</Heading3>

//                             {/*<Login signIn={this.state.isSignedIn} userName={localStorage.getItem('name')} />
//                         <br />
//                         <h1>Or</h1>
//                         <StyledFirebaseAuth
//                             uiConfig={this.uiConfig}
//                             firebaseAuth={firebase.auth()}
//                         />
//                         {/*<Auth name={name} />
//                         </Content>
//                         </MainContent>
//                     */}
                    
                    
//                 </div>
//             // )
//             }
//         </div>
//     );
// }
// }

const MapState = (state) => {
    // console.log(state.changeUserProfileName);
    return {
        userProfile: state.changeUserProfileName,
        personalData: state.allPersonalData,
    }
}

export default connect(MapState, {startFetchCandidatePersonalData})(Auth)




export const FontIconCaret = styled.i`
position: absolute;
font-size: 34px;
top: 38px;
right:13px;
cursor: pointer;
/* height: 15px; */
/* line-height:13px; */
z-index: 10;

&:hover {
    color: white;
}
:active {
    color: #1e6091;
    /* transform: scale(0.8); */

}

///////// remove the caret logo when size get too small //////////////////////
@media (min-width: 0px) and (max-width: 230px) {
        display: none;
}
/* border: 1px solid red; */
/* line-height: 100%; */
/* overflow: hidden; */
/* display: inline-block; */
`

const Container = styled.div`
display: flex;
flex-direction: column;
float: right;
`

const SmallContainer = styled.div`
background-color: rgba(200,200,200,1);
position: absolute;
top: 74px;
right: 2px;
z-index: 1;
/* width: auto; */
/* height: auto; */
padding: 14px;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
margin-right: 3px;
text-align: center;
align-items: center;
border-radius: 10px;
>h2 {
    /* border: 1px solid black; */
    text-overflow: ellipsis; 
    overflow: hidden;
    margin-bottom: 10px;
    font-size: 1.6rem;
}
>h3 {
    text-overflow: ellipsis; 
    overflow: hidden;
}
`

const Image = styled.img`
width: 60px;
height: 60px;
/* font-size: 40px; */
border-radius: 50%;
position: absolute;
top: 0.23rem;
right: 29.2px;
z-index: 10;
/* left: -2px; */

///////// remove the image when size get too small //////////////////////
@media (min-width: 0px) and (max-width: 230px) {
        display: none;
}
`


const Button = styled.button`
/* display: flex; */
/* align-items: center; */
/* justify-content: center; */
/* float: right; */
font-size: 1.4rem;
color: white;
background-color: #15ba53;
width: 150px;
padding: 10px;
margin-top: 0;
text-align: center;
height: auto;
/* border: 1px solid black; */
border-radius: 8px;
margin-top: 34px;
border: none;
/* margin-right: 4px; */

&:hover {
    /* background-color: #1cb3ca; */
    cursor: pointer;
    /* color */
    /* transform: rotate(5deg); */
    /* scale: 1; */
}
&:focus {
    /* background-color: blue; */
    /* transform: scale(0.9); */
    /* background-color: '#15ba53'; */
}
`

// const Heading3 = styled.h3`
// margin-bottom: 10px;
// font-size: 1.3rem;
// /* background-color: white; */
// `