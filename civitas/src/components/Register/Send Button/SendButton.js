import react from 'react';
import './SendButton.css';

const SendButton = ({ textButton }) => {
    return (
        <button className='sendButton'>{textButton}</button>
    )
}

export default SendButton;