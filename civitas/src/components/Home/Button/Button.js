import React from 'react';

import './Button.css'

const Button = ({ name, link }) => {
  
  return (
    <a href={link} className='header__button'>
      {name}
    </a>
  )
}

export default Button;