import React from "react";
import { Container } from "./components";

const index = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default index;
