import React from "react";
import Op from "../../Assets/op2.png";

import { Link } from "react-router-dom";
import * as S from "./style";

export default function Home() {
  return (
    <>
      <S.Container>
          <img src={Op} alt="dev" />
      </S.Container>
    </>
  );
}
