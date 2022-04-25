import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

import './Section.css'

const Section = () => {
  return (
    <section className='section'>
      <h2 className='section__title'><strong className='section__title--highlight'>Projetos</strong> em destaque</h2>

      <div className='section__grid'>
        <ProjectCard
          title={"Arrecadação de Alimentos"}
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."}
        />
        
        <ProjectCard
          title={"Arrecadação de Alimentos"}
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."}
        />

        <ProjectCard
          title={"Arrecadação de Alimentos"}
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."}
        />

        <ProjectCard
          title={"Arrecadação de Alimentos"}
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."}
        />

        <ProjectCard
          title={"Arrecadação de Alimentos"}
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."}
        />
      </div>
    </section>
  )
}

export default Section;