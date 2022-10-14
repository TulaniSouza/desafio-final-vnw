import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Work from "../Components/Work/index";
import ONU from "../Components/ONU/index";
import Home from "../Components/Home/index";

export default function Rotas(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/onu" element={<ONU/>}/>
                </Routes>
            </Router>    
        </>
    );
}