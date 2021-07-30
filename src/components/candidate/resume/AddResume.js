import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
// import fire from '../../../config/fire';
import { connect } from 'react-redux';
import { startAddResume } from '../../../actions/action';
import { startSetResume } from '../../../actions/action';
import Spinner from '../../Spinner';
import styled from 'styled-components';

const AddResume = ({startAddResume , startSetResume}) => {
    // const database = firebase.database();
    // const [showAddSkill, setShowAddSkill] = useState(false);
    const [addSkill, setAddSkill] = useState([]);
    const [addExperience, setAddExperience] = useState([]);
    const [showResume, setShowResume] = useState(false);
    const [loading, setLoading] = useState(true);

    let personalDetails = {
        // personal details
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        address: '',
        code: '',
        marital: '',
        city: '',
        state: '',
        country: '',
        summary: '',
        language: '',
        education: '',
        category: '',
        // skills
        // skills: [...addSkill],
        // // experience
        // experiences: [...addExperience],
    }
    let experienceDetails = {
        company: '',
        role: '',
        expDate: '',
        expCity: '',
        expState: '',
        expCountry: '',
        expDesc: '',
    };
    let CurrentJobDetails = {
        imageSrc: '',
        companyName: '',
        designation: '',
        salary: '',
        currentDate: '',
        location: '',
    }
    const [addCurrentJob, setAddCurrentJob] = useState(CurrentJobDetails);
    const [userData, setUserData] = useState(personalDetails);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(window.confirm(' WARNING : YOU CAN EDIT RESUME ONLY ONCE. PLEASE CONFIRM BEFORE SUBMITTING')) 
        {
            console.log(userData, addSkill, addExperience, addCurrentJob);
            startAddResume([userData, addSkill, addExperience, addCurrentJob])
            startSetResume();
            console.log(firebase.auth().currentUser.uid)
        // database
        // .ref('resume/' + firebase.auth().currentUser.uid)
        //     .push([ userData, addSkill, addExperience, addCurrentJob ])
        
        
        // database.ref('data/' + firebase.auth().currentUser.uid)
        //     .once('value').then((snap) => {
            //         const experienceDetails = [];
            //         snap.forEach((child) => {
                //             experienceDetails.push({
        //                 id: child.key,
        //                 ...child.val()
        //             })
        //         })
        //     })
        // console.log(experienceDetails[0].addExperience, experienceDetails[0].addSkill, experienceDetails[0].userData);
        setUserData(personalDetails);
        setAddSkill([]);
        setAddExperience([]);
        setAddCurrentJob(CurrentJobDetails);
        
            const btn = document.querySelectorAll('#btn');
            btn.forEach((ele) => {
                // console.log(ele)
                // ele.style.backgroundColor = 'black'
                ele.disabled = true;
                
                ele.style.cursor = 'auto'
                ele.style.pointerEvents = 'none'
            })
        // const name = document.getElementById('name').value;
        // const age = document.getElementById('age').value;
        // const address = document.getElementById('address').value;
        // const form = document.getElementById('form');
        // setData({
            //     // ...data,
            //     name,
            //     age,
            //     address
            //     // data[name]: name,
            //     // age,
            //     // address
            // })
            // database.ref('data' + firebase.auth().currentUser.uid).update({
                //     data
                // })
                // console.log(data);
        
                document.getElementById('form').reset();    
                
            }
                // personalDetails = {
        //     firstName: '', lastName: '',email: '',phone: '',age: '',gender: '',address: '',code: '',marital: '',skill: '',skills: [], experience: '',experiences: []} ///////////////
        // database
        // .ref('data' + firebase.auth().currentUser.uid)
        // .once('value')
        // .then(snapshot => {
        //     console.log(snapshot.val())
        // });
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500)

    }, [loading])

    
    const handlePersonal = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // setUserData()
        // personalDetails[name] = value
        console.log(userData);
        setUserData({ ...userData, [name] : value } )
        //  ({ ...prev.userData, [name] : value } )
        // setUserData(personalDetails);
        //     // [name] : value,
        //     // [name]: value
        // console.log(userData);
        // if (name === 'skill') {
        //     // personalDetails['skill'] = [...personalDetails.skill, value];
        //     setAddSkill(value);
        // }
        // if (name === 'experience') {
        //     // personalDetails['skill'] = [...personalDetails.skill, value];
        //     setAddExperience(value);
        // }
        // setUserData({[name]: value})
    }
    const handleExperience = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // setAddExperience({ ...addExperience, [name] : value } )
        experienceDetails[name] = value;
        console.log(experienceDetails);
    }
    const handleCurrent = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
            setAddCurrentJob({imageSrc: e.target.result});
            };
            reader.readAsDataURL(e.target.files[0]);
        }
        setAddCurrentJob({ ...addCurrentJob, [name] : value } )
        // CurrentJobDetails[name] = value;
        console.log(addCurrentJob);
    }
    const addMore = (e) => {
        e.preventDefault();
        let name = e.target.name; /// checking name of button click
        // let value = e.target.value;
        if (name === 'skill') {
            let value = document.getElementById('skill').value;

            value.length !== 0 && setAddSkill((prev) => [...prev, value]);
            // let value = check != '' && check;
            // value !== '' && personalDetails.skills.push(value);
            // setAddSkill((prev) => [...prev, value]);
            console.log(value, addSkill);
            document.getElementById('skill').value = '';
            // setShowAddSkill((prev) => !prev);
            // console.log('skill', personalDetails.skills);
        }
        if (name === 'experience') {
            // let value = document.getElementById('experience').value
            // personalDetails.experiences.push(value);
            // value.length !== 0 &&
            // let exe = document.querySelectorAll('#experienceDetails');
            // exe.forEach((ele) => console.log(ele.document.getElementsByClassName('company')))
            // let some = [experienceDetails];
            // let find = some.forEach((ele) => ele.company)
            const company = document.getElementsByName('company')[0].value
            const role = document.getElementsByName('role')[0].value
            const city = document.getElementsByName('expCity')[0].value
            const desc = document.getElementsByName('expDesc')[0].value
            
            // console.log(company !== '', role !== '', city !== '');
            // for (const obj in experienceDetails) {
                // if (obj === 'company' && experienceDetails[obj].length !== 0 ) {
                    // if (obj === 'role' && experienceDetails[obj].length !== 0) {
                        
                        // console.log(experienceDetails[obj]);
                        // console.log(experienceDetails);
            if (company && city && role && desc) {
                console.log('yes');
                setAddExperience((prev) => [...prev, experienceDetails]);
                // experienceDetails = {company: '',role: '',expDate: '',expCity: '',expState: '',expCountry: '',expDesc: '',};
                document.getElementById('experienceDetails').reset();
            }
            console.log(addExperience)
                // }

            // }
            // document.getElementById('experience').value = '';
            // personalDetails.experiences.push(addExperience);
            // setShowAddSkill((prev) => !prev);
            // console.log('experience', personalDetails.experiences);
        }
    }
    // const addMores = (e) => {
    //     e.preventDefault();
    //     for (const obj in experienceDetails) {
    //             if (obj === 'company' && experienceDetails[obj].length !== 0 ) {
    //                 // if (obj === 'role' && experienceDetails[obj].length !== 0) {
                        
    //                     // console.log(experienceDetails[obj]);
    //                     // console.log(experienceDetails);
    //                     setAddExperience((prev) => [...prev, experienceDetails]);
    //                     console.log(addExperience)
    //                 // }
    //             }
    //             document.getElementById('experienceDetails').reset();

    //         }
    // }

    // const [data, setData] = useState(personalDetails);

    // console.log(addSkill, 'addSkill'); Qualification
    // console.log(personalDetails, 'personalDetails');
    if (loading) {
        // return <div style={{marginTop: '10px', marginLeft: '10px', marginBottom: '10px'}}><Spinner  size={3} /></div> 
    }
    window.addEventListener('resize', e => {
        console.log(e.target.innerWidth)
    })
    return (
        <AddResumeContainer>
            <HeadingContainer>
            <h1>Add Your Resume
            </h1>
            <span onClick={() => setShowResume((prev) => !prev)} >
            {!showResume ?
                <i style={{cursor: 'pointer'}} className="fas fa-plus "></i> :
                <i style={{cursor: 'pointer'}} className="fas fa-times "></i>
            }
            </span>
            </HeadingContainer>
            
            {showResume ?
            
            <FormContainer id='form' onSubmit={handleSubmit} autoCapitalize='words' autocomplete="autocomplete_off_hack_xfr4!k" autocomplete="off">
                <PersonalContainer>
                    {/**************Personal Details********************/}
                        <h3>Personal Details</h3>
                        
                        <div>
                        <label htmlFor="">FirstName</label>
                        <input autoComplete="new-password"  required  name='firstName' onChange={handlePersonal} type="text" placeholder='Enter Your FirstName' /> <br />
                        </div>
                        <div>
                        <label htmlFor="">LastName</label>
                        <input autoComplete="new-password" required name='lastName' onChange={handlePersonal} type="text" placeholder='Enter Your LastName' /> <br />
                        </div>
                        <div>
                        <label htmlFor="">Email</label>
                        <input autoComplete="new-password" required name='email' onChange={handlePersonal} type="email" placeholder='Enter Your Email' /> <br />
                        </div>
                        <div>
                        <label htmlFor="">Phone Number</label>
                        <input autoComplete="new-password" required name='phone' onChange={handlePersonal}  type="text" placeholder='Enter Your Phone Number' /> <br />
                        </div>
                        <div>
                        <label  htmlFor="">Date of Birth</label>
                        <input autoComplete="new-password" required name='age' onChange={handlePersonal} type="date" /><br />
                        </div>
                        <div>
                        <label htmlFor="">Choose Profile Picture </label>
                            <input autoComplete="new-password" required name='imageSrc' type="file" onChange={handleCurrent} /><br />
                    
                            
                        </div> 
                            <GenderContainer>
                                <label>Gender</label>
                                
                            <div>
                                <div>
                                <div>
                                <input autoComplete="new-password" required name='gender' value='male' onChange={handlePersonal} type="radio" />
                                </div>
                                <p> Male </p>
                                </div>
                                <div>
                                <div>
                                <input autoComplete="new-password" required name='gender' value='female' onChange={handlePersonal} type="radio" />
                                </div>
                                <p htmlFor="">Female</p>
                                </div>
                                <div>
                                <div>
                                <input autoComplete="new-password" required name='gender' value='Transgender' onChange={handlePersonal} type="radio" />
                                </div>
                                <p htmlFor="">Transgender</p><br />
                                </div>
                                    </div>
                                    
                        </GenderContainer>
                        <div>
                        <label htmlFor="">Job Category</label>
                        <input autoComplete="new-password" required name='category' onChange={handlePersonal} type="text" placeholder='Your Job Category' /><br />
                        </div>
                        <div>
                        <label htmlFor="">Street Address</label>
                        <input autoComplete="new-password" required name='address' onChange={handlePersonal} type="text" placeholder='Enter Your Address' /><br />
                        </div>
                        <div>
                        <label htmlFor="">Zip/Postal Code</label>
                        <input autoComplete="new-password" name='code' onChange={handlePersonal} type="text" placeholder='Enter Your Area Pincode' /><br />
                        </div>
                        <div>
                        <label htmlFor="">Marital Status</label>
                        <input autoComplete="new-password" name='marital' onChange={handlePersonal} type="text" placeholder='Your Marital status' /><br />
                        </div>
                        <div>
                        <label htmlFor="">City</label>
                        <input autoComplete="new-password" required name='city' onChange={handlePersonal} type="text" placeholder='Your City Name' /><br />
                        </div>
                        <div>
                        <label htmlFor="">State</label>
                        <input autoComplete="new-password" name='state' onChange={handlePersonal} type="text" placeholder='Your State Name' /><br />
                        </div>
                        <div>
                        <label htmlFor="">Country</label>
                        <input autoComplete="new-password" required name='country' onChange={handlePersonal} type="text" placeholder='Your Country Name' /><br />
                        </div>
                        <div>
                        <label htmlFor="">Qualification</label>
                        <input autoComplete="new-password" required name='education' onChange={handlePersonal} type="text" placeholder='Your Qualification' /><br />
                        </div>
                        <div>
                        <label htmlFor="">Language</label>
                        <input autoComplete="new-password" name='language' onChange={handlePersonal} type="text" placeholder='Enter any Languages You Know' /><br />
                        </div>
                        
                        <div>
                        <label htmlFor="">Description</label>
                        <textarea minLength='30' required rows='5' cols='20' name='summary' onChange={handlePersonal} type="text" placeholder='Describe Yourself 2-3 sentences...' /><br />
                        </div>
                        
                </PersonalContainer>
                {/************* End Of Personal Details ***************/}


                {/******************* Skill ***************************/}
                <SkillContainer>
                        <h3>Skills (if any)</h3>
                        <div>
                        <label htmlFor="">Skill Name:</label>
                        <input autoComplete="new-password" id='skill' type="text" placeholder='Enter Your Stand Out Skill' />
                        </div>
                        <button id='btn' name='skill' onClick={addMore
                        } >{addSkill.length === 0 ? 'add skill' : 
                        'add another skill'}
                        </button> <br />
                        
                        {addSkill.length >= 1 && addSkill.map((ele) =>
                            <li>{ele}</li>
                            )}
                    {/*<h4>{addSkill.length === 0 ? 'add skill' : 
                    'add another skill'}<button name='skill' onClick={addMore} >+</button></h4>
                    {showAddSkill ? <div><label htmlFor="">Skill Name: </label> 
    <input autoComplete="new-password" onChange={(e) => setAddSkill(e.target.value)} required type="text" placeholder='Enter Skill Name...' /> <button onClick={() => { setShowAddSkill(false); }} >submit</button></div> : null} */}
                </SkillContainer>
                {/***************** End Of Skill **********************/}

        
                {/******************** Experience **********************/}
                <ExperienceContainer>
                    <form  action="" autocomplete="off" id='experienceDetails' autoCapitalize>
                <h3>Experience (if any)</h3>
                            <div>
                            <label htmlFor="">Company Name <span>*</span>  </label>
                            <input autoComplete="new-password" value={addExperience.company} autocomplete='off' name='company' onInput ={handleExperience} type="text"  placeholder='Enter Name Of The Company' /><br />
                            </div>
                            <div>
                            <label htmlFor="">Role or Job Title *</label>
                            <input autoComplete="new-password"  name='role' onInput ={handleExperience} type="text" placeholder='Enter Your Desired Job Role' /><br />
                            </div>
                            <div>
                            <label htmlFor="">Date Of Joined</label>
                            <input autoComplete="new-password" name='expDate' onInput ={handleExperience} type="date" placeholder='Enter Joining Date ' /><br />
                            </div>
                            <div>
                            <label htmlFor="">City *</label>
                            <input autoComplete="new-password" name='expCity' onInput ={handleExperience} type="text" placeholder='Your City Name' /><br />
                            </div>
                            <div>
                            <label htmlFor="">Job Description *</label>
                            <textarea rows='5' cols='20' name='expDesc' onInput ={handleExperience} type="text" placeholder='Describe Your Job Role in 2-3 sentences...' /><br />
                            </div>
                            <div>
                            <label  htmlFor="">State</label>
                            <input autoComplete="new-password" name='expState' onInput ={handleExperience} type="text" placeholder='Your State Name' /><br />
                            </div>
                            <div>
                            <label htmlFor="">Country</label>
                            <input autoComplete="new-password" name='expCountry' onInput ={handleExperience} type="text" placeholder='Your Country Name' /><br />
                            </div>
                            <button id='btn' type='submit' name='experience' onClick={addMore} >{addExperience.length === 0 ? 'Add Experience' : 
                                'Add Another Experience'}
                            </button> <br />
                            {addExperience.length >= 1 && addExperience.map((ele) => 
                                <li>{ele.company}, {ele.expCity}, {ele.role}
                                <p>{ele.expDesc}</p>
                                </li>
                            )}
                {/*<h4>add your experience <button name='experience' onClick={addMore}> +</button></h4>
            */}
            </form>
                </ExperienceContainer>
                {/***************** End Of Experience *****************/}


                {/******************** Current Job ********************/}
                <CurrentJobContainer>
                        <h3>Current Job (in any) </h3>
                        {/*<div>
                        <label htmlFor="">Choose Profile Picture * </label>
                            <input autoComplete="new-password" required name='imageSrc' type="file" onChange={handleCurrent} /><br />
                    
                            
                        </div> */}
                        <div>
                        <label htmlFor="">Company Name </label>
                        <input autoComplete="new-password"  name='companyName' placeholder='Name of the Company' onChange={handleCurrent} type="text" /><br />
                        </div>
                        <div>
                        <label htmlFor="">Designation </label>
                        <input autoComplete="new-password" name='designation' onChange={handleCurrent} type="text" placeholder='Enter Your Designation / Role' /><br />
                        </div>
                        <div>
                        <label htmlFor="">Salary </label>
                        <input autoComplete="new-password" name='salary' onChange={handleCurrent} type="number" placeholder='Enter Salary Per Annum' /><br />
                        </div>
                        <div>
                        <label htmlFor="">Date Of Joined </label>
                        <input autoComplete="new-password" name='currentDate' onChange={handleCurrent} type="date" placeholder='Joined Date' /><br />
                        </div>
                        <div>
                        <label htmlFor="">Location </label>
                        <input autoComplete="new##-password"  name='location' onChange={handleCurrent} type="text" placeholder='Current Job Location' />
                        </div>
                        {/*
                        {addCurrentJob.imageSrc ? <img width='30px' height='30px' src={addCurrentJob.imageSrc} alt="img" /> : null}
                        */}
                </CurrentJobContainer>
                {/***************** End Of Current Job *****************/}

                
                {/*<label htmlFor="">Name</label >
            <input id='name' type="text" />
            <label htmlFor="">Age</label>
            <input id='age' type="number" />
            <label htmlFor="">Address</label>
            <input id='address' type="type" />
            <button onClick={handleSubmit} >submit</button>*/}
                        <button id='btn' >Submit</button>
            </FormContainer>
                : null}
        </AddResumeContainer>

    )
}
const MapState = (state) => {
    // console.log(state);
    return {
        current: state.data
    }
}

export default connect(MapState, {startAddResume, startSetResume})(AddResume);


const AddResumeContainer = styled.div`
display: flex;
flex-direction: column;
margin: 5px;
padding: 5px;
margin-left: 2%;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1.2rem;



/* @media (min-width: 992px) { */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center; */
    /* border: 1px solid black; */

/* } */
`;

const HeadingContainer = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 5px;
/* margin-left: 2%; */
>span {
    /* border: 1px solid black; */
        margin-top: 2.5px;
        margin-left: 15px;
        text-align: center;
        >i {
        text-align: center;
        margin-top: 10px;
            font-size: 35px;
            color: black;

        }
        :hover {
            color: green;
        }
    }
`

const FormContainer = styled.form`
/* display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center; */



        margin-top: 10px;
        margin-bottom: 10px;

    
>div>div {
display: flex;
flex-direction: row;
/* justify-content: center; */
    /* align-content: center; */
/* border: 1px solid black; */
margin-bottom: 10px;
padding: 10px 0px;
>label {
/* border: 1px solid black; */
width: 30%;
}
>input, textarea {
margin-left: 5%;
width: 40%;
font-size: 1.1rem;
}
}

>button {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #23C5C5;
    color: white;
    width: 45%;
    text-align: center;
    cursor: pointer;
    margin-left: 20px;
}

@media (min-width: 992px) {
    font-size: 1.3rem;

>div>div {
>label {
width: 20%;
}
>input, textarea {
width: 30%;
    font-size: 1.3rem;

}
}

>button {
width: 30%;
}

}
@media (min-width: 1200px) {
    font-size: 1.4rem;

>div>div {

>input, textarea {
width: 25%;
    font-size: 1.4rem;
}
}

>button {
    width: 20%;
}

}

@media (min-width: 1600px) {
    font-size: 1.4rem;

>div>div {
>label {
}
>input, textarea {
width: 20%;
    font-size: 1.4rem;

}
}

>button {
}

}
`;

const PersonalContainer = styled.div`
/* display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: 1px solid black; */



    /* align-items: center; */
/* border: 1px solid black; */
margin-bottom: 10px;
padding: 10px;
:after {
        content: '';
        display: block;
        border-bottom: 2px solid blue;
        position: relative;
        border-radius: 100%;
        background-color: black;
margin-top: 25px;

}
`;

const GenderContainer = styled.div`
display: flex;
>div>label {
width: 30%;
}
>div {
    margin-left: 5%;
    display: flex;
    flex-direction: row;
>div {
    display: flex;
    flex-direction: row;
    >div>input {
        transform: scale(1.4);
        margin-left: 5px;
        margin-right: 12px;
    }
    > p {
        margin-right: 2px;
        padding-right: 10px;
        /* border: 1px solid black; */
        text-overflow: ellipsis; 
        overflow: hidden;
    }
}
}

`;


const SkillContainer = styled.div`
/* display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: 1px solid black; */
/* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-content: center; */
    /* align-items: center; */
    /* border: 1px solid black; */
margin-top: 10px;
/* border: 1px solid black; */
padding: 10px;
:after {
        content: '';
        display: block;
        border-bottom: 2px solid blue;
        position: relative;
        border-radius: 100%;
        background-color: black;
margin-top: 25px;


}
>button {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 1.1rem;
    padding: 8px;
    padding-left: 40px;
    padding-right: 40px;
    /* width: 200px; */
    border-radius: 6px;
    border: none;
    background-color: #23C5C5;
    color: white;
    text-align: center;
    cursor: pointer;
    text-transform: capitalize;
}
    >li {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 20px;
        margin-left: 5px;
    }
`;
const ExperienceContainer = styled.div`
/* display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: 1px solid black; */





margin-top: 10px;
/* border: 1px solid black; */
padding: 10px;
:after {
        content: '';
        display: block;
        border-bottom: 2px solid blue;
        position: relative;
        border-radius: 100%;
        background-color: black;
margin-top: 25px;


}
form {
    >div {
    display: flex;
    flex-direction: row;

margin-bottom: 10px;
padding: 10px 0px;
>label {
    /* border: 1px solid black; */
width: 30%;

>span {
    /* color: red; */
    /* font-size: 1.3rem; */
    /* background-color: rgba(0,0,0,0.2); */
    /* width: 30px; */
    /* border: 1px solid black; */
}
}
>input, textarea {
margin-left: 5%;
width: 45%;
font-size: 1.1rem;
}
}
}

form {
>button {
    margin-top: 5px;
    /* margin-bottom: 5px; */
    margin-left: 10px;
    font-size: 1.1rem;
    padding: 8px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 6px;
    border: none;
    /* width: 200px; */
    text-transform: capitalize;
    /* float: right; */
    background-color: #23C5C5;
    color: white;
    /* width: 30%; */
    text-align: center;
    cursor: pointer;
}
    /* margin-left: 20px; */
    /* list-style-type: disc; */
    >li {
        margin-top: 14px;
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 5px;
        margin-left: 5px;
        > p {
        font-weight: normal;
        margin-top: 5px;
        margin-left: 20px;
        }
    }
}


@media (min-width: 992px) {
    font-size: 1.3rem;


>form>div {
>label {
width: 20%;
}
>input, textarea {
width: 30%;

}
}
>form>button {
}

}
@media (min-width: 1200px) {
    font-size: 1.4rem;
    
>form>div {

>input, textarea {
width: 25%;

}
}

>form>button {
}

}
@media (min-width: 1600px) {
    font-size: 1.4rem;

>form>div {
>label {
}
>input, textarea {
width: 20%;
    font-size: 1.4rem;

}
}

>form>button {
}

}
`;
const CurrentJobContainer = styled.div`
/* display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: 1px solid black; */


/* border: 1px solid black; */
margin-top: 10px;
padding: 10px;
:after {
        content: '';
        display: block;
        border-bottom: 2px solid blue;
        position: relative;
        border-radius: 100%;
        background-color: black;
margin-top: 25px;


}
margin-bottom: 15px;
padding-top: 10px;
padding-bottom: 10px;
`;
