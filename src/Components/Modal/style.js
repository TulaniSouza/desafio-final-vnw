import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    border: none;
    cursor: pointer;

    :focus{
        outline: 2px solid blueviolet;
    }

    img{
        width: 200px;
        aspect-ratio: 1;
        border-radius: 10px;
    }
`;

export const Overlay = styled.div`
    width: 5rem;
    aspect-ratio: 1;
    border-radius: 50px;
    position: fixed;
    top: 50%;
    z-index: 1000;
    transform: ${({open}) => (open ? 'scale(1000)' : 'scale(0)')};
    transition: transform 0.4s ease-in-out;
    background-image: linear-gradient( rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5) );
`;

export const ModalBox = styled.dialog`
    width: 45%;
    min-height: 30vh;
    padding: 1rem 0.5rem;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 1.5rem;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? 'scale(1)' : 'scale(0)')};
    transition: transform 0.3s ease-in-out;
    top: 2%;
    left: 25%;
    z-index: 2000;

    img{
        width: 100%;
        max-height: 400px;
        padding: 0.2rem;
        border-radius: 25px;
        object-fit: cover;
        outline: 1px solid black;
    }

    h2{
        font-size: clamp(2rem, 3vw, 3.5rem);
        font-family: var(--ff-title);
        font-weight: 700;
        color: #000;
    }

    p{
        max-width: 55ch;
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-txt);
        font-weight: 400;
        color: #000;
        text-align: center;
    }

    button{
        padding: 0.5em 1em;
        border-radius: 25px;
        font-size: clamp(1rem, 1.2vw, 1.4rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-700);
        background-color: #000;
        color: #FFF;
        cursor: pointer;
        border: none;
    }

    button:hover{
        background-color: #fff;
        color: #000;
        outline: 2px solid black;
    }

    @media screen and (max-width:48em){
        width: 95%;
        left: 2%;
    }
`;