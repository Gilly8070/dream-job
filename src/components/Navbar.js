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
    const handleEmail = () => {
        window.location.href = `mailto:${''}`;
    }
    return (
        <React.Fragment>
        <Container>
                <NavContainer className='container'>
                    <FontIconSide iconColor='#00DE00'  aria-hidden="true" onClick={openSideBar} className="fas fa-bars hamburger fa-4x icon"></FontIconSide>
                <LogoImage className='image-logo' src={logo} alt="logo" />
                    <FontIconEmail onClick={handleEmail} iconSize='30px' topSize='15px' leftSize='170px' className="fas fa-envelope email">
                    </FontIconEmail>
                    <p></p>
                    <div>
                <FontIconCircle iconSize='50px' topSize='7px' leftSize='250px'  className="far fa-user-circle fa-4x"></FontIconCircle>
    {/*<FontIconCaret iconSize='30px' topSize='35px' leftSize='296px'  onClick={() => handleSignOut()} className="fas fa-caret-down fa-2x"></FontIconCaret> */}
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
/* position: relative; */
@media (max-width: 320px) {
/* z-index: 999; */
/* position: relative; */
/* top: 0; */
/* left: 0; */
/* top: 70px; */
/* left: 0; */
/* position: fixed; */
/* top: 0; */
/* left: 0; */
}

/* margin-left: 40px; */
`


export const NavContainer = styled.nav`
display: flex; //////////////
flex-direction: row;
justify-content: space-between;
align-content: space-between;
/* position: relative; */
background-color: rgb(133, 170, 170);
height: 70px;
width: 100%;
position: fixed;
z-index: 10;

>span {
}
>p {
    border-left: 5px solid black;
    position: absolute;
    border-radius: 100%;
    height: 57px;
    top: 6.5px;
    /* bottom: 18px; */
    /* top: 30px; */
    right: 140px;
}

///////// remove the line when size get too small //////////////////////
@media (min-width: 0px) and (max-width: 430px) {
        >p {
            display: none;
        }
    }
/* top: 0; */
/* top: 70px; */
/* background-color: rgb(166, 170, 170); */

/* @media (min-width: 576px) {
display: flex; //////////////
flex-direction: row;
justify-content: space-between;
align-content: space-between;
height: 70px;
width: 100%;
position: fixed;
} */


`

const Div = styled.div`
    >p {
    /* border-right: 200px solid black; */
    /* background-color: black; */
    /* width: 300px; */
    /* height: 300px; */
    /* height: 500px; */
    /* z-index: 12222; */
    content: '';
    display: block;
    }
`;


// export const FontIcon = styled.i`
/* position: absolute; */
/* top: ${props => props.topSize || '14px'}; */
/* left: ${props => props.leftSize || '0'}; */

/* font-size: ${props => props.iconSize || '50px'}; */
/* color: ${props => props.iconColor || '#000000'}; */

/* @media (max-width: 320px) { */

    /* position: absolute;
top: ${props => props.topSize || '30px'};
left: ${props => props.leftSize || '30px'};

font-size: ${props => props.iconSize || '30px'};
color: ${props => props.iconColor || '#000000'}; */

/* }
` */

export const FontIconSide = styled.i`

position: absolute;
font-size: 42px;
top: 15px;
left: 2px;
cursor: pointer;
/* height: 36px; */
/* line-height: 36px; */

/* border: 1px solid black; */


&:hover {
    color: white;
}
:active {
    transform: scale(0.9);
    color: #1e6091;
}
/* border: none; */
/* margin-top: 0; */
/* border: 1px solid red; */
/* box-sizing: content-box; */
/* overflow: hidden; */
/* line-height: 90%; */
/* border-radius: 30%; */
/* margin: 10px; */
/* padding: -4px; */
/* margin: -4px; */
`
export const FontIconEmail = styled.i`
position: absolute;
font-size: 40px;
top: 15px;
right: 200px;
cursor: pointer;
/* height: 32px; */
/* line-height: 32px; */

>div {
    z-index: 12;
    border-right: 4px solid black;
    padding-right: 30px;
    top: 30;
    position: absolute;
    right: 250px;
}
/* margin-right: 30px; */
&:hover {
    color: white;
}
:active {
    color: #1e6091;
}
/* left: 400px; */
/* line-height: 80%; */

///////// remove the email logo when size get too small //////////////////////
@media (min-width: 0px) and (max-width: 430px) {
        display: none;
}
`
export const FontIconCircle = styled.i`
position: absolute;
font-size: 60px;
top: 4px;
right: 30px;

///////// remove the circle logo when size get too small //////////////////////
@media (min-width: 0px) and (max-width: 230px) {
        display: none;
}
`




// export const FontIconCaret = styled.i`
// position: absolute;
// font-size: 34px;
// top: 48px;
// right:7px;
// cursor: pointer;
// height: 15px;
// line-height:11px;
// `


export const LogoImage = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
position: absolute;
top: 2px;
left: 120px;

/* color: blue; */
/* border: 2px solid black; */
    
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
