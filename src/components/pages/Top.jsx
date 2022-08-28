import React from "react";

// import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const Top = () => {
  // const history = useHistory()

  return (
    <SSection>
      <STitle>Welcome to My Portfolio Site!!!</STitle>
      {/* <br />
      <br /> */}
      {/* <SSubTitle>Profile</SSubTitle>
      <SContainer>
        <p>こんにちは。小浜佑斗と申します。現在25歳の都内SES企業に所属しております。</p>
        <p>出身地は大阪府です。2020年3月に近畿大学を卒業しました。</p>
        <p>主にインフラ分野メインで業務経験を積んできましたが、今後はこちらの知識を軸に幅広い分野の知識を身に着けたいと考えております。</p>
      </SContainer>
      <SSubTitle>Skill</SSubTitle>
      <SContainer>
        <p>日商簿記検定2級</p>
        <p>Microsoft Office Specialist Excel 2016</p>
        <p>TOEIC IPテスト 615点</p>
        <p>シスコ技術者認定　CCNA（Cisco Certified Network Associate）</p>
        <p>Linux技術者認定試験(LPIC) - レベル1</p>
        <p>AWS Certified Cloud Practitioner</p>
        <p>AWS Certified Solutions Architect – Associate</p>
      </SContainer>
      <SSubTitle>Hobby</SSubTitle>
      <SContainer>
        <p>散歩</p>
        <p>読書（ジャンル問わないが、ビジネス本やハウツー本を読むことが多い）</p>
      </SContainer> */}
    </SSection>
  )
}

const SSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const SContainer = styled.div`
//   padding: 20px;
//   background-color: #3d3c3c;
//   text-align: left;
//   width: 700px;
//   align-self: center;
//   box-shadow: 5px 10px 20px rgba(0, 0, 0, 0, 25);
//   border-radius: 5px;
//   box-sizing: border-box;
//   margin-bottom: 150px;
// `;

// 以下変更前STitle
// const STitle = styled.h1`
//   font-size: 6.5rem;
//   margin: 150px 0 40px;
// `;

// 以下変更後STitle
const STitle = styled.h1`
  font-size: 6.5rem;
  margin: 25% 40px;
`;

// const SSubTitle = styled.h2`
//   font-size: 5.0rem;
//   margin: 150px 0 40px;
// `;