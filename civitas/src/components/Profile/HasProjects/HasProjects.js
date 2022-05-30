import React from 'react';
import ProjectCard from '../../Home/ProjectCard/ProjectCard';
import './HasProjects.css';

const HasProjects = ({ projects, userId }) => {
    return (
        <div className='hasProjects'>
            {projects.map((item, index) => {
                return (
                    <ProjectCard
                        key={index}
                        title={item.name}
                        description={item.description}
                        userId={userId}
                    />
                )
            })}
        </div>
    );
};

export default HasProjects;