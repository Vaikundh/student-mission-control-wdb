import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar/Navbar';
import Buttons from '../Components/Buttons';
import { Button, Text, Box, Spacer, Center, Flex} from '@chakra-ui/react';
import UserProfile from '../Components/UserProfile';
import ProfileGrid from '../Components/ProfileGrid';


const AboutProject = () => {
  return (
    <div className="App">
      <NavBar />
      <Flex alignItems="center" bg="smcblack" direction="column" height="100%" justifyContent= "space-between">
        <Box height="77px"/>
        <Box alignItems="left">
            <Text variant="H1" fontSize="60px">
                The Project
            </Text>
        </Box>

        <Box height="120px"/>
        <Text variant="H3" fontSize="32px" lineHeight="41px" letterSpacing="0.37px">
                Mission and Goals
        </Text>
        <Box height="41px"/>
        <Box display="flex" width="800px" border="solid" borderColor="white" borderRadius="30px" flexDirection="column" alignContent="space-between">
        <Text m={[203, 3]} variant="Body" fontSize="16px" lineHeight="41px" letterSpacing="0.37px" color="white" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet purus at viverra in imperdiet et tincidunt eget cursus. Neque, porta quam massa in tellus sagittis risus varius. Sit purus, lacus, aenean eu sed tortor, fermentum velit leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet purus at viverra in imperdiet et tincidunt eget cursus. Neque, porta quam massa in tellus sagittis risus varius. Sit purus, lacus, aenean eu sed tortor, fermentum velit leo.
        <Box height="41px"/>
        </Text>
        <Text variant="Body" fontSize="16px" lineHeight="41px" letterSpacing="0.37px" color="white" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet purus at viverra in imperdiet et tincidunt eget cursus. Neque, porta quam massa in tellus sagittis risus varius. Sit purus, lacus, aenean eu sed tortor, fermentum velit leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet purus at viverra in imperdiet et tincidunt eget cursus. 
        </Text>
        </Box>

        <Box height="128px"/>
        <Text variant="H3" fontSize="32px" lineHeight="41px" letterSpacing="0.37px">
                Support and Sponsorship
        </Text>
        <Box height="41px"/>
        <Box display="flex" width="800px" border="solid" borderColor="white" borderRadius="30px">
        <Text m={[203, 3]} variant="Body" fontSize="16px" lineHeight="41px" letterSpacing="0.37px" color="white" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet purus at viverra in imperdiet et tincidunt eget cursus. Neque, porta quam massa in tellus sagittis risus varius. Sit purus, lacus, aenean eu sed tortor, fermentum velit leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet purus at viverra in imperdiet et tincidunt eget cursus. Neque, porta quam massa in tellus sagittis risus varius. Sit purus, lacus, aenean eu sed tortor, fermentum velit leo.
        </Text>
        </Box>

        <Box height="372px"/>
      </Flex>
      <Footer />
    </div>
  );
};

export default AboutProject;