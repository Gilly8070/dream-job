import React, { useState } from 'react'
import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner';


const SortDashboard = ({ current, backTo, btn}) => {
    const [newJobs, setNewJobs] = useState(false);
    const [salary, setSalary] = useState(false)
    const [answer, setAnswer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

    }, [loading])

    useEffect(() => {
            setTimeout(() => {
                setLoading2(false);
            }, 800)
            
    }, [loading2])

    useEffect(() => {
        // let ans;
        // console.log(newJobs, salary)
        
        if (newJobs && !salary) {
            // let len = current.length;
            // let reverse = current.slice(len - 5,)
            let copyCurrent = current.slice().sort();
            let reverseCurrent = copyCurrent.reverse().slice(0, 6);
            // ans = reverse
            setAnswer(reverseCurrent);
            console.log(reverseCurrent);
        }
        if (!newJobs && salary) {
            let copyCurrent = current.slice().sort();
            let sortCurrent = copyCurrent.sort((a, b) =>  b.salary - a.salary)
            console.log(sortCurrent);
            setAnswer(sortCurrent);
        }
        if (newJobs && salary) {
            let copyCurrent = current.slice().sort();
            let reverseCurrent = copyCurrent.reverse().slice(0, 6);
            let sortCurrent = reverseCurrent.sort((a, b) =>  b.salary - a.salary)
            console.log(sortCurrent);
            setAnswer(sortCurrent);
            // let len = current.length;
            // let reverse = current.slice(len - 5,)
            // let reverse = current.reverse().slice(0, 6);
            // ans = reverse
            // setAnswer(reverse);
            // console.log(reverse);
        }

        if (!newJobs && !salary) {
            setAnswer(current)
        }
        
    }, [ current, newJobs, salary])

    const handleChange = (e) => {
        
        let value = e.target.checked;
        let name = e.target.name;
        setTimeout(() => {
            setLoading2(true);

            if (name === 'newJobs') {
                setNewJobs(value)
                // console.log(name, value)
            }
            if (name === 'salary') {
                setSalary(value);
                // console.log(name, value)
            }
        }, 600)
            
    }
    // console.log(newJobs);
    // console.log(newJobs, salary);
    const showContent = () => {
        // setTimeout(() => {
            
        if (answer.length !== 0) {
            // console.log(answer);
            return answer.map(single =>
                <div key={single.id}>
                    <h2>{single.title}</h2>
                    <p>Date: {single.date}</p>
                    <p>Company Name: {single.companyName}</p>
                    <p>Category: {single.category}</p>
                    <p>Location: {single.location}</p>
                    <p>Status: {single.status}</p>
                    <p>Experience: {single.experience}</p>
                    <p>Salary: {single.salary}</p>
                    <p>Education: {single.education}</p>
                    <p>Skill: {single.skill}</p>
                </div>)
            }
        // }, 300);
            
        // else if (answer.map(single => single.location.toLowerCase() !== findLocation.toLowerCase() && single.companyName.toLowerCase() !== findCompany.toLowerCase() && single.category.toLowerCase() !== findCategory.toLowerCase())) {
        //     return 'No Jobs'
        // }
        }
    
    if (loading) {
        return <Spinner size={3} />
    }

    return (
        <div>
            <div className='sort'>
                <label htmlFor=""><strong>New Jobs</strong></label>{' '}
                <input  onClick={handleChange} className='increase' type="checkbox" name="newJobs" id=""  />
                <label htmlFor=""><strong>Salary High to Low</strong> </label>
            <input onClick={handleChange} className='increase' type="checkbox" name="salary" id="" />
            </div>
            

            <Link to={backTo}>
                <button>Back To {btn}</button>
            </Link>
            {
                loading2 ? <Spinner size={3} /> :
                showContent()
            }
        </div>
    )
}


// const MapState = (state) => {
//     // console.log(state.allJobs, 'SortDashboard');
//     // console.log( state.allJobs, 'SortDashboard');
    
//     return {
//         current: state.allJobs,
//         // current1: state.list,

//     }
// }

export default SortDashboard;




// class SortDashboard extends Component {
//     render() {
//         return (
//             <div>
//                 SortDashboard
//             </div>
//         )
//     }
// }