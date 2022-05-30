import React from "react";
import "./SendButton.css";

const SendButton = ({ textButton, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="sendButton"
        >
            {textButton}
        </button>
    );
};

export default SendButton;
