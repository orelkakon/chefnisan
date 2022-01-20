import React, { useState } from 'react';
import { ReviewDiv } from './style'
import { Content, Images, Title, Image } from './style'
import { TITLE } from './text'
import Modal from 'react-modal';
import ImageInModal from './modalImage'
import images from './images'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: 'auto',
        height: 'auto',
        overflow: 'hidden',
        border: 'none',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent'
    },
};


const Review = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState(null);
    const openCloseModal = () => setIsOpen(!modalIsOpen)

    const setContent = (image) => {
        setImg(image);
        setIsOpen(!modalIsOpen);
    }
    return (
        <ReviewDiv>
            <Content>
                <Title>
                    {TITLE}
                </Title>
            </Content>
            <Images>
                {
                    images && images.map((image, index) => {
                        return (<Image key={index} src={image} onClick={() => setContent(image)} />)
                    })
                }
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={openCloseModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="images modal"
                >
                    <ImageInModal closeModal={openCloseModal} imgChosen={img} />
                </Modal>
            </Images>
        </ReviewDiv>
    );
};

export default Review;