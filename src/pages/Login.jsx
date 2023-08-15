import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function Login(props) {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    const handleFormValuesChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, currentUser => {
            if (currentUser) navigate('/');
        });
    }, []);

    return (
        <Container>
            <BackgroundImage />
            <div className="content">
                <Header />
                <div className="form-container flex column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <div className="title">
                            <h3>Login</h3>
                        </div>
                        <div className="container column flex">
                            <input type="email" placeholder='Email Address'
                                name='email' value={formValues.email}
                                onChange={(e) => handleFormValuesChange(e)} />
                            <input type="password" placeholder='Password'
                                name='password' value={formValues.password}
                                onChange={(e) => handleFormValuesChange(e)} />
                            <button onClick={() => handleLogin()}>Login to your account</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default Login;

const Container = styled.div`
    position: relative;
    .content {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh;
        .form-container {
            
            gap: 2rem;
            height:85vh;
            .form {
                padding: 2rem;
                background-color: #000;
                width: 25vw;
                gap: 2rem;
                color: white;
                .container {
                    gap: 2rem;
                    input {
                        padding: 0.5rem 1rem;
                        /* width: 15rem; */
                    }
                    button {
                        padding: 0.5rem 1rem;
                        background-color: #e50914;
                        border: none;
                        cursor: pointer;
                        color: white;
                        border-radius: 0.2rem;
                        font-weight: bolder;
                        font-size: 1rem;
                    }
                }
            }
        }
    }

`;