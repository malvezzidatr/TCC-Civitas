import React from "react";

import "./Link.css";

const Link = ({ name, link }) => {
    return (
        <a href={link} className="link">
            {name}
        </a>
    );
};

export default Link;
