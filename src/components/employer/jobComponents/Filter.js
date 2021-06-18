import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Filter = ({ current }) => {
    // const { location } = arrayy;
    // console.log(location)
    // let initial = {
    //     location: 'all',
    //     exp: 0,
    //     salary: 0,
    // }

    
    ///////////////// FOR ALL THE OPTIONS /////////////////////////////
    let obj1 = {
        // removeFalseLocation: [current.filter(ele => ele.location)],
        local1: [current.map(ele => ele.location ? ele.location : 'all' )],
        exp1: [current.map(ele => ele.experience.toString().split('').includes('-') || ele.experience ? ele.experience.toString().split('-')[0] || ele.experience : '0')],
        salary1: [current.map(ele => ele.salary)][0],
    }
    console.log(obj1.salary1, '1');
    let obj2 = {
        local2: [['all'].concat(...obj1.local1)],
        exp2: [...obj1.exp1],
        // exp2: [['0'].concat(...obj1.exp1)],
        salary2: obj1.salary1.map((ele) => ele.toString().split('').includes('-') || ele ? ele.toString().split('-')[1] || ele : ele ),
        // salaryMin: Math.min(...obj1.salary1),
        // salaryMax: Math.max(...obj1.salary1),
    }
    console.log(obj2.salary2, '2');
    let obj3 = {
        local3: [...new Set(...obj2.local2)],
        exp3: [...new Set(...obj2.exp2)].sort((a, b) => a - b),
        salaryMin: Math.min(...obj2.salary2),
        salaryMax: Math.max(...obj2.salary2),
        // salary3: Math.max(...obj2.salary2),
        // salary3: Math.max(...obj1.salary1),
    }
    // console.log(obj3.salary3)
    // let exp4 =  [['all' , ...obj3.exp3]]
    const [findLocation, setFindLocation] = useState('all');
    const [findExp, setFindExp] = useState(0);
    const [findSalary, setFindSalary] = useState(obj3.salaryMax);
    const [answer, setAnswer] = useState([]);
    
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
        if (name === 'location') setFindLocation(value);
        if (name === 'exp') setFindExp(value);
        if (name === 'salary') setFindSalary(value);
        
        console.log(parseInt(findSalary));
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
        // }
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
            return answer.map(single =>
                <div key={single.id}>
                    <h2>{single.title}</h2>
                    <p>Date: {single.date}</p>
                    <p>Location: {single.location}</p>
                    <p>Status: {single.status}</p>
                    <p>Experience: {single.experience}</p>
                    <p>Salary: {single.salary}</p>
                    <p>Education: {single.education}</p>
                    <p>Skill: {single.skill}</p>
                </div>)
        }
        // else {
        //     return 'NO JOBS';
        // }
        else if (answer.map(single => single.location.toLowerCase() !== findLocation.toLowerCase() && parseInt(single.experience) !== parseInt(findExp))) {
            // setAnswer([]);
            return 'No Jobs'
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

    return (
        <div>
            <label htmlFor="">Location: </label>
            <select onChange={handleChange} name="location" id="">
                {locationType}
            </select>
            <label htmlFor="">Experience Upto: </label>
            <select onChange={handleChange}  name="exp" id="">
                {experienceType}
            </select>
            <label htmlFor="salary">Salary Upto: {parseInt(findSalary).toLocaleString('en')}</label>
            <input onChange={handleChange} value={findSalary} name='salary' type="range" min={obj3.salaryMin} max={obj3.salaryMax} />
            <br />
            <Link to='/jobs'>
                <button>Back</button>
            </Link>
            
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

                showContent() 
            }
        </div>
    )
}

const MapState = state => {
    console.log(state, 'filter');
    return {
        current: state.list,
        array: state.list.map(single => single)
    }
}


export default connect(MapState, null)(Filter);
