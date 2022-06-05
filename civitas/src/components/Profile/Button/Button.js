import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = () => {
    return <Link className="profile__button" to={"/project-register"}>Novo projeto</Link>;
};

export default Button;
