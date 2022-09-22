import grad from "../Assets/Gradients/bluegradient.svg"
import React from "react"
import { Box } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/ban-types
const Bluegradient = (props: Object) => {
  return (
    <Box 
    display="flex"
            alignItems= "center"
            justifyContent="center" 
            flexDirection="column" 
            ml='15px'
            zIndex={-1}>
    <a href="/">
    <img {...props} src={grad} />
    </a>
    </Box>
  );
};

export default Bluegradient;