import React from 'react';
import User from '../User/User';

import './ProjectCard.css';

const ProjectCard = ({ title, description }) => {
  return (
    <div className='project-card'>
      <img src='https://picsum.photos/373/181' alt='' className='project-card__image'></img>

      <div className='project-card__content'>
        <h3 className='project-card__title'>{title}</h3>

        <User name='Asdas Da' ong='Amigos do Bem' city='Mogi Mirim / SP' />

        <p className='project-card__description'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;