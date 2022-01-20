import React from 'react';
import { AboutDiv } from './style'
import { Image, Content, Title, Description } from './style'
import { TITLE, DESCRIPTION } from './text'

const About = () => {
    return (
        <AboutDiv>
            <Image>
            </Image>
            <Content>
                <Title>
                    {TITLE}
                </Title>
                <Description>
                    {DESCRIPTION}
                </Description>
            </Content>
        </AboutDiv>
    );
};

export default About;