import React, { useState,  useEffect } from 'react'
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { currentUserReceivedOffer, currentUserAcceptedOffer, currentUserRejectOffer, fetchAllJobsForCurrentUser,
    fetchAllLiveJobsForCurrentUser,
} from '../../../../actions/action';
        
const SearchDashboard = ({ current, backTo, btn, currentUserReceivedOffer, currentUserAcceptedOffer, currentUserRejectOffer, fetchAllJobsForCurrentUser,
    fetchAllLiveJobsForCurrentUser,allJobs, }) => {
    const [text, setText] = useState('');
    const [searchJobs, setSearchJobs] = useState(current);

    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);
    
    // console.log(current)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 7000)


        // /////// NEW ONE ///////////
        // setSearchJobs(current)

        
        // setSearchJobs(allJobs); 

        // if (checkState === 'dashboardJobs') {
        //     console.log(checkState, current);
        //     fetchAllJobsForCurrentUser();
        //     setSearchJobs(allJobs);
        // }
        // if (checkState === 'receivedOffer') {
        //     currentUserReceivedOffer();
        // }
        // if (checkState === 'acceptedOffer') {
        //     currentUserAcceptedOffer();
        // }
        // if (checkState === 'rejectOffer') {
        //     currentUserRejectOffer();
        // }
        // if (checkState === 'liveJobs' || checkState === 'mapJobs') {
        //     fetchAllLiveJobsForCurrentUser();
        // }

    }, [loading])

    useEffect(() => {
        if (searchJobs.length === 0) {
            // console.log('yeee')
            /////// NEW ONE ///////////
        setSearchJobs(current)
        }
    }, [current])

    // useEffect(() => {
        // if (checkState === 'dashboardJobs') {
        //     console.log(checkState, current);
        //     fetchAllJobsForCurrentUser();
        //     setSearchJobs(allJobs);
        // }
        // if (checkState === 'receivedOffer') {
        //     currentUserReceivedOffer();
        // }
        // if (checkState === 'acceptedOffer') {
        //     currentUserAcceptedOffer();
        // }
        // if (checkState === 'rejectOffer') {
        //     currentUserRejectOffer();
        // }
        // if (checkState === 'liveJobs' || checkState === 'mapJobs') {
        //     fetchAllLiveJobsForCurrentUser();
        // }

    // }, [])

    // var timer = '';
    // useEffect(() => {
    //     clearTimeout(timer);
    //         timer = setTimeout(() => {
    //                 setLoading2(false);
    //             }, 2000)
                
    //     }, [loading2])
    
    const handleChange = (e) => {
        let value = e.target.value.toUpperCase();
        console.log(value, text)
        setText(value);

        // loading2 &&
        let timer2 = setTimeout(() => {
            setLoading2(true);
        }, 300)
        let filterCurrent = current.filter((single) => single.title.toUpperCase().includes(value));
        setSearchJobs(filterCurrent);
        // let inputSearch = document.getElementById('search');
        
        let timer = setTimeout(() => {
            clearTimeout(timer)
            clearTimeout(timer2)
            setLoading2(false);
            // inputSearch.disabled = true;
        }, 2500)
        // setTimeout(() => {
            // setLoading2(false);
            // inputSearch.disabled = true;
        // }, 2500)
        // console.log(inputSearch.value === text)
        // loading2 &&
        // inputSearch.disabled = false;
        // console.log(inputSearch)
        // setTimeout(() => {
        // inputSearch.disabled = true;
        //         setLoading2(false);
        // }, 1500)
    }
    // useEffect(() => {
        
    //     // console.log(inputSearch.value, text)
    //     setTimeout(() => {
    //         let inputSearch = document.getElementById('search');
    //         // inputSearch.disabled = true;
    //     inputSearch.disabled = false;
    //             setLoading2(false);
    //     }, 500)
    // }, [handleChange])
    // loading2 &&
    // setTimeout(() => {
    //         setLoading2(false);
    // }, 1500)
        // console.log(searchJobs);
    // console.log(text);

    if (loading) {
        // if (checkState === 'dashboardJobs') {
        //     console.log(checkState, current);
        //     fetchAllJobsForCurrentUser();
        //     // setSearchJobs(allJobs);
        // }
        // if (checkState === 'receivedOffer') {
        //     currentUserReceivedOffer();
        // }
        // if (checkState === 'acceptedOffer') {
        //     currentUserAcceptedOffer();
        // }
        // if (checkState === 'rejectOffer') {
        //     currentUserRejectOffer();
        // }
        // if (checkState === 'liveJobs' || checkState === 'mapJobs') {
        //     fetchAllLiveJobsForCurrentUser();
        // }
        return <div><Spinner onStart='yes' size={4} /></div>
    }
    return (
        <SearchContainer>
            <div>
            <label>Search:</label>
                <input   id='search' value={text}  type="text" placeholder='search by job title'  onChange={handleChange} />
            </div>
            <div>
            <Link to={backTo}>
            <button>Back To {btn}</button>
            </Link>
            </div>
            {
                loading2 ? <span >
                <i style={{ marginTop: '30px',marginLeft: '35px' }} className={`fas fa-spinner fa-pulse fa-${4}x`}></i>
                </span> :
                    <DisplaySearchJob>
                        {
                    searchJobs &&
                            searchJobs.length > 0 ?
                                searchJobs.map((single) => {
                                    return <div key={single.id}>
                                        <img src={single.companyLogo} alt="Logo" />
                                        <h2>{single.title}</h2>
                                        <div>
                                            <div>
                                                <p>Date :</p>
                                                <span>{single.date}</span>
                                            </div>
                                            <div>
                                                <p>Company Name :</p>
                                                <span>{single.companyName.toLowerCase()}</span>
                                            </div>
                                            <div>
                                                <p>Category :</p>
                                                <span>{single.category.toLowerCase()}</span>
                                            </div>
                                            <div>
                                                <p>Location :</p>
                                                <span>{single.location.toLowerCase()}</span>
                                            </div>
                                            <div>
                                                <p>Salary :</p>
                                                <span>{single.salary && '$'+(parseInt(single.salary)/ 70 /1000).toFixed(1)+'k'}</span>
                                            </div>
                                            
                                            <div>
                                                <p>Experience :</p>
                                                <span> {single.experience > 0 ?  single.experience + ' years': 'Fresher'}
                                                </span>
                                        </div>
                                        
                                        </div>
                                    </div>
                                }) : <h1>No Job Found</h1>
                        }
            
                    </DisplaySearchJob>
            }
        </SearchContainer> 
    )
    
}



// const MapState = (state) => {
//     console.log(state, 'SearchDashboard');
//     return {
//         current: state.allJobs,
//     }
// }
const MapState = (state) => {
    console.log(state, 'SearchDashboard');
    return {
        allJobs: state.allJobs,
        currentUserReceivedOffer: state.currentUserReceivedOffer,
        currentUserAcceptedOffer: state.currentUserAcceptedOffer,
        currentUserRejectOffer: state.currentUserRejectOffer,
        allLiveJobs: state.allLiveJobs,
    }
}

// export default SearchDashboard;
export default connect(MapState, {currentUserReceivedOffer, currentUserAcceptedOffer, currentUserRejectOffer, fetchAllJobsForCurrentUser, fetchAllLiveJobsForCurrentUser,})(SearchDashboard);



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
        margin-left: 12px;
        font-size: 1.4rem;
        /* background-color: black; */
    }

    >input {
        /* display: block; */
        /* margin-top: 8px; */
        margin-left: 20px;
        font-size: 1.1rem;
        width: 50%;
    height: 36px;

        /* background-color: black; */
        
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
    /* width: 100px; */
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #23C5C5;
    color: white;
    cursor: pointer;
        /* margin-left: 10px; */
    }
}
}

/* } */
`

const DisplaySearchJob = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-content: space-evenly;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
grid-row-gap: 10px;



    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.2em;

>div {
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
        /* margin: 5px 2px 5px 2px; */
        margin: 12px 2px 10px 0px;
        >p {
                /* width: 100px; */
                /* margin-left: 20px; */
                    /* margin: 5px 2px 5px 2px; */
                font-weight: 600;
                    font-size: 1.3rem;
            }
                >span {
                    /* margin: 5px 2px 5px 2px; */
                    /* margin-left: 50px; */
                    /* float: right; */
                    /* border: 1px solid black; */
                    width: 120px;
                    font-size: 1.25rem;
                    white-space: nowrap;
                    text-overflow: ellipsis; 
                    overflow: hidden;
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
grid-row-gap: 10px;

    grid-template-columns: repeat(auto-fit, minmax(350px, 350px));

>div>div {

    display: flex;
    flex-direction: column;
    >div {
        display: flex;
        flex-direction: row;
        margin: 5px 2px 5px 2px;

                >span {
                    margin-right: 5px;
                    font-size: 1.3rem;
                }
    }
}
}

/* @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 5px;


>div>div {
    display: flex;
    flex-direction: column;
    >div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: space-between;
        margin: 5px 2px 5px 2px;
        >p {
                width: 100px;
                /* margin-left: 20px; */
                    /* margin: 5px 2px 5px 2px; */

            /* } */
                /* >span { */
                    /* margin: 5px 2px 5px 2px; */
                    /* margin-left: 50px; */
                    /* float: right; */
                    /* border: 1px solid black; */
                    /* width: 100px; */
                    /* margin-right: 50px; */

                /* } */
    /* } */
/* } */
/* } */
`