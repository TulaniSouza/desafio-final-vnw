import React from "react";
import Op from "../../Assets/op2.png";
import Github from "../../Assets/github.png";
import Linkedin from "../../Assets/linkedin.png";
import Whatsapp from"../../Assets/whatsapp.png";
import {Link} from "react-router-dom";
import * as S from"./style";

export default function Home(){
    return(
        <>
            <S.Container>
                <Link to="/"><p>Home</p></Link>
                <div>
                    <S.Img src={Op} alt="dev"/>
                    <nav>  
                        <list>
                           <li>Work</li>
                           <li>ONU</li>
                        </list>
                        <box>
                            <a href="https://github.com/TulaniSouza"><img src={Github} alt="github"/></a>
                            <a href="https://www.linkedin.com/in/tulani-souza-07b0a6103/"><img src={Linkedin} alt="linkedin"/></a>
                        </box>
                        <boxOne>
                            <a href="https://api.whatsapp.com/send?phone=5521972975426&text=Seja%20bem%20vindo!%20Em%20que%20posso%20ajudar%3F"><img src={Whatsapp} alt="icone-whatsapp"/></a>
                        </boxOne>
                    </nav>  
                </div>             
            </S.Container>
        </>
    );
}