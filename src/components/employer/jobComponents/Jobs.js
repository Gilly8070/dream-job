import React, { useState, useEffect } from 'react';
// import Search from './Search';
// import Sidebar from '../sidebar/Sidebar';
import { connect } from 'react-redux';
// import AddJob from './AddJob';
import {Link} from 'react-router-dom';
import SingleJob from './SingleJob';
// import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Spinner from '../../Spinner';


const Jobs = ({current}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

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
    if (loading) {
        return <Spinner size={3} />
    }
    if (current.length === 0) {
        return (
            <div>
                <h1>Add Job</h1>
                <Link to='/addJob'>
                <i onClick={handleAdd}
                className="fas fa-plus fa-2x"
                name='add'>
                </i>
                </Link>
            </div>)
    }
    if (showMore) {
        return <SingleJob single={current} />
    }
    return (
        <React.Fragment>
            {/*!filter ? null  : <Search />*/}
            {
                current.map(single => single.title &&
                    <div key={single.id}>
                        <h2>{single.title}</h2>
                        <p>Date: {single.date}</p>
                        <p>Location: {single.location}</p>
                        <p>Status: {single.status}</p>
                        <p>Experience: {single.experience}</p>
                        <p>Salary: {single.salary}</p>
                        <Link to={`/singleJob/${single.id}`}>
                            <button onClick={handleMore} >More...</button>
                        </Link>
                    </div>
                )
            }
            {/*<SingleJob current={current} />*/}
        {/*{showSearch ? <Search />  :  null} */}

            {/*{current.title ?
                <SingleJob current={current} /> : <SingleJob current={current} />}  */}
            
            <Link to='/addJob'>
            <i
            className="fas fa-plus fa-2x"
            name='add'>
            </i>
            </Link>
            <Link to='/search'>
            <i onClick={handleSearch}
            className="fas fa-search fa-2x"
            name='search'>
            </i>
            </Link>
            <Link to='/filter' >
            <i onClick={handleFilter} className="fas fa-filter fa-2x"
                    name='filter'>
            </i>
            </Link>
                </React.Fragment>
        )
}

const MapState = state => {
    console.log(state, 'Jobs');
    return {
        current: state.list
    }
}

export default connect(MapState, null)(Jobs);


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