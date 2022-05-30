import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';
import registerIMG from '../../assets/img/registerSVG.svg';
import Input from '../../components/commum/Input/Input';
import CloseButton from '../../components/Register/CloseButton/CloseButton';
import SendButton from '../../components/Register/SendButton/SendButton';
import SuccessModal from '../../components/Register/SuccessModal/SuccessModal';

const Register = ({ }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = "http://localhost:3333";

    function userRegister() {
        if(email && password && name) {

            axios
                .post(
                    `${url}/users/auth/register/`,
                    {
                        name: name,
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
                    window.location.replace("http://localhost:3000/login");
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }

    return (
        <div className='globalContainer'>
            <SuccessModal />
            <div className='globalContainer-left'>
                <h1>Complete os campos para finalizar seu cadastro</h1>
                <img src={registerIMG} alt="register" />
            </div>
            <div className='globalContainer-right'>
                <CloseButton className={'closeButton-right'} route={'/'} />
                <div className='globalContainer-right--content'>
                    <Input 
                        placeholder={'Nome completo'}
                        type={'text'}
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <Input 
                        placeholder={'E-mail'}
                        type={'text'}
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Input 
                        placeholder={'Senha'}
                        type={'password'}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <SendButton onClick={userRegister} textButton={'Enviar'} />
                </div>
            </div>
        </div>
    )
};

export default Register;