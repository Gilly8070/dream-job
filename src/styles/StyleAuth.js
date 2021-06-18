import styled from 'styled-components';

export const MainContent = styled.div`
/* padding: 0 10px; */
/* width: 500px; */
/* height:500px; */
padding-top: 10px;
display: flex;
align-items: center;
justify-content: center;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
width: 500px;
height:500px;
background-color: #dddddd;
/* padding-top: 0px; */
`

export const Headers = styled.div`
display: flex;
/* display: inline-block; */
flex-wrap: nowrap;
flex-direction: row;
padding:20px;
/* padding-top: 0px; */
/* margin: 10px; */
`

export const Heading1 = styled.h1`
/* display: flex; */
background-color: white;
border: 2px solid black;
margin-right: 4px;
width: auto;
/* width:100px; */
padding:10px;
border-radius: 8px;

&:hover {
    background-color: #bac5b2;
    transform: scale(0.98);
}

/* flex: 1; */
/* display: inline-block; */
`;

// export const Heading2 = styled.h1`
// display: flex;
// flex: 0 auto;
// display: inline-block;
// `;