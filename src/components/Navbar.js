import React from 'react';
// import '../styles/Navbar.css';
import logo from '../images/find.jpg';
import styled from 'styled-components';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Sidebar from './employer/sidebar/Sidebar';
// import Sidebar from '../components/employer/sidebar/Sidebar';

// import { useEffect } from 'react';
// import styled from 'styled-components';
// import { ImSpinner } from 'react-icons/im';
// import { FaBeer } from "@react-icons/all-files/fa/BiLoaderCircle

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
            <Container>
            <NavContainer className='container'>
                <FontIcon iconSize='30px' topSize='15px' leftSize='5px' iconColor='#00DE00' zInd='999' onClick={openSideBar} className="fas fa-bars fa-3x hamburger icon"></FontIcon>
                <LogoImage className='image-logo' src={logo} alt="logo" />
                <FontIcon iconSize='30px' topSize='15px' leftSize='170px' className="fas fa-envelope fa-3x email"></FontIcon>
                <div className='user-icon'>
                <FontIcon iconSize='50px' topSize='7px' leftSize='250px'  className="far fa-user-circle fa-4x"></FontIcon>
                <FontIcon iconSize='30px' topSize='35px' leftSize='296px'  onClick={() => handleSignOut()} className="fas fa-caret-down fa-2x"></FontIcon>
                </div>
                </NavContainer>
            </Container>
                
        </React.Fragment>
    )
}

export default Navbar;

// @media (min-width: 320px) {}
// export const Button = styled.button``

export const Container = styled.div`
position: relative;
@media (max-width: 320px) {
/* z-index: 999; */
/* position: relative; */
/* top: 0; */
/* left: 0; */
/* top: 70px; */
/* left: 0; */
}
`


export const NavContainer = styled.nav`
display: flex; //////////////
flex-direction: row;
background-color: rgb(133, 170, 170);
height: 70px;
width: 100%;
position: fixed;
z-index: 10;

/* top: 70px; */

@media (max-width: 320px) {
display: flex; //////////////
flex-direction: row;
background-color: rgb(166, 170, 170);
height: 70px;
width: 100%;
position: fixed;
}
`


export const FontIcon = styled.i`
top: ${props => props.topSize || '30px'};
left: ${props => props.leftSize || '30px'};

font-size: ${props => props.iconSize || '30px'};
color: ${props => props.iconColor || '#000000'};

@media (max-width: 320px) {
    position: absolute;
top: ${props => props.topSize || '30px'};
left: ${props => props.leftSize || '30px'};

font-size: ${props => props.iconSize || '30px'};
color: ${props => props.iconColor || '#000000'};

}
`
export const LogoImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 60px;
    color: blue;
    border: 2px solid black;
    
@media (max-width: 320px) {
/* width: ${props => props.iconSize || '30px'}; */
/* width: ${props => props.iconSize || '30px'}; */
width: 50px;
height: 50px;
border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 60px;
    color: blue;
    border: 2px solid black;
}
`
