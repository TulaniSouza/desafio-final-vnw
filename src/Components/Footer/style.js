import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    padding-inline: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 1.2rem;
        font-weight: 700;
        color: black;
    }
`;

export const Nav = styled.nav`
    padding: 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    gap: clamp(1rem, 1.5vw, 2.5rem);

    img{
        width: 60px;
        aspect-ratio: 1;
    }
`;