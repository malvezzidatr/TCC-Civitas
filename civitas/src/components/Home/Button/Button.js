import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css'

const Button = ({ name, link }) => {
  
  return (
    <Link to={link} className='header__button'>
        {name}
    </Link>
  )
}

export default Button;