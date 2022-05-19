import React from 'react';
import Globey from '../Components/Globe';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar/Navbar';
import Buttons from '../Components/Buttons';
import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const nav = () => {
    const s = '/units'
    navigate(s);
}
  return (
    <div className="App">
      <NavBar />
      <Globey />
      <Text variant="H2" fontSize={{ base: '24px', md: '40px', lg: '60px' }}pos="absolute" left="18%" top="13%">
        Student Mission Control
      </Text>
      <Text variant="H4" fontSize={{ base: '24px', md: '40px', lg: '40px' }} pos="absolute" left="18%" top="23%">
        by ISS National Lab and UC Berkeley
      </Text>
      <Button variant="primary" pos="absolute" left="18%" top="35%" onClick={() => nav()} >
        Explore the Curriculum
      </Button>
      <Footer />
    </div>
  );
};

export default Home;
