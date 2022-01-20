import React from 'react';
import { FooterDiv } from './style'
import { Content, Description, FooterText, NumberPhone } from './style'
import { DESCRIPTION } from './text'

const Footer = () => {
    return (
        <FooterDiv>
            <Content>
                <Description>
                    {DESCRIPTION}
                </Description>
                <NumberPhone href="tel:+972503384138">☎ 050-3384138</NumberPhone>
                <FooterText>
                      כל הזכיות שמורות © אין להעתיק, להפיץ ולפרסם בלא אישור בכתב.
                      <br />
                      מפתח האתר <a href="https://www.instagram.com/orelkakon/" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                          אוראל קקון
                          </a>
                      {/* <br /> */}
                       , שף <a href="https://www.instagram.com/chefnisanchai/" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                          ניסן חי
                          .</a>
                </FooterText>
            </Content>
        </FooterDiv>
    );
};

export default Footer;