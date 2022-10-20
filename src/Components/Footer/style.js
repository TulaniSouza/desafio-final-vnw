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

    @media screen and (max-width:768px){
        padding: 1rem 0.5rem;
        flex-direction: column;
        text-align: center;
        row-gap: 0.5rem;
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
        width: 50px;
        aspect-ratio: 1;
    }
`;