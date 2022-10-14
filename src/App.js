import React from "react";
import Rotas from "./services/Rotas";
import Home from "./Components/Home";
import ONU from "./Components/ONU";
import Work from "./Components/Work";

export default function App(){
  return(
    <>
      <Rotas/>
      <Home/>
      <ONU/>
      <Work/>
    </>
  );
}