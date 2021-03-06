import React from 'react';
import styled from 'styled-components';

const Spinner = ({ size, text, onStart }) => {
    
    if (text) {
        return (
            <Container>
                <ContainerMain>
                <i className={`fas fa-spinner fa-pulse fa-${size}x`}></i>
                <h1>{text}</h1>
                </ContainerMain>
            </Container>
        )
    }
    if (onStart) {
        return (
        <div>
            <i style={{marginTop: '20px', marginLeft: '20px', marginBottom: '10px',}} className={`fas fa-spinner fa-pulse fa-${size}x`}></i>
        </div>
    )
    }
    return (
        <div>
            <i className={`fas fa-spinner fa-pulse fa-${size}x`}></i>
        </div>
    )
}

export default Spinner


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    
`


const ContainerMain = styled.div`
    flex-direction: row;
    position: absolute; 
        /* left: 0; */
        /* right: 0;  */
    top: 30%;

`;