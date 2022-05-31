import React, { useEffect, useState } from 'react';
import './ModalForPix.css';

const ModalForPix = ({ title, userName, description, isVisible, set, pix }) => {
    const [visible, setVisible] = useState(isVisible);
    console.log(pix)
    return (
        <div style={visible ? {display: 'flex'} : {display: 'none'}} className='modalForPix'>
            <div style={{backgroundImage: "url('https://picsum.photos/id/1033/1000/380')", backgroundSize: 'contain'}} className='image'>
                <button onClick={() => {setVisible(false); set(false)}} className='closeButtonModal'>X</button>
            </div>
            <div className='content'>
                <h2>{title}</h2>
                <div className='user'>
                    <img src='https://picsum.photos/373/181' alt='imagem'/>
                    <div>
                        <p>{userName}</p>
                        <p>pix: {pix}</p>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ModalForPix;