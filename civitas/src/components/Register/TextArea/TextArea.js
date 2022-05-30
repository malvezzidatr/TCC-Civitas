import React from "react";
import './TextArea.css';

const TextArea = ({placeholder, value, onChange}) =>{
    return (
        <textarea
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="textArea"
        />
    );
};

export default TextArea