import styled from "styled-components";
import Bg from '../../Assets/background03.jpg'
import BgTwo from '../../Assets/background04.jpg'

export const Container = styled.section`
    width: 100%;
    min-height: 80vh;
    padding: 2rem 0.5rem;
    background-image: url(${Bg}), url(${BgTwo});
    background-size: contain, 100% 60%;
    background-repeat: no-repeat;
    background-position: top, bottom;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
        
    p{
        max-width: 45ch;
        font-size: clamp(1.2rem, 2.2vw, 2.5rem);
        font-family: var(--ff-txt);
        font-weight: 600;
        color: black;
    }

    div{
        position: relative;
        isolation: isolate;
    }

    @media screen and (max-width:768px){
        flex-direction: column;
        text-align: center;
        background-size: contain, 100% 20%;
    }
`;

export const MyPhoto = styled.img`
    width: 80%;
    border-radius: 150px;
    border: 6px solid transparent;
    background: 
    linear-gradient(50deg , blueviolet, #00C0FD) padding-box,
    linear-gradient(50deg , blueviolet, #00C0FD) border-box;

    @media screen and (max-width:768px){
        width: 90%;
    }
`;

export const Img = styled.img`
    width: 25%;
    aspect-ratio: 1;
    position: absolute;
    left: 5%;
    bottom: 25%;

    @media screen and (max-width:768px){
        left: 14%;
    }
`;