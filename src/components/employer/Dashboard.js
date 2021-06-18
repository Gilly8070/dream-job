import React from 'react';
import styled from 'styled-components';
// import img from '../../images/logo.jpg';


const Dashboard = () => {
    return (
        <Container>
            <DataOverview>
                <p><span>40</span>Total Hire</p>
                <p><span>20</span>Apps per hire</p>
                <p><span>30</span>Avg. Time to hire</p>
                <p><span>33</span>Avg. cost per hire</p>
                <p><span>27</span>Open position</p>
            </DataOverview>
            <MainContainer>
            <SideContain>
                <h4>UnActioned Candidates</h4>
                <p>Job title, location</p>
                <p>Job title, location</p>
                <p>Job title, location</p>
                <p>Job title, location</p>
                </SideContain>
            <SideContain>
                <h4>Recruitment Funnel</h4>
                <p>Screen 100%</p>
                <p>Interview 65%</p>
                <p>Offer 50%</p>
                <p>Hire 40%</p>
            </SideContain>
            <SideContain>
                <h4>Interview Schedule</h4>
                <div>
                    <p>Candidate Name</p>
                    <span>Job, Title, Place</span>
                    <p>Candidate Name</p>
                    <span>Job, Title, Place</span>
                    <p>Candidate Name</p>
                    <span>Job, Title, Place</span>
                </div>
            </SideContain>
            </MainContainer>
            </Container>
    )
}

export default Dashboard;

const Container = styled.div`
/* display: grid; */
/* grid-template-columns: 3fr; */
/* position: absolute; */
/* right: 600px; */
/* width: ${props => (props.openSide ? `calc(100vw-400px)` : `100vw`)}; */
/* width: 100vw; */
/* width: 100%; */
/* @media (max-width: 900px) { */
    display: flex;
flex-direction: column;
/* justify-content: space-between; */
/* align-items: center; */
/* } */

`

const MainContainer = styled.div`
/* display: grid; */
/* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
/* grid-template-rows: repeat(1,2fr); */
/* grid-area: 2/1/1/1; */
@media (max-width: 826px) {
    display: flex;
    flex-direction: column;
    text-align: center;
}
`


const DataOverview = styled.div`
display: flex;
flex-direction: row;
width: 100%;
border: 1px solid black;
justify-content: space-between;
/* grid-row: 2/2; */
/* align-items: flex-start; */

&>p {
margin: 0px 8px 30px 6px;
border: 1px solid black;
padding: 5px 20px 12px 2px ;
text-align: center;
/* width: 100%; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

@media (max-width: 826px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

/* @media (max-width: 900px) {
    justify-content: flex-start;
    /* flex-grow: 2; */
/* }  */
`

const SideContain = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: 4px;
padding: 10px;
`

