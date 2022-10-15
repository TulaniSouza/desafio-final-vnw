import React from "react";
import Saúde from '../../Assets/saude.png'
import Water from '../../Assets/água.png'
import Transporte from '../../Assets/transp.png'
import Energia from '../../Assets/energia.png'
import Segurança from '../../Assets/segu.png'
import * as S from"./style";

export default function ONU(){
    return(
        <>
        <main>
            <section>
                <h2>Os Objetivos de Desenvolvimento Sustentável em Bangu</h2>
                <p>São um apelo Estadual para 
                    diminuir a pobreza, proteger
                     o meio ambiente e o clima e
                      garantir que as pessoas, 
                      em todos os bairros 
                      (após expandir), 
                      possam usufruir de plena 
                      qualidade de vida.</p>
                <S.Wrapper>
                    <img src={Saúde} alt="" />
                    <img src={Energia} alt="" />
                    <img src={Transporte} alt="" />
                    <img src={Segurança} alt="" />
                    <img src={Water} alt="" />
                </S.Wrapper>      
            </section>
        </main>     
        </>
    );
}