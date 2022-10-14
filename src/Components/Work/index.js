import React from "react";
import Github from "../../Assets/github.png";
import Linkedin from "../../Assets/linkedin.png";
import {Link} from "react-router-dom";
import * as S from"./style";

export default function Work(){
    return(
        <>
            <S.Container>
                <Link to="/Work"><p>Work</p></Link>
                <main>
                 <a href="https://github.com/TulaniSouza"><img src={Github} alt="github"/></a>
                 <a href="https://www.linkedin.com/in/tulani-souza-07b0a6103/"><img src={Linkedin} alt="linkedin"/></a>
                </main>
            </S.Container>
        </>
    );
}