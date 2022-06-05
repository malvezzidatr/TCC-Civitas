import React from "react";

import "./ProjectsSection.css";
import NoProjects from "../NoProjects/NoProjects";
import HasProjects from "../HasProjects/HasProjects";

const ProjectsSection = ({ projects, userId }) => {
    return (
        <section className="projects-section">
            <h2 className="projects-section__title">Meus projetos</h2>
            
            { projects?.length ?  
                <HasProjects projects={projects} userId={userId} />
                :
                <NoProjects text={"Você ainda não tem projetos cadastrados"} />
            }
        </section>
    );
};

export default ProjectsSection;