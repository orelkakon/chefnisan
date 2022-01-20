import React from 'react';
import { ModalImage } from './style'

const modalImage = ({closeModal, imgChosen}) => {
    return (
        <div style={{display:'flex', justifyContent: 'center'}}>
            <ModalImage src={imgChosen} onClick={closeModal}/>
        </div>
    );
};

export default modalImage;