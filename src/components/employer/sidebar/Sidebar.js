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
                        <span>Navigation</span>
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

@media (max-width: 320px ) {
height: 100vh;
width: 160px;
line-height: 1.5;
/* background-color: red; */
background-color: #F5A04E;

}
`

const SmallContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;

>span {
    margin-top: 15px;
    margin-left: 14px;
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.8;
    /* border: 1px solid black; */
    :hover {
        /* color: white; */
    }
}

@media (max-width: 320px ) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
}
`

const ListStyle = styled.li`
margin: 20px 0;
padding: 20px 0;
padding-left: 60px;
font-size: 1.8rem;
font-family: sans-serif;
/* cursor: pointer; */


@media (max-width: 320px ) {
font-size: 0.8rem;
padding: 20px 0;
margin: 20px 0;
padding-left: 40px;
/* margin-right: 10px; */
/* cursor: pointer; */
/* background-color: coral; */
/* text-decoration: none; */

&:hover {
    /* font-size: 1.7rem; */
    color: red;
    background-color: white;

}

}


&:hover {
    /* font-size: 1.7rem; */
    color: red;
    background-color: white;

}
/* &:active {
    color: red;
}
&:focus {
    color: red;
} */
`

const StyleLink = styled(Link)`
text-decoration: none;
color: black;
&:hover {
    color: #4CC261;
cursor: pointer;

}

@media (max-width: 320px) {

text-decoration: none;
color: black;
&:hover {
    color: #4CC261;
}
}

`;
