import React, { useState } from 'react'
import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner';
import styled from 'styled-components';


const SortDashboard = ({ current, backTo, btn}) => {
    const [newJobs, setNewJobs] = useState(false);
    const [salary, setSalary] = useState(false)
    const [answer, setAnswer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 7000)

    }, [loading])

    useEffect(() => {
            setTimeout(() => {
                setLoading2(false);
            }, 800)
            
    }, [loading2])

    useEffect(() => {
        // let ans;
        // console.log(newJobs, salary)
        // setAnswer(current);
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
            return answer.map(single =>
                <div key={single.id}>
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
                </div>)
        }
        // }, 300);
            
        // else if (answer.map(single => single.location.toLowerCase() !== findLocation.toLowerCase() && single.companyName.toLowerCase() !== findCompany.toLowerCase() && single.category.toLowerCase() !== findCategory.toLowerCase())) {
        //     return 'No Jobs'
        // }
        }
    
    if (loading) {
        return <div><Spinner onStart='yes' size={4} /></div>
    }
    window.addEventListener('resize', e => {
        console.log(e.target.innerWidth)
    })
    return (
        <div>
            <SortInputContainer>
                <SortContainer className='sort'>
                    <div>
                    <label htmlFor=""><strong>New Jobs</strong></label>{' '}
                        <input onClick={handleChange} className='increase' type="checkbox" name="newJobs" id="" />
                        </div>
                        <div>
                    <label htmlFor=""><strong>Salary High to Low</strong> </label>
                    <input onClick={handleChange} className='increase' type="checkbox" name="salary" id="" />
                    </div>
                    
                    </SortContainer>

            <ButtonContainer>
                <div>
                <Link to={backTo}>
                <button>Back To {btn}</button>
                </Link>
                </div>
                </ButtonContainer>
            </SortInputContainer>
                
            {
                loading2 ? <span >
                <i style={{ marginTop: '20px',marginLeft: '35px' }} className={`fas fa-spinner fa-pulse fa-${4}x`}></i>
                </span>    
                    :
                <SortJobContainer>
                {
                    showContent()
                }
                </SortJobContainer>
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




const SortInputContainer = styled.div`
/* >div { */
    /* margin-top: 20px;
    margin-left: 10px; */
/* } */
/* >div>a{
    >button {
    float: right;
    clear: both;
    margin-right: 50px;
    font-size: 1.3rem;
    padding: 5px;
    border-radius: 4px;
    border: none;
    background-color: #23C5C5;
    color: white;
    width: 100px;
    cursor: pointer;
    }
} */

display: flex;
flex-direction: column;
margin: 3px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


>div>div {
/* display: flex;
flex-direction: row;
    margin-top: 20px;
    margin-left: 10px; */


    /* margin-right: 20px; */
>label {
    /* border: 1px solid black; */
    /* background-color: black; */


    /* text-transform: capitalize;
    margin-top: 4px;
    margin-left: 10%;
    font-size: 1.4rem; */
}

>input {
    /* background-color: black; */


    /* transform: scale(1);
    -ms-transform: scale(2);
    -webkit-transform: scale(2);
    margin-right: 15px;
    margin-left: 25px;
    margin-top: 14px; */

}
}

>span>div>a{

    >button {
    /* margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #23C5C5;
    color: white;
    margin-left: 10px;
    cursor: pointer; */
    }
}

@media (min-width: 992px) {
    /* flex-direction: row; */
        /* justify-content: space-between; */
    /* align-content: space-between; */
/* >span{

    margin-left: 30%;
    >div>a{
        
        >button {
            border: 1px solid black;
            
        }
        
    }
} */
/* margin-left: 10%; */
/* >div {
display: flex;
flex-direction: row;
    margin-top: 20px;
    margin-left: 10px;
>label {
    text-transform: capitalize;
    margin-top: 4px;
    margin-left: 10px;
    font-size: 1.2rem;
} */

}



`
const SortContainer = styled.div`
display: flex;
flex-direction: row;
/* justify-content: space-between; */
/* align-content: space-between; */
margin-top: 20px;
margin-left: 10px;

>div {
    /* justify-content: space-between;
    align-content: space-between; */
    /* border: 1px solid black; */
    margin-left: 10%;

    >label {
    /* background-color: black; */
    text-transform: capitalize;
    margin-top: 4px;
    font-size: 1.4rem;
}

>input {
    /* background-color: black; */
    transform: scale(1);
    -ms-transform: scale(2);
    -webkit-transform: scale(2);
    margin-right: 15px;
    /* padding-right: 35px; */
    margin-left: 25px;
    margin-top: 14px;
    margin-bottom: 9px;

}
}
@media (min-width: 992px) {
/* flex-direction: column; */
    /* border: 1px solid black; */

    /* display: flex; */
    /* justify-content: space-between; */
    /* align-content: space-between; */
    /* margin-left: 10%; */
    /* width: 100%; */
>div {
    /* margin-left: 10%; */

    /* display: inline-block; */
    >label {

    }
    >input {
        /* margin-left: 30%; */

    }
}
}

`
const ButtonContainer = styled.div`
>div>a{
    background-color: black;
    margin-left: 25px;

    >button {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #23C5C5;
    color: white;
    cursor: pointer;
    }
}

@media (min-width: 992px) {
    >div>a{
    >button {
        /* float: right; */
        /* margin-right: 15%; */
    }
}


/* margin-left: 10%; */
}
`



const SortJobContainer = styled.div`
display: flex;
flex-direction: column;
/* width: 25%; */

justify-content: space-evenly;
align-content: space-evenly;
display: grid;
/* grid-template-columns: 50% 50%; */
grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
/* grid-gap: 5px; */

grid-row-gap: 10px;


    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.2em;

>div {
    /* width: 300px; */
    /* border: 1px solid black; */

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
    margin-left: 6px;
    margin-top: 8px;
}
>div>h2 {
    margin-top: 6px;
    margin-bottom: 7px;
    margin-left: 7px;
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

        >p {
                /* width: 140px; */
                /* margin-left: 20px; */
                    /* margin: 5px 2px 5px 2px; */
                    /* border: 1px solid black; */
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
                    /* margin-right: 50px; */

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

    /* display: flex; */
    /* flex-direction: column; */
    display: grid;
grid-row-gap: 10px;
/* grid-template-columns: 33% 33% 33%; */

    grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
/* grid-gap: 5px; */
/* width: 100%; */
>div {
    /* min-width: 400px; */

}
>div>div {
    /* width: 25%; */
    /* border: 1px solid black; */

    display: flex;
    flex-direction: column;
    >div {
        display: flex;
        flex-direction: row;
        /* justify-content: space-between; */
        /* align-content: space-between; */
        margin: 5px 2px 5px 2px;
        >p {
                /* width: 150px; */
                /* margin-left: 20px; */
                    /* margin: 5px 2px 5px 2px; */

            }
                >span {
                    /* margin: 5px 2px 5px 2px; */
                    /* margin-left: 50px; */
                    /* float: right; */
                    /* border: 1px solid black; */
                    /* width: 100px; */
                    margin-right: 5px;
                    font-size: 1.3rem;

                }
    }
}
}

@media (min-width: 768px) {
    /* display: flex; */
    /* flex-direction: column; */
    /* display: grid; */
    /* grid-template-columns: 25% 24% 25% 24%; */
}
`