import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Sidebar = ({ openSideBar }) => {
    return (
        <div>
            
                <MainContainer>
                <SmallContainer>
                    <span>Navigation</span>
                    <ListStyle>
                            <StyleLink to='/' onClick={openSideBar} >
                                Dashboard
                            </StyleLink>
                    </ListStyle>
                    <ListStyle>
                        <StyleLink to='/interview' onClick={openSideBar}>
                            Interview
                        </StyleLink>
                    </ListStyle>
                        <ListStyle>
                            <StyleLink to='/offer' onClick={openSideBar} >
                                Offer
                            </StyleLink>
                        </ListStyle>
                        <ListStyle>
                            <StyleLink to='/resume' onClick={openSideBar} >
                                Resume
                            </StyleLink>
                    </ListStyle>
                    <p></p>
                    <span>Jobs</span>
                    <ListStyle>
                            <StyleLink to='/appliedJob' onClick={openSideBar} >
                                Applied Jobs
                            </StyleLink>
                    </ListStyle>
                    <ListStyle>
                            <StyleLink to='/MapJob' onClick={openSideBar} >
                                Map Jobs
                            </StyleLink>
                    </ListStyle>
                    <ListStyle>
                            <StyleLink to='/liveJob' onClick={openSideBar} >
                                Live Jobs
                            </StyleLink>
                            </ListStyle>
                        <p></p>
                    </SmallContainer> 
                </MainContainer>
            
        </div>
    )
}

export default Sidebar;



const MainContainer = styled.div`
/* position: fixed; */
/* left: 0;  */
/* display: flex; */
/* flex-direction: column; */
/* justify-content: space-between; */
/* align-items: center; */
background-color: #F5A04E;
width: 300px;
height: 100vh;
line-height: 1.5;
/* background-color: #C9D6FF; */
/* cursor: pointer; */
/* display: grid; */
/* grid-template-rows: auto 1fr auto; */
/* row-gap: 1rem; */
/* margin: 30px */
/* border: 1px solid white; */
/* transform: translateX(0); */
/* transition: transform 2s; */
@media (min-width: 576px) {
    width: 300px;
    height: 100vh;
/* background-color: #C9D6FF; */
/* background-color: #C9D6FF; */

    /* align-items: space-between; */
    /* justify-content: space-around; */
}

@media (min-width: 768px) {
    /* width: 300px; */
    /* height: 100vh; */

/* background-color: #C9D6FF; */
/* background-color: #F5A04E; */

    /* align-items: space-between; */
    /* justify-content: space-around; */
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

    :hover {
        /* color: white; */
    }
    /* border: 1px solid black; */
}
>p {
    :after {
        display: block;
        content: '';
        border-bottom: 3px solid black;
        border-radius: 100%;
        margin: 15px 10px;
    }
    /* margin-top: 5px; */
    /* padding-bottom: 2px; */
}
/* margin-top: 10px; */
/* padding: 10px; */
/* @media (max-width: 826px ) { */
    /* width: 300px; */
    /* height: 100%; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: ; */
    /* justify-content: space-between; */
    /* align-items: center; */
/* } */
/* justify-content: space-between; */
/* align-items: center; */
/* text-align: center; */
/* text-decoration:none; */
/* display: inline-block; */
/* padding: 20px 30px; */
/* margin: 20px; */
`

const ListStyle = styled.li`
margin: 10px 0;
padding: 20px 0;
padding-left: 60px;
font-size: 1.8rem;
font-family: sans-serif;
/* cursor: pointer; */
/* border: 1px solid black; */

/* display: flex; */
/* padding-left: 10px; */
&:hover {
    /* font-size: 1.7rem; */
    color: red;
    background-color: white;

}

>i {
    /* margin-right: 20px;
    text-align: center;
    color: black;
margin-top: 5px;
border: 1px solid black; */

}

/* text-align: center; */
/* margin: 30px;
padding: 20px 30px;
padding: 1.4rem 1.5rem;
font-size: 1.8rem;
font-family: sans-serif; */
/* text-decoration: none; */
/* list-style: none; */
/* display: inline-block; */

/* color: red; */



/* &:hover { */
/* display: inline-block; */
    /* border: 1px solid black; */
    /* position: absolute; */
    /* position: relative; */
    /* left: 0; */
    /* right: 0; */
    /* display: flex; */
    /* flex */
    /* font-size: 1.7rem; */
    /* width: 400px; */
    /* padding: 1.75rem; */
    /* margin: 0; */
    /* border-bottom: 1px solid red; */
    /* color: red;
    background-color: white;
    border-radius: 10px; */
    /* padding: 10px 0; */
    /* color: white; */
    /* display: block; */
    /* background-color: ; */
    /* padding: 1rem 1.5rem; */
    /* transition: all 0.3s linear; */
    /* border-radius: 9px; */

/* } */
/* &:active {
    color: red;
}
&:focus {
    color: red;
} */

/* border-bottom: none; */
`

// const StyleLink = styled.ink`
// color: white
// `



const StyleLink = styled(Link)`
text-decoration: none;
/* border: 1px solid black; */
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