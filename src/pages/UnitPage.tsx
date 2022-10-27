import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Gradient from '../Assets/Gradients/unitgradient.svg'

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
      if (
        fileName.slice(2, 7) === `unit${props.unit}` &&
        !a.includes(parseInt(fileName.slice(11, 12)))
      ) {
        count++;
        a.push(parseInt(fileName.slice(11, 12)));
        setNumLabs(count);
      }
    });
    setLabsArr(a);
  };

  const nav = (lab: number) => {
    const s = '/unit' + props.unit + '/lab' + lab;
    navigate(s);
  };

  //TODO: change button to arrow ..
  const goToUnits = () => {
    navigate('/units');
  };

  return (
    <Box minHeight="80vh" bgImage={Gradient}>
      <Box pt="100px" pl="140px">
        <ArrowBackIcon role="img" cursor="pointer" focusable={true} onClick={goToUnits} color="smcwhite" boxSize={39}
          _hover={{
            hadow: "0 0 15px #FFFFFF"
          }}
          _active={{

          }}
          ></ArrowBackIcon>
      </Box>
      <Text variant='H2' pt="20px" pl="230px" color="#FFFFFF">
        Unit {props.unit}
      </Text>
      <Flex direction="row" pl="230px">
        {labsArr.map((val) => {
          return (
            <>
              <Flex justifyContent="left">
                <Button
                  mr="5%"
                  mt="10%"
                  variant="unit"
                  fontSize="22"
                  w={{base:'100px', xl:'250px'}}
                  h="78px"
                  // color="#FFFFFF"
                  onClick={() => nav(val)}>
                    <Text variant='BodyLarge'>
                    Lab {val}
                    </Text>
                </Button>
              </Flex>
            </>
          );
        })}
      </Flex>
    </Box>
  );
};
// as='button' mt='2%' bg='#C4C4C433;' w='20%' h='380px' justifyContent='center' borderRadius='lg' mr="5%"

export default UnitPage;
