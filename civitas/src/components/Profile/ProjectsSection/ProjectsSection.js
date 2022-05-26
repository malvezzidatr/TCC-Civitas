import React from "react";

import "./ProjectsSection.css";
import NoProjects from "../NoProjects/NoProjects";

const ProjectsSection = () => {
    return (
        <section className="projects-section">
            <h2 className="projects-section__title">Meus projetos</h2>

            <NoProjects />
        </section>
    );
};

export default ProjectsSection;
