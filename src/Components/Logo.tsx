import logo from "../Components/logo.svg"
import React from "react"

// eslint-disable-next-line @typescript-eslint/ban-types
const Logo = (props: Object) => {
  return (
    <img {...props} src={logo}/>
  );
};

export default Logo;
