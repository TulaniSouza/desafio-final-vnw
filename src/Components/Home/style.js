import styled, {createGlobalStyle} from "styled-components";
import Tela from "../../Assets/tela.png";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style: none;
}

`;
export const Container= styled.section`
background-image: url(../../Assets/tela.png);
background-size:cover;
background-position:center;
width:100%;
height:fit-content;
object-fit:cover;
`;

export const Img= styled.div`
display:flex;
height: 40%;
border:solid pink;
`;

