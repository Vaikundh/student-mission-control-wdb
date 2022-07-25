import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar/Navbar';
import Buttons from '../Components/Buttons';
import { Button, Text, Box, Spacer, Center, Flex} from '@chakra-ui/react';
import UserProfile from '../Components/UserProfile';
import ProfileGrid from '../Components/ProfileGrid';


const Resources = () => {
  return (
    <div className="App">
      <Flex bg="smcblack" direction="column" height="100%" justifyContent= "space-between">
        <Box height="77px"/>
        <Box alignItems="left">
            <Text variant="H1" fontSize="60px">
                Resources
            </Text>
        </Box>

        <Box height="100px"/>

        <Text variant="H3" fontSize="32px" lineHeight="41px" letterSpacing="0.37px" >
                AP CS Fundamentals
        </Text>
        <Box height="41px"/>
        <Text variant="Body" color="white" fontSize="16px" lineHeight="41px" letterSpacing="0.37px" as="a" href="http://www.google.com/" >
                Reference Sheet
        </Text>
        <Text variant="Body" color="white" fontSize="16px" lineHeight="41px" letterSpacing="0.37px" as="a" href="http://www.google.com/"  >
                CSP Cheatsheet
        </Text>

        <Box height="60px"/>

        <Text variant="H3" fontSize="32px" lineHeight="41px" letterSpacing="0.37px" >
                Snap! Resources
        </Text>
        <Box height="41px"/>
        <Text variant="Body" color="white" fontSize="16px" lineHeight="41px" letterSpacing="0.37px" as="a" href="http://www.google.com/" >
                Reference Manual
        </Text>
        <Text variant="Body" color="white" fontSize="16px" lineHeight="41px" letterSpacing="0.37px" as="a" href="http://www.google.com/"  >
                Tips
        </Text>
        <Text variant="Body" color="white" fontSize="16px" lineHeight="41px" letterSpacing="0.37px" as="a" href="http://www.google.com/"  >
                Example Projects
        </Text>

        <Box height="420px"/>


        
      </Flex>
    </div>
  );
};

export default Resources;