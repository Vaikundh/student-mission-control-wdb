import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Navbar/Navbar';
import { Button, Heading, Box, VStack, Flex, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const AllUnitsPage = () => {
    const navigate = useNavigate();
    const [numUnits, setNumUnits] = useState(0);
    const [unitsArr, setUnitsArr] = useState([] as number[]);
  
    useEffect(() => {
      getNumUnits();
    }, []);
  
    const getNumUnits = () => {
      const requireComponent = require.context('../curriculum', true, /.mdx$/);
      let count = 0;
      let a: number[] = new Array(numUnits);
      a = [];
      requireComponent.keys().forEach((fileName: string) => {
        if (fileName.slice(2, 6) === `unit` && !a.includes(parseInt(fileName.slice(6, 7)))) {
          count++;
          a.push(parseInt(fileName.slice(6, 7)))
          setNumUnits(count);
        }
      });
      setUnitsArr(a);
    };

    const nav = (unit : number) => {
        const s = '/unit' + unit
        navigate(s);
    }
  
    return (
      <Box 
        style={{
          backgroundColor: '#121212',
        }}>
        <NavBar />
        <Heading mt='5%' ml='15%' color='#FFFFFF'>Student Curriculum</Heading>
        <Flex direction="row" justifyContent='center' h='66vh'>
            { unitsArr.map((val) => {
            return (
                <>
                <Box mt='2%' bg='black' w='20%' h='380px' borderRadius='lg' mr="5%">
                  <VStack spacing='80px'>
                    <Image mt='20%' src={"images/Unit" + val + ".svg"} />
                    <Button variant="solid" mt='280px' fontSize='22' w='90%' h='78px' backgroundColor='#343434' color='#FFFFFF' onClick={() => nav(val)} >
                      Unit { val }
                     </Button>
                  </VStack>
                </Box>
                </>
            )
            })
            }
        </Flex>
        <Footer />
      </Box>
    );
  };

export default AllUnitsPage;