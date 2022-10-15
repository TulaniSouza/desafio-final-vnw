import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    :root{
        --ff-title: 'Ubuntu', sans-serif;
        --ff-txt: 'Poppins', sans-serif;
    }
`;