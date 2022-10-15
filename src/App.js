import React from "react";
import {GlobalStyle} from './Global/GlobalStyle';
import Rotas from "./services/Rotas";

export default function App(){
  return(
    <>
      <GlobalStyle />
      <Rotas/>
    </>
  );
}