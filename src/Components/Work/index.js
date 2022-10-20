import React from "react";
import Port from '../../Assets/portflow.png'
import Recipes from '../../Assets/recipes.png'
import * as S from"./style";

export default function Work(){
    return(
        <>
        <main>
            <S.Container>
                 <S.Carrossel>
                    <a href="https://cosme7.github.io/Portflow/" target='_blank' rel='noreferrer'>
                        <img src={Port} alt="Portflow" />
                    </a>
                    <a href="https://majestic-lolly-055776.netlify.app/" target='_blank' rel='noreferrer'>
                        <img src={Recipes} alt="Recipes" />
                    </a>
                 </S.Carrossel>
            </S.Container>
        </main>
        </>
    );
}