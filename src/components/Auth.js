import React from 'react';
// import Navbar from './Navbar';
// import firebase from 'firebase';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import LoginPage from './LoginPage';
// import { Content, MainContent, Headers, Heading1 } from '../styles/StyleAuth';
import styled from 'styled-components';
import Employer from './employer/Employer';
import Candidate from './candidate/Candidate';
import fire from '../config/fire'
import firebase from 'firebase';

import { connect } from 'react-redux';
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

class Auth extends React.Component {

    // state = {
    //     name: ''
    // }
    // componentDidMount() {
    //     firebase.database().ref('/InitialCheckProfile').once('value').then((snap) => {
    //         this.setState({name: snap.val()})
    //         // setName(snap.val());
    //         // console.log(snap.val())
    //     })
        
    // }
    // constructor(props) {
    //     super(props);
        
    //     // this.state = {
    //     //     // isSignedIn: false,
    //     //     name: localStorage.getItem('name'),
    //     //     name2: '',
    //     //     // signOut: false,
    //     //     // openSide: false,
    //     // }
    // }
    // const [openSide, SetOpenSide] = useState(false);
    // openSideBar = () => {
        //     this.setState({openSide: !this.state.openSide});
        // }
        // handleChange = (e) => {
        //     let target = e.target.innerText;
        //     let setName = target;
        //     this.setState({ name2: target })
        //     // localStorage.setItem('name', setName);
        //     this.setState({ name: localStorage.setItem('name', setName) })
        // }
        // componentDidMount(e) {
            //     e.preventDefault();
            // }
            // handleSignOut = () => {
            //     // this.setState({ signOut: true })
            //     this.setState(prev => ({
            //         signOut: !prev.signOut
            //     }))
            // }
            
            // uiConfig = {
            //     signInFlow: "popup",
            //     signInOptions: [
            //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //         // firebase.auth.EmailAuthProvider.PROVIDER_ID
            //     ],
            //     callbacks: {
            //         signInSuccess: () => false
            //     }
            // }
            // componentDidMount = () => {
            //     firebase.auth().onAuthStateChanged(user => {
            //         if (user) {
            //             this.setState({isSignedIn: user });
            //         } else {
            //             this.setState({ user: null });
            //         }
            //         // this.setState({ isSignedIn: !!user });
            //         // let target = e.target.innerText;
            //         // this.setState({ name: target })
            //         console.log(this.state, firebase.auth());
            //     })
            //     // console.log(window.innerWidth);
            // }
    // localStorage.getItem('name')
            
    render() {
        const {signIn, signOut, handleSignOut} = this.props
        if (signIn && this.props.userProfile === 'Employer') {
            return <span>
                <Employer handleSignOut={handleSignOut} />
                <Image className='signIn-logo' src={fire.auth().currentUser.photoURL} alt="" />
                {signOut ?
                    <Container>
                        <SmallContainer>
                            <h2>{fire.auth().currentUser.displayName}</h2>
                            <h4>{fire.auth().currentUser.email}</h4>
                            
                            <Button onClick={() => { fire.auth().signOut(); window.location.href="/"}}>Sign Out!</Button>
                        </SmallContainer>
                    </Container>
                    : null}
            </span>
        }
        else {
            if (signIn &&  this.props.userProfile === 'Candidate') {
                return (
                    <div>
                        <Candidate handleSignOut={handleSignOut} />
                        <Image className='signIn-logo' src={fire.auth().currentUser.photoURL} alt="" />
                        {signOut ?
                            <Container>
                                <SmallContainer>
                                    <h2>{fire.auth().currentUser.displayName}</h2>
                                    <h4>{fire.auth().currentUser.email}</h4>
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
            <div className="App">
                {
                    // this.state.isSignedIn && this.state.name === 'Employer' ? (
                    //     <span>
                    //         <Navbar />
                    //         <div>Signed In!</div>
                    //         <button  onClick={() => fire.auth().signOut()}>Sign Out!</button>
                    //         <h1>Welcome {fire.auth().currentUser.displayName}</h1>
                    //         <img className='signIn-logo' src={firebase.auth().currentUser.photoURL} alt="profile picture" />
                    //     </span>
                    // ) : (
                    <div>
                        {/*
                        <MainContent>
                        <Content>
                            <Headers>
                                <Heading1 onClick={this.handleChange} >Employer </Heading1>
                                <Heading1 onClick={this.handleChange} >Candidate</Heading1>
                            </Headers>
                            
                            <Heading3>Register / Login as {localStorage.getItem('name')}</Heading3>

                            {/*<Login signIn={this.state.isSignedIn} userName={localStorage.getItem('name')} />
                        <br />
                        <h1>Or</h1>
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                        {/*<Auth name={name} />
                        </Content>
                        </MainContent>
                    */}
                    
                    
                </div>
            // )
            }
        </div>
    );
}
}

const MapState = (state) => {
    // console.log(state.changeUserProfileName);
    return {
        userProfile: state.changeUserProfileName
    }
}

export default connect(MapState, null)(Auth)



const Container = styled.div`
display: flex;
flex-direction: column;
float: right;
`

const SmallContainer = styled.div`
background-color: #bdc1ba;
position: absolute;
top: 90px;
right: 0px;
z-index: 1;
width: auto;
height: auto;
padding: 50px;
margin-right: 3px;
text-align: center;
align-items: center;
border-radius: 10px;
`

const Image = styled.img`
width: 65px;
height: 65px;
border-radius: 50%;
position: absolute;
top: 7px;
right: 21px;
/* left: -2px; */
`


const Button = styled.button`
/* display: flex; */
/* align-items: center; */
/* justify-content: center; */
/* float: right; */
font-size: 1.5rem;
color: black;
background-color: #6dd6e7;
width: auto;
padding: 7px;
margin-top: 0;
text-align: center;
height: auto;
border: 1px solid black;
border-radius: 8px;
margin-top: 54px;
/* margin-right: 4px; */

&:hover {
    background-color: #1cb3ca;
    transform: rotate(5deg);
    /* scale: 1; */
}
&:focus {
    /* background-color: blue; */
    transform: scale(0.9);
}
`

// const Heading3 = styled.h3`
// margin-bottom: 10px;
// font-size: 1.3rem;
// /* background-color: white; */
// `