import React from "react";
import { Select } from "./components";

const index = (props) => {
  return <Select {...props}>{props.children}</Select>;
};

export default index;
