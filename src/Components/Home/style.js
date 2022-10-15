import styled from "styled-components";
import Tela from "../../Assets/tela.png";

export const Container= styled.section`
    width:100%;
    min-height: 60vw;
    background-image: url(${Tela});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

export const Img= styled.div`
    display:flex;
    height: 40%;
    border:solid pink;
`;

