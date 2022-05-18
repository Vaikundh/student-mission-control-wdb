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
    <>
      <NavBar />
      <Heading mt='5%' ml='15%'>Unit {props.unit}</Heading>
      <Flex direction="row" justifyContent='center' h='66vh'>
          { labsArr.map((val) => {
          return (
              <>
              <Box mt='2%' bg='black' w='20%' h='380px' justifyContent='center' borderRadius='lg' mr="5%">
                  <Flex justifyContent='center'>
                      <Button mt='280px' fontSize='22' w='267px' h='78px' onClick={() => nav(val)} >
                      Lab { val }
                      </Button>
                  </Flex>
              </Box>
              </>
          )
          })
          }
      </Flex>
      <Footer />
    </>
  );
};

export default UnitPage;
