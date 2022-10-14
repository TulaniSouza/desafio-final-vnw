import React from "react";
import {Link} from "react-router-dom";
import * as S from"./style";

export default function ONU(){
    return(
        <>
            <S.Container>
                <Link to="/ONU"><p>ONU</p></Link>
                <p>teste</p>   
            </S.Container>     
        </>
    );
}