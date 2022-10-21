import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../Components/Header'
import Work from "../Components/Work/index";
import About from "../Components/About/index";
import ONU from "../Components/ONU/index";
import Home from "../Components/Home/index";
import Footer from '../Components/Footer'

export default function Rotas(){
    return(
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/desafio-final-vnw/" element={<Home/>} />
                    <Route path="/desafio-final-vnw/work" element={<Work/>} />
                    <Route path="/desafio-final-vnw/about" element={<About/>} />
                    <Route path="/desafio-final-vnw/onu" element={<ONU/>} />
                </Routes>
                <Footer />
            </Router>    
        </>
    );
}