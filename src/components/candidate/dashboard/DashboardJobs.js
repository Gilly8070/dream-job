import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import firebase from 'firebase';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';
import styled from 'styled-components';

const DashboardJobs = ({ current }) => {
    // const [jobFromFirebase, setJobFromFirebase] = useState([]);
    // const database = firebase.database();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4500)

    }, [loading])

    

    //// THIS IS DONE FOR DIRECT FETCHING FROM FIREBASE BUT NOW WE ARE USING DIRECT FROM OUR STORE THEREFORE WE DON'T NEED IT ///////////////
    // useEffect(() => {
    //     database
    //         .ref('Jobs')
    //         .on('value', (snapshot) => {
    //             const exp = [];
    //             snapshot.forEach((childSnap) => {
    //                 exp.push({
    //                     id: childSnap.key,
    //                     ...childSnap.val()
    //                 })
    //             })
    //             // console.log(exp.length);
    //             setJobFromFirebase(exp);
    //         })
    // }, [database]);
    
    if (loading) {
        return <div ><Spinner onStart='yes' size={3} /></div>
    }
    
    if (current !== undefined && current.length === 0) {
        return <h1 style={{marginTop: '20px', marginLeft: '10px', marginBottom: '10px'}}>No Jobs To Display</h1>
    }
    return (
        // { ele.title.toString().split(' ').length > 4 ?
            // ele.title.toString().split(' ').slice(0, 3).join(' ').toLowerCase() :
            // ele.title.toString().split('').slice(0, 20).join('').toLowerCase()}
        <DashJobsContainer>
            
            <JobsContainer>
            {
                current.map((ele) => {
                    // const objectUrl = URL.createObjectURL(ele.companyLogo)
                    // console.log(URL.createObjectURL())
                    return (
                        <SingleJobsContainer key={ele.id}>
                            <Div>
                            
                                <Div1>
                                    {
                                        <img src={ele.companyLogo} alt='Logo...' /> 
                                    }
                                    <div>
                                        <h3>{ ele.title.toLowerCase()}</h3>
                                <p>{ele.companyName}, {ele.location}</p>
                                    </div>
                                    
                                </Div1>
                                <Div4>
                                    <p>Status <span>{ele.status}</span> </p>
                                </Div4>
                                <Div2>
                                    <div>
                                    <p>Received Date: <span>{ele.date}</span> </p>
                                    </div>
                                    </Div2>
                                    {/*
                                <Div2>
                                <span> <span>{ele.status}</span></span>
                                <p><span>{ele.date}</span></p>
                                </Div2>
                                */}
                        </Div>
                        </SingleJobsContainer>
                    )
                })
                }
            </JobsContainer>
            <SideComponent>
                <SingleSideComponent>
                <Link to='search/dashboardJobs'>
                <FontIcon className="fas fa-search fa-3x"></FontIcon>
                </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                <Link to='filter/dashboardJobs'>
                <FontIcon className="fas fa-filter fa-3x"></FontIcon>
                </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                
                <Link to='sort/dashboardJobs'>
                <FontIcon className="fas fa-sort fa-3x"></FontIcon>
                </Link>
                </SingleSideComponent>
            </SideComponent>
            {
                // current.forEach((single, index) => {
                //     return (
                //         <div key={index}>
                //             <h3>{single.title}</h3>
                //             <p>{single.companyName ? <p>single.companyName</p> : 'Anonymous'}</p>
                //             <p>{single.location}</p>
                //             <div>
                //                 <p>{single.status}</p>
                //                 <p>{single.date}</p>
                //             </div>
                //         </div>
                //     )
                // })
            }
        </DashJobsContainer>
    )
}

const MapState = (state) => {
    
    // console.log(state.allJobs);
    // delete state.newJobs
    // delete state.fixedLiveJobs
    // console.log(state, 'DashboardJobs');
    return {
        current: state.allJobs
    }
}

export default connect(MapState, null)(DashboardJobs);


//////// TO CHANGE SINGLE JOBS CONTAINER, SIDE COMPONENT ////////////////////////// 


///////////// THE WHOLE CONTAINER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashJobsContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 5px;
margin: 6px;

@media (min-width: 768px) { 
    margin-left: 8px;
    margin-right: 8px;

}
@media (min-width: 992px) {
    margin: 0px 12px;

}
`;

///////////////////// PARENT OF JOB CONTAINER /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const JobsContainer = styled.div`
width: 100%; /////// MOST IMPORTANT FOR THIS TYPE////////////
margin: 4px;
font-family: -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, sans-serif;
font-size: 1.2rem;
`;




///////////////// SINGLE JOB CONTAINER //////////////////////////////////////////////////////////////////////////////////////////////////
const SingleJobsContainer = styled.div`
border: 1px solid black;
padding: 6px;
padding-left: 1px;
margin-bottom: 12px;
margin-left: 1px;
margin-right: 4px;
/* margin-top: 3px; */
>div {
/* display: flex;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
padding: 12px 8px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); */
}
@media (min-width: 768px) { 
    /* margin-left: 8px; */
    /* margin-right: 8px; */
margin-bottom: 15px;

}
@media (min-width: 992px) {
    /* margin: 0px 12px; */

}
`


const Div = styled.div`
display: flex;
flex-direction: row;
/* justify-content: space-between; */
/* align-content: space-between; */
/* padding: 12px 8px; */
display: grid;
/* grid-template-rows: 40% 30% 30%; */
/* grid-template-columns: repeat(auto-fit, minmax(1px, 1fr)); */
/* grid-template-columns: 50% 30% 30%; */


@media (min-width: 768px) { ///// 992PX CHANGES TO 768PX IN THIS///  
display: flex;
flex-direction: row;
padding: 2px 10px 10px 10px;
display: grid;
grid-template-columns: 50% 25% 25%;
}
`;


/////////////////// FOR IMAGE, TITLE AND LOCATION //////////////////////////////////////////////////////////////////////////////////////////////////////////
const Div1 = styled.div` 
    display: flex;
    flex-direction: column;
    /* justify-content: baseline; */
    /* align-content: baseline; */
        /* border: 1px solid black; */

    text-transform: capitalize;
    /* >span { */

    >img {
        width: 60px;
        height: 40px;
        margin-top: 6px;
        margin-left: 10px;
        /* margin-bottom: 5px; */
        
    /* } */
    }
    >div{
        /* margin-left: 40px; */
    /* flex-direction: ; */
        margin-top: 18px;
        margin-left: 20px;
        /* display: block; */
        padding: 0px 4px 4px 4px;
        >h3 {
            margin-bottom: 8px;
        /* border: 1px solid black; */
        text-overflow: ellipsis; 
        overflow: hidden;
        }
        >p {
            /* border: 1px solid black; */
            margin-bottom: 8px;
            text-overflow: ellipsis; 
                    overflow: hidden;
            >span {
                /* margin-left: 6px; */

            }
        }
    }
    @media (min-width: 992px) {
        display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: center;
        display: grid;
grid-template-columns: 70px calc(100% - 70px);
        /* border: 1px solid black; */
        
    >img {
        width: 60px;
        height: 40px;
        /* margin-top: 1px; */
        margin-top: 5px;
        /* border: 1px solid black; */
        /* align-items: center; */
    }
    >div{
        /* margin-left: 40px; */
        margin-top: 15px;
        margin-left: 40px;
        padding: 0px 4px 4px 4px;
        /* border: 1px solid black; */

        >h3 {
            margin-bottom: 14px;
            margin-top: 1px;
        /* border: 1px solid black; */

        }
        >p {
            margin-bottom: 8px;
        }
    }
}
`

/////////////////////////// FOR DATE /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
const Div2 = styled.div`
display: flex;
    flex-direction: column;
    margin-left: 26px;


        /* border: 1px solid black; */
        margin-top: 16px;
        >div>p>span {
        margin-left: 25px;
        /* border: 1px solid black; */
        }

    @media (min-width: 992px) {
        margin-top: 16px;
        >div>p {
            float: right;
            clear: both;
    }
    }
`;


/////////////////////////// FOR STATUS /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
const Div4 = styled.div`
        /* margin-top: 44px; */
        margin-top: 16px;

        /* border: 1px solid black; */
    margin-left:22px;
    padding-left: 4px;
        >p {
            /* margin-left: 20px; */

        >span {
        margin-left: 20px;

            /* display: block; */
        }
        }

    @media (min-width: 768px) {
        >p
        {
        >span {
        /* border: 1px solid black; */
        margin-left: 25px;
            /* display: inline-block; */

    }
    }
    }
    @media (min-width: 992px) {
        /* margin-top: 10px; */
        >p
        {
            /* display: block; */
            /* margin-top: 0px; */
        >span {
        /* border: 1px solid black; */
        margin-left: 35px;
            /* display: inline-block; */

        }
        }

    }
`


//////// THIS IS DONE INITIALLY FOR SINGLE JOB AFTER IT IS CHANGE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const Div = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-content: space-between;
// padding: 12px 8px;
// display: grid;
// grid-template-columns: 58% 21% 21%;

// /* grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); */
// `;


// /////////////////// FOR IMAGE, TITLE AND LOCATION //////////////////////////////////////////////////////////////////////////////////////////////////////////
// const Div1 = styled.div` 
//     display: flex;
//     flex-direction: column;
//     /* justify-content: baseline; */
//     /* align-content: baseline; */
//     text-transform: capitalize;
//     >img {
//         width: 40px;
//         height: 30px;
//         margin-top: 1px;
//         /* margin-bottom: 5px; */
//         /* border: 1px solid black; */
        
//     }
//     >div{
//         /* margin-left: 40px; */
//         /* border: 1px solid black; */
//         margin-top: 12px;
//         margin-left: 20px;
//     padding: 0px 4px 4px 4px;
//         >h3 {
//             margin-bottom: 7px;
//         }
//     }
// `

// /////////////////////////// FOR STATUS AND DATE /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// const Div2 = styled.div`
// display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-content: space-between;
//         /* border: 1px solid black; */
//     margin-top: 40px;
//     >span>span {
//         margin-left: 0px;
//     }
// `;





///////////////// FOR ALL FONT AWESOME ICONS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SideComponent = styled.div`
border: 1px solid black;
margin-top: 3.9px;
margin: 4px;
width: 70px; ///////////// CHANGE WIDTH OF SIDE COMPONENT FROM HERE ////////
margin-right: 5px;
margin-bottom: 15px;
/* height: 100vh; */
`;

//////////////// SINGLE FONT ICON //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SingleSideComponent = styled.div`
/* border: 1px solid red; */
margin-top: 35px;
padding-top: 15px;
/* margin-bottom: 30px; */
text-align: center;

`

const FontIcon = styled.i`
font-size: 35px;
/* border: 1px solid red; */
margin-top: 10px;
/* margin-bottom: 20px; */
cursor: pointer;
color: black;
:hover {
    color: #15b153;
    /* transform: scale(1.1); */
}
`;


// ///////////// THE WHOLE CONTAINER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashJobsContainer = styled.div`
// display: flex;
// flex-direction: row;
// `;

// ///////////////////// PARENT OF JOB CONTAINER /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const JobsContainer = styled.div`
// width: 100%; /////// MOST IMPORTANT FOR THIS TYPE////////////
// margin: 4px;
// font-family: -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, sans-serif;

// `;




// ///////////////// SINGLE JOB CONTAINER //////////////////////////////////////////////////////////////////////////////////////////////////
// const SingleJobsContainer = styled.div`
// border: 1px solid black;
// padding: 6px;
// padding-left: 1px;
// margin-bottom: 12px;
// margin-left: 1px;
// margin-right: 4px;

// >div {
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-content: space-between;
// padding: 15px 8px;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
// }
// `

// /////////////////// FOR IMAGE, TITLE AND LOCATION //////////////////////////////////////////////////////////////////////////////////////////////////////////
// const Div1 = styled.div` 
//     display: flex;
//     flex-direction: row;
//     /* justify-content: baseline; */
//     /* align-content: baseline; */
//     text-transform: capitalize;
//     >img {
//         width: 40px;
//         height: 30px;
//         margin-top: 10px;
        
//     }
//     >div{
//         margin-left: 40px;
//     padding: 0px 4px 4px 4px;
//         >h3 {
//             margin-bottom: 7px;
//         }
//     }
// `

// /////////////////////////// FOR STATUS AND DATE /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// const Div2 = styled.div`
// display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-content: space-between;

//     >span>span {
//         margin-left: 30px;
//     }
// `;

