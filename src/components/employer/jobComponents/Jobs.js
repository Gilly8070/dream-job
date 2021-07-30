import React, { useState, useEffect } from 'react';
// import Search from './Search';
// import Sidebar from '../sidebar/Sidebar';
import { connect } from 'react-redux';
// import AddJob from './AddJob';
import {Link} from 'react-router-dom';
import SingleJob from './SingleJob';
// import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import {startFetchJobs} from '../../../actions/actionForRedux'

const Jobs = ({current, startFetchJobs}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // startFetchJobs();
        setTimeout(() => {
            setLoading(false);
        }, 7000)
        
        startFetchJobs() //////////// NEW ONE //////////// 
        return () => {
      setLoading(false); // This worked for me
    };
    }, [loading])

    

    const handleAdd = () => {
        console.log('add');
        setShowAdd(!showAdd)
    }
    const handleSearch = () => {
        console.log('search');
        setShowSearch(!showSearch)
    }
    const handleFilter = () => {
        console.log('filter');
        // <Search />

        // return (
        //     filter ?
        //         <div><Search /></div>
        //         : null
        // )
        // return (
            // setFilter(!filter)
        // if (filter) {
        //     return <FilterComp>
        //     <Search />
        //     </FilterComp>
        // }
        
        // console.log('filter');
        // )
    }
    const handleMore = () => {
        setShowMore(true);
        console.log('show more');
    }
    // useEffect(() => {
    //     <Search />
    // }, [filter])
    // const handleClick = () => {
    //     let attr = refContainer.current.attributes.name.nodeValue;
    //     // if (attr === 'filter') {

    //         // <Search />
    //         // <Search data={data} />
    //         // <div>
    //         //     <input type="text" />
    //         //     </div>
    //         console.log(refContainer.current);
        
    //         // console.log(refContainer.current.attributes.name.nodeValue);
    //     // }
    // }
                    // {showSearch ? <Search /> : null}
    // if (showSearch) {
    //     return <Search />
    // }
    // if (showAdd) {
    //     return <AddJob />
    // }
    // window.addEventListener('resize', e => {
    //     console.log(e.target.innerWidth);
    // })
    if (loading) {

        return <div><Spinner  onStart='yes'  size={4} /></div>
    }
    if (current === undefined || current.length === 0) {
        return (
            <HeadingContainer>
                <h1>Add Job</h1>
                <span>
                <Link to='/addJob'>
                <i onClick={handleAdd}
                className="fas fa-plus fa-2x"
                name='add'>
                </i>
                </Link>
                </span>
            </HeadingContainer>)
    }
    if (showMore) {
        return <SingleJob single={current} />
    }
    // console.log(current)
    return (
        <React.Fragment>
            <JobContainer>
                <MainSingleJobContainer>
            {/*!filter ? null  : <Search /> .substr(0,8)*/}
            {
                        current.map(single => single.title &&
                        
                        <SingleJobContainer key={single.id}>
                            <Div>
                            <Div1>
                                <Div2>
                                    <div>
                                        <img width='50' src={single.companyLogo} alt="Logo" />
                                        <span>{single.date}</span>
                                    </div>
                                    <h3>{single.title.toLowerCase()}</h3>
                                        <p>
                                            {single.companyName ?
                                                <span>{single.companyName.toLowerCase()}
                                                </span> : 'Anonymous'},
                                            <span> {single.location.toLowerCase()}
                                            </span>
                                        </p>
                                </Div2>
                            </Div1>
                                <Div3>
                                    <div>
                                        <p>Job Id </p>
                                        <span>{ single.id }</span>
                                        </div>
                                    <div>
                                        <p>Salary</p>
                                        <span>{single.salary && '$'+(parseInt(single.salary)/ 70 /1000).toFixed(1)+'k'}</span>
                                        
                                    </div>
                                    <div>
                                        <p>Experience</p>
                                        <span> {single.experience > 0 ?  single.experience + ' years': 'Fresher'}
                                        </span>
                                        </div>
                                    <div>
                                        <p>Shift Type</p>
                                        <span>{single.shiftType}</span>
                                        </div>
                                    </Div3>
                                    <span></span>

                            <Div4>
                            <Link to={`/singleJob/${single.id}`}>
                                <button onClick={handleMore} >More...</button>
                                </Link>
                            </Div4>
                            </Div>
                                
                        </SingleJobContainer>
                        
                            
                )
                    }
                </MainSingleJobContainer>
                    
            {/*<SingleJob current={current} />*/}
        {/*{showSearch ? <Search />  :  null} */}

            {/*{current.title ?
                <SingleJob current={current} /> : <SingleJob current={current} />}  */}
                <SideComponent>
                    <SingleSideComponent>
                        <Link to='/addJob'>
                        <FontIcon iconSize='30px'
                        className="fas fa-plus"
                        name='add'>
                        </FontIcon>
                        </Link>
                    </SingleSideComponent>
                    <SingleSideComponent>
                        <Link to='/search'>
                        <FontIcon onClick={handleSearch}
                        className="fas fa-search"
                        name='search'>
                        </FontIcon>
                        </Link>
                    </SingleSideComponent>
                    <SingleSideComponent>
                        <Link to='/filter' >
                        <FontIcon onClick={handleFilter} className="fas fa-filter "
                        name='filter'>
                        </FontIcon>
                        </Link>
                    </SingleSideComponent>
                </SideComponent>
            </JobContainer>
                
                </React.Fragment>
        )
}

const MapState = state => {
    console.log(state.fetchJobs, 'Jobs');
    return {
        current: state.fetchJobs
    }
}

export default connect(MapState, {startFetchJobs})(Jobs);





// const FilterComp = styled.div`
// width: 200px;
// height: 200px;
// /* background-color: blue; */
// display: block;
// z-index: 99;
// `

// export const SingleJob = ({current}) => {
//     return (
//     <React.Fragment>
//             {
//                 current.map(single =>
//                     <div key={single.id}>
//                         <h2>{single.title}</h2>
//                         <span>Location {single.location}</span>
//                         <span>{single.date}</span>
//                         <span>Status {single.status}</span>
//                         <span>Offer {single.offer}</span>
//                     </div>
                    
//                 )
                
//         }
            
//             </React.Fragment>
// )
// }


// export const data = [
//     {
//         id: 1,
//         title: 'web developer',
//         date: '1-03-2021',
//         location: 'uk',
//         status: 'available',
//         offer: 'OnHolds',
//     },
//     {
//         id: 2,
//         title: 'logo designer',
//         date: '12-05-2022',
//         location: 'us',
//         status: 'available',
//         offer: 'OnHolds',
//     },
//     {
//         id: 3,
//         title: 'sales',
//         date: '12-04-2020',
//         location: 'mumbai',
//         status: 'available',
//         offer: 'OnHolds',
//     }
// ];







const JobContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
font-size: 1.3rem;
margin-top: 10px;
margin: 8px;
margin-top: 13px;
@media (min-width: 768px) {
margin: 12px;

}
`

const MainSingleJobContainer = styled.div`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

width: 100%; ////// FOR SETTING SIDE COMPONENTS /////

margin-right: 10px;
grid-gap: 10px;
@media (min-width: 768px) {
/* grid-template-columns: repeat(auto-fit, minmax(320px, 200px)); */
grid-gap: 15px;
margin-top: 8px;
/* margin: 20px; */
}
/* * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
} */


`




const SingleJobContainer  = styled.div`
border: 2px solid #3C7CD7;
border-radius: 10px;
padding: 12px;
margin: 5px 5px;
padding-right: 0px;
margin-right: 10px; ///////////
margin-left: 10px;
margin-top: 5px;
`
const Div = styled.div`
    /* border: 1px solid black;  */

>span {
    :after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        border-radius: 100%;
        width: 50px ;
        margin-bottom: 20px;
        margin-top: 10px;
}
}
`;

const Div1 = styled.div`

>span {
    /* float: right;
    clear: both;
    margin-right: 20%;
    border: 1px solid black; */

}
`;
const Div2 = styled.div`
margin-bottom: 15px;
text-transform: capitalize;
    /* border: 1px solid black; */

>div>img {
    width: 60px;
        height: 40px;
        margin-top: 6px;
        margin-left: 4px;
}
>div>span {
float: right;
    clear: both;
    margin-right: 13%;
        margin-top: 6px;
    /* text-align: right; */
    /* border: 1px solid black; */
}
>h3 {
    margin: 7px 9px;
    text-overflow: ellipsis; 
    overflow: hidden;
    /* width: 100%; */
}
>p {
    /* margin: 5px 12px; */
    /* margin-bottom: 10px; */
    margin-left: 12px;
    /* border: 1px solid black; */
    text-overflow: ellipsis; 
    overflow: hidden;
    >span {
    }
}
:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        border-radius: 100%;
        width: 50px ;
        margin-top: 10px;
}
`;


const Div3 = styled.div`
display: flex;
flex-direction: column;

>div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    margin: 12px 2px 10px 0px;
    >p{
        /* border: 1px solid black; */
        /* width: 180px; */
        /* margin-right: 5px; */
        /* padding-right: 5px; */
    }
    >span {
        /* width: 100%; */
        /* border: 1px solid black; */
        /* width: 100px; */
        /* padding-right: 30px; */
        /* float: right; */
        /* clear: both; */
        /* text-align: right; */
        /* margin-right: 14%; */
        width: 120px;
        font-size: 1.25rem;
        white-space: nowrap;
        text-overflow: ellipsis; 
        overflow: hidden;
        margin-right: 5%;
    }
}

`;

const Div4 = styled.div`

>a>button{
            background-color: #15ba53;
            width: 120px;
            padding: 6px;
            font-size: 1.3rem;
            border-radius: 5px;
            border: none;
            margin-left: 2px;
            text-align: center;
            margin-bottom: 16px;
            box-shadow: 2px 2.3px 2px 1.2px;
            cursor: pointer;

            :active {
                transform: scale(0.94);
            }
        }
`;


const SideComponent = styled.div`


    border: 2px solid black;
    width: 70px; //////// important //////////
margin-right: 8px;
margin-top: 4px;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-content: flex-start;
align-items: center;
@media (min-width: 768px) {
margin-top: 12px;
}
`

const SingleSideComponent = styled.div`
/* border: 1px solid red; */

padding-top: 15px;
text-align: center;
margin: 12px 10px;
margin-bottom: 15px;
margin-top: 20px;
/* font-size: 40px; */
`
const FontIcon = styled.i`
font-size: 38px;
cursor: pointer;
color: black;
:hover {
    color: #15b153;
}
`

const HeadingContainer = styled.div`
display: flex;
flex-direction: row;
/* margin-bottom: 5px; */
/* margin-left: 5px; */
margin: 18px;
/* margin-left: 2%; */
>span>a {
    /* border: 1px solid black; */
        /* margin-top: 2.5px; */
        /* margin-left: 15px; */
        text-align: center;
        >i {
        text-align: center;
        margin-left: 10px;
        margin-top: 2.1px;
            font-size: 35px;
            color: black;
            :hover {
            color: green;
        }
        }

    }

            
`


















////////////////////////// BEFORE //////////////////////////////////////

// const JobContainer = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-content: space-between;


// /* display: grid; */
// /* grid-template-columns: repeat(auto-fit, minmax(90%, 1fr)); */
// /* display: grid; */
// /* grid-column: 200px; */
// /* grid-template-columns: 800px 100px; */
// /* grid-template-columns: repeat(auto-fit, minmax(100, 1fr)); */
// @media (max-width: 320px) {

// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-content: space-between;



//     /* display: inline-block; */
//     /* display: grid; */
//     /* grid-template-columns: repeat(auto-fit, minmax(250,1fr)); */
//     /* grid-template-columns: 250px 50px; */
// }
// `

// const MainSingleJobContainer = styled.div`
// /* border: 2px solid black; */

// /* display: grid;
// grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
// grid-gap: 1px; */
// /* display: flex; */
// /* flex-direction: row; */
// /* display: flex; */
// /* flex-direction: row; */
// /* justify-content: space-evenly; */
// /* align-content: space-evenly; */
// /* width: 200px; */
// /* align-items: center; */

// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
// /* grid-template-columns: 300px 300px; */
// /* grid-gap: 1px; */

// @media (max-width: 320px) {
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));


// * {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// }
// /* border: 1px solid black; */
// /* display: grid;
// grid-template-rows: repeat(auto-fit, minmax(250, 1fr));
// grid-gap: 1px; */
// /* display: flex; */
// /* flex-direction: column; */
// /* justify-content: flex-start; */
// /* align-content: flex-start; */
// /* align-items: center; */
// }
// `

// const SingleJobContainer  = styled.div`
// /* display: flex; */
// /* flex-direction: column; */
// border: 2px solid #EFC5C5;
// border-radius: 8px;
// padding: 4px;
// margin: 4px;
// padding-right: 0px;
// margin-right: 10px; ///////////
// /* width: 500px;
// height: 500px; */

// @media (max-width: 320px) {
// border: 2px solid #EFC5C5;
// border-radius: 8px;
// padding: 4px;
// margin: 4px;
// padding-right: 0px;
// margin-right: 10px; 

// /////////////// TO SELECT TITLE AND DATE /////////////////////////////////
// &>div>div>div{
//     &>span {
//         float: right;
//         clear: both;
//         margin: 4px 4px;
//         margin-right: 20px;

//     }
//     &>strong{
//         font-size: 1.4rem;
//         margin: 4px 0;

//     }
// }
// /* &>div>div>div{
// } */

// ////////// TO SELECT ALL VALUES OF SINGLE JOB ////////////////////////////
// >div {
//     &>div{
//         display: flex;
//         flex-direction: column;
//         /* justify-content: baseline; */
//         /* align-content: baseline; */
//         /* align-items:flex-end; */
//     }
// }


// >div>div>p
//     {
//         /* text-align: center; */
//         /* display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-content: center; */
//         margin: 3px;
//         margin-top: 4px;
//         margin-bottom: 2px;
//         padding-bottom: 3px;
//         display: inline-block;
//         /* font-weight: normal; */
//         /* font-size: 1rem; */
//             &>span {
//                 /* display: flex; */
//                 /* flex-direction: column; */
//                 /* justify-content: center; */
//                 /* align-content: center; */
//                 /* margin-left: 50px; */
//                 /* padding-left: 5px; */
//                 /* align-items: baseline; */
//                 /* text-align: center; */
//                 text-transform: capitalize;
//                 font-weight: normal;
//                 font-size: 1rem;
//                 /* display: inline-block; */
//                 /* background-color: black; */
//                 float: right;
//                 clear: both;
//                 margin-right: 60px;
//             }
//     }


// ///////////// TO SELECT THE MORE BUTTON WITH NO ERROR //////////////////////////////////////
// >div>div>div
//             {
//                 >a>button{
//                     background-color: #23C5C5;
//                     margin-right: 15px;
//                     float: right;
//                     clear: both;
//                     padding: 5px;
//                     font-size: 0.9rem;
//                     border-radius: 5px;
//                     color: white;
//                     border: none;
//                     text-align: center;
//                     margin-top: 3px;
//                 }
                
//                 /* &:hover{
//                     background-color: black;
//                 } */
//             }

// }
// `


// const SideComponent = styled.div`
// border: 1px solid black;
// /* margin: 5px 5px 5px 0; */
// /* padding: 10px 20px; */
// width: 200px;
// margin-right: 5px;

// @media (max-width: 320px) {
//     border: 1px solid black;
//     width: 300px; //////// important //////////
// margin-right: 5px;
// margin-top: 4px;
// /* margin: 5px; */
// /* margin: 5px 5px 5px 0; */
// /* padding: 3px; */
// /* margin-left: 13px; */
// /* background-color: blue; */
// /* padding: 20px; */
// display: flex;
// flex-direction: column;
// justify-content: flex-start;
// align-content: flex-start;
// align-items: center;



// /* display: inline-block; */
// /* display: flex;
// flex-direction: column;
// justify-content: flex-start;
// align-content: flex-start;
// align-items: center; */
// /* margin: 2px 2px; */
// /* padding: 4px 4px; */
// /* width: 80px; */
// /* position: absolute; */
// /* top: 0px; */
// /* left: 200px; */
// /* height: 400px; */
// }
// `

// const SingleSideComponent = styled.div`
// /* margin: 5px 8px 8px 0; */
// /* padding: 6px; */
// /* margin: 6px 6px; */
// /* padding: 6px 6px; */
// border: 1px solid red;
// /* height: 40px; */
// /* line-height: 1px; */
// /* margin: 10px; */
// /* padding: 4px; */
// margin-top: 25px;
// padding-top: 15px;
// text-align: center;
// /* padding: -4px; */
// /* margin: -4px; */
// @media (max-width: 320px) {
// /* margin: 3px 10px; */
// /* margin-left: 20px; */

// /* padding: 3px 10px;
// margin-bottom: 20px;
// padding-bottom: 3px; */
// /* margin-right: 20px; */
// /* padding-right: 20px; */
// /* background-color: black; */
// margin: 12px 10px;
// font-size: 15px;
// /* padding: 5px; */
// /* border: 1px solid red; */

// /* &>a>i {
// color: black;
// } */
// /* &>a {
//     &>i {
//     background-color: black;
//     }
// } */
// }
// `

//////////////////////// BEFORE /////////////////////////////////////////



// <SingleJobContainer key={single.id}>
//                     <div>
//                         <div>
//                         <div> <strong>{single.title}</strong>
//                             <span>{single.date}</span>
//                         </div>
                            
//                         </div>
//                         <div>
//                         <p>Location: <span>{single.location}</span> </p>
//                         <p>Status: <span>{single.status}</span> </p>
//                         <p>Experience: <span>{single.experience}</span> </p>
//                                         <p>Salary: <span>{single.salary}</span> </p>
//                                         <img width='500px' src={single.companyLogo} alt="" />
//                                         <p>Company Description {single.description}</p>
                                        
//                             <div>
//                                 <Link to={`/singleJob/${single.id}`}>
//                                 <button onClick={handleMore} >More...</button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
                        
//                             </SingleJobContainer> 
                                