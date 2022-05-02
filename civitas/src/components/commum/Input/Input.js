import React from 'react';
import './Input.css';

const Input = ({ placeholder, type, value, onChange }) => {
    return (
        <input 
            placeholder={placeholder}
            type={type}
            className='inputLogin'
            value={value}
            onChange={onChange}
        />
    )

}

export default Input;