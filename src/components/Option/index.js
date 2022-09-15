import React from "react";
import { Option } from "./components";

const index = (props) => {
  return (
    <Option {...props}>
      {props.children}
    </Option>
  );
};

export default index;
