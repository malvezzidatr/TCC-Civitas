import React, { useState } from 'react';
import './Register.css';
import registerIMG from '../../assets/img/registerSVG.svg';
import Input from '../../components/commum/Input/Input';
import CloseButton from '../../components/Register/Close Button/CloseButton';
import SendButton from '../../components/Register/Send Button/SendButton';
import SuccessModal from '../../components/Register/SuccessModal/SuccessModal';

const Register = ({ }) => {
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [pix, setPix] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='globalContainer'>
            <SuccessModal />
            <div className='globalContainer-left'>
                <h1>Complete os campos para finalizar seu cadastro</h1>
                <img src={registerIMG} alt="register" />
            </div>
            <div className='globalContainer-right'>
                <CloseButton />
                <div className='globalContainer-right--content'>
                    <Input 
                        placeholder={'CPF'}
                        type={'text'}
                        value={cpf}
                        onChange={event => setCpf(event.target.value)}
                    />
                    <Input 
                        placeholder={'Nome completo'}
                        type={'text'}
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <Input 
                        placeholder={'Telefone'}
                        type={'text'}
                        value={telephone}
                        onChange={event => setTelephone(event.target.value)}
                    />
                    <Input 
                        placeholder={'CNPJ'}
                        type={'text'}
                        value={cnpj}
                        onChange={event => setCnpj(event.target.value)}
                    />
                    <Input 
                        placeholder={'Chave pix'}
                        type={'text'}
                        value={pix}
                        onChange={event => setPix(event.target.value)}
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
                    <SendButton textButton={'Enviar'} />
                </div>
            </div>
        </div>
    )
};

export default Register;