import styled from 'styled-components';

export const FullContainer = styled.div`

@media (max-width: 320px) {
/* background-color: #ddd; */
/* height:500px; */
/* height: auto;
padding: 0;
margin: 0; */

}
`


export const MainContent = styled.div`
/* padding: 0 10px; */
/* width: 500px; */
/* height:500px; */

padding-top: 10px;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 320px) {
/* padding-top: 0; */
/* margin-top: 0; */
/* background-color: #ddd; */

}
`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
width: 500px;
height:500px;
background-color: #ddd;

@media (max-width: 320px) {
background-color: #ddd;
display: flex;
flex-direction: column;
text-align: center;
/* height: 100vh; */
/* width: auto; */
height:700px;
position: fixed;
top: -23%;


}

`

export const Headers = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: row;
padding: 20px;

@media (max-width: 320px) {
    padding-top: 0px; 
    margin: 0px;

}

`

export const Heading1 = styled.h1`
background-color: white;
border: 2px solid black;
margin-right: 4px;
width: auto;
padding:10px;
border-radius: 8px;

&:hover {
    background-color: #bac5b2;
    transform: scale(0.98);
}

@media (max-width: 320px) {
padding: 5px;
font-size: 1rem;
&:hover {
    background-color: #bac5b2;
    transform: scale(0.98);
}
}
`;

export const Heading2 = styled.h1`
margin-bottom: 10px;
font-size: 1rem;

`;


export const Heading3 = styled.h3`
font-size: 1.3rem;

@media (max-width: 320px) {
font-size: 1.3rem;
    
}
`;

export const FormContainer = styled.div`

@media (max-width: 320px) {
    padding: 0px;
    margin: -5px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export const Label = styled.label`
    @media (max-width: 320px) {
    font-size: 1rem;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;

    }

`

export const Input = styled.input`
    @media (max-width: 320px) {
    background-color: white;
    font-size: 1rem;
    width: 12rem;
    margin-bottom: -15px;
    }
`
export const Button = styled.button`
    @media (max-width: 320px) {
    font-size: 1rem;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0.4rem;
    margin-bottom: 6px;
    width: 200px;
    border-radius:5px;
    background-color: #fff;
    border: solid 1px black;
    &:hover {
    background-color: #bac5b2;
    transform: scale(0.9);
    }
}
`

export const SocialButton = styled.div`
@media (max-width: 320px) {
    font-size: 1rem;
    margin-right: 10px;

    &:hover {
    background-color: white;
    transform: scale(1.5);
    }
}
`
export const SocialButtonContainer = styled.div`
@media (max-width: 320px) {
    display: flex;
    flex-direction: row;
    margin-top: 4px;
}
`