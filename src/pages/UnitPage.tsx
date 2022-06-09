import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Navbar/Navbar';
import { Button, Heading, Flex, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

interface UnitPageProps {
  unit: number;
}

const UnitPage = (props: UnitPageProps) => {
  const navigate = useNavigate();
  const [numLabs, setNumLabs] = useState(0);
  const [labsArr, setLabsArr] = useState([] as number[]);

  useEffect(() => {
    getNumLabs();
  }, []);

  const getNumLabs = () => {
    const requireComponent = require.context('../curriculum', true, /.mdx$/);
    let count = 0;
    let a: number[] = new Array(numLabs);
    a = [];
    requireComponent.keys().forEach((fileName: string) => {
      if (fileName.slice(2, 7) === `unit${props.unit}` && !a.includes(parseInt(fileName.slice(11, 12)))) {
        count++;
        a.push(parseInt(fileName.slice(11, 12)))
        setNumLabs(count);
      }
    });
    setLabsArr(a);
  };

  const nav = (lab : number) => {
    const s = '/unit' + props.unit + '/lab' + lab;
    navigate(s);
}

  return (
    <Box 
    style={{
      backgroundColor: '#121212',
    }}>
      <NavBar />
      <Heading mt='5%' ml='15%' color='#FFFFFF'>Unit {props.unit}</Heading>
      <Flex direction="row" ml='15%' h='66vh'>
          { labsArr.map((val) => {
          return (
              <>
                  <Flex justifyContent='left'>
                      <Button mr="5%" mt='10%' variant="primary" fontSize='22' w='250px' h='78px' backgroundColor='#343434' color='#FFFFFF' onClick={() => nav(val)} >
                        Lab { val }
                      </Button>
                  </Flex>
              </>
          )
          })
          }
      </Flex>
      <Footer />
    </Box>
  );
};
// as='button' mt='2%' bg='#C4C4C433;' w='20%' h='380px' justifyContent='center' borderRadius='lg' mr="5%"

export default UnitPage;
