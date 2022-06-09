import React from 'react';
import NavBar from '../Components/Navbar/Navbar';
import { Box, Button, Text } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box>
            <NavBar />
            <Box bg="smcblack" height='100%'>
                <Text variant="H1" pos="fixed" left="148px" top="130px" >
                    Get in Contact!
                </Text>
                <Text variant="H2" pos="fixed" left="148px" top="262px">
                    Send a Message
                </Text>
            </Box>
        </Box>
    )
}

export default Contact;