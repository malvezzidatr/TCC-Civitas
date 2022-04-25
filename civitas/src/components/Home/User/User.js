import React from 'react';

import './User.css'

const User = ({ name, ong, city }) => {
  return (
    <div className='user'>
      <img src='https://picsum.photos/72/72' alt='' className='user__photo'></img>
          
      <p className='user__name'>{name}</p>
      <p className='user__ong'>{ong}</p>
      <p className='user__city'>{city}</p>
    </div>
  )
}

export default User;