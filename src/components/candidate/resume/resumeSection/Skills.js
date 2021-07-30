import React, { useEffect, useState } from 'react';
import Spinner from '../../../Spinner';
import styled from 'styled-components';

const Skills = ({ SkillDetails }) => {
    // const { } = SkillDetails;
    console.log(SkillDetails, 'skill');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700)

    }, [loading])

    if (loading) {
        // style={{margin: '15px'}} 
        return <div ><Spinner onStart='yes' size = {3} /></div>
    }
    console.log(SkillDetails);
    return (
        <div>
            {SkillDetails ?
                SkillDetails.map((ele) => {
                    return (
                        <Div>
                            <h4>{ele.toLowerCase()}</h4>
                        </Div>
                    )
                }) : <Div style={{marginTop: '25px', marginLeft: '20px'}}>NO SKILLS ADDED</Div>
            }
        </div>
    )
}

export default Skills


const Div = styled.div`
font-size: 1.2rem;
margin: 9px;
margin-bottom: 4px;
margin-left: 15px;
h4 {
font-weight: bold;
margin-top: 10px;
margin-bottom: 25px;
text-transform: capitalize;
text-overflow: ellipsis; 
overflow: hidden;
/* border: 1px solid black; */
}
`;
