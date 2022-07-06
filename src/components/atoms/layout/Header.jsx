import { Link } from "react-router-dom";
import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { makeStyles } from "@mui/material";

// const useStyles = makeStyles({
//   twitter: {
//     color: "black",
//     "&:hover": {
//       color: "white"
//     }
//   }
// })

export const Header = () => {

  // const onClickTwitter = () => {
  //   window.location.replace("https://twitter.com/06marum")
  // }

  // const onClickGithub = () => {
  //   window.location.replace("https://github.com/yk2906")
  // }
  // const classes = useStyles();
  

  return (
    <SHeader>
      <SLink to="/">TOP</SLink>
      <SLink to="/about">ABOUT</SLink>
      <SLink to="/contact">CONTACT</SLink>
      <TwitterLink href="https://twitter.com/06marum" target="_blank" rel="noreferrer"><TwitterIcon style={{ "fontSize": 45, "padding": "5px 0 0 0" }}/></TwitterLink>
      <GitHubLink href="https://github.com/yk2906" target="_blank" rel="noreferrer"><GitHubIcon style={{ "fontSize": 45, "padding": "5px 0 0 0" }}/></GitHubLink>
    </SHeader>
  )
}

const SHeader = styled.header`
  background-color: #88b593;
  color: #fff;
  padding: 10px 10px;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0; // 上の空白無くす
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

const TwitterLink = styled.a`
  margin: 0 16px;
  color: black;
  transition: color 0.3s;
  text-decoration: none;
  align-self: center;
  &:hover {
    color: white;
  }
`;

const GitHubLink = styled.a`
  margin: 0 16px;
  color: black;
  transition: color 0.3s;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
