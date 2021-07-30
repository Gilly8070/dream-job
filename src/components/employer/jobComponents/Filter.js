import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import {startFetchJobs} from '../../../actions/actionForRedux'


const Filter = ({ current, startFetchJobs }) => {
    // const { location } = arrayy;
    // console.log(location)
    // let initial = {
    //     location: 'all',
    //     exp: 0,
    //     salary: 0,
    // }

    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);
    const [answer, setAnswer] = useState([]);


    
    useEffect(() => {
        setAnswer(current)  /////// NEW ONE ///////////

        setTimeout(() => {
            setLoading(false);
        }, 5000)

        /////// NEW ONE ///////////
        setTimeout(() => {
            setLoading2(true);
        }, 5)
        setTimeout(() => {
            setLoading2(false);
        }, 8000)
    }, [loading])
    
    // useEffect(() => {
    //         setTimeout(() => {
    //             setLoading2(false);
    //         }, 800)
            
    // }, [loading2])

    ///////////////// FOR ALL THE OPTIONS /////////////////////////////
    let obj1 = {
        // removeFalseLocation: [current.filter(ele => ele.location)],
        local1: [current.map(ele => ele.location ? ele.location : 'all' )],
        exp1: [current.map(ele => ele.experience.toString().split('').includes('-') || ele.experience ? ele.experience.toString().split('-')[0] || ele.experience : '0')],
        salary1: [current.map(ele => ele.salary)][0],
    }
    // console.log(obj1.salary1, '1', current.map(ele =>  parseInt(ele.salary) < 0));
    let obj2 = {
        local2: [['all'].concat(...obj1.local1)],
        exp2: [...obj1.exp1],
        // exp2: [['0'].concat(...obj1.exp1)],
        // salary2: obj1.salary1.map((ele) => ele.toString().split('').includes('-') || ele ? ele.toString().split('-')[1] || ele : ele ),
        // salaryMin: Math.min(...obj1.salary1),
        // salaryMax: Math.max(...obj1.salary1),
    }
    // console.log(obj2.salary2, '2');
    let obj3 = {
        local3: [...new Set(...obj2.local2)],
        exp3: [...new Set(...obj2.exp2)].sort((a, b) => a - b),
        salaryMin: Math.min(...obj1.salary1),
        salaryMax: Math.max(...obj1.salary1),
        // salary3: Math.max(...obj2.salary2),
        // salary3: Math.max(...obj1.salary1),
    }
    // let maxExp = Math.max(...obj3.exp3);
    // let str= maxExp.toString()
    // let obj4 = {
    //     exp4: [[str].concat(...obj3.exp3)]
    // }
    // let pope = obj3.exp3.pop();
    // let unShifted = obj3.exp3.unshift(pope);
    // console.log(maxExp, obj3.exp3, pope)
    // let exp4 =  [['all' , ...obj3.exp3]]
    const [findLocation, setFindLocation] = useState('all');
    const [findExp, setFindExp] = useState(0);
    const [findSalary, setFindSalary] = useState(obj3.salaryMax);
    

    /////// NEW ONE BECAUSE SALARY COMING OUT TO NAN ///////////
    useEffect(() => {
        setFindSalary(obj3.salaryMax) ////// NEW ONE ///////////
    }, [current])

    // let arr = [
    //     {
    //         local1: [current.map(ele => ele.location)],
    //         location: 'all',
    //         experience: '0',
    //     }
    // ]
    // console.log(arr.map(ele => ele.local1));
    // console.log(obj1.local1);
    // console.log(obj1.salary1);
    // console.log(obj2.salaryMin, obj2.salaryMax);
    // console.log(obj3.exp3);

    // let local = [...arr, ...current];

    /////////// FOR DISPLAYING ALL THE OPTIONS ///////////////////////
    let locationType = obj3.local3.map((item, index) => {
        return <option value={item} key={index}>{item.toLowerCase()}
        </option>
    })
    let experienceType = obj3.exp3.map((item, index) => {
        // return <option value={item} key={index}>{item}
        // </option>
        return <option value={item} key={index}>{item}
        </option>
        // console.log(opt);
    })
    // useEffect(() => {
    //     console.log(findLocation, 'useEffect');
    // }, [])
    const handleChange = (e) => {
        // e.preventDefault();
        // console.log(text);
        let value = e.target.value;
        let name = e.target.name;
        // if(name === 'location' && value === 'all') setFindLocation(current);
        setTimeout(() => {
            setLoading2(true);
            if (name === 'location') setFindLocation(value);
            if (name === 'exp') setFindExp(value);
            if (name === 'salary') setFindSalary(value);
        }, 300)
        
        setTimeout(() => {
                setLoading2(false);
            }, 1500)
        // console.log(parseInt(findSalary));
        // console.log(findLocation, findExp, findSalary, obj2.salaryMax);

    }
    // if (findLocation === 'all' && findExp === '0' && findSalary === obj2.salaryMax) {
    //     return current.map(single =>
    //             <div key={single.id}>
    //                 <h2>{single.title}</h2>
    //                 <p>Date: {single.date}</p>
    //                 <p>Location: {single.location}</p>
    //                 <p>Status: {single.status}</p>
    //                 <p>Experience: {single.experience}</p>
    //                 <p>Salary: {single.salary}</p>
    //                 <p>Education: {single.education}</p>
    //                 <p>Skill: {single.skill}</p>
    //             </div>)
    // }
    // const { location } = current.map(single => single);
    // console.log(location);
    // let ans;
    // let ans1 = [];
    // const Run = () => {
    // useEffect(() => {
    //         if (answer.length === 0) {
    //             return current.map(single =>
    //                 <div key={single.id}>
    //                 <h2>{single.title}</h2>
    //                 <p>Date: {single.date}</p>
    //                 <p>Location: {single.location}</p>
    //                 <p>Status: {single.status}</p>
    //                 <p>Experience: {single.experience}</p>
    //                 <p>Salary: {single.salary}</p>
    //                 <p>Education: {single.education}</p>
    //                 <p>Skill: {single.skill}</p>
    //                 </div>)
    //             }
    //     }, [])
    useEffect(() => {
        let ans;
        if (findLocation !== 'all') {    
            ans = current.filter(single => single.location.toLowerCase() === findLocation.toLowerCase() && parseInt(single.experience) <= parseInt(findExp) && parseInt(single.salary) <= parseInt(findSalary));
            setAnswer(ans);
        }
        if (findLocation === 'all') {
            console.log(current, parseInt(findExp))
                    // console.log(single.experience)
            ans = current.filter(single =>
            // {
                // let min = single.salary.toString().split('').includes('-') || single.salary ? single.salary.toString().split('-')[0] || single.salary : single.salary;
                // let max = single.salary.toString().split('').includes('-') || single.salary ? single.salary.toString().split('-')[1] || single.salary : single.salary;
                // console.log(min, max,single.salary, 'min');
                // return (

                    // parseInt(min) <= parseInt(findSalary) &&
                    // parseInt(max) >= parseInt(findSalary) &&
                    // setAnswer(ans)
                        
                    // <div>hhh</div>
                    parseInt(single.experience) <= parseInt(findExp) && parseInt(single.salary) <= parseInt(findSalary));
                    setAnswer(ans);
                    // )
        }
        console.log(ans)
            // ans1.push(ans);
            // console.log(ans, '1');
            // return ans;
        }, [current, findLocation, findExp, findSalary]);
        // console.log(answer, '2');
    // }
    // Run()
    
    const showContent = () => {
        // if (findLocation === 'all' && findExp === 0 && parseInt(findSalary) === parseInt(obj2.salaryMax))
        // {
        // return current.map(single =>
        //         <div key={single.id}>
        //             <h2>{single.title}</h2>
        //             <p>Date: {single.date}</p>
        //             <p>Location: {single.location}</p>
        //             <p>Status: {single.status}</p>
        //             <p>Experience: {single.experience}</p>
        //             <p>Salary: {single.salary}</p>
        //             <p>Education: {single.education}</p>
        //             <p>Skill: {single.skill}</p>
        //         </div>)
        // }
        if (answer.length !== 0) {
            console.log(answer)
            return answer.map(single =>
                <div key={single.id}>
                    <img src={single.companyLogo} alt="logo" />
                        <h2>{single.title}</h2>
                        <div>
                            <div>
                                <p>Date:</p>
                                <span>{single.date}</span>
                            </div>
                            <div>
                                <p>Company Name:</p>
                                <span>{single.companyName.toLowerCase()}</span>
                            </div>
                            <div>
                                <p>Category:</p>
                                <span>{single.category.toLowerCase()}</span>
                        </div>
                        <div>
                            <p>Location:</p>
                            <span>{single.location.toLowerCase()}</span>
                            </div>
                        <div>
                                <p>Salary:</p>
                                    <span>{single.salary && '$'+(parseInt(single.salary)/ 70 /1000).toFixed(1)+'k'}</span>
                            </div>
                            <div>
                            <p>Experience:</p>
                            <span> {single.experience > 0 ?  single.experience + ' years': 'Fresher'}
                            </span>
                            </div>
                            
                        </div>
                </div>
            )
        }
        // else {
        //     return 'NO JOBS';
        // }
        else if (answer.map(single => single.location.toLowerCase() !== findLocation.toLowerCase() && parseInt(single.experience) !== parseInt(findExp))) {
            // setAnswer([]);
            return <h1>No Jobs Found</h1> 
        }
        // return current.map(single =>
        //         <div key={single.id}>
        //             <h2>{single.title}</h2>
        //             <p>Date: {single.date}</p>
        //             <p>Location: {single.location}</p>
        //             <p>Status: {single.status}</p>
        //             <p>Experience: {single.experience}</p>
        //             <p>Salary: {single.salary}</p>
        //             <p>Education: {single.education}</p>
        //             <p>Skill: {single.skill}</p>
        //         </div>)
            // current.filter(single => {
                // single.location === 
                // const { location } = single;
                
                // if (single.location === findLocation) {
                // return (
                //     single.location === findLocation ?
                //     <div key={single.id}>
                //     <h2>{single.title}</h2>
                //     <p>Date: {single.date}</p>
                //     <p>Location: {single.location}</p>
                //     <p>Status: {single.status}</p>
                //     <p>Experience: {single.experience}</p>
                //     <p>Salary: {single.salary}</p>
                //     <p>Education: {single.education}</p>
                //     <p>Skill: {single.skill}</p>
                //     </div> : null)
                    // console.log(location, findLocation);
                // }
            // })
    }
    
    // console.log(experienceType);
    // let max = [];
    // local.map((item, index) => {
    //     max.push(item.experience);
    //     // let options = 
    //     //     [<option value={item.experience} key={index}>{Math.max(item.experience)}
    //     // </option>]
    //     // return options
    // })
    // let exp = Math.max(...max);
    // let experienceType = <option>{exp}</option>

    if (loading) {
        startFetchJobs(); /////// NEW ONE ///////////

        return <div><Spinner  onStart='yes'  size={4}/></div>
    }
// window.addEventListener('resize', e => {
//         console.log(e.target.innerWidth)
//     })
    return (
        <div>
            <FilterInputContainer>
                <div>
            <label htmlFor="">Location: </label>
            <select onChange={handleChange} name="location" id="">
            {locationType}
            </select>
            <label htmlFor="">Experience Upto: </label>
            <select onChange={handleChange}  name="exp" id="">
            {experienceType}
            </select>
                <label htmlFor="salary">Salary Upto: {'  '} {parseInt(findSalary).toLocaleString('en')}</label>
                        <input onChange={handleChange} value={findSalary} name='salary' type="range" min={obj3.salaryMin} max={obj3.salaryMax} />
                        
                </div>
                <br />
                <span>
                <div>
                <Link to='/jobs'>
                <button>Back</button>
                </Link>
                </div>
                </span>
            </FilterInputContainer>
            
            {
            // current.map(single =>
            //     <div key={single.id}>
            //         <h2>{single.title}</h2>
            //         <p>Date: {single.date}</p>
            //         <p>Location: {single.location}</p>
            //         <p>Status: {single.status}</p>
            //         <p>Experience: {single.experience}</p>
            //         <p>Salary: {single.salary}</p>
            //         <p>Education: {single.education}</p>
            //         <p>Skill: {single.skill}</p>
            //     </div>)
                // {
                
                    loading2 ? <span >
                <i style={{ marginTop: '20px',marginLeft: '35px' }} className={`fas fa-spinner fa-pulse fa-${4}x`}></i>
                </span>  :


                    <FilterJobContainer>
                        {showContent()}
                    </FilterJobContainer>
            
                    }
        </div>
    )
}

const MapState = state => {
    console.log(state.fetchJobs, 'filter');
    return {
        current: state.fetchJobs,
        // array: state.list.map(single => single)
    }
}


export default connect(MapState, {startFetchJobs})(Filter);






const FilterInputContainer = styled.div`


display: flex;
flex-direction: column;
margin: 3px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


>div {
display: flex;
flex-direction: column;
    margin-top: 20px;
    margin-left: 10px;
>label {
    /* border: 1px solid black; */
    /* background-color: black; */
    text-transform: capitalize;
    margin-top: 8px;
    margin-left: 6px;
    font-size: 1.4rem;
}
>select {
    /* background-color: black; */
    margin-top: 14px;
    margin-bottom: 18px;
    margin-left: 30px;
    font-size: 1.1rem;
    /* width: 200px; */
width: 40%;
    height: 30px;
}
>input {
    background-color: black;
        margin-top: 14px;
    margin-bottom: 6px;
    margin-left: 30px;
    font-size: 1.1rem;
    width: 40%;
}
}

>span>div>a{
    margin-left: 20px;
background-color: black;
    >button {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #1e6091;
    color: white;
    cursor: pointer;
    width: 150px;
    }
}

@media (min-width: 992px) {
>div {
display: flex;
flex-direction: row;
    margin-right: 20px;
>label {
    margin-top: 4px;
    margin-left: 10px;
    font-size: 1.2rem;
    padding-right: 15px;
    text-align: right;
}
>select {
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 12px;
    font-size: 1.1rem;
    margin-right: 15px;
    width: 15%;
}
>input {
    margin-top: 0px;
    margin-bottom: 2px;
    margin-left: 10px;
    font-size: 1rem;
    width: 15%;
}

}

>span>div>a{
    /* margin-left: 20px; */
/* background-color: black; */
    >button {
    width: 200px;
    font-size: 1.3rem;
}
}
}

@media (min-width: 1200px) {
    >div {
        justify-content: center;
    align-content: center;
>label {
    margin-top: 6px;
    font-size: 1.4rem;
}
>select {
    margin-top: 6px;
    margin-bottom: 6px;
    font-size: 1.3rem;
    margin-right: 25px;
}
>input {
    font-size: 1.3rem;
}

}

>span>div>a {
    margin-left: 2%;
    >button {
    /* float: right; */
    }
}

}

`


const FilterJobContainer = styled.div`
display: flex;
flex-direction: column;
/* width: 25%; */

justify-content: space-evenly;
align-content: space-evenly;
display: grid;
/* grid-template-columns: 50% 50%; */
grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
/* grid-gap: 5px; */

grid-row-gap: 10px;
margin-bottom: 10px;


    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.1em;

>div {
    /* width: 300px; */
    /* border: 1px solid black; */

border: 2px solid #3C7CD7;
border-radius: 8px;
padding: 2px;
margin: 2px;
padding-left: 5px;
margin-right: 5px;
margin-top: 5px;
}

>div>img {
    width: 60px;
        height: 40px;
        margin-top: 10px;
        margin-left: 8px;
}
>div>h2 {
    margin-top: 6px;
    margin-bottom: 7px;
    margin-left: 18px;
    text-overflow: ellipsis; 
    overflow: hidden;
}


>div>div {
    display: flex;
    flex-direction: column;
    >div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: space-between;
        margin: 12px 2px 10px 2px;
        >p {
                /* width: 140px; */
                /* margin-left: 20px; */
                    /* margin: 5px 2px 5px 2px; */
                    /* border: 1px solid black; */
                    font-size: 1.3rem;

            }
                >span {
                    /* margin: 5px 2px 5px 2px; */
                    /* margin-left: 50px; */
                    /* float: right; */
                    /* border: 1px solid black; */
                    width: 120px;
                    font-size: 1.25rem;
                    text-transform: capitalize;
                    white-space: nowrap;
                    text-overflow: ellipsis; 
                    overflow: hidden;

                    /* margin-right: 50px; */

                }
    }
}

>h1 {
    margin-top: 8px;
    margin-left: 0px;
}

@media (min-width: 768px) {
justify-content: space-evenly;
align-content: space-evenly;

    /* display: flex; */
    /* flex-direction: column; */
    display: grid;
grid-row-gap: 15px;
/* grid-template-columns: 33% 33% 33%; */

    grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
/* grid-gap: 5px; */
/* width: 100%; */
>div {
    /* min-width: 400px; */

}
>div>div {
    /* width: 25%; */
    /* border: 1px solid black; */

    display: flex;
    flex-direction: column;
    >div {
        display: flex;
        flex-direction: row;
        /* justify-content: space-between; */
        /* align-content: space-between; */
        margin: 12px 2px 10px 2px;
        >p {
                /* width: 150px; */
                /* margin-left: 20px; */
                    /* margin: 5px 2px 5px 2px; */
                    font-size: 1.35rem;

            }
                >span {
                    /* margin: 5px 2px 5px 2px; */
                    /* margin-left: 50px; */
                    /* float: right; */
                    /* border: 1px solid black; */
                    /* width: 120px; */
                    margin-right: 5px;
                    font-size: 1.3rem;

                }
    }
}
}

@media (min-width: 768px) {
    /* display: flex; */
    /* flex-direction: column; */
    /* display: grid; */
    /* grid-template-columns: 25% 24% 25% 24%; */
}
`













// const FilterInputContainer = styled.div`

// >div>a{
//     /* margin-right: 20px; */
//     /* margin-top: 5px; */
//     /* float: right; */
//     /* clear: both; */
//     >button {
//     float: right;
//     clear: both;
//     margin-right: 50px;
//     font-size: 1.3rem;
//     padding: 5px;
//     border-radius: 4px;
//     border: none;
//     background-color: #23C5C5;
//     color: white;
//     width: 100px;
//     cursor: pointer;
//     }
// }

// @media (max-width: 320px) {
// display: flex;
// flex-direction: column;
// margin: 3px;
// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


// >label {
//     /* border: 1px solid black; */
//     /* background-color: black; */
//     text-transform: capitalize;
//     margin-top: 4px;
//     margin-left: 4px;
//     font-size: 1.1rem;
// }
// >select {
//     /* background-color: black; */
//     margin-top: 10px;
//     margin-bottom: 2px;
//     margin-left: 10px;
//     font-size: 1rem;
//     width: 200px;

// }
// >div>input {
//     /* background-color: black; */
//     margin-top: 6px;
//     margin-bottom: 2px;
//     margin-left: 10px;
//     font-size: 1rem;
//     width: 200px;
// }
// >div>a{
//     /* margin-right: 20px; */
//     /* margin-top: 5px; */
//     /* float: right; */
//     /* clear: both; */
//     >button {
//     float: right;
//     clear: both;
//     margin-right: 10px;
//     font-size: 1.3rem;
//     padding: 5px;
//     border-radius: 4px;
//     border: none;
//     background-color: #23C5C5;
//     color: white;
//     width: 100px;
//     cursor: pointer;
//     }
// }
// }
// `


// const FilterJobContainer = styled.div`
// display: flex;
// flex-direction: column;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
// grid-gap: 4px;

// @media (max-width: 320px) {
// display: flex;
// flex-direction: column;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// grid-gap: 4px;

// /* margin: 3px; */
// margin-top: 15px;
// margin-left: 5px;
// margin-right: 10px;
// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// font-size: 1.1em;

// >div {
// border: 2px solid #EFC5C5;
// border-radius: 8px;
// padding: 2px;
// margin: 2px;
// padding-left: 5px;
// margin-top: 5px;
// margin-bottom: 3px;
// }

// >h1 {
//     margin-top: 8px;
//     margin-left: 2px;
// }
// >div>p {
//     margin: 5px 2px 2px 2px;
// >span {
// margin-right: 45px;
// float: right;
// /* text-transform: capitalize; */
// font-weight: normal;
// }
// }

// }
// `