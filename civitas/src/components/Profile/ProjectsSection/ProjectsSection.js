import React from "react";

import "./ProjectsSection.css";
import NoProjects from "../NoProjects/NoProjects";
import ProjectCard from "../../Home/ProjectCard/ProjectCard";
import HasProjects from "../HasProjects/HasProjects";

const ProjectsSection = () => {
    return (
        <section className="projects-section">
            <h2 className="projects-section__title">Meus projetos</h2>
            
            {/* <HasProjects /> */}
            <NoProjects />
        </section>
    );
};

export default ProjectsSection;