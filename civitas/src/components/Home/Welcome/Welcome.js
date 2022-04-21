import React from 'react';

import Button from '../Button/Button.js'

import './Welcome.css';

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className='welcome__content'>
        <h2 className='welcome__title'>Ache todas as <span className='welcome__title--highlight'>ONGs</span> em uma plataforma</h2>
        
        <div className='welcome__input-container'>
          <input className='welcome__input' placeholder='Localização' />
          <Button name={'Procurar'} />
        </div>
      </div>
    </div>
  )
}

export default Welcome;