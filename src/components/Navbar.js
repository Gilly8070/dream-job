import React from 'react';
import '../styles/Navbar.css';
import logo from '../images/find.jpg';
// import Sidebar from './employer/sidebar/Sidebar';
// import Sidebar from '../components/employer/sidebar/Sidebar';

// import { useEffect } from 'react';
// import styled from 'styled-components';

const Navbar = ({ handleSignOut, openSideBar }) => {
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    // // useEffect((e) => {
    // //     e.preventDefault();
    // // }, []);
    // const handleSidebar = () => {
    //     setSidebarOpen(!sidebarOpen);
    // }

    return (
        <React.Fragment>
        <nav className='container'>
                <i onClick={openSideBar} className="fas fa-bars fa-3x hamburger"></i>
                <img className='image-logo' src={logo} alt="logo" />
                <i className="fas fa-envelope fa-3x email"></i>
                <div className='user-icon'>
                <i className="far fa-user-circle fa-4x"></i>
                <i onClick={() => handleSignOut()} className="fas fa-caret-down fa-2x"></i>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;

// <style>
//     div {
//         background-Color: red;
//     },
//     .image-size {
        
// }
// </style>

// const showSign = styled.div`

// `