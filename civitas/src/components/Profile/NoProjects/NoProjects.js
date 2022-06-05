import React from "react";

import "./NoProjects.css";
import noProjectIcon from "../../../assets/img/icon-no-project.svg";

const NoProjects = ({ text }) => {
    return (
        <div className="no-projects">
            <img src={noProjectIcon} alt="Sem projetos"></img>
            <p>{ text } </p>
        </div>
    );
};

export default NoProjects;
