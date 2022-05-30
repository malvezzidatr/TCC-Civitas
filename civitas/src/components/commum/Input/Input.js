import React from 'react';
import './Input.css';

const Input = ({ placeholder, type, value, onChange, error }) => {
    return (
        <input 
            placeholder={placeholder}
            type={type}
            className={error ? 'inputError' : 'inputLogin'}
            value={value}
            onChange={onChange}
        />
    )

}

export default Input;