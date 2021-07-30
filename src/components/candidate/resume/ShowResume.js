import React from 'react';
import CurrentJob from './resumeSection/CurrentJob';
import Experience from './resumeSection/Experience';
import Skills from './resumeSection/Skills';
import About from './resumeSection/About';
import { useState, useEffect } from 'react';
import Spinner from '../../Spinner';
import styled from 'styled-components';

// import { connect } from 'react-redux';
// import { startSetResume } from '../../../actions/action';

const ShowResume = ({ data }) => {

    const [showExp, setShowExp] = useState(true);
    const [showSkill, setShowSkill] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [loading, setLoading] = useState(true);
    const [checkState, setCheckState] = useState('showExp');

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)

        if (showExp) {
                setCheckState('exp')
            }
            if (showSkill) {
                setCheckState('skill')
            }
            if (showAbout) {
                setCheckState('about')
            }
    }, [loading, showExp, showSkill, showAbout])

    // let data2 = data[0];
    // let arr = [];
     // console.log(resumeData)
    // useEffect(() => {
        // startSetResume()
            // .then((data) => {
            // // const data = await datas
            // console.log(data);
        // }

        // )
        // console.log('resume')
    // }, [])
    // console.log(data.includes(data[0][1]));
    if (loading) {
        // return <div style={{marginTop: '10px', marginLeft: '10px', marginBottom: '10px'}}><Spinner  size={3} /></div>
    }
    const { firstName, lastName, summary } = data[0][0];
    // console.log(data)

    window.addEventListener('resize', e => {
        console.log(e.target.innerWidth)
    })
    return (
        // { resumeData &&
        <ResumeContainer>
            <CurrentJobContainer>
            <CurrentJob CurrentDetails={data[0][3]} AboutDetails={data[0][0]} />
            </CurrentJobContainer>
            <OtherDetailsContainer>
        <h1>{firstName} {lastName}</h1>
                <p>{summary}</p>

            <OuterButtonContainer>
                    <ButtonContainer>
                        <div>
                        <Button bgColor={showExp && 'exp'} onClick={() => { setShowExp(true); setShowSkill(false); setShowAbout(false); }}>Experience</Button> {' '}
                        <DisplayLine size='40px' bgColor={showExp && 'exp'}></DisplayLine>
                        </div>
                        <div>
                        <Button  bgColor={showSkill && 'skill'} onClick={() => { setShowExp(false); setShowSkill(true); setShowAbout(false); }}>Skill</Button> {' '}
                        <DisplayLine size='29px' bgColor={showSkill && 'skill'}></DisplayLine>
                        </div>
                        <div>
                        <Button bgColor={showAbout && 'about'} onClick={() => { setShowExp(false); setShowSkill(false); setShowAbout(true); }}>About</Button> {' '}
                        <DisplayLine size='33px' bgColor={showAbout && 'about'}></DisplayLine>
                        </div>
                        
                </ButtonContainer>
            </OuterButtonContainer>
            <div>
                {
                    showExp && !showSkill && !showAbout &&
                    <Experience ExperienceDetails={data[0][2]} />
                }
                {
                    !showExp && showSkill && !showAbout &&
                    <Skills  SkillDetails={data[0][1]} />
                }
                {
                    !showExp && !showSkill && showAbout &&
                    <About AboutDetails={data[0][0]}  />
                }
                </div>
            </OtherDetailsContainer>
                
        </ResumeContainer>
            // }
    )
}

export default ShowResume;


const ResumeContainer = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin: 5px;
display: flex;
flex-direction: column;
display: grid;
    grid-gap: 10px;
margin-top: 17px;
/* justify-content: space-between; */
/* align-content: space-between; */
@media (min-width: 768px) {
/* display: grid; */
/* display: row; */
    /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
    /* grid-template-columns: 30% 70%; */
    grid-template-columns: 320px calc(100% - 320px);

    grid-gap: 10px;
flex-direction: row;
    /* margin-left: 2%; */
/* font-size: 2rem; */
/* display: grid; */
/* grid-template-columns: 20% 80%; */
}
@media (min-width: 992px) {
    /* grid-template-columns: 30% 70%; */

    grid-template-columns: 350px calc(95% - 350px);
    /* justify-content: space-around; */
    grid-gap: 20px;
    margin-left: 2%;
    padding-right: 5%;

}
@media (min-width: 1200px) {
/* display: grid; */
/* margin-right: 8%; */
padding-right:8%;

/* grid-template-columns: 25% 75%; */
}
@media (min-width: 1600px) {
    /* font-size: 1.5rem; */
}
`;



const CurrentJobContainer = styled.div`
/* border: 1px solid black; */

`;

const OtherDetailsContainer = styled.div`
margin: 5px;
/* border: 1px solid black; */
@media (min-width: 768px) {
    margin-top: 10px;
    margin-right: 3%;
}
@media (min-width: 992px) {
    margin-left: 10px;
}
>h1 {
    margin-left: 10px;
    text-overflow: ellipsis; 
    overflow: hidden;
}
>p {
    margin-top: 12px;
    margin-left: 10px;
    text-overflow: ellipsis; 
    overflow: hidden;
    font-size: 1.12rem;
}
`;


const OuterButtonContainer = styled.div`
display: flex;
flex-direction: row;
margin: 4px;
margin-top: 20px;
margin-bottom: 8px;
/* border: 1px solid black; */
margin-right: 9px;

`

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
/* margin-bottom: 8px; */
margin-top: 10px;
`
const Button = styled.span`
margin: 6px;
/* margin-left: 18px; */
margin-right: 30px;
/* padding: 0; */
/* padding-top: 0; */
/* padding-bottom: 0px; */
border: none;
font-size: 1.2rem;
border-radius: 5px;
color: black;
cursor: pointer;
/* border: 1px solid black; */
/* font-weight: bold; */
/* background-color: ${props => props.bgColor ? 'white' : 'rgba(0,0,0,0.3)'} ; */
/* font-style: ${props => props.bgColor ? '1.5' : '0.4'}; */
opacity: ${props => props.bgColor ? '1' : '0.5'} ;
transform: ${props => props.bgColor ? 'scale(1.1)' : '0'} ;
font-weight: ${props => props.bgColor ? 'bold' : 'normal'} ;
`;

const DisplayLine = styled.div`
opacity: ${props => props.bgColor ? '1' : '0'} ;

margin-left: 7px;
margin-right: 4px;
margin-top: 10px;
:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        position: relative;
        border-radius: 100%;
        width: ${props => props.size} ;
        /* width: 40px; */
        background-color: black;
}
`;


// const OuterButtonContainer = styled.div`

// `;
// const ButtonContainer = styled.div`

// `;

// const DisplayLine = styled.div`

// `;

// const Button = styled.div`

// `;