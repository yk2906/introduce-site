import React from "react";

import { useHistory } from "react-router-dom";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
  // const history = useHistory()
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  )
}