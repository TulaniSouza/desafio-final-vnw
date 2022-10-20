import styled from "styled-components";
import Bg from '../../Assets/background.jpg'

export const Container = styled.section`
    width: 100%;
    min-height: 80vh;
    padding: 2rem 0.5rem;
    background-image: url(${Bg});
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

    img{
        width: 29%;
        border-radius: 150px;
        border: 6px solid transparent;
        background: 
        linear-gradient(50deg , blueviolet, #00C0FD) padding-box,
        linear-gradient(50deg , blueviolet, #00C0FD) border-box;
    }

    p{
        max-width: 45ch;
        font-size: clamp(1rem, 3vw, 3.2rem);
        color: white;
    }
`;