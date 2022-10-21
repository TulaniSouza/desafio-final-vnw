import styled from "styled-components";
import Bg from '../../Assets/background03.jpg'
import BgTwo from '../../Assets/background04.jpg'

export const Container= styled.section`
    width: 100%;
    min-height: 80vh;
    margin: 0 auto;
    padding: 1rem 2rem;
    background-image: url(${Bg}), url(${BgTwo});
    background-size: contain, 100% 60%;
    background-repeat: no-repeat;
    background-position: top, bottom;
`;

export const Carrossel = styled.div`
    width: 60%;
    margin: 0 auto;

    h2{
        font-size: clamp(2rem, 3vw, 4rem);
        font-family: var(--ff-txt);
        text-align: center;
        margin-bottom: 1rem;
    }

    @media screen and (max-width:768px){
        width: 100%;
    }
`;


export const CarroselBox = styled.div`
    width: 100%;
    
    img{
        width: 100%;
        border-radius: 5px;
        border: 5px solid transparent;
        background: 
        linear-gradient(-50deg , blueviolet, #00C0FD) padding-box,
        linear-gradient(-50deg , blueviolet, #00C0FD) border-box;
    }
`;

export const LinkBox = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 0.5rem 0.1rem;
    display: flex;
    justify-content: space-between;

    a{
        text-decoration: none;
    }

    button{
        padding: 0.2em 1em;
        font-family: var(--ff-txt);
        font-weight: 700;
        color: white;
        border: 5px solid;
        cursor: pointer;
        background-color: black;
        border-image: linear-gradient(-50deg , blue, blueviolet 75%) 1;
        transition: transform 0.2s ease-in-out;
    }

    button:hover{
        transform: scale(0.95)
    }

    @media screen and (max-width:768px){
        width: 100%;
    }
`;

export const NextArrow = styled.button`
    background-color: purple;
    border-radius: 50%;
    z-index: 9999;
`;

export const PrevArrow = styled(NextArrow)`
    background-color: purple;
    border-radius: 50%;
    z-index: 9999;
`;
