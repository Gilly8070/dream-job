import React, { useState } from 'react';
// import { data } from '../../components/employer/sidebar/Jobs';
import { connect } from 'react-redux';
import { searchJob } from '../../../actions/action';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Search = ({current, searchJob}) => {
    const [text, setText] = useState('');
    const [searchJobs, setSearchJobs] = useState(current);
    // const [click, setClick] = useState(false);
    // const [display, setDisplay] = useState(data);

    // useEffect(() => {
        const handleChange = (e) => {
            let value = e.target.value.toUpperCase();
            setText(value);
            // searchJob(text);
            let filterCurrent = current.filter((single) => single.title.toUpperCase().includes(value));
            setSearchJobs(filterCurrent);
            console.log(searchJobs);
            console.log(text);
    }
            // console.log(searchJobs);

    // let lll = useEffect(() => {

    // },[text])
    // const display = () => {

    // }
    // }, [text, handleChange])
        // console.log(value, data.find(sing => sing.title === value ));
        // let fil = data.filter(single => {
        //         return single.title === value ?
        //                 // <div key={single.id}>
        //             single
        //                 // </div > 
        //                 : 'No Match'
        // })
        // return fil;

    // }
    // useEffect(() => { 
    //     console.log(text);
    //     filterJob(text);
    //     return (
    //         text !== '' ? 
    //             (current.map(single => (<div key={single.id}>
    //                 <h2>{single.title}</h2>
    //             </div>)
    //             ))
    //             : null
    //     )
    // }, [text]);

    // const handleClick = () => {
        // setClick(!click);
        // filterJob(text);
        // console.log(text);

        // (current.map(single => (<div key={single.id}>
        //             <h2>{single.title}</h2>
        //         </div>)
        //         ))
    // }
    // useEffect(() => {
    //     display.find(sing =>  {
    //             if(sing.title === text) {
    //                 // return <FilterComp >
    //                     setDisplay(sing)
    //                 // </FilterComp>
    //             } else {
    //                 return display
    //             }
    //             }
    //             )
    // },[text])
    // if (current.map(single => single.title === text)) {
    //     <div>
    //         <h1>single.title</h1>
    //     </div>
    // }
    
    return (
            // filter ?
        <div>
            <div>
            <label>search:</label>
                <input value={text} type="text" placeholder='search by job title' onChange={handleChange} />
            </div>
                <Link to='/jobs'>
                    <button>Back</button>
                </Link>
            {searchJobs.length > 0 ?
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
                // click ? <h1>Hello</h1> : null
                // text === '' ? /////////////////////////////////////
                //     current.map(single =>
                        // <div key={single.id}>
                        //     <h2>{single.title}</h2>
                        //     <p>Date: {single.date}</p>
                        //     <p>Location: {single.location}</p>
                        //     <p>Status: {single.status}</p>
                        //     <p>Experience: {single.experience}</p>
                        //     <p>Salary: {single.salary}</p>
                        //     <p>Education: {single.education}</p>
                        //     <p>Skill: {single.skill}</p>
                        // </div>)
                //     // : null
                // // {
                //     // if (single.title === text) {
                //     // return (
                //         // <div key={single.id}>
                //         //     <h2>{single.title}</h2>
                //         // </div>
                //         // )
                // // }
                //     // else  {
                //         // return null
                //         // }
                //     // }
                //     // )
                //     :
                //     // {
                //         // if()
                //     // {lll}
                //     // let filterCurrent = current.filter((single) => )
                //         searchJobs.map(single =>
                //             single.title.toLowerCase() === text.toLowerCase() ?
                //             <div key={single.id}>
                //             <h2>{single.title}</h2>
                //             <p>Date: {single.date}</p>
                //             <p>Location: {single.location}</p>
                //             <p>Status: {single.status}</p>
                //             <p>Experience: {single.experience}</p>
                //             <p>Salary: {single.salary}</p>
                //             <p>Education: {single.education}</p>
                //                     <p>Skill: {single.skill}</p>
                //             </div>
                //                 : null
                //             )  ///////////////////////////////////////
                    // }
            }
            
        </div> 
        // : null
    )
    
}

const MapState = state => {
    console.log(state, 'Search');
    return {
        current: state.list
    }
}

// Search.propTypes = {
//     current: PropTypes.array,
//     filterJob: PropTypes.func.isRequired
// }

export default connect(MapState, {searchJob})(Search);


// const FilterComp = styled.div`
// width: 200px;
// height: 200px;
// /* background-color: blue; */
// display: block;
// z-index: 99;
// `