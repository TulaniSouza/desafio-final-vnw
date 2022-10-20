import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 1rem .5rem;
    min-height: 80vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    gap: clamp(1rem, 2vw, 2.5rem);

    h2{ 
        max-width: 35ch;
        font-size: clamp(2rem, 4vw, 4.5rem);
        font-family: var(--ff-title);
        font-weight: 700;
        text-align: center;
    }

    p{
        max-width: 75ch;
        font-size: clamp(1rem, 1.2vw, 1.7rem);
        font-family: var(--ff-txt);
        font-weight: 400;
        text-align: center;
    }
`;

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: clamp(1rem, 2vw, 2.5rem);
`;
