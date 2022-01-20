import styled from 'styled-components'
import nisan from './../../Assets/nisan.jpg'

export const AboutDiv = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    height: 120vh;
    margin: 5px;
    margin-top: 60px;
    @media only screen and (min-width: 960px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const Image = styled.div`
    height: 500px;
    width: 300px;
    background: url(${nisan}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    box-shadow: 0.5px 0.5px 20px black;
    border-radius: 200px 70px 180px 290px;
    @media only screen and (min-width: 960px) {
        border-radius: 70px 200px 290px 180px;
        height: 700px;
        width: 500px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


export const Title = styled.p`
    direction: rtl;
    margin:0;
    margin-top: 15px;
    font-weight: bold;
    text-shadow: 0.1px 0.1px 3px black;
    font-size: 50px;    
`;

export const Description = styled.p`
    direction: rtl;
    font-size: 20px;   
    text-shadow: 0.1px 0.1px 1px black; 
    white-space: pre;
    @media only screen and (min-width: 960px) {
        text-align: right;
        font-size: x-large;
        text-shadow: 0.1px 0.1px 3px black;
    }

`;