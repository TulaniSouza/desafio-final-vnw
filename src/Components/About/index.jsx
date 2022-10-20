import React from 'react';
import Op from "../../Assets/op3.jpeg";
import * as S from './style'

export default function About() {
    return (
        <>
         <main>
             <S.Container>
                <img src={Op} alt="Euzinha" />
                    <p>
                        Amante de boa música, determinada e 
                        comprometida com as obrigações 
                        assumidas, realizei diversos 
                        cursos para completar meus 
                        conhecimentos em administração, 
                        atualmente, Formada em Outubro/2022 
                        na Instituição Vai Na Web como Front-End e 
                        graduanda em Gestão de T.I., buscando 
                        crescimento em amplos sentidos.
                    </p>
             </S.Container>
         </main>
        </>
    );
}