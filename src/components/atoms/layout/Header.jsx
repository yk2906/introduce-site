import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export const Header = () => {

  // const onClickTwitter = () => {
  //   window.location.replace("https://twitter.com/06marum")
  // }

  // const onClickGithub = () => {
  //   window.location.replace("https://github.com/yk2906")
  // }

  return (
    <SHeader>
      <SLink to="/">TOP</SLink>
      <SLink to="/about">ABOUT</SLink>
      <SLink to="/contact">CONTACT</SLink>
      {/* <SLink onClickTwitter={onClickTwitter}><FaTwitter /></SLink> */}
      <SLink to={{ pathname: "https://twitter.com/06marum" }} target="_blank"><FaGithub /></SLink>
      <SLink to={{ pathname: "https://github.com/yk2906" }} target="_blank"><FaTwitter /></SLink>
      {/* <a target="_blank" href="https://twitter.com/06marum"><FaTwitter /></a>
      <a target="_blank" href="https://github.com/yk2906"><FaGithub /></a> */}
    </SHeader>
  )
}

const SHeader = styled.header`
  background-color: #88b593;
  color: #fff;
  padding: 20px 10px;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0; // 上の空白無くす
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  opacity: 0.8;
`;

const SLink = styled(Link)`
  margin: 0 16px;
  font-size: 40px;
  text-decoration: none; // 下の線消す 
  letter-spacing: 1px;
  color: black;
  transition: color 0.3s;
  &:hover {
    color: white;
  }
`;