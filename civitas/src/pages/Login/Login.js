import React, { useState } from 'react';
import axios from "axios";

import Button from '../../components/Login/Button/Button.js';
import Input from '../../components/commum/Input/Input.js';
import Logo from '../../assets/img/logo-branco.svg'

import './Login.css';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = "http://localhost:3333";
    const [error, setError] = useState(false)

    function login() {
        if(email && password) {
            axios
                .post(
                    `${url}/users/auth/login`,
                    {
                        email: email,
                        password: password,
                    },
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Methods":
                                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                            "Content-Type": "application/json; charset=utf-8",
                            "Access-Control-Allow-Headers":
                                "Origin, Content-Type, X-Auth-Token",
                        },
                    }
                )
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userId", response.data.userId);
                    window.location.replace("http://localhost:3000");
                })
                .catch((error) => {
                    setError(true);
                })
        }
    }

    return (
        <div className='background'>
            <a href='/'><img className='logo' src={Logo} alt={'Logo Civitas'} /></a>
            <div className='globalContainerLogin'>
                <h2 className='loginTitle'>Faça seu login</h2>
                <div className='inputContainer'>
                    <Input 
                        type={'text'}
                        placeholder={'Teste@teste.com'}
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        error={error}
                    />
                    <Input
                        type={'password'}
                        placeholder={'Senha'}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        error={error}
                    />
                    {error ? <p className='paragraphError'>E-mail ou senha inválida</p> : null}
                </div>
                <div className='buttonContainer'>
                    <Button onClick={login} text={'Login'} />
                    <a href='/register'>Ainda não tenho conta</a>
                </div>
            </div>
        </div>
    )
}

export default Login;