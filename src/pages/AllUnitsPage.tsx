import React, { useEffect, useState } from 'react';
import { Button, Text, Box, VStack, Flex, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Gradient from '../Assets/Gradients/gradientbackground.svg'

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
        }} minHeight="80vh" bgImage={Gradient}>
        <Text variant='H2' pt='5%' pl='15%' color='#FFFFFF'>Student Curriculum</Text>
        <Flex direction="row" justifyContent='center'>
            { unitsArr.map((val) => {
            return (
                <>
                <Box mt='2%' bg='smcblack' w='20%' h='420px' borderRadius='lg' mr="5%" border='solid' borderColor="smclightblue" boxShadow="xl"
                _hover={{ 
                  bg: 'smcdarkblue',
              }}
              _active={{
                  bg: 'smcdarkgrey',
                  transform: 'scale(0.98)',
                  borderBottomColor: 'smclightblue',

              }}>
                  <VStack spacing='80px'>
                    <Image mt='20%' src={"images/Unit" + val + ".svg"} />
                    <Button variant="primary" mt='280px' fontSize='22' w='90%' h='78px' backgroundColor='smcdarkgrey' color='#FFFFFF' onClick={() => nav(val)} >
                        <Text variant='BodyLarge'>
                          Unit { val }
                        </Text>
                    </Button>
                  </VStack>
                </Box>
                </>
            )
            })
            }
        </Flex>
      </Box>
    );
  };

export default AllUnitsPage;