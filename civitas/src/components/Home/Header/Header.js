import React from 'react';

import Logo from '../../../assets/img/logo-laranja.svg'
import Link from '../Link/Link.js';
import Button from '../Button/Button.js'

import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='Logo Civitas' className='header__logo'></img>

      <div className='header__links'>
        <Link name={'Cadastrar'} />
        <Button name={'Login'} link={'/login'} />
      </div>
    </header>
  )
}

export default Header;