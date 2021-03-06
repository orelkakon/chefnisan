import React, { useState } from 'react';
import { GalleryDiv } from './style'
import { Content, Images, Title, Description, Image, Video } from './style'
import { DESCRIPTION, TITLE } from './text'
import { isMobile } from 'react-device-detect';
import Modal from 'react-modal';
import ImageInModal from './modalImage'
import images from './images'
import videos from './videos'

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


const Gallery = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState(null);
    const openCloseModal = () => setIsOpen(!modalIsOpen)

    const setContent = (image) => {
        setImg(image);
        setIsOpen(!modalIsOpen);
    }
    return (
        <GalleryDiv>
            <Content>
                <Title>
                    {TITLE}
                </Title>
                <Description>
                    {DESCRIPTION}
                </Description>
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
                {
                    videos && videos.map((video, index) => {
                        return ( isMobile ? <Video key={index} src={video} muted loop /> : <Video src={video} autoPlay muted loop />)
                    })
                }
            </Images>
        </GalleryDiv>
    );
};

export default Gallery;