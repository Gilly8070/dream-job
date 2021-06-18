import React, { Component } from 'react';
import Auth from './components/Auth';
import fire from './config/fire';
import Login from './login/Login';
// import firebase from 'firebase';

// import { BrowserRouter,Route, Switch } from 'react-router-dom';
// import Dashboard from './components/employer/sidebar/Dashboard';
// import Jobs from './components/jobComponents/Jobs';
// import AddJob from './components/jobComponents/AddJob';
// import Search from './components/jobComponents/Search';
// import Filter from './components/jobComponents/Filter';
// import SingleJob from './components/jobComponents/SingleJob';
// import Sidebar from './components/employer/sidebar/Sidebar';
// import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';
// import Sidebar from './components/employer/sidebar/Sidebar';

// import Navbar from '../'
// import styled from 'styled-components';
// import Dashboard from './components/employer/Dashboard';
// import LoginPage from './components/employer/LoginPage';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        user: null,
        isSignedIn: false,
        // name: localStorage.getItem('name'),
        signOut: false,
        // data: null,
        // database = firebase.database(),
        };

        // this.authListener = this.authListener.bind(this);
        // const database = firebase.database();
    }

    componentDidMount() {
        this.authListener();
    }
    // componentDidMount() {
    //     console.log('started');
    //     firebase.database()
    //         .ref('Jobs')
    //         .once('value', (snapshot) => {
    //             const exp = [];
    //             snapshot.forEach((childSnap) => {
    //                 exp.push({
    //                     id: childSnap.key,
    //                     ...childSnap.val()
    //                 })
    //             })
    //             this.setState({data: exp})
    //             // setFetchFirebaseJobs(exp);
    //             // console.log(fetchFirebaseJobs, '1');
    //         })
    //         console.log(this.state.data, '1');
    // }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ user, isSignedIn: true });
            console.log(this.state, fire.auth());
        } else {
            this.setState({ user: null, isSignedIn: false });
        console.log(this.state, fire.auth());

        }
        })
        // console.log(this.state, fire.auth());
    }
    handleSignOut = () => {
                // this.setState({ signOut: true })
                this.setState(prev => ({
                    signOut: !prev.signOut
                }))
    }
    // useEffect((e) => {
        
    // })
    // state = {
    //     openSide: false
    // }
    // // const [openSide, SetOpenSide] = useState(false);
    // openSideBar = () => {
    //     this.setState({openSide: !this.state.openSide});
    // }
    render() {
        // console.log(this.state.data, '2');
        return (
            <div>
            { this.state.user ? (<Auth signIn={this.state.isSignedIn} signOut={this.state.signOut} handleSignOut={this.handleSignOut} />) : ( <Login /> ) }
            </div>
            // <BrowserRouter>
            //     <Switch>
            //         <Route exact path="/">
            //             <Auth />   
            //         </Route>
            //         <Route exact path="/jobs">
            //             <Jobs />
            //         </Route>
            //         <Route exact path='/addJob'>
            //             <AddJob />
            //         </Route>
            //         <Route exact path='/search'>
            //             <Search />
            //         </Route>
            //         <Route exact path='/filter'>
            //             <Filter />
            //         </Route>
            //         <Route exact path='/singleJob/:title' component={SingleJob} />
            //     </Switch>
            //     {/* <Dashboard /> */}
            //     {/*<LoginPage />*/}
            // </BrowserRouter>
        )
    }
}

export default App;


// font Awesome
// <i class="fas fa-cog fa-5x"></i>


// const Container = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// margin: 0;
// padding: 0;
// /* float: 1; */
// flex: 0;
// `

