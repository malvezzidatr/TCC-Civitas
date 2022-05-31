import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ModalForPix from '../ModalForPix/ModalForPix';
import User from '../User/User';

import './ProjectCard.css';

const ProjectCard = ({ title, description, userId, pix }) => {
    const [user, setUser] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const url = 'http://localhost:3333';

    useEffect(() => {
        axios
            .get(`${url}/users/${userId}`)
            .then(response => setUser(response.data));
    }, []);
    
    return (
        <>
            {isModalVisible ? <ModalForPix pix={pix} set={setIsModalVisible} isVisible={true} title={title} userName={user.name} description={description} /> : null}
            <div onClick={() => setIsModalVisible(true)} className='project-card'>
            <img src='https://picsum.photos/373/181' alt='' className='project-card__image'></img>

            <div className='project-card__content'>
                <h3 className='project-card__title'>{title}</h3>

                <User name={user.name} />

                <p className='project-card__description'>{description}</p>
            </div>
            </div>
        </>
    )
}

export default ProjectCard;