import React from 'react'

const Skills = ({ SkillDetails }) => {
    // const { } = SkillDetails;
    console.log(SkillDetails, 'skill');
    return (
        <div>
            {SkillDetails ?
                SkillDetails.map((ele) => {
                    return (
                        <div>
                            <h2>{ele}</h2>
                        </div>
                    )
                }) : 'NO SKILLS ADDED'
            }
        </div>
    )
}

export default Skills
