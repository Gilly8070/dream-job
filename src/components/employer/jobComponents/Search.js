import React, { useState, useEffect } from 'react';
// import { data } from '../../components/employer/sidebar/Jobs';
import { connect } from 'react-redux';
import { searchJob } from '../../../actions/action';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import {startFetchJobs} from '../../../actions/actionForRedux'



const Search = ({current, searchJob, startFetchJobs}) => {
    const [text, setText] = useState('');
    const [searchJobs, setSearchJobs] = useState(current);
    // const [click, setClick] = useState(false);
    // const [display, setDisplay] = useState(data);

    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);

    useEffect(() => {
        setSearchJobs(current)  /////// NEW ONE ///////////
        
        setTimeout(() => {
            setLoading(false);
        }, 7000)
    }, [loading])

    // const handleChange2 = () => {
    //     // useEffect(() => {
    //         setTimeout(() => {
    //             setLoading2(true);
    //         }, 1000)
    //         // setTimeout(() => {
    //         //     setLoading2(false);
    //         // }, 500)
    //     // }, [loading2])
    // }
    useEffect(() => {
            setTimeout(() => {
                setLoading2(false);
            }, 800)
            
        }, [loading2])
    
    // useEffect(() => {
        const handleChange = (e) => {
            let value = e.target.value.toUpperCase();
            setText(value);
            // searchJob(text);

            // handleChange2()
            setTimeout(() => {
            setLoading2(true);
                let filterCurrent = current.filter((single) => single.title.toUpperCase().includes(value));
                setSearchJobs(filterCurrent);
                console.log(searchJobs);
                console.log(text);
            }, 300)
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
    if (loading) {
        startFetchJobs(); /////// NEW ONE ///////////

        return <div><Spinner  onStart='yes'  size={4} /></div>
    }
    // if (loading2) {
    //     return <Spinner size={3} />
    // }
    return (
            // filter ?
        
        <SearchContainer>
            <div>
            <label>Search:</label>
                <input value={text} type="text" placeholder='search by job title' onChange={handleChange}/>
            </div>
            <div>
                <Link to='/jobs'>
                <button>Back</button>
                </Link>
            </div>
            {
                loading2 ? <span >
                <i style={{ marginTop: '30px',marginLeft: '35px' }} className={`fas fa-spinner fa-pulse fa-${4}x`}></i>
                </span> :
                    <DisplaySearchJob>
                        {
                    
                            searchJobs.length > 0 ?
                                searchJobs.map((single) => {
                                    // console.log((single.companyName.toString('').split(' ').map((el) => el.toString('').split('').slice(0,10).join(''))).join(''))
                                    // console.log(single.companyName)
                                    return <div key={single.id}>
                                        <img src={single.companyLogo} alt="logo" width='60px' height='60px' />
                                        <h2>{
                                            single.title
                                        }
                                        </h2>
                                        <div>
                                            <div>
                                                <p>Date:</p>
                                                <span>{single.date}</span>
                                            </div>
                                            <div>
                                                <p>Company Name:</p>
                                                <span>{
                                                    single.companyName.toLowerCase()
                                                }</span>
                                            </div>
                                            <div>
                                                <p>Category:</p>
                                                <span>{
                                                    single.category.toLowerCase()
                                                }</span>
                                            </div>
                                            <div>
                                                <p>Location:</p>
                                                <span>{
                                                    single.location.toLowerCase()
                                                }</span>
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
                                }) : <h1>No Job Found</h1>
                        }
            
                    </DisplaySearchJob>
                
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
                
        </SearchContainer> 
        // : null
    )
    
}

const MapState = state => {
    console.log(state.fetchJobs, 'Search');
    return {
        current: state.fetchJobs
    }
}

// Search.propTypes = {
//     current: PropTypes.array,
//     filterJob: PropTypes.func.isRequired
// }

export default connect(MapState, {searchJob, startFetchJobs})(Search);


// const FilterComp = styled.div`
// width: 200px;
// height: 200px;
// /* background-color: blue; */
// display: block;
// z-index: 99;
// `




const SearchContainer = styled.div`

/* @media (max-width: 320px) { */

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
* {
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
}

div {

    margin-top: 20px;
    margin-left: 10px;
    >label {
        text-transform: capitalize;
        margin-left: 40px;
        font-size: 1.4rem;
    }

    >input {
        margin-left: 20px;
        font-size: 1.1rem;
        width: 50%;
    height: 36px;
    }
}
>div {
    >a {
    margin-left: 20px;
background-color: black;
        >button {
            /* margin-right: 10%; */
            /* margin-left: 70%; */
            /* float: right; */
            /* clear: both; */
            width: 150px;
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 1.2rem;
            padding: 10px;
            border-radius: 6px;
            border: none;
            background-color: #1e6091;
            color: white;
            cursor: pointer;
        }
    }
}

@media (min-width: 768px) {
    >div {
    >a {
        >button {
            width: 200px;
            font-size: 1.3rem;
        }
    }
}
}
`

const DisplaySearchJob = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-content: space-evenly;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
grid-row-gap: 10px;
margin-bottom: 10px;


    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.1em;

>div {
border: 2px solid #3C7CD7;
border-radius: 8px;
padding: 2px;
margin: 2px;
margin-right: 5px;
margin-top: 5px;
}

>div {
    /* margin: 0px; */
    /* width: 60px; */
    /* height: 40px; */
    /* border: 1px solid black; */

    ////////// final change /////////
    >img {
        width: 60px;
        height: 40px;
        margin-top: 10px;
        margin-left: 8px;

}
}

>div>h2 {
    margin-top: 6px;
    margin-bottom: 7px;
    margin-left: 18px;

    ////////// final change ///////////////
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
        margin: 12px 2px 10px 0px;
        /* border: 1px solid black; */
        /* margin-left: -2px; */
        /* padding-left: 0px; */
        >p {
            /* width: 160px; */
            /* margin-left: 20px; */
            /* margin: 5px 2px 5px 2px; */
            font-size: 1.3rem;
        }
        >span {
                    /* position:relative; */
                    /* margin: 5px 2px 5px 2px; */
                    /* margin-left: 50px; */
                    /* float: right; */
                    /* display: flex; */
                    /* flex-direction: column; */

                    ////////// final change ///////////////
                    width: 120px;
                    font-size: 1.25rem;
                    white-space: nowrap;
                    text-overflow: ellipsis; 
                    overflow: hidden;
                    /* border: 1px solid black; */
                    text-transform: capitalize;
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

    display: grid;
grid-row-gap: 15px;

    grid-template-columns: repeat(auto-fit, minmax(350px, 350px));

>div>div {

    display: flex;
    flex-direction: column;
    >div {
        display: flex;
        flex-direction: row;
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

                ////////// final change ///////////////
                    margin-right: 5px;
                    font-size: 1.3rem;

                }
    }
}
}










// const SearchContainer = styled.div`

// @media (max-width: 320px) {

// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// * {
//     /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
// }

// div>label {
//     text-transform: capitalize;
//     margin-top: 4px;
//     margin-left: 4px;
//     font-size: 1.2rem;
//     /* background-color: black; */

// }
// div>input {
//     /* display: block; */
//     margin-top: 8px;
//     margin-left: 10px;
//     font-size: 1rem;
//     /* background-color: black; */

// }
// >div>a {
//     >button {
//     margin-right: 20px;
//     margin-top: 10px;
//     float: right;
//     clear: both;
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

// const DisplaySearchJob = styled.div`
// display: flex;
// flex-direction: column;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

// @media (max-width: 320px) {
//     display: flex;
// flex-direction: column;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

//     margin-top: 15px;
//     margin-left: 5px;
//     margin-right: 10px;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     font-size: 1.1em;

// &>div {
//     /* background-color: black; */
//     /* border: 1px solid black; */
// border: 2px solid #EFC5C5;
// border-radius: 8px;
// padding: 2px;
// margin: 2px;
// padding-left: 5px;
// /* margin-right: 1px; */
// margin-top: 5px;
// /* padding-right: 0px; */
// /* margin-right: 0; */
// }

// >h2 {
//     margin-top: 8px;
//     margin-left: 2px;
// }

// >div>p {
//     margin: 5px 2px 2px 2px;
//     /* display: inline-block; */
// &>span {
//     /* display: flex; */
//     /* flex-direction: row; */
//     /* justify-content: center; */
//     /* align-content: center; */
//     /* align-items: center; */
//     margin-right: 45px;
//     float: right;
//     /* text-transform: capitalize; */
//     font-weight: normal;
//                 /* font-size: 1rem; */
//     /* clear: both; */
//     /* background-color: black; */
// }
// }
// }
// `