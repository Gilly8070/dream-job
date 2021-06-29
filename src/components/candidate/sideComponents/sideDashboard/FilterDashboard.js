import React, {  useEffect, useState  } from 'react'
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner';


const FilterDashboard = ({ current, backTo, btn }) => {

    let obj1 = {
        location1: [current.map(ele => ele.location ? ele.location : 'all')],
        companyName1: [current.map(ele => ele.companyName ? ele.companyName : 'all')],
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
        
        // console.log(parseInt(findSalary));
        // console.log(findLocation, findExp, findSalary, obj2.salaryMax);
    }


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

    }, [loading])

    useEffect(() => {
            setTimeout(() => {
                setLoading2(false);
            }, 800)
            
    }, [loading2])

        useEffect(() => {
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
                    <h2>{single.title}</h2>
                    <p>Date: {single.date}</p>
                    <p>Company Name: {single.companyName}</p>
                    <p>Category: {single.category}</p>
                    <p>Location: {single.location}</p>
                    <p>Status: {single.status}</p>
                    <p>Experience: {single.experience}</p>
                    <p>Salary: {single.salary}</p>
                    <p>Education: {single.education}</p>
                    <p>Skill: {single.skill}</p>
                </div>)
        }
        else if (answer.map(single => single.location.toLowerCase() !== findLocation.toLowerCase() && single.companyName.toLowerCase() !== findCompany.toLowerCase() && single.category.toLowerCase() !== findCategory.toLowerCase())) {
            return 'No Jobs'
        }
        
    }
    
    if (loading) {
        return <Spinner size={3} />
    }

    return (
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
        
            <Link to={backTo}>
                <button>Back To {btn}</button>
            </Link>

            {
                loading2 ? <Spinner size={3} /> :
                showContent() 
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