import React from "react";
import styled from "styled-components";

// import { useHistory } from "react-router-dom";

export const About = () => {
  // const history = useHistory()

  return (
    <SContainer>
      <h1>ABOUTページ</h1>
      <br />
      <p>
      「テキ　ヨウサイ、OUTER HEAVEN　ニ　センニュウ、
        サイシュウヘイキ
        METAL GEAR　ヲ
        ハカイ　セヨ！」
      </p>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`;
