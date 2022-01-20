import styled from 'styled-components'
import background_web from './../../Assets/bg1.jfif';
import background_pc from './../../Assets/pc_bg.jpg';
import logo from './../../Assets/logo.jfif'

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    height: 100vh;
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
    }
`;

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 150px;
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
        left: 0;
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
        ${props => props.first ? 'right: 0;':'right: 110px;'}
        position: absolute;
    }
`;


