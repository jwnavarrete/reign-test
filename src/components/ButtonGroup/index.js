import React from "react";
import { BtnGroup } from "./components";

const index = (props) => {
  return <BtnGroup {...props}>{props.children}</BtnGroup>;
};

export default index;
