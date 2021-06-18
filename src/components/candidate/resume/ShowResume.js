import React from 'react';
import CurrentJob from './resumeSection/CurrentJob';
import Experience from './resumeSection/Experience';
import Skills from './resumeSection/Skills';
import About from './resumeSection/About';
import { useState, useEffect } from 'react';

// import { connect } from 'react-redux';
// import { startSetResume } from '../../../actions/action';

const ShowResume = ({ data }) => {

    const [showExp, setShowExp] = useState(true);
    const [showSkill, setShowSkill] = useState(false);
    const [showAbout, setShowAbout] = useState(false);


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
    return (
        // { resumeData &&
        <div>
            <button onClick={() => { setShowExp(true); setShowSkill(false); setShowAbout(false); }}>Experience</button> {' '}
            <button onClick={() => { setShowExp(false); setShowSkill(true); setShowAbout(false); }}>Skill</button> {' '}
            <button onClick={() => {setShowExp(false); setShowSkill(false); setShowAbout(true); }}>About</button> {' '}
            <CurrentJob CurrentDetails={data[0][3]} AboutDetails={data[0][0]} />
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
        </div>
            // }
    )
}

export default ShowResume;
