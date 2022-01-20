import React from 'react';
import { HomeDiv, Logo, ContactIcon, ContactImg, ContactDiv, NumberPhone} from './style'
import facebook from './../../Assets/facebook.png'
import instagram from './../../Assets/instagram.png'

const Home = () => {
    return (
        <HomeDiv>
            <ContactDiv>
                <NumberPhone href="tel:+972503384138">📞050-3384138</NumberPhone>
                <Logo />
                <ContactIcon href="https://www.facebook.com/Nisanchai898" target="_blank" rel="noreferrer">
                    <ContactImg src={facebook} alt="facebook" style={{marginLeft: '30px'}} first={true}/>
                </ContactIcon>
                <ContactIcon href="https://www.instagram.com/chefnisanchai/" target="_blank" rel="noreferrer">
                    <ContactImg src={instagram} alt="instagram"  first={false}/>
                </ContactIcon>
            </ContactDiv>
        </HomeDiv>
    );
};

export default Home;