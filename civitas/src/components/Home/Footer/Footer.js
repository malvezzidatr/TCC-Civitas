import React from 'react';
import './Footer.css';
import facebookIcon from '../../../assets/img/facebook.png'
import githubIcon from '../../../assets/img/github.png'
import linkedinIcon from '../../../assets/img/linkedin.png'

const Footer = ({}) => {
    return (
        <div className='footerContainer'>
            <h1>Civitas</h1>
            <p>Plataforma voltada para te ajudar na criação de projetos sociais</p>
            <div className='footerContainer-icons'>
                <a href='#'><img src={facebookIcon} alt='facebook' /></a>
                <a href='#'><img src={linkedinIcon} alt='linkedin' /></a>
                <a href=''><img src={githubIcon} alt='github' /></a>
            </div>
        </div>
    )
};

export default Footer;