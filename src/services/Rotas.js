import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../Components/Header'
import Work from "../Components/Work/index";
import ONU from "../Components/ONU/index";
import Home from "../Components/Home/index";
import Footer from '../Components/Footer'

export default function Rotas(){
    return(
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/work" element={<Work/>} />
                    <Route path="/onu" element={<ONU/>} />
                </Routes>
                <Footer />
            </Router>    
        </>
    );
}