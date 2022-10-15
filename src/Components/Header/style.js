import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;

    @media screen and (max-width:48em){ 
        padding: 2rem 0.5rem;
    }
`;

export const Img = styled.img`
    width: 50px;
    aspect-ratio: 1;

    @media screen and (max-width:48em){ 
        display: none;
    }
`;

export const Nav = styled.nav`

    ul{
        display: flex;
        column-gap: 2rem;
    }

    a{
        text-decoration: none;
    }

    li{
        padding: 0.5rem 2rem;
        font-size: clamp(1rem, 1.5vw, 2rem);
        font-family: var(--ff-txt);
        font-weight: 500;
        text-transform: uppercase;
        color: black;
    }

    a:hover li,
    a:focus li{
        outline: 8px solid pink;
    }

    @media screen and (max-width:48em){
        display: none;
    }
`;

export const Btn = styled.button`
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: fixed;
    z-index: 8000;
    right: 0.5rem;

    img{
        width: 50px;
        aspect-ratio: 1;
    }
    
    span{
        display: none;
    }

    @media screen and (max-width:48em){
        display: block;
    }
`;

export const MenuBG = styled.div`
    width: 5rem;
    aspect-ratio: 1;
    border-radius: 50px;
    position: fixed;
    top: 1.5rem;
    right: 1rem;
    z-index: 1000;
    transform: ${({open}) => (open ? 'scale(1000)' : 'scale(0)')};
    transition: transform 0.3s ease-in-out;
    background-image: linear-gradient( rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5) );
`;

export const Mobile = styled.nav`
    width: 55%;
    min-height: 50vh;
    padding: 5rem 0.5rem 0;
    display: none;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    z-index: 2000;

    ul{
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    li{
        padding: 0.5rem 2rem;
        font-size: clamp(1rem, 1.5vw, 2rem);
        font-family: var(--ff-txt);
        font-weight: 500;
        text-transform: uppercase;
        color: black;
        transition: none;
        text-align: center;
    }

    a{
        width: 100%;
        border-radius: 5px;
        text-decoration: none;
    }

    a:hover li,
    a:focus li{
        outline: 8px solid pink;
        font-weight: 700;
    }

    @media screen and (max-width:48em){
        display: block;
    }
`;