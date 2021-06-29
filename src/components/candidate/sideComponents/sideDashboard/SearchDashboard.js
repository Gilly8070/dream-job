import React, { useState,  useEffect } from 'react'
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner';

const SearchDashboard = ({ current, backTo, btn }) => {
    const [text, setText] = useState('');
    const [searchJobs, setSearchJobs] = useState(current);

    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

    }, [loading])

    var timer = '';
    useEffect(() => {
        clearTimeout(timer);
            timer = setTimeout(() => {
                    setLoading2(false);
                }, 800)
                
        }, [loading2])
    
    const handleChange = (e) => {
        let value = e.target.value.toUpperCase();
        setText(value);

        setTimeout(() => {
            setLoading2(true);

            let filterCurrent = current.filter((single) => single.title.toUpperCase().includes(value));
            setSearchJobs(filterCurrent);
        }, 300)
            // console.log(searchJobs);
        // console.log(text);
    }

    if (loading) {
        return <Spinner size={3} />
    }
    return (
        <div>
            <div>
            <label>Search:</label>
                <input value={text}  type="text" placeholder='search by job title'  onChange={handleChange} />
            </div>
            <Link to={backTo}>
                <button>Back To {btn}</button>
                </Link>
                <div>
                {
                    loading2 ? <Spinner size={3} /> :
                searchJobs.length > 0 ?
                searchJobs.map((single) => {
                    return <div key={single.id}>
                    <h2>{single.title}</h2>
                    <p>Date: {single.date}</p>
                    <p>Location: {single.location}</p>
                    <p>Status: {single.status}</p>
                    <p>Experience: {single.experience}</p>
                    <p>Salary: {single.salary}</p>
                    <p>Education: {single.education}</p>
                    <p>Skill: {single.skill}</p>
                    </div>
                }) : <h1>No Job Found</h1>
            }
            
            </div>
        </div> 
    )
    
}



// const MapState = (state) => {
//     console.log(state, 'SearchDashboard');
//     return {
//         current: state.allJobs,
//     }
// }


export default SearchDashboard;


// class SearchDashboard extends Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <label>Search:</label>
//                     <input value={text} type="text" placeholder='search by job title' onChange={handleChange} />
//                 </div>
//                 <Link to='/'>
//                     <button>Back to dashboard</button>
//                 </Link>
//             </div>
//         )
//     }
// }