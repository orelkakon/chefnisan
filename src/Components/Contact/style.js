import styled from 'styled-components'
import background_pc from './../../Assets/t1.jfif';
import background_web from './../../Assets/web_bg.jpg';

export const ContactDiv = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    background: url(${background_web}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media only screen and (min-width: 960px) {
        height: 70vh;
        background: url(${background_pc}) no-repeat center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    } 
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;


export const Title = styled.p`
    direction: rtl;
    margin:0;
    margin-top: 15px;
    font-weight: bold;
    text-shadow: 0.1px 0.1px 3px black;
    font-size: 50px;
    @media only screen and (max-width: 960px) {
        color: white;
    }
`;

export const Description = styled.p`
    direction: rtl;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 0.1px 0.1px 1px black; 
    white-space: pre;
    color: white;
    @media only screen and (min-width: 960px) {
        font-size: xx-large;
        color: black;
        text-shadow: 0.1px 0.1px 2px black;
    }

`;

export const Form = styled.div`
    margin-top: 50px;
    display: flex;
    direction: rtl;
    flex-direction: column;
    @media only screen and (min-width: 960px) {
        flex-direction: row;
    }
`;

export const InputCell = styled.input`
    direction: rtl;
    padding: 10px;
    margin: 5px;
    height: 40px;
    width: 230px;
    font-size: 20px;
    background-color: white;
    border: none;
    border-radius: 20px;
    box-shadow: 0.1px 0.1px 4px white;
`;

export const Send = styled.button`
    padding: 10px;
    margin: 5px;
    height: 60px;
    width: 250px;
    font-size: 20px;
    cursor: pointer;
    background-color: #b2e1eb;
    border: none;
    border-radius: 20px;
    box-shadow: 0.1px 0.1px 4px white;
    :hover{
        transform: scale(1.02);
    }
`;