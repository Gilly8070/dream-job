import styled from 'styled-components';

export const FullContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
/* position: relative; */
@media (min-width: 0px) and (max-width: 430px) {
        display: none;
    }
    @media (min-height: 0px) and (max-height: 100px) {
        display: none;
    }
`


export const MainContent = styled.div`

`

export const Content = styled.div`
/* display: flex; */
/* flex-direction: column; */
padding-top: 10px;
background-color: #ddd;
width: 530px;
/* position: fixed; */
height: 630px;
/* margin-bottom: 10px; */
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Headers = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
padding: 20px;
padding-bottom: 0px;

`

export const Heading1 = styled.h1`
margin-right: 25px;
opacity: ${props => props.bgColor ? '1' : '0.4'} ;
transform: ${props => props.bgColor ? 'scale(1.1)' : '0'} ;
border-bottom: ${props => props.bgColor ? '2px solid #006d77' : 'none'} ;
padding-bottom: 5px;
margin-bottom: 15px;
margin-left: 10px;
/* border: 1px solid black; */

&:hover {
    cursor: pointer;
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
font-size: 1.2rem;

>span {
    margin-left: 13px;
    font-size: 1.5rem;
}
`;


export const Heading3 = styled.h3`
font-size: 1.6rem;
margin-bottom: 10px;
>span {
    margin-left: 15px;
    color: #1E93D6;
}
@media (max-width: 320px) {
font-size: 1.3rem;
}
`;

export const FormContainer = styled.div`
/* border: 1px solid black; */
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;

/* height: 300px; */
/* position: fixed; */
/* margin-left: 30px; */
    /* margin-bottom: 50px; */
>div {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    margin-bottom: 20px;
}


`
export const Label = styled.label`

font-size: 1.5rem;
width: 160px;
/* margin-left: 30px; */
    /* margin-bottom: 20px; */

`

export const Input = styled.input`
font-size: 1.4rem;
margin-left: 20px;
width: 100%;
margin-right: 5px;
input:required {
  border: 1px dashed red;
}
/* :required */
/* margin-right: 20px; */
/* margin-left: 30px; */
    /* margin-bottom: 20px; */
`
export const Button = styled.button`
font-size: 1.3rem;
padding: 12px;
border-radius: 5px;
border: none;
margin-bottom: 20px;
margin-top: 20px;
width: 200px;
background-color: ${props => props.backgroundColor};
color: white;
margin-left: 20px;

:hover {
    cursor: pointer;
}
`



export const Button1 = styled.button`
background-color: ${props => props.backgroundColor};
color: white;
font-size: 1.2rem;
padding: 10px;
border-radius: 5px;
border: none;
margin-bottom: 10px;
margin-top: 20px;
width: 120px;
margin-left: 10px;

:hover {
    cursor: pointer;
}
`;


export const Heading4 = styled.div`
font-weight: bold;
font-size: 1.3rem;
`;


export const IconsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
margin-bottom: 0px;
`;




export const SocialButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
@media (max-width: 320px) {
    display: flex;
    flex-direction: row;
    margin-top: 4px;
}
`

export const SocialButton = styled.div`
    margin: 20px;
    font-size: 35px;
    &:hover {
        color: #3078BD;
        cursor: pointer;
    }

`

export const ErrorContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
align-items: center;
align-self: center;
font-size: 1.2rem;
color: red;
margin: 0px 4px 0px 12px;
margin-bottom: 15px;
z-index: 999;
`;
