import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import {Route, Switch} from 'react-router-dom';
import { addNewJob } from '../../../actions/action';
import { Link } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
// import { useState } from 'react';
// import Jobs from './Jobs';
import firebase from 'firebase';

const AddJob = ({ addNewJob }) => {
    const database = firebase.database();
    let selectEmploymentType = ['FullTime', 'PartTime', 'FullTime/ PartTime']
    let selectShiftType = ['9 - 5 PM', '5 - 1 AM', '12 - 8 AM' ]

    let addJob = {
        id: '',
        title: '',
        // date: '',
        location: '',
        experience: '',
        status: 'available',
        salary: '',
        description: '',
        // education: '',
        skill: '',


        employmentType: 'FullTime',
        shiftType: '9-5 PM',
        designation: '',
        companyName : '',
        companyLogo : '',
        assignRole : '',
        qualification : '',
        keyResponsibilities : '',
        technicalExperience : '',
        additionalInformation : '',
        openings : '',
        roleDescription : '',
        


        // selectEmploymentType : ['FullTime', 'PartTime', 'FullTime/ PartTime']
    }
    // const [text, setText] = useState(addJob);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const value = e.target.value
        addJob.date = new Date().toISOString().split("T")[0]
        addJob.id = uuidV4();
        addNewJob(addJob);
        // addNewJob(text);
        
        /////////// Adding jobs to database//////////////////////
        database.ref('Jobs').push(
            addJob);
        // database.ref('offer/receivedOffer').push(
            // addJob);/////////////////
        
        // localStorage.sa
        // localStorage.setItem('initial', addJob);
        console.log('form submitted', addJob);
        // e.target.value= '';
        // if (e.target.name) {
            // let sel = document.getElementsByName(e.target.name)
            // let value = e.target.value;
            // let name = e.target.name;
            // setText([name] = value);
        let form = document.getElementById('myForm');
        // console.log(form);
        form.reset();
        // To make input fields empty after submission
        addJob = {
        id: '', title: '',date: '',location: '',experience: '',
        status: 'available',salary: '',description: '',education: '',skill: '',employmentType: 'FullTime',
        shiftType: '9-5 PM',designation: '',
        companyName : '',companyLogo : '',assignRole : '',qualification : '',keyResponsibilities : '',technicalExperience : '',additionalInformation : '',openings : '',roleDescription : '',
        }
        // database.ref('Jobs').once('value')
        //     .then((snapshot) => {
        //         const exp = [];
        //         snapshot.forEach((childSnap) => {
        //             exp.push({
        //                 id: childSnap.key,
        //                 ...childSnap.val()
        //             })
        //         })
        //         console.log(exp, 'from addJob')
        //         })
        // }
            // console.log(text);

        // if (e.target.name === 'title') {
        //     e.target.value = '';
        // }
        // const value = e.target.value
        // const name = e.target.name;
        // addJob['title'] = '';
        // <Switch>
        // <Route exact path="/jobs">
        // <Jobs />
        // </Route>
        // </Switch>
        // addJob = {}
    }
    const handleChange = e => {
        // const target = e.target;
        const value = e.target.value;
        // const value = e.target.value
        const name = e.target.name;
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                addJob['companyLogo'] = e.target.result
            // setAddCurrentJob({imageSrc: e.target.result});
            };
            reader.readAsDataURL(e.target.files[0]);
        }
        // if (e.target.type === 'checkbox' && e.target.checked) {
            // addJob[name].push(value)
            // var checkedValue = document.getElementsByClassName('.employmentType').type.value;
            // console.log(e.target.checked, value);
        // }
        // 
        addJob[name] = value;
        // setText(addJob[name] = value);
        // console.log(e.target);
        console.log(addJob);
        // if (e.target.name) {
        //     // let sel = document.getElementsByName(e.target.name)
        //     console.log();
        // }
        // console.log(text, addJob);
        // console.log(e.target);
    }
    // const handelBack = () => {

    // }
    return (
        <React.Fragment>
            <form id='myForm' onSubmit={handleSubmit} action="">
                <Container  >
                    <label htmlFor="">Job Title:  </label>
                    <input onChange={handleChange} name='title' type="text" placeholder='Enter Job Title' />
                    <label htmlFor="">Company Name  </label>
                    <input onChange={handleChange} name='companyName' type="text" placeholder='Enter Company Name' />
                    <label  htmlFor="">Location: </label>
                    <input onChange={handleChange} name='location'  type="text" placeholder='Enter Location'  />
                    <label htmlFor="">Status:  </label>
                    <select onChange={handleChange} name='status' >
                        <option>
                            Available
                        </option>
                        <option>
                            Not Available
                        </option>
                    </select>
                    <label htmlFor="">Experience In Years:  </label>
                    <input onChange={handleChange} name='experience' placeholder='Enter Experience In Years' type="text"  />
                    <label htmlFor="">Salary Per Annum:  </label>
                    <input onChange={handleChange} name='salary'  type="text" placeholder='Enter Salary ' />
                    <label htmlFor="">Company Description:  </label>
                    <textarea onChange={handleChange} name="description" id="" cols="20" rows="5" placeholder='Enter Your Company Description' ></textarea>
                    {/*<label htmlFor="">Education:  </label>
                    <input onChange={handleChange} name='education' type="text" placeholder='enter any qualification'  /> */}
                    <label htmlFor="">Key Skill:  </label>
                    <input onChange={handleChange} name='skill' type="text" placeholder='Enter Key Skills' />
                    </Container>
                    <Container>
                    <p>Employment Type : </p>
                    {/*<input required className='employmentType' name='employmentType' value='FullTime' onChange={handleChange} type="checkbox" />
                    <label htmlFor="">FullTime </label>
                    <input required className='employmentType' name='employmentType' onChange={handleChange} type="checkbox"  value='PartTime' />
                <label htmlFor="">PartTime</label> */}
                <select onChange={handleChange} name="employmentType" id="">{
                    selectEmploymentType.map((ele, index) => {
                        return <option key={index} value={ele}>{ele}</option>
                    })
                }</select>
                <p>Shift Type : </p>
                <select onChange={handleChange} name="shiftType" id="">{
                    selectShiftType.map((ele, index) => {
                        return <option key={index} value={ele}>{ele}</option>
                    })
                }</select>
                <label htmlFor="">Company Logo :</label>
                <input onChange={handleChange} name='companyLogo'  type="file" />
                <label htmlFor="">Designation :</label>
                <input onChange={handleChange}  type="text" name="designation" placeholder='Enter Job Designation' id="" />
                <label htmlFor="">Assign Role :</label>
                <input onChange={handleChange}  type="text" name="assignRole" placeholder='Enter The Role To Assign' id="" />
                <label htmlFor="">Qualification :</label>
                <input onChange={handleChange} type="text" name="qualification" placeholder='Enter Qualification' id="" />
                <label htmlFor="">No. of Openings :</label>
                <input onChange={handleChange}  type="number" name="openings" placeholder='Enter Total No. Of Openings' id="" />
                <label htmlFor="">Key Responsibilities :</label>
                <textarea onChange={handleChange} name="keyResponsibilities" id="" cols="20" rows="5" placeholder='Enter Job Responsibilities' ></textarea>
                <label htmlFor="">Technical Experience :</label>
                <textarea onChange={handleChange} name="technicalExperience" id="" cols="20" rows="5" placeholder='Enter Technical Experience' ></textarea>
                <label htmlFor="">Additional Information :</label>
                <textarea onChange={handleChange} name="additionalInformation" id="" cols="20" rows="5" placeholder='Enter Additional Information' ></textarea>
                <label htmlFor="">Role Description :</label>
                <textarea onChange={handleChange} name="roleDescription" id="" cols="20" rows="5" placeholder='Enter Role Description' ></textarea>
                <button>Submit</button>
                <Link to='/jobs'>
                <button>Back</button>
                </Link>
                </Container>
            </form>
        </React.Fragment>
    )
}

export default connect(null, {addNewJob})(AddJob);

const Container = styled.div`
display: block;
flex-direction: column;
align-items: center;
justify-content: center;

>input,>label {
display: flex;
}
`


