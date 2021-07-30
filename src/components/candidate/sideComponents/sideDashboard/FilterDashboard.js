import React, {  useEffect, useState  } from 'react'
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner';
import styled from 'styled-components';


const FilterDashboard = ({ current, backTo, btn }) => {

    // console.log(current);
    // current &&
    let obj1 = {
        location1:  [ current.map(ele => ele.location ? ele.location : 'all')],
        companyName1: [ current.map(ele => ele.companyName ? ele.companyName : 'all')],
        category1: [current.map(ele => ele.category ? ele.category : 'all' )],
    }
    let obj2 = {
        location2: [['all'].concat(...obj1.location1)],
        companyName2: [['all'].concat(...obj1.companyName1)],
        category2: [['all'].concat(...obj1.category1)],
    }
    let obj3 = {
        location3: [...new Set(...obj2.location2)],
        companyName3: [...new Set(...obj2.companyName2)],
        category3: [...new Set(...obj2.category2)],
    }
    const [findLocation, setFindLocation] = useState('all');
    const [findCompany, setFindCompany] = useState('all');
    const [findCategory, setFindCategory] = useState('all');
    const [answer, setAnswer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);

    // console.log(obj3.location3, obj3.companyName3, obj3.category3);

    let locationType = obj3.location3.map((item, index) => {
        return <option value={item} key={index}>{item.toLowerCase()}
        </option>
    })
    let companyType = obj3.companyName3.map((item, index) => {
        return <option value={item} key={index}>{item.toLowerCase()}
        </option>
    })
    let categoryType = obj3.category3.map((item, index) => {
        return <option value={item} key={index}>{item.toLowerCase()}
        </option>
    })
    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        setTimeout(() => {
            setLoading2(true);

            if (name === 'location') setFindLocation(value);
            if (name === 'companyName') setFindCompany(value);
            if (name === 'category') setFindCategory(value);
        }, 300)
        setTimeout(() => {
            setLoading2(false);
        }, 1500)
        // console.log(parseInt(findSalary));
        // console.log(findLocation, findExp, findSalary, obj2.salaryMax);
    }


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 7000)

    }, [loading])

    // useEffect(() => {
    //         setTimeout(() => {
    //             setLoading2(false);
    //         }, 800)
            
    // }, [loading2])

    useEffect(() => {
        // setAnswer(current)
            
        let ans;
        if (findLocation !== 'all' && findCompany !== 'all' && findCategory !== 'all') {    
            ans = current.filter(single => single.location && single.location.toLowerCase() === findLocation.toLowerCase() && single.companyName && single.companyName.toLowerCase() === findCompany.toLowerCase() && single.category && single.category.toLowerCase() === findCategory.toLowerCase())
            setAnswer(ans);
            console.log(ans)
            }
            if (findLocation === 'all' && findCompany !== 'all' && findCategory !== 'all') {
                ans = current.filter(single => single.companyName && single.companyName.toLowerCase() === findCompany.toLowerCase() && single.category && single.category.toLowerCase() === findCategory.toLowerCase())
                setAnswer(ans);
                console.log(ans);
            }
            if (findLocation !== 'all' && findCompany === 'all' && findCategory !== 'all') {
                ans = current.filter(single => single.location && single.location.toLowerCase() === findLocation.toLowerCase() && single.category && single.category.toLowerCase() === findCategory.toLowerCase())
                setAnswer(ans);
                console.log(ans);
            }
            if (findLocation !== 'all' && findCompany !== 'all' && findCategory === 'all') {
                ans = current.filter(single => single.location && single.location.toLowerCase() === findLocation.toLowerCase() && single.companyName && single.companyName.toLowerCase() === findCompany.toLowerCase())
                setAnswer(ans);
                console.log(ans);
            }
            if (findLocation !== 'all' && findCompany === 'all' && findCategory === 'all') {
                ans = current.filter(single => single.location && single.location.toLowerCase() === findLocation.toLowerCase())
                setAnswer(ans);
                console.log(ans)
            }
            if (findLocation === 'all' && findCompany !== 'all' && findCategory === 'all') {
                ans = current.filter(single => single.companyName && single.companyName.toLowerCase() === findCompany.toLowerCase())
                setAnswer(ans);
                console.log(ans)
            }
            if (findLocation === 'all' && findCompany === 'all' && findCategory !== 'all') {
                ans = current.filter(single => single.category && single.category.toLowerCase() === findCategory.toLowerCase())
                setAnswer(ans);
                console.log(ans)
            }
            if (findLocation === 'all' && findCompany === 'all' && findCategory === 'all') {
                setAnswer(current);
                console.log(current);
                }
        }, [current, findLocation, findCompany, findCategory]);
    
    const showContent = () => {
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
                </div>
            )
        }
        else if (answer.map(single => single.location.toLowerCase() !== findLocation.toLowerCase() && single.companyName.toLowerCase() !== findCompany.toLowerCase() && single.category.toLowerCase() !== findCategory.toLowerCase())) {
            return <h1>No Job Found</h1> 
        }
        
    }
    
    if (loading) {
        return <div><Spinner onStart='yes' size={4} /></div>
    }
window.addEventListener('resize', e => {
        console.log(e.target.innerWidth)
    })
    return (
        <div>
            <FilterInputContainer>
                <div>
                
            <label>Location: </label>
            <select onChange={handleChange} name="location" id="">
                {locationType}
            </select>
            <label>Company Name: </label>
            <select onChange={handleChange}  name="companyName" id="">
                {companyType}
            </select>
            <label>Category:</label>
            <select onChange={handleChange}  name="category" id="">
                {categoryType}
            </select>
                </div>

                <div>
                    <div>
                    <Link to={backTo}>
                    <button>Back To {btn}</button>
                    </Link>
                    </div>
                </div>
            </FilterInputContainer>

            {
                loading2 ? <span >
                <i style={{ marginTop: '20px',marginLeft: '35px' }} className={`fas fa-spinner fa-pulse fa-${4}x`}></i>
                </span> 
                :
                <FilterJobContainer>
                {
                    showContent() 
                }
                </FilterJobContainer>
            }
        </div>
    )
}


// const MapState = (state) => {
//     console.log(state, 'FilterDashboard');
//     return {
//         current: state.allJobs,
//     }
// }

export default FilterDashboard;


// class FilterDashboard extends Component {
//     render() {
//         return (
//             <div>
//                 FilterDashboard
//             </div>
//         )
//     }
// }




const FilterInputContainer = styled.div`
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
    /* font-size: 1.2em; */


>div {
display: flex;
flex-direction: column;
    margin-top: 20px;
    margin-left: 10px;
>label {
    /* border: 1px solid black; */
    /* background-color: black; */
    text-transform: capitalize;
    margin-top: 4px;
    margin-left: 6px;
    font-size: 1.4rem;
}
>select {
    /* background-color: black; */
    margin-top: 14px;
    margin-bottom: 4px;
    margin-left: 30px;
    font-size: 1.1rem;
    /* width: 200px; */
width: 40%;
    height: 30px;
}

}

>div>div>a{
margin-left: 20px;
    background-color: black;
    >button {
        /* margin-right: 10%; */
    margin-top: 10px;
    margin-bottom: 20px;
    /* margin-left: 70%; */
    /* float: right; */
    /* clear: both; */
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #23C5C5;
    color: white;
    /* width: 100px; */
    /* margin-left: 10px; */
    cursor: pointer;
    /* float: right;
    clear: both;
    margin-right: 10px;
    font-size: 1.3rem;
    padding: 5px;
    border-radius: 4px;
    border: none;
    background-color: #23C5C5;
    color: white;
    width: 100px;
    cursor: pointer; */
    }
}

@media (min-width: 992px) {
>div {
display: flex;
flex-direction: row;
    margin-top: 20px;
    margin-left: 10px;
>label {
    text-transform: capitalize;
    margin-top: 4px;
    margin-left: 10px;
    font-size: 1.2rem;
}
>select {
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 12px;
    font-size: 1.1rem;
    margin-right: 15px;
    width: 20%;
    height: 30px;
}

}
}

@media (min-width: 768px) {

}

`


const FilterJobContainer = styled.div`
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
    margin-left: 2px;
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
        /* margin: 5px 2px 5px 2px; */
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