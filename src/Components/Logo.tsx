import logo from "../Components/SMC.svg"
import React from "react"
import { Box } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/ban-types
const Logo = (props: Object) => {
  return (
    // <Box>
      <img {...props} src={logo}/>
    // </Box>
  );
};

export default Logo;
