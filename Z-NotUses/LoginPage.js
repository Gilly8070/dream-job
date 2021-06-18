import React,{useState} from 'react'
// import Auth from './Auth'
import { Content, MainContent,Headers , Heading1, Heading2 } from '../../styles/StyleLoginPage';
// import Dashboard from './Dashboard';

const LoginPage = () => {
    const [name, setName] = useState('Employer');

    const handleChange = (e) => {
        let target = e.target.innerText;
        setName(target);
        // target === 'Employer' ? setName({ target }) : null
        // console.log(e.target.innerText)
    }
    return (
        <MainContent>
            <Content>
                <Headers>
                    <Heading1 onClick={handleChange} >Employer </Heading1>
                    <Heading1 onClick={handleChange} >Candidate</Heading1>
                </Headers>
                <h3>Register/Login as {name}</h3>
                {/*<Auth name={name} />*/}
            </Content>
        </MainContent>
    )
}

export default LoginPage;
