import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import { connect } from 'react-redux';
// import {Route, Switch} from 'react-router-dom';
import { addNewJob } from '../../../actions/action';
import { Link } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
// import { useState } from 'react';
// import Jobs from './Jobs';
import firebase from 'firebase';
import Spinner from '../../Spinner';
import '../../../styles/Navbar.css';

const AddJob = ({ addNewJob }) => {
    const database = firebase.database();
    let selectEmploymentType = ['FullTime', 'PartTime', 'FullTime/ PartTime']
    let selectShiftType = ['9 - 5 PM', '5 - 1 AM', '12 - 8 AM' ]

    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalTerm, setModalTerm] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)

    }, [loading])

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
        category: '',


        // selectEmploymentType : ['FullTime', 'PartTime', 'FullTime/ PartTime']
    }
    // const [text, setText] = useState(addJob);

    // const showModal = (id, term) => {
    //     // if (term === 'accept') {
    //     const btn = document.getElementsByName('btn')
    //     btn.forEach((ele) => {
    //         setTimeout(() => {
    //             ele.disabled = true;
    //             setModal(true);
    //             setModalTerm(' OFFER CANCELLED SUCCESSFULLY')
    //         }, 100);
    //         setTimeout(() => {
    //             ele.disabled = false;
    //             setModal(false);
    //         }, 700);
    //     })
    // }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const btn = document.getElementsByName('btn')
        
        // forming.style.display = 'block'
        // window.scrollTo(0, 1000); 
        
        // window.focus();
        // window.scrollY = 0
        
        setTimeout(() => {
            btn.disabled = true;
            setModal(true);
// window.scrollTo(0,800);
            // document.getElementById('scroll').scrollIntoView({ block: "start", });

            // window.addEventListener('scroll', e => {
            // console.log(e);
                    // top: 0,
                    // behavior: "smooth"
            // })
// document.getElementById('scroll').scrollTo(0,0)
            // document.body.scrollIntoView(
                // { block: 'start' });
            // var el = document.querySelector("#myForm");
            // window.scroll({top: el.offsetTop});
        //     forming.scrollTo({
        //     top: 0,
        //     left: 0,
        //     behavior: 'smooth',
        // });
            // document.body.scrollTo(0, 800)
            // if ('scrollRestoration' in  window.history) {
            //     window.history.scrollRestoration = 'manual';
            // }
            // window.scrollBy(0, 1000);
            // window.addEventListener('scroll', e => ({
            //         top: 0,
            //         behavior: "smooth"
            // }))
            // window.scrollTo({
                // top: 100,
                // left: -70,
                // behavior: "smooth"
            // });
                setModalTerm(' JOB ADDED SUCCESSFULLY')
            }, 100);
            setTimeout(() => {
                btn.disabled = false;
                setModal(false);
            }, 2000);



        // const value = e.target.value
        addJob.date = new Date().toISOString().split("T")[0]
        addJob.id = uuidV4();
        addNewJob(addJob); ///////////

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
        companyName : '',companyLogo : '',assignRole : '',qualification : '',keyResponsibilities : '',technicalExperience : '',additionalInformation : '',openings : '',roleDescription : '', category: '',
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
    // useEffect(() => {
    //     setTimeout(() => {
    //         document.body.scrollTo({
    //             top: 0,
    //             behavior: "smooth"
    //         });
    //     },10)
    // }, [])
    const handleChange = e => {
        // const target = e.target;
        const value = e.target.value;
        // const value = e.target.value
        const name = e.target.name;
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                // URL.createObjectURL(e.target.result)
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
        console.log(name, value);
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
    window.addEventListener('resize', e => {
        console.log(e.target.innerWidth);
    })
    if (loading) {
        return <div><Spinner  onStart='yes' size={4} /></div>
    }
    // if()
    return (
        <React.Fragment>
            

                <AddJobContainer >
                    
                    
                {/* EXTRA POSITIONING AND STYLE ADDED TO MAKE MODAL TO DISPLAY PROPERLY BECAUSE SCROLL INTO VIEW FUNCTION NOT SCROLLING TO THE TOP */}
                    {
                        modal && <Rotate>
                    <Heading>
                    <h1>{modalTerm}</h1>
                    </Heading>
                        </Rotate> 
                    }

                    <form id='myForm' onSubmit={handleSubmit } action="">
                    <FormContainer>
                        <div>
                        <div>
                        <label htmlFor="">Job Title :  </label>
                        <input required maxLength='30'  onInput={handleChange} name='title' type="text" placeholder='Enter Job Title' />
                        </div>
                        <div>
                        <label htmlFor="">Job Category :  </label>
                        <input required onInput={handleChange} name='category' type="text" placeholder='Enter Job Category' />
                        </div>
                        <div>
                        <label htmlFor="">Company Name :  </label>
                        <input required onInput={handleChange} name='companyName' type="text" placeholder='Enter Company Name' />
                        </div>
                        <div>
                        <label  htmlFor="">Location : </label>
                        <input required onInput={handleChange} name='location'  type="text" placeholder='Enter Location'  />
                        </div>
                        <div>
                        <label htmlFor="">Status :  </label>
                        <select onInput={handleChange} name='status' >
                        <option>
                        Available
                        </option>
                        <option>
                        Not Available
                        </option>
                        </select>
                        </div>
                            <div>
                                
                        <label htmlFor="">Experience In Years :  </label>
                        <input required onInput={handleChange} name='experience' placeholder='Enter Experience In Years' type="number"  />
                        </div>
                        <div>
                        <label htmlFor="">Salary Per Annum :  </label>
                        <input required onInput={handleChange} name='salary'  type="number" placeholder='Enter Salary ' />
                        </div>
                        <div>
                        <label htmlFor="">Company Description :  </label>
                        <textarea required onInput={handleChange} name="description" id="" cols="20" rows="5" placeholder='Enter Your Company Description...' ></textarea>
                        </div>
                    {/*<label htmlFor="">Education:  </label>
                    <input onInput={handleChange} name='education' type="text" placeholder='enter any qualification'  /> */}
                        <div>
                        <label htmlFor="">Key Skill :  </label>
                        <input required onInput={handleChange} name='skill' type="text" placeholder='Enter Key Skills' />
                        </div>
                        <div>
                        <label>Employment Type : </label>
                    {/*<input  className='employmentType' name='employmentType' value='FullTime' onInput={handleChange} type="checkbox" />
                    <label htmlFor="">FullTime </label>
                    <input  className='employmentType' name='employmentType' onInput={handleChange} type="checkbox"  value='PartTime' />
                <label htmlFor="">PartTime</label> */}
                <select onInput={ handleChange} name="employmentType" id="">{
                    selectEmploymentType.map((ele, index) => {
                        return <option key={index} value={ele}>{ele}</option>
                    })
                            }</select>
                        </div>
                        <div>
                        <label>Shift Type : </label>
                        <select onInput={handleChange} name="shiftType" id="">{
                            selectShiftType.map((ele, index) => {
                                return <option key={index} value={ele}>{ele}</option>
                            })
                        }</select>
                        </div>
                        <div>
                        <label htmlFor="">Company Logo :</label>
                        <input required accept="image/png, image/jpeg, image/jpg" onInput={handleChange} name='companyLogo'  type="file" />
                        </div>
                        <div>
                        <label htmlFor="">Designation :</label>
                        <input required onInput={handleChange}  type="text" name="designation" placeholder='Enter Job Designation' id="" />
                        </div>
                        <div>
                        <label htmlFor="">Assign Role :</label>
                        <input required onInput={handleChange}  type="text" name="assignRole" placeholder='Enter The Role To Assign' id="" />
                        </div>
                        <div>
                        <label htmlFor="">Qualification :</label>
                        <input required onInput={handleChange} type="text" name="qualification" placeholder='Enter Qualification' id="" />
                        </div>
                        <div>
                        <label htmlFor="">No. of Openings :</label>
                        <input required onInput={handleChange}  type="number" name="openings" placeholder='Enter Total No. Of Openings' id="" />
                        </div>
                        <div>
                        <label htmlFor="">Key Responsibilities :</label>
                        <textarea  required onInput={handleChange} name="keyResponsibilities" id="" cols="20" rows="5" placeholder='Enter Job Responsibilities...' ></textarea>
                        </div>
                        <div>
                        <label htmlFor="">Technical Experience :</label>
                        <textarea required onInput={handleChange} name="technicalExperience" id="" cols="20" rows="5" placeholder='Enter Technical Experience...' ></textarea>
                        </div>
                        <div>
                        <label htmlFor="">Additional Information :</label>
                        <textarea required onInput={handleChange} name="additionalInformation" id="" cols="20" rows="5" placeholder='Enter Additional Information...' ></textarea>
                        </div>
                        <div>
                        <label htmlFor="">Role Description :</label>
                        <textarea required onInput={handleChange} name="roleDescription" id="" cols="20" rows="5" placeholder='Enter Role Description...' ></textarea>
                        </div>
                    
                            
                        </div>
                            
                        </FormContainer>
                        
                        <ButtonContainer>
                        <Button bgColor='#15ba53' checkDisabled={modal ? true : false} type='submit'  name='btn'>Submit</Button>
                        <div>
                        <Link to='/jobs'>
                        <Button checkDisabled = {modal ? true : false} bgColor='#0077b6' name='btn' >Back</Button>
                        </Link>
                        </div>
                        </ButtonContainer>
                        </form>
                </AddJobContainer>
            
        </React.Fragment>
    )
}

export default connect(null, {addNewJob})(AddJob);

const AddJobContainer = styled.div`
/* margin: 15px; */
margin-left: 40px;
/* border: 1px solid black; */
/* margin-right: 3px; */
/* margin-top: 40px; */

font-family: Arial, Helvetica, sans-serif;
`





const FormContainer = styled.div`
/* border: 1px solid black; */
/* width: auto; */
display: flex;
    flex-direction: column;

        margin-top: 10px;
        margin-bottom: 10px;

    padding: 5px;



>div>div {
display: flex;
flex-direction: row;
/* border: 1px solid black; */

margin-bottom: 14px;
padding: 8px 0px;
margin-top: 14px;

>label {
/* border: 1px solid black; */
font-size: 1.3rem;
margin-top: 3px;
/* margin-top: 3px; */
/* text-align: center; */
width: 40%;
}
>input, textarea,select {
margin-left: 5%;
/* margin-top: 1px; */
/* text-align: center; */
/* display: flex; */
width: 45%;
font-size: 1.2rem;
/* margin-bottom: 3px; */
/* border: 1px solid black; */
/* margin-bottom: 4px; */

}
}



@media (min-width: 992px) {
    margin-left: 10%;
    font-size: 1.3rem;

>div>div {
>label {
    /* border: 1px solid black; */
width: 300px;
    font-size: 1.4rem;
}
>input, textarea, select {
width: 300px;
    font-size: 1.3rem;

}
}

>button {
/* width: 30%; */
}

}
@media (min-width: 1600px) {
    /* margin-left: 50px; */
>div>div {
>label {
/* width: 300px; */
    font-size: 1.5rem;
}
>input, textarea, select {
/* width: 300px; */
    font-size: 1.4rem;

}
}


}
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 10px;
/* margin-right: 10px; */
/* >button {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #23C5C5;
    color: white;
    width: 200px;
    text-align: center;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 30px;
    font-size: 1.4rem;
}

>a>button {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #40916c;
    color: white;
    width: 200px;
    text-align: center;
    cursor: pointer;
    margin-left: 20px;
    font-size: 1.4rem;

    } */


@media (min-width: 992px) {
    margin-left: 13%;

    >button, div>a>button {
        width: 250px;
    }
}

>div {
    margin-left: 50px;

>a {
    /* background-color: red; */
    /* width: 300px; */
    /* padding: 0px; */
>button {
    /* margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    color: white;
    width: 200px;
    background-color: ${props => props.bgColor};
    text-align: center;
    cursor: pointer;
    font-size: 1.4rem; */
    /* pointer-events: ${props => props.checkDisabled ? 'none' : 'initial'}; */
    /* opacity: ${props => props.checkDisabled ? '0.1' : '1'} */
}
}
}

`;

const Button = styled.button`
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: ${props => props.bgColor};
    color: white;
    width: 200px;
    text-align: center;
    cursor: pointer;
    /* margin-left: 20px; */ ///// FOR LINK BUTTON MARGIN CREATING ERROR
    /* margin-right: 30px; */
    font-size: 1.4rem;
/* margin-top: 100px; */

    ///// DISABLED BUTTON ////////////////////////////////////////////
    pointer-events: ${props => props.checkDisabled ? 'none' : 'initial'};
    opacity: ${props => props.checkDisabled ? '0.1' : '1'};
`;


const rotate = keyframes`
from  {
    transform: translateY(0px);
}

to{
    transform: translateY(300px);
}
`;
const Rotate = styled.div`

/* ${Button} {

} */

animation: ${rotate} 0.1s ease;
`;

/////////////////////////// FOR MODAL /////////////////////////////////////////////////////////////////////////////////////////////////////////// 

const Heading = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    /* border: 1px solid black; */

    >h1 {
    /* align-self: center; */

    height: 90px;
    display: block;
    z-index: 999;
    background-color: whiteSmoke;
    border-radius: 4px;
    box-shadow: 4px 3px 3px 1px;
    color: black;
    padding: 10px;
    position: fixed;
    top: 70px;
    /* padding: 15px; */
    margin-right: 10px;
    font-size: 1.8rem;
    padding-top: 30px;

    /* text-align: center; */
    /* border: 1px solid black; */
}

@media (min-width : 768px) {  //// NO MORE CHANGE ///////////////////
    >h1 {
    /* padding: 30px; */
    font-size: 2rem;

    }
}

`