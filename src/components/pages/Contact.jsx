import React from "react";
import styled from "styled-components";
import { ContactForm } from "../molecules/ContactForm";

// import { useHistory } from "react-router-dom";

export const Contact = () => {
  // const history = useHistory()

  return (
    <SSection>
      <SSubTitle>Contact</SSubTitle>
      <SContainer>
        <br />
        <p>
          お問い合わせ等ございましたら、以下のフォームから入力お願いします。
        </p>
      </SContainer>
      <SContainer>
        <ContactForm />
      </SContainer>
    </SSection>
  )
}

const SSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const SContainer = styled.div`
  text-align: center;
`;

const SSubTitle = styled.h2`
  font-size: 5.0rem;
  margin: 150px 0 40px;
`
