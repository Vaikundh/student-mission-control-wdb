import React from 'react';
import Globey from '../Components/Globe';
import NavBar from '../Components/Navbar/Navbar';
import Buttons from '../Components/Buttons';
import { Button, Text } from '@chakra-ui/react';
const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <Globey />
      <Text variant="H2" fontSize={{ base: '24px', md: '40px', lg: '60px' }}pos="fixed" left="18%" top="13%">
        Student Mission Control
      </Text>
      <Text variant="H4" fontSize={{ base: '24px', md: '40px', lg: '40px' }} pos="fixed" left="18%" top="23%">
        by ISS National Lab and UC Berkeley
      </Text>
      <Button variant="primary" pos="fixed" left="18%" top="35%">
        Explore the Curriculum
      </Button>
    </div>
  );
};

export default Home;
