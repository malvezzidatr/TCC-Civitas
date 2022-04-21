import React from 'react';

import Logo from '../../../assets/img/logo-laranja.svg'
import Link from '../Link/Link.js';
import Button from '../Button/Button.js'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='Logo Civitas' className='header__logo'></img>

      <div className='header__links'>
        <Link name={'Cadastrar'} />
        <Button name={'Login'} />
      </div>
    </div>
  )
}

export default Header;