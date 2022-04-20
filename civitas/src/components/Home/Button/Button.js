import React from 'react';

import './Button.css'

const Button = ({ name }) => {
  
  return (
    <a className='header__button'>
      {name}
    </a>
  )
}

export default Button;