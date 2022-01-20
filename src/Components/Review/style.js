import styled from 'styled-components'

export const ReviewDiv = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    height: auto;
`;

export const Content = styled.div`
    margin: 15px;
`;

export const Title = styled.p`
    direction: rtl;
    font-size: 35px;
    font-weight: bold;
    text-shadow: 0.1px 0.1px 2px black;
    @media only screen and (min-width: 960px) {
        font-size: 50px;
    }
`;

export const Images = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ModalImage = styled.div`
    height: 370px;
    width: 370px;
    margin: 5px;
    border-radius: 10px;
    background: ${props => `url(${props.src}) no-repeat center;`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media only screen and (min-width: 960px) {
        height: 650px;
        width: 650px;
    }
`;

export const Image = styled.div`
    height: 170px;
    width: 180px;
    margin: 5px;
    border-radius: 10px;
    background: ${props => `url(${props.src}) no-repeat center;`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media only screen and (min-width: 960px) {
        height: 350px;
        width: 350px;
    }
`;

