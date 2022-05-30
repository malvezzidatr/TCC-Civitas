import axios from 'axios';
import React, { useState, useEffect } from 'react';
import User from '../User/User';

import './ProjectCard.css';

const ProjectCard = ({ title, description, userId }) => {
    const [user, setUser] = useState('');
    const url = 'http://localhost:3333';

    useEffect(() => {
        axios
            .get(`${url}/users/${userId}`)
            .then(response => setUser(response.data));
    }, []);

    return (
        <div className='project-card'>
        <img src='https://picsum.photos/373/181' alt='' className='project-card__image'></img>

        <div className='project-card__content'>
            <h3 className='project-card__title'>{title}</h3>

            <User name={user.name} />

            <p className='project-card__description'>{description}</p>
        </div>
        </div>
    )
}

export default ProjectCard;