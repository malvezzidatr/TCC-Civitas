import React, { useState } from 'react';
import axios from "axios";

import Button from '../../components/Login/Button/Button.js';
import Input from '../../components/Login/Input/Input.js';
import Logo from '../../assets/img/LogoTCC.svg'

import './Login.css';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = "http://localhost:3333";

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
                });
        }
    }

    return (
        <div className='background'>
            <img className='logo' src={Logo} alt={'Logo Civitas'} />
            <div className='globalContainerLogin'>
                <h2 className='loginTitle'>Faça seu login</h2>
                <div className='inputContainer'>
                    <Input 
                        type={'text'}
                        placeholder={'Teste@teste.com'}
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Input
                        type={'password'}
                        placeholder={'Senha'}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <div className='buttonContainer'>
                    <Button onClick={login} text={'Login'} />
                    <a href='/cadastrar'>Ainda não tenho conta</a>
                </div>
            </div>
        </div>
    )
}

export default Login;