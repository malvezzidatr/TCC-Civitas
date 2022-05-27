import React from 'react';
import './CloseButton.css';

const CloseButton = ({ route, className }) => {
    return (
        <button className={className}>
            <a href={route}>
                X
            </a>
        </button>
    )
}

export default CloseButton;