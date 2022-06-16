import logo from "../Components/SMC.svg"
import React from "react"
import { Box } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/ban-types
const Logo = (props: Object) => {
  return (
    <Box 
    display="flex"
            alignItems= "center"
            justifyContent="center" 
            flexDirection="column" 
            ml='15px'>
    <a href="/">
    <img {...props} src={logo} />
    </a>
    </Box>
  );
};

export default Logo;
