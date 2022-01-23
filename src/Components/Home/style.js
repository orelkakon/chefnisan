import styled from 'styled-components'
import background_web from './../../Assets/bg1.jfif';
import background_pc from './../../Assets/pc_bg.jpg';
import logo from './../../Assets/logo.jfif'

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    height: 110vh;
    background: url(${background_web}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media only screen and (min-width: 960px) {
        background: url(${background_pc}) no-repeat center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    } 
`;

export const Logo = styled.div`
    @media only screen and (max-width: 960px) {
        background: url(${logo}) no-repeat center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        border: none;
        margin: 10px;
        width: 100px;
        height: 100px;
        border-radius: 30px;
        box-shadow: 0.3px 0.3px 5px #b2e1eb;
    }
`;

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 140px;
`;

export const ContactIcon = styled.a`
    
`;

export const NumberPhone = styled.a`
    text-decoration: none;
    font-size: medium;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    margin-top: 45px;
    margin-right: 10px;
    @media only screen and (min-width: 960px) {
        font-size: xx-large;
        left: 20px;
        position: absolute;
    }   
`;

export const ContactImg = styled.img`
    height: 35px;
    width: 35px;
    margin: 2px; 
    margin-top: 40px;
    @media only screen and (min-width: 960px) {
        height: 100px;
        width: 100px;
        ${props => props.first ? 'right: 20px;' : 'right: 130px;'}
        position: absolute;
    }
`;

export const Content = styled.div`

`;

export const Title = styled.p`
    direction: rtl;
    font-size: 45px;
    text-shadow: 2px 2px 2px black;
    @media only screen and (min-width: 960px) {
        font-size: 60px;
    }
    color: #b2e1eb;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const SuperTitle = styled.p`
    direction: rtl;
    margin: 0;
    font-size: 60px;
    color: whitesmoke;
    text-shadow: 2px 2px 2px black;
    @media only screen and (min-width: 960px) {
        color: black;
        text-shadow: 2px 2px 2px white;
    }
`;

export const Description = styled.p`
    direction: rtl;
    margin: 0;
    word-spacing: 3px;
    font-size: 25px;
    white-space: pre;
    color: whitesmoke;
    text-shadow: 2px 2px 2px black;
    @media only screen and (min-width: 960px) {
        color: black;
        text-shadow: 2px 2px 2px white;
    }
`;

export const JumpOrder = styled.a`
    height: auto;
    width: 230px;
    text-decoration: none;
    font-size: 25px;
    border: 3px solid #b2e1eb;
    border-radius: 50px;
    background-color: transparent;
    color: #b2e1eb;
    text-shadow: 2px 2px 2px black;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 5px;
    cursor: pointer;
    @media only screen and (min-width: 960px) {
        border: 3px solid black;
        color: black;
        text-shadow: none;
    }
    :hover{
        transform: scale(1.1);
    }
`;
