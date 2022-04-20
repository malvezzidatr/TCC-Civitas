import React from 'react';

import './Link.css'

const Link = ({ name }) => {
  
  
  return (
    <a className='link'>
      {name}
    </a>
  )
}

export default Link;