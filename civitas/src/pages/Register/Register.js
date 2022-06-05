import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';
import registerIMG from '../../assets/img/registerSVG.svg';
import Input from '../../components/commum/Input/Input';
import CloseButton from '../../components/Register/CloseButton/CloseButton';
import SendButton from '../../components/Register/SendButton/SendButton';
import SuccessModal from '../../components/Register/SuccessModal/SuccessModal';
import SuccessSVG from '../../assets/img/Success.svg';
import ErrorSVG from '../../assets/img/Error.svg';
import { Link } from 'react-router-dom';

const Register = ({ }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalErrorVisible, setIsModalErrorVisible] = useState(false);
    const url = "http://localhost:3333";

    function Modal() {
        return (
            <div className='registerUserModal'>
                <div className='container'>
                    <img src={SuccessSVG} alt="Successo"/>
                    <div>
                        <h1>Tudo certo!</h1>
                        <p>Usuário cadastrado com successo.</p>
                    </div>
                    <Link className='goToLogin' to={"/login"}>Voltar para tela de login</Link>
                </div>
            </div>
        )
    }

    function ErrorModal() {
        return (
            <div className='registerUserModal'>
                <div className='container'>
                    <img src={ErrorSVG} alt="Error"/>
                    <div>
                        <h1>Algo deu Errado</h1>
                        <p>Infelizmente ocorreu um erro</p>
                    </div>
                    <button className='goToLogin' onClick={() => setIsModalErrorVisible(false) }>Tentar novamente</button>
                </div>
            </div>
        )
    }

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
                .then(() => {
                    setIsModalVisible(true);
                })
                .catch((error) => {
                    setIsModalErrorVisible(true);
                })
        }
    }

    return (
        <div className='globalContainer'>
            { isModalVisible ? <Modal /> : null }
            { isModalErrorVisible ? <ErrorModal /> : null }
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