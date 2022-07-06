import React from "react";

import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const Top = () => {
  // const history = useHistory()

  return (
    <SContainer>
      <STitle>Welcome to My Portfolio Site!!!</STitle>
      <br />
      <p>「巻き舌宇宙で有名な紫ミミズの剥製は
ハラキリ岩の上で音叉が生まばたきするといいらしいぞ。要ハサミだ。61！」
      </p>
      <br />
      <br />
      <SSubTitle>SKILLS</SSubTitle>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`;

const STitle = styled.h1`
  font-size: 6.5rem;
  margin: 150px 0 40px;
`;

const SSubTitle = styled.h2`
  font-size: 5.0rem;
  margin: 150px 0 40px;
`