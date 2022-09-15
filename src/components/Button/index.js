import React from "react";
import { Button } from "./components";

const index = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default index;
