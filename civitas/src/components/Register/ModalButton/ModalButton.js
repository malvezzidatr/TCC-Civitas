import React from 'react';
import './ModalButton.css';

const ModalButton = ({ textButton }) => {
    return (
        <button className='modalButton'>{textButton}</button>
    )
};

export default ModalButton;