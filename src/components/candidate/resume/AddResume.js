import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
// import fire from '../../../config/fire';
import { connect } from 'react-redux';
import { startAddResume } from '../../../actions/action';
import { startSetResume } from '../../../actions/action';
import Spinner from '../../Spinner';

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

    // console.log(addSkill, 'addSkill');
    // console.log(personalDetails, 'personalDetails');
    if (loading) {
        return <Spinner size={3} />
    }

    return (
        <div>
            <h1>Add Your Resume <span onClick={() => setShowResume((prev) => !prev)} >
                {!showResume ?
                    <i class="fas fa-plus"></i> :
                    <i class="fas fa-times"></i>
                }
            </span></h1>

            {showResume ?
            
            <form id='form' onSubmit={handleSubmit} autoCapitalize='words' autocomplete="autocomplete_off_hack_xfr4!k">
                <div>
                    {/**************Personal Details********************/}
                    <h3>Personal Details</h3>
                    <label htmlFor="">FirstName</label>
                    <input required  name='firstName' onChange={handlePersonal} type="text" placeholder='Enter Your FirstName' /> <br />
                    <label htmlFor="">LastName</label>
                    <input required name='lastName' onChange={handlePersonal} type="text" placeholder='Enter Your LastName' /> <br />
                    <label htmlFor="">Email</label>
                    <input required name='email' onChange={handlePersonal} type="email" placeholder='Enter Your Email' /> <br />
                    <label htmlFor="">Phone Number</label>
                    <input required name='phone' onChange={handlePersonal}  type="text" placeholder='Enter Your Phone Number' /> <br />
                    <label  htmlFor="">Date of Birth</label>
                    <input required name='age' onChange={handlePersonal} type="date" /><br />
                    <p>Gender</p>
                    <input required name='gender' value='male' onChange={handlePersonal} type="radio" />
                    <label htmlFor="">Male </label>
                    <input required name='gender' value='female' onChange={handlePersonal} type="radio" />
                    <label htmlFor="">Female</label>
                    <input required name='gender' value='Transgender' onChange={handlePersonal} type="radio" />
                    <label htmlFor="">Transgender</label><br />
                    <label htmlFor="">Street Address</label>
                    <input required name='address' onChange={handlePersonal} type="text" placeholder='Enter Your Address' /><br />
                    <label htmlFor="">Zip/Postal Code</label>
                    <input name='code' onChange={handlePersonal} type="text" placeholder='Enter Your Area Pincode' /><br />
                    <label htmlFor="">Marital Status</label>
                    <input name='marital' onChange={handlePersonal} type="text" placeholder='Your Marital status' /><br />
                    <label htmlFor="">City</label>
                    <input required name='city' onChange={handlePersonal} type="text" placeholder='Your City Name' /><br />
                    <label htmlFor="">State</label>
                    <input name='state' onChange={handlePersonal} type="text" placeholder='Your State Name' /><br />
                    <label htmlFor="">Country</label>
                    <input required name='country' onChange={handlePersonal} type="text" placeholder='Your Country Name' /><br />
                    <label htmlFor="">Education</label>
                    <input required name='education' onChange={handlePersonal} type="text" placeholder='Your Education' /><br />
                    <label htmlFor="">Language</label>
                    <input name='language' onChange={handlePersonal} type="text" placeholder='Enter any Languages You Know' /><br />
                    <label htmlFor="">Summary</label>
                    <textarea required rows='5' cols='20' name='summary' onChange={handlePersonal} type="text" placeholder='Describe Yourself in 2-3 sentences...' /><br />
                    <label htmlFor="">Job Category</label>
                    <input required name='category' onChange={handlePersonal} type="text" placeholder='Your Job Category' /><br />
                </div>
                {/************* End Of Personal Details ***************/}


                {/******************* Skill ***************************/}
                <div>
                    <h3>Skills</h3>
                    <label htmlFor="">Skill Name:</label>
                    <input id='skill' type="text" placeholder='Enter Your Stand Out Skill' />
                    <button name='skill' onClick={addMore
                    } >{addSkill.length === 0 ? 'add skill' : 
                    'add another skill'}</button> <br />
                    {addSkill.length >= 1  && addSkill.map((ele) => <li>{ele}</li>)}
                    {/*<h4>{addSkill.length === 0 ? 'add skill' : 
                    'add another skill'}<button name='skill' onClick={addMore} >+</button></h4>
                    {showAddSkill ? <div><label htmlFor="">Skill Name: </label>
    <input onChange={(e) => setAddSkill(e.target.value)} required type="text" placeholder='Enter Skill Name...' /> <button onClick={() => { setShowAddSkill(false); }} >submit</button></div> : null} */}
                </div>
                {/***************** End Of Skill **********************/}

        
                {/******************** Experience **********************/}
                <div >
                    <form action="" autocomplete='on' id='experienceDetails' autoCapitalize>
                <h3>Experience</h3>
                <label htmlFor="">Company Name *</label>
                <input value={addExperience.company} autocomplete='off' name='company' onChange ={handleExperience} type="text"  placeholder='Enter Name Of The Company' /><br />
                <label htmlFor="">Role or Job Title *</label>
                <input  name='role' onChange ={handleExperience} type="text" placeholder='Enter Your Desired Job Role' /><br />
                <label htmlFor="">Date Of Joined</label>
                <input name='expDate' onChange ={handleExperience} type="date" placeholder='Enter Joining Date ' /><br />
                <label htmlFor="">City *</label>
                <input name='expCity' onChange ={handleExperience} type="text" placeholder='Your City Name' /><br />
                <label htmlFor="">Job Description *</label>
                <textarea rows='5' cols='20' name='expDesc' onChange ={handleExperience} type="text" placeholder='Describe Your Job Role in 2-3 sentences...' /><br />
                <label  htmlFor="">State</label>
                <input name='expState' onChange ={handleExperience} type="text" placeholder='Your State Name' /><br />
                <label htmlFor="">Country</label>
                <input name='expCountry' onChange ={handleExperience} type="text" placeholder='Your Country Name' /><br />
                <button type='submit' name='experience' onClick={addMore} >{addExperience.length === 0 ? 'Add Experience' : 
                'Add Another Experience'}</button> <br />
                            {addExperience.length >= 1 && addExperience.map((ele) => <div>
                                <li>{ele.company}, {ele.expCity}, {ele.role}
                                <p>{ele.expDesc}</p>
                                </li>
                            </div>)}
                {/*<h4>add your experience <button name='experience' onClick={addMore}> +</button></h4>
            */}
            </form>
                </div>
                {/***************** End Of Experience *****************/}


                {/******************** Current Job ********************/}
                <div>
                    <h3>Your Current Job (in any) </h3>
                    <label htmlFor="">Choose Profile Picture </label>
                    <input name='imageSrc' type="file" onChange={handleCurrent} /><br />
                    <label htmlFor="">Company Name </label>
                    <input name='companyName' placeholder='Name of the Company' onChange={handleCurrent} type="text" /><br />
                    <label htmlFor="">Designation </label>
                    <input name='designation' onChange={handleCurrent} type="text" placeholder='Enter Your Designation / Role' /><br />
                    <label htmlFor="">Salary </label>
                    <input name='salary' onChange={handleCurrent} type="text" placeholder='Enter Salary' /><br />
                    <label htmlFor="">Date Of Joined </label>
                    <input name='currentDate' onChange={handleCurrent} type="date" placeholder='Joined Date' /><br />
                    <label htmlFor="">Location </label>
                    <input name='location' onChange={handleCurrent} type="text" placeholder='Current Job Location' />
                    {addCurrentJob.imageSrc ? <img width='100px' height='100px' src={addCurrentJob.imageSrc} alt="img" /> : null}
                    
                </div>
                {/***************** End Of Current Job *****************/}

                
                {/*<label htmlFor="">Name</label >
            <input id='name' type="text" />
            <label htmlFor="">Age</label>
            <input id='age' type="number" />
            <label htmlFor="">Address</label>
            <input id='address' type="type" />
            <button onClick={handleSubmit} >submit</button>*/}
                        <button >Submit</button>
            </form>
                : null}
        </div>

    )
}
const MapState = (state) => {
    // console.log(state);
    return {
        current: state.data
    }
}

export default connect(MapState, {startAddResume, startSetResume})(AddResume);
