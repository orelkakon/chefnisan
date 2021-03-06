import React from 'react';
import { HomeDiv, Logo, ContactIcon, ContactImg, ContactDiv, NumberPhone, JumpOrder, Content, Title, SuperTitle, Description } from './style'
import { PRE_TITLE, POST_TITLE, SUPER_TITLE, DESCRIPTION_PC, JUMP_ORDER, DESCRIPTION_WEB } from "./text"
import facebook from './../../Assets/facebook.png'
import instagram from './../../Assets/instagram.png'
import { isMobile } from 'react-device-detect';


const Home = () => {
    return (
        <HomeDiv>
            <ContactDiv>
                <NumberPhone href="tel:+972503384138">📞050-3384138</NumberPhone>
                <Logo />
                <ContactIcon href="https://www.facebook.com/Nisanchai898" target="_blank" rel="noreferrer">
                    <ContactImg src={facebook} alt="facebook" style={{ marginLeft: '30px' }} first={true} />
                </ContactIcon>
                <ContactIcon href="https://www.instagram.com/chefnisanchai/" target="_blank" rel="noreferrer">
                    <ContactImg src={instagram} alt="instagram" first={false} />
                </ContactIcon>
            </ContactDiv>
            <Content>
                <Title>
                    <span>{PRE_TITLE}</span>
                    <br />
                    <span>{POST_TITLE}</span>
                </Title>
                <SuperTitle>{SUPER_TITLE}</SuperTitle>
                <Description>{isMobile ? DESCRIPTION_WEB : DESCRIPTION_PC}</Description>
            </Content>
            <JumpOrder href="#jump_point">
                {JUMP_ORDER}
            </JumpOrder>
        </HomeDiv>
    );
};

export default Home;