import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../ProjectCard/ProjectCard';

import './Section.css'

const Section = () => {
    const [projects, setProjects] = useState([]);
    const url = 'http://localhost:3333';
    
    useEffect(() => {
        axios
            .get(`${url}/projects`)
            .then((response) => {
                setProjects(response.data)
            });
    }, []);

    return (
        <section className='section'>
            <h2 className='section__title'><strong className='section__title--highlight'>Projetos</strong> em destaque</h2>
            <div className='section__grid'>
                {projects.map((item, index) => {
                    return (
                        <ProjectCard pix={item.pix} key={index} title={item.name} description={item.description} userId={item.user_id} />
                    )
                })}
            </div>
        </section>
    )
}

export default Section;