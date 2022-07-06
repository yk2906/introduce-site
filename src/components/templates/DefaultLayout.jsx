import React from "react";
import { Footer } from "../atoms/layout/Footer";

// import { useHistory } from "react-router-dom";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
  // const history = useHistory()
  const { children } = props;

  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}