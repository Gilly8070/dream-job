import React, { useEffect, useState } from 'react';
import Spinner from '../../../Spinner';
import styled from 'styled-components';

const About = ({ AboutDetails }) => {
        const { address, age, category, city, code, country, education, email, firstName, gender, language, lastName, marital, phone, state, summary } = AboutDetails;
    console.log(AboutDetails, 'about');
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
    return (
        <div>
            <Div>
                <h4>Contact Information</h4>
                <div>
                    <p>Phone
                    </p>
                    <span>{phone}</span>
                </div>
                <div>
                    <p> Email
                    </p>
                        <span>{email}</span>
                </div>
                <div>
                    <p>Address
                    </p>
                        <span>{address}</span>
                </div>
            </Div>
            <Div>
                <h4>Basic Information</h4>
                <div>
                    <p>Birthday
                    </p>
                        <span>{age}</span>
                </div>
                <div>
                    <p>Gender
                    </p>
                        <span>{gender}</span>
                </div>
                <div>
                    <p>Marital
                    </p>
                        <span>{marital}</span>
                </div>
                <div>
                    <p>Job Category
                    </p>
                        <span>{category}</span>
                </div>
            </Div>
        </div>
    )
}

export default About


const Div = styled.div`
font-size: 1.2rem;
margin: 9px;
margin-bottom: 24px;
margin-top: 20px;
margin-left: 15px;
h4 {
    opacity: 0.5;
    margin-bottom: 20px;
}
div {
    display: flex;
    flex-direction: row;
    p {
        margin: 15px 0;
        width: 320px;
/* border: 1px solid black; */

    }
    span {
        margin: 15px 0;
text-overflow: ellipsis; 
overflow: hidden;
/* border: 1px solid black; */
width: 100%;
    }
}
`;
