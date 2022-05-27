import React, { useState } from 'react';
import './Register.css';
import registerIMG from '../../assets/img/registerSVG.svg';
import Input from '../../components/commum/Input/Input';
import CloseButton from '../../components/Register/CloseButton/CloseButton';
import SendButton from '../../components/Register/SendButton/SendButton';
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
                <CloseButton className={'closeButton-right'} route={'/'} />
                <div className='globalContainer-right--content'>
                    <Input 
                        placeholder={'Nome completo'}
                        type={'text'}
                        value={cpf}
                        onChange={event => setCpf(event.target.value)}
                    />
                    <Input 
                        placeholder={'E-mail'}
                        type={'text'}
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <Input 
                        placeholder={'Senha'}
                        type={'text'}
                        value={telephone}
                        onChange={event => setTelephone(event.target.value)}
                    />
                    <SendButton textButton={'Enviar'} />
                </div>
            </div>
        </div>
    )
};

export default Register;