import React from "react";
import Github from "../../Assets/github.png";
import Linkedin from "../../Assets/linkedin.png";
import Whatsapp from "../../Assets/whatsapp.png";
import * as S from './style'

export default function Footer() {
  return (
    <>
      <footer>
        <S.Container>
          <p>Obrigada pela visita que Deus lhe abençoe!</p>
          <S.Nav>
            <a
              href="https://github.com/TulaniSouza"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/tulani-souza-07b0a6103/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5521972975426&text=Seja%20bem%20vindo!%20Em%20que%20posso%20ajudar%3F"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Whatsapp} alt="icone-whatsapp" />
            </a>
          </S.Nav>
        </S.Container>
      </footer>
    </>
  );
}
