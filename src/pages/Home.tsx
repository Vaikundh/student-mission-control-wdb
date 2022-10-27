import React, { useState } from 'react';
import Globey from '../Components/Globe';
import Buttons from '../Components/Buttons';

import { Box, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const nav = () => {
    const s = '/units'
    navigate(s);
}
  return (
    <div className="App">
      <Box bg='smcdarkgrey'>
        <Globey />
        
        <Text variant="H2" fontSize={{ base: '24px', md: '40px', lg: '53px' }}pos="absolute" left="3%" top="13%">
          Student Mission Control
        </Text>
        <Text variant="H4" fontSize={{ base: '24px', md: '40px', lg: '35px' }} pos="absolute" left="3%" top="20%">
          by ISS National Lab and UC Berkeley
        </Text>
        <Button variant="primary" pos="absolute" left="3%" top="27%" onClick={() => nav()} >
          Explore the Curriculum
        </Button>
      </Box>
    </div>
  );
};

export default Home;
