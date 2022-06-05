import React from 'react';
import './SuccessModal.css';
import successIMG from '../../../assets/img/Success.svg';
import ModalButton from '../ModalButton/ModalButton';

const SuccessModal = () => {
    return (
        <div className='modalContainer'>
            <img src={successIMG} alt='success' />
            <div>
                <p>Tudo certo!</p>
                <p>Usuário cadastrado com sucesso</p>
            </div>
            <ModalButton textButton={'Voltar a tela de login'} />
        </div>
    )
}

export default SuccessModal;