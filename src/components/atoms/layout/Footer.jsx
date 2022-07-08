import styled from "styled-components";

// const useStyles = makeStyles({
//   twitter: {
//     color: "black",
//     "&:hover": {
//       color: "white"
//     }
//   }
// })

export const Footer = () => {

  // const onClickTwitter = () => {
  //   window.location.replace("https://twitter.com/06marum")
  // }

  // const onClickGithub = () => {
  //   window.location.replace("https://github.com/yk2906")
  // }
  // const classes = useStyles();
  

  return (
    <SFooter>
      &copy; 2022 Yuto Kohama.
    </SFooter>
  )
}

const SFooter = styled.footer`
  background-color: #88b593;
  color: black;
  padding: 30px 10px;
  z-index: 1;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  text-align: center;
  position: absolute;
`;

