import React from "react";
import { Main } from "./components";

const index = (props) => {
  return <Main {...props}>{props.children}</Main>;
};

export default index;
