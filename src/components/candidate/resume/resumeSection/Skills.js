import React, { useEffect, useState } from 'react';
import Spinner from '../../../Spinner';

const Skills = ({ SkillDetails }) => {
    // const { } = SkillDetails;
    console.log(SkillDetails, 'skill');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300)

    }, [loading])

    if (loading) {
        return <Spinner size={3} />
    }
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
