import React from "react";

import "./NoProjects.css";
import noProjectIcon from "../../../assets/img/icon-no-project.svg";

const NoProjects = () => {
    return (
        <div className="no-projects">
            <img src={noProjectIcon} alt="Sem projetos"></img>
            <p>Você ainda não tem projetos cadastrados</p>
        </div>
    );
};

export default NoProjects;
