import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
// import Dashboard from './Dashboard';
// import Jobs from './Jobs';
import styled, { keyframes } from 'styled-components';

const Sidebar = ({ openSideBar, openSide }) => {

    return (
        <div>
            {
                // openSide &&
                <MainContainer openSide='openSide'>
                    <SmallContainer>
                        <ListStyle>
                            <StyleLink to='/' onClick={openSideBar} >
                                Dashboard
                            </StyleLink>
                        </ListStyle>
                        <ListStyle>
                            <StyleLink to='/jobs'>
                                Jobs
                            </StyleLink>
                        </ListStyle>
                        <ListStyle>
                            <StyleLink to='/candidate'>
                                Candidate
                            </StyleLink>
                        </ListStyle>
                        <ListStyle>
                            <StyleLink to='/approvals'>
                                Approvals
                            </StyleLink>
                        </ListStyle>
                    </SmallContainer> 
                    </MainContainer>
                    
                    // : null
            }
        </div>
    )
}

export default Sidebar;


const MainContainer = styled.div`

height: 100vh;
width: 300px;
line-height: 1.5;
background-color: #F5A04E;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between; */

@media (max-width: 320px ) {
height: 100vh;
width: 150px;
line-height: 1.5;
background-color: red;

}
`

const SmallContainer = styled.ul`
/* @media (max-width: 826px ) { */
/* display: grid; */
/* grid-template-columns: repeat(autofit, minmax(230px, 1fr)); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    /* margin: 30px; */
    /* padding: 70px; */
    /* padding-left: 30px; */
    /* /* float: 1; */
    /* floa */
    /* flex-grow: 2; */
/* position: relative; */

    /* height: 100vh; */
/* } */

@media (max-width: 320px ) {
    /* width: 300px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    /* margin-top: 10px; */
    /* padding: 10px; */
}

/* &:hover {
background-color: blanchedalmond;
} */
`

const ListStyle = styled.li`
/* margin: 30px 50px; */
/* display: flex; */
/* flex-direction: column; */
/* align-content: space-between; */
/* justify-content: space-between; */
/* align-items: flex-start; */
/* align-self: inherit; */
/* padding: 30px 30px; */
/* margin-top: 20px; */
/* margin-bottom: 20px; */
/* display: block; */
/* padding: 1.4rem 1.5rem; */
/* margin-top: 20px;
margin-bottom: 20px;
padding-top: 20px;
padding-bottom: 20px; */
/* position: fixed; */
/* margin: 20px; */
/* padding: 20px; */
margin: 20px 0;
/* margin-bottom: 20px; */
padding: 20px 0;
/* padding-top: 20px; */
padding-left: 60px;
font-size: 1.8rem;
font-family: sans-serif;
/* list-style: none; */
cursor: pointer;
/* width: 100px; */
/* height: 150px; */
/* align-self: flex-end; */
/* width: 100px; */

@media (max-width: 320px ) {
font-size: 0.8rem;
padding: 8px;
margin: 10px;
/* padding: 1.4rem 1.5rem; */
margin-right: 10px;
cursor: pointer;
background-color: coral;
text-decoration: none;

/* text-align: center; */
}


&:hover {
    /* font-size: 1.7rem; */
    color: red;
    background-color: white;
/* display: inline-block; */

    /* width: 400px; */
    /* margin: -20px; */
    /* padding: -25px -50px; */
/* position: absolute; */
/* top: 0; */
/* left: 0; */


    /* margin: 100px; */
    /* margin: 4px 20px 4px 20px; */
    /* padding: 20px 100px 20px 50px; */
    /* border-radius: 10px; */
    /* margin: 0; */
    /* width: 200px; */
}
&:active {
    color: red;
}
&:focus {
    color: red;
}
`

const StyleLink = styled(Link)`
text-decoration: none;
color: black;
/* margin: 30px 30px; */
/* padding-top: 220px; */
&:hover {
/* height: 150px; */
    /* background-color: black; */
    color: #4CC261;
/* text-transform: none; */
    /* font-size: 1.7rem; */
    /* color: red; */
    /* margin: 0; */
    /* padding: 20 50 20 50; */
    /* text-decoration: none; */
    /* border: 1px solid #ccc; */
    /* color: 'black'; */
    /* background-color: white; */
    /* width: 300px;
    padding: 25px;
    margin: 25px; */
}
`;
