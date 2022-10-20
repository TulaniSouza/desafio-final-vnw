import React from "react";
import Card from '../Modal/index'
import * as S from"./style";

export default function ONU(){
    return(
        <>
        <main>
            <S.Container>
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
                    <Card /> 
                </S.Wrapper>      
            </S.Container>
        </main>     
        </>
    );
}