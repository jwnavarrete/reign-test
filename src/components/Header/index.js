import React from "react";
import { Header, HeaderText } from "./components";

const index = ({ children }) => {
  return (
    <Header>
      <HeaderText>{children}</HeaderText>
    </Header>
  );
};

export default index;
