import styled from 'styled-components'

export const FooterDiv = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 60px;
    @media only screen and (min-width: 960px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Description = styled.p`
    direction: rtl;
    font-size: 20px;   
    text-shadow: 0.1px 0.1px 1px black; 
    margin: 20px;
    @media only screen and (min-width: 960px) {
        white-space: pre;
        font-size: x-large;
        text-shadow: 0.1px 0.1px 3px black;
    }
`;

export const FooterText = styled.p`
    direction: rtl;
    font-size: 15px;   
    text-shadow: 0.1px 0.1px 1px black; 
    @media only screen and (min-width: 960px) {
        white-space: pre;
        font-size: x-large;
        text-shadow: 0.1px 0.1px 3px black;
    }
`;

export const NumberPhone = styled.a`
    text-decoration: none;
    font-size: medium;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    color: black;
    @media only screen and (min-width: 960px) {
        font-size: xx-large;
    }   
`;