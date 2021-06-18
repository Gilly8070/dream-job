import React from 'react'

const About = ({ AboutDetails }) => {
        const { address, age, category, city, code, country, education, email, firstName, gender, language, lastName, marital, phone, state, summary } = AboutDetails;
    console.log(AboutDetails, 'about');
    return (
        <div>
            <div>
                <p>Contact Information</p>
                <p>Phone {phone}</p>
                <p>Email {email}</p>
                <p>Address {address}</p>
            </div>
            <div>
                <p>Basic Information</p>
                <p>Birthday {age}</p>
                <p>Gender {gender}</p>
                <p>Marital {marital}</p>
                <p>Job Category {category}</p>
            </div>
        </div>
    )
}

export default About
