import React from 'react';
import { Link } from 'react-router-dom';
import './CloseButton.css';

const CloseButton = ({ route, className }) => {
    return (
        <button className={className}>
            <Link to={route}>
                X
            </Link>
        </button>
    )
}

export default CloseButton;