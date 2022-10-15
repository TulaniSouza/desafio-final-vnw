import React from "react";
import Op from "../../Assets/op2.jpg";

import { Link } from "react-router-dom";
import * as S from "./style";

export default function Home() {
  return (
    <>
      <main>
        <S.Container>
            <S.About>
              <img src={Op} alt="dev" />
              <h2>Hello World, my name is Tulani!</h2>
            </S.About>
        </S.Container>
      </main>
    </>
  );
}
