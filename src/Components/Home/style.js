import styled, { keyframes } from "styled-components";
import Tela from "../../Assets/tela.png";

export const Container= styled.section`
    width:100%;
    padding: 1rem 0;
    min-height: 60vw;
    background-image: url(${Tela});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Animar = keyframes`
    0%{
        opacity: 0;
        background: linear-gradient(50deg , #E70FAA, #00C0FD);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }100%{
        background: linear-gradient(50deg , #00C0FD, #E70FAA);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        opacity: 1;
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    img{
        width: 40%;
        min-height: 20vh;
        border-radius: 100%;
        border: 6px solid transparent;
        background: 
        linear-gradient(50deg , blueviolet, #00C0FD) padding-box,
        linear-gradient(50deg , blueviolet, #00C0FD) border-box;
    }

    h2{
        max-width: 15ch;
        font-size: 4rem;
        font-family: var(--ff-title);
        text-align: center;
        animation-name: ${Animar};
        animation-duration: 2s;
        animation-delay: 2s;
        animation-iteration-count: 7;
        animation-timing-function: ease-in-out;
        background: linear-gradient(50deg , #00C0FD, blueviolet);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        opacity: 1;
    }

    @media screen and (max-width:768px){
        img{
            width: 90%;
        }
    }
`;

