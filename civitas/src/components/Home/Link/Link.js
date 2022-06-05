import React from "react";
import { Link } from "react-router-dom";

import "./Link.css";

const Links = ({ name, link }) => {
    return (
        <Link to={link} className="link">
            {name}
        </Link>
    );
};

export default Links;
