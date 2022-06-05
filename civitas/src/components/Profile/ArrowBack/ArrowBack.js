import React from 'react';
import { Link } from 'react-router-dom';
import './ArrowBack.css';

const ArrowBack = () => {
    return (
        <Link className='arrow' to={'/'} >&lArr;</Link>
    );
};

export default ArrowBack