import React, { useEffect, useState } from 'react';
import Spinner from '../../../Spinner';
import styled from 'styled-components';

const CurrentJob = ({ CurrentDetails, AboutDetails }) => {
    const { currentDate, designation, imageSrc, location, salary, companyName } = CurrentDetails;
    // const { firstName, lastName, summary } = AboutDetails;
    // console.log(CurrentDetails, 'currentJob');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500)

    }, [loading])

    if (loading) {
        //  style={{margin: '15px'}} 
        return <div><Spinner onStart='yes' size = {3} /></div>
    }
        
    function ordinal(date) {
    return (date > 20 || date < 10) ? ([false, "st", "nd", "rd"])[(date%10)] || "th" : "th";
    }
    let month = currentDate && new Date(currentDate).toLocaleString('en-us', { month: 'short' })
    let day = currentDate && new Date(currentDate).toLocaleString("en-US", { day: '2-digit' })
    let str = currentDate && day && ordinal(day)
    let date = currentDate && new Date(currentDate).toLocaleString("en-US", { day: '2-digit' }) + str;
    // console.log(month, new Date(currentDate).toLocaleString("en-US", { day: '2-digit' }), ordinal(day), date)
    // console.log(month, day, str, date, CurrentDetails)
    return (
        <CurrentContainer>
            
        {
            imageSrc ?
                    <JobContainer>
                        <span>
                        <img width='400px' src={imageSrc} alt="Profile Pic" />
                        </span>
                        <div>
                            <span>
                                <h3>Current Job</h3>
                                <h5></h5>
                            </span>
                            <Div5>
                                <div>
                                <p>Salary
                                </p>
                                <span>{salary > 0 && (salary / 100000).toFixed(2) ? <span>{(salary / 100000).toFixed(1)} LPA </span> : null}</span>
                                </div>
                                <div>
                                    <p>Date of Joined
                                    </p>
                                        <span>{date ? date : null} {month ? month : null}</span>
                                </div>
                                <div>
                                    <p>Designation
                                    </p>
                                        <span>{designation}</span>
                                </div>
                                <div>
                                    <p>Location
                                    </p>
                                        <span>{location}</span>
                                </div>
                                <div>
                                    <p>Company
                                    </p>
                                        <span>{companyName}</span>
                                </div>
                            </Div5>
                        </div>
                    </JobContainer>
                    
                    : 'NO CURRENT JOB'
            }
        </CurrentContainer>
    )
}

export default CurrentJob


const CurrentContainer = styled.div`
margin: 5px;
/* height: 100vh; */
/* width: 100%; */

@media (min-width: 768px) {
    /* width: 1000px; */
}
`;

const JobContainer = styled.div`
display: flex;
flex-direction: row;

/* margin-top: 2%; */
/* justify-content: space-between; */
/* align-content: space-between; */
/* display: grid; */
/* grid-template-columns: 40% 60%; */
font-size: 1.2rem;
/* border: 1px solid black; */
/* width: 100%; */



//////////////////// FOR IMAGE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
>span {
    display: flex;
    /* align-items: center; */
/* border: 1px solid black; */

    >img {
        /* text-align: center; */
        margin: 14px 10px;
        /* margin-right: 17px; */
        /* margin-left: 7px; */
        border: 0.5px solid black;
        width: 420px;
        height: 220px;
    }
}

//////////////////// FOR HEADING AND LINE  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
>div {
    width: 100%;
margin-left: 3%;
    /* border: 1px solid black; */
    >span>h3 {
    margin-top: 7px;
    margin-left: 8px;
    margin-bottom: 10px;
    padding: 0px;
    opacity: 0.5;

}
>span {
    display: flex;
    flex-direction: row;
    display: grid;
grid-template-columns: 135px calc(100% - 135px);

    >h5 {
        margin-top: 6px;
    margin-right: 6.5px;
        :after {
            content: '';
            display: block;
            border-bottom: 2px solid black;
            margin-top: 17px;
            opacity: 0.5;
            border-radius: 100%;
            background-color: black;
        }
    }
}
}


/* >div {           ///// initially done
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 5%;
    >p {
    margin-left: 10px;
    margin-top: 8px;
    margin-bottom: 10px;
    font-weight: bold;

        >span {
            float: right;
            clear: both;
    margin-left: 8px;
    margin-right: 4px;
        
        }
    }
} */

/* >div {
border: 1px solid black;
    width: 100%;
margin-left: 5%;
display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
}

>span {
    display: flex;
    align-items: center;
    >img {
        text-align: center;
        margin: 0px 10px;
        border: 0.5px solid black;
        width: 400px;
        height: 200px;
    }
} */




@media (min-width: 768px) {
flex-direction: column;
/* border: 1px solid black; */
/* margin: 0; */
/* width: auto; */
>span {
/* border: 1px solid black; */
/* padding: 0px; */
/* margin-right: 20px; */
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    /* align-content: center; */
    >img {
        /* margin: 10px; */
        width: 300px;
        height: 300px;
    }
}
>div {
    /* border: 1px solid black; */
    /* margin-top: 4%; */
    /* margin-left: 0; */
    /* width: 320px; */
    margin-left: 2px;
    /* margin-right: 25px; */
      /* display: grid; */
/* grid-template-columns: 45% 55%; */
    >span>h3 {
    /* border: 1px solid black; */
        /* width: 220px; */
        /* padding-right: 1; */
    margin-top: 15px;
    margin-left: 8px;
    margin-bottom: 10px;
    padding: 0px;
    /* margin: 0px; */
}
>span {
    display: flex;
    flex-direction: row;
    /* position: absolute; */
    /* width: 100%; */

    display: grid;
grid-template-columns: 135px calc(100% - 135px);

/* justify-content: center; */
/* align-content: center; */
    /* border: 1px solid black; */

    >h5 {
        /* width: 80%; */
        /* width: auto; */
        margin-top: 12px;
    /* border: 1px solid black; */
    margin-right: 10px;
        :after {
            content: '';
            display: block;
            border-bottom: 2px solid black;
            margin-top: 17px;
            opacity: 0.5;
            border-radius: 100%;
            /* position: relative; */
            background-color: black;
            /* width: 100%; */
        }
    }
}
    /* >p {
    margin-left: 10px;
    margin-top: 8px;
    margin-bottom: 10px;
    font-weight: bold;
        >span {
            float: right;
            margin-right: 9%;
        }
    } */
}

}

@media (min-width: 992px) {
    >div>span {
grid-template-columns: 135px calc(95% - 135px);

    }
}
`;



//////////////////// FOR CURRENT JOB VALUES ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Div5 = styled.div`
/* border: 1px solid black; */
    width: 100%;
/* margin-left: 5%; */
    margin-left: 8px;

display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
>div {
/* border: 1px solid black; */
display: flex;
flex-direction: row;
display: grid;
grid-column-gap: 35px;
grid-template-columns: auto auto;
margin-right: 6%;
/* border: 1px solid black; */

margin-top: 5px;
margin-bottom: 8px;
>p {
/* border: 1px solid black; */
text-overflow: ellipsis; 
overflow: hidden;
/* border: 1px solid black; */

}
>span {
/* border: 1px solid black; */
font-weight: bold;
text-align: right;
text-overflow: ellipsis; 
overflow: hidden;
/* border: 1px solid black; */
}
}

@media (min-width: 768px) {
    >div {
        margin: 15px 0px;
        >span {
    margin-right: 34px;
}
    }
}

@media (min-width: 992px) {
    >div {
        /* margin: 15px 0px; */
        >span {
    margin-right: 45px;
}
    }
}

`;
