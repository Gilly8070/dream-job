import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';
import styled from 'styled-components';
import { fetchAllLiveJobsForCurrentUser } from '../../../actions/action';

const MapJobs = ({ current, fetchAllLiveJobsForCurrentUser }) => {
    
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    // }, [fetchAllLiveJobsForCurrentUser])
    useEffect(() => {
        
        // setTimeout(() => {
            // }, 1);
            
            setTimeout(() => {
                setLoading(false);
            }, 10000)
            
        ///////////////// THIS IS DONE BECAUSE OF ACTION CLASH, THEREFORE WE ARE DELAYING IT FOR SOME TIME ///////////////////////////////
        setTimeout(() => {
            //////////////// NEW ONE ///////////////////////////
            fetchAllLiveJobsForCurrentUser();
        }, 3800);

    }, [loading, ])
    
    
    if (loading) {
        /////////////// THIS ACTION IN USE EFFECT IS RUNNING SLOW ANG COMING AFTER SCREEN LOAD, THEREFORE SHIFTED HERE
        //////////////// NEW ONE ///////////////////////////
        // fetchAllLiveJobsForCurrentUser();

        // style={{marginTop: '10px', marginLeft: '10px', marginBottom: '10px'}}
        return <div><Spinner onStart='yes' size={4} /></div> 
    }

    if (current.length === 0) {
        return <h1 style={{marginTop: '20px', marginLeft: '40px', marginBottom: '10px'}}>No Jobs To Display</h1>
    }
    return (
        <JobContainer>
            
            <MainSingleJobContainer>
            {
                current.map(single => {
                    const { companyLogo, companyName, salary, title, location, shiftType, employmentType, experience, id } = single;
                    // console.log(current)
                    return (
                        <SingleJobContainer key={id}>
                            <Div>
                            <Div1>
                                <Div2>
                                    <div>
                                    <img src={companyLogo} alt="Logo" />
                                    <span>{salary && '$'+(parseInt(salary)/ 70 /1000).toFixed(1)+'k'}</span>
                                    </div>
                                    <h3>{title.toLowerCase()}</h3>
                                    <p>{companyName ? <span>{companyName.toLowerCase()}</span> : 'Anonymous'}, <span>{location.toLowerCase()}</span></p>
                                </Div2>
                            </Div1>
                                <Div3>
                                    <div>
                                        <div>
                                        <i className="fas fa-id-card"></i>
                                        <span>{ id.substr(0,8) }</span>
                                        </div>
                                        <div>
                                        <i className="fas fa-calendar"></i>
                                        <span>{ employmentType }</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                        <i className="fas fa-briefcase"></i>
                                            <span>{experience}{' '} yrs</span>
                                        </div>
                                        <div>
                                        <i className="far fa-clock"></i>
                                        <span>{shiftType}</span>
                                        </div>
                                    </div>
                                    </Div3>
                                    <span></span>

                            <Div4>
                            <Link to={`/SingleMapJobs/${id}`}>
                            <button>Map</button>
                            </Link>
                            </Div4>
                            </Div>
                                
                        </SingleJobContainer>
                    )
                })
                }
            </MainSingleJobContainer>
                
            <SideComponent>
                <SingleSideComponent>
                <Link to='search/mapJobs'>
                <FontIcon className="fas fa-search"></FontIcon>
                </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                <Link to='filter/mapJobs'>
                <FontIcon className="fas fa-filter"></FontIcon>
                </Link>
                </SingleSideComponent>
                <SingleSideComponent>
                <Link to='sort/mapJobs'>
                        <FontIcon className="fas fa-sort"></FontIcon>
                </Link>
                </SingleSideComponent>
            </SideComponent>
                
        </JobContainer>
    )
}

const MapState = (state) => {
    console.log(state.allLiveJobs, 'MapJobs');
    return {
        current: state.allLiveJobs
    }
}

export default connect(MapState, {fetchAllLiveJobsForCurrentUser})(MapJobs)





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
}
>div>span {
float: right;
    clear: both;
    margin-right: 15%;
    /* border: 1px solid black; */
}
>h3 {
    margin: 5px 5px;
    text-overflow: ellipsis; 
    overflow: hidden;
    /* border: 1px solid black; */
    /* width: 100%; */
}
>p {
    margin: 5px 12px;
    text-overflow: ellipsis; 
    overflow: hidden;
    margin-bottom: 10px;
    >span {

    }
}
:after {
        content: '';
        display: block;
        border-bottom: 2px solid black;
        border-radius: 100%;
        width: 50px ;
}
`;


const Div3 = styled.div`
display: flex;
flex-direction: row;
display: grid;
grid-template-columns: 54% 46%;
/* justify-content: space-between; */
>div {
    /* border: 1px solid black; */
    /* margin-right: 15px; */


    >div {
        display: flex;
        flex-direction: row;
        /* width: 200px; */
/* width: 150%; */
        /* margin-right: 10px; */
        margin-bottom: 25px;
        /* border: 1px solid black; */
        i {
        /* border: 1px solid black; */
            width: 44px;  ///////important to make span value in middle
            font-size: 28px;
        }
        >span {
        margin-right: 10px;
text-overflow: ellipsis; 
        overflow: hidden;
        }
    }
}


`;

const Div4 = styled.div`

>a>button{
            background-color: #15ba53;
            width: 120px;
            padding: 8px;
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
margin-right: 5px;
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

margin-top: 25px;
padding-top: 15px;
text-align: center;
margin: 12px 10px;
font-size: 40px;


`

const FontIcon = styled.i`
font-size: 35px;

cursor: pointer;
color: black;
:hover {
    color: #15b153;
}
`