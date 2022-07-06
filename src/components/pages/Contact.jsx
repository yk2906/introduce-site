import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

export const Contact = () => {
  // const history = useHistory()

  return (
    <SContainer>
      <h1>CONTACTページ</h1>
      <br />
      <p>
      「川西能勢口、絹延橋、滝山、鴬の森、皷滝、多田、平野、一の鳥居、畦野、山下、笹部、光風台、ときわ台、妙見口」
      </p>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`;
