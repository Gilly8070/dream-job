import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Sidebar = ({ openSideBar }) => {
    return (
        <div>
            
                <MainContainer>
                    <SmallContainer>
                        <ListStyle>
                            <Link to='/' onClick={openSideBar}  style={{ textDecoration: 'none', color: 'black' }}>
                                Dashboard
                            </Link>
                        </ListStyle>
                        <ListStyle>
                            <Link to='/offer' onClick={openSideBar}  style={{ textDecoration: 'none', color: 'black' }}>
                                Offer
                            </Link>
                        </ListStyle>
                        <ListStyle>
                            <Link to='/resume' onClick={openSideBar}  style={{ textDecoration: 'none', color: 'black' }}>
                                Resume
                            </Link>
                    </ListStyle>
                    <ListStyle>
                            <Link to='/appliedJob' onClick={openSideBar}  style={{ textDecoration: 'none', color: 'black' }}>
                                Applied Jobs
                            </Link>
                    </ListStyle>
                    <ListStyle>
                            <Link to='/MapJob' onClick={openSideBar}  style={{ textDecoration: 'none', color: 'black' }}>
                                Map Jobs
                            </Link>
                    </ListStyle>
                    <ListStyle>
                            <Link to='/liveJob' onClick={openSideBar}  style={{ textDecoration: 'none', color: 'black' }}>
                                Live Jobs
                            </Link>
                        </ListStyle>
                    </SmallContainer> 
                </MainContainer>
            
        </div>
    )
}

export default Sidebar;



const MainContainer = styled.div`
/* position: fixed; */
/* left: 0;  */
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #C9D6FF;
width: 400px;
height: 100vh;
cursor: pointer;
/* display: grid; */
/* grid-template-rows: auto 1fr auto; */
/* row-gap: 1rem; */
line-height: 1.5;
/* margin: 30px */
/* border: 1px solid white; */
transform: translateX(0);
transition: transform 2s;
@media (max-width: 826px ) {
    width: 300px;
    height: 100%;
    /* align-items: space-between; */
    /* justify-content: space-around; */
}
`

const SmallContainer = styled.ul`
display: flex;
flex-direction: column;
margin-top: 10px;
padding: 10px;
@media (max-width: 826px ) {
    /* width: 300px; */
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    /* align-items: ; */
    justify-content: space-between;
    /* align-items: center; */
}
/* justify-content: space-between; */
/* align-items: center; */
/* text-align: center; */
/* text-decoration:none; */
/* display: inline-block; */
/* padding: 20px 30px; */
/* margin: 20px; */
`

const ListStyle = styled.li`
/* text-align: center; */
margin: 30px;
padding: 20px 30px;
padding: 1.4rem 1.5rem;
font-size: 1.8rem;
font-family: sans-serif;
/* text-decoration: none; */
list-style: none;
/* display: inline-block; */

/* color: red; */



&:hover {
/* display: inline-block; */
    /* border: 1px solid black; */
    /* position: absolute; */
    /* position: relative; */
    /* left: 0; */
    /* right: 0; */
    /* display: flex; */
    /* flex */
    font-size: 1.7rem;
    /* width: 400px; */
    /* padding: 1.75rem; */
    /* margin: 0; */
    /* border-bottom: 1px solid red; */
    color: red;
    background-color: white;
    border-radius: 10px;
    /* padding: 10px 0; */
    /* color: white; */
    /* display: block; */
    /* background-color: ; */
    /* padding: 1rem 1.5rem; */
    /* transition: all 0.3s linear; */
    /* border-radius: 9px; */

}
&:active {
    color: red;
}
&:focus {
    color: red;
}

/* border-bottom: none; */
`

// const StyleLink = styled.ink`
// color: white
// `