import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Gradient from '../Assets/Gradients/unitgradient.svg'
import { useGeometryData, useEnergyData } from '../utils/hooks';

import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine} from 'react-sparklines';

interface UnitPageProps {
  unit: number;
}

const UnitPage = (props: UnitPageProps) => {
  const navigate = useNavigate();
  const [numLabs, setNumLabs] = useState(0);
  const [labsArr, setLabsArr] = useState([] as number[]);

  const [currentData, setCurrentData] = useState([300] as number[])



  // localStorage.setItem("currentData", JSON.stringify([0] as number[]))

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
        console.log(count);
      }
    });
    setLabsArr(a);
  };

  const nav = (lab: number) => {
    const s = '/expedition' + props.unit + '/mission' + lab;
    navigate(s);
  };

  //TODO: change button to arrow ..
  const goToUnits = () => {
    navigate('/expeditions');
  };

  const getCurrentAll = () => {
    // localStorage.currentData = (JSON.stringify(JSON.parse(localStorage.currentData).push(
    //   [useEnergyData().S4000002 
    //   + useEnergyData().S6000005 
    //   + useEnergyData().P4000002 
    //   + useEnergyData().P6000005 
    //   + useEnergyData().S4000005 
    //   + useEnergyData().S6000002 
    //   + useEnergyData().P4000005 
    //   + useEnergyData().P6000002])));

    const a = currentData;

    // if (a[a.length - 1] != useEnergyData().S4000002 
    // + useEnergyData().S6000005 
    // + useEnergyData().P4000002 
    // + useEnergyData().P6000005 
    // + useEnergyData().S4000005 
    // + useEnergyData().S6000002 
    // + useEnergyData().P4000005 
    // + useEnergyData().P6000002) {
    a.push(useEnergyData().S4000002 
      + useEnergyData().S6000005 
      + useEnergyData().P4000002 
      + useEnergyData().P6000005 
      + useEnergyData().S4000005 
      + useEnergyData().S6000002 
      + useEnergyData().P4000005 
      + useEnergyData().P6000002);
    // }
    
    useEffect(()=> {
        // if (currentData.length !== a.length) {
        
        const a = currentData.filter((value, index, array) => array.indexOf(value) === index).map(function(x) { return x * -1; });
        // console.log(a);
        setCurrentData(a);
      // }
    })
    



    // console.log(JSON.parse(localStorage.currentData));
    return useEnergyData().S4000002 
    + useEnergyData().S6000005 
    + useEnergyData().P4000002 
    + useEnergyData().P6000005 
    + useEnergyData().S4000005 
    + useEnergyData().S6000002 
    + useEnergyData().P4000005 
    + useEnergyData().P6000002
  }

  // const getCurrentData = () => {}

  if (props.unit === 1){
    {/* GEOMETRY */}
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
          Expedition {props.unit}
        </Text>
  
        <Text color="#FFFFFF" pt="20px" pl="230px">
          Yaw: {(Math.atan2(2.0*(useGeometryData().Rx*useGeometryData().Ry + useGeometryData().Rw*useGeometryData().Rz), useGeometryData().Rw*useGeometryData().Rw + useGeometryData().Rx*useGeometryData().Rx - useGeometryData().Ry*useGeometryData().Ry - useGeometryData().Rz*useGeometryData().Rz))*(180/Math.PI)}°
        </Text>
        
        <Text color="#FFFFFF" pt="20px" pl="230px">
          Pitch: {(Math.asin(-2.0*(useGeometryData().Rx*useGeometryData().Rz - useGeometryData().Rw*useGeometryData().Ry)))*(180/Math.PI)}°
        </Text>
  
        <Text color="#FFFFFF" pt="20px" pl="230px">
          Roll: {(Math.atan2(2.0*(useGeometryData().Ry*useGeometryData().Rz + useGeometryData().Rw*useGeometryData().Rx), useGeometryData().Rw*useGeometryData().Rw - useGeometryData().Rx*useGeometryData().Rx - useGeometryData().Ry*useGeometryData().Ry + useGeometryData().Rz*useGeometryData().Rz))*(180/Math.PI)}°
        </Text>
  
  
        {/* <Sparklines data={useRollData()} limit={20 }>
          <SparklinesLine style={{ fill: "none" }} />
          <SparklinesSpots />
        </Sparklines> */}
        {/* {useRollData()} */}
  
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
                      Mission {val}
                      </Text>
                  </Button>
                </Flex>
              </>
            );
          })}
        </Flex>
      </Box>
    );
  }
  else if (props.unit === 2){
    {/* Energy */}
    return (
      <Box minHeight="80vh" bgImage={Gradient}>
        <Flex alignItems='center' height='30%' width='50%' ml='40%' position='absolute'>
          <Sparklines data={currentData.filter((value, index, array) => value > 300)} limit={50}>
            <SparklinesLine style={{ fill: "none" }} color="#91D8F6"/>
            <SparklinesSpots />
            <SparklinesReferenceLine type="mean"/>
          </Sparklines>
        </Flex>

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
          Expedition {props.unit}
        </Text>
        
        
        <Text color="#FFFFFF" pt="20px" pl="230px">

          Current-All: {getCurrentAll()*-1} Amps
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
                      Mission {val}
                      </Text>
                  </Button>
                </Flex>
              </>
            );
          })}
        </Flex>
      </Box>
    );
  }
  else {
    {/* Life Support */}
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
          Expedition {props.unit}
        </Text>
        
        
        <Text color="#FFFFFF" pt="20px" pl="230px">
          Current-All: {useEnergyData().S4000002 + useEnergyData().S6000005 + useEnergyData().P4000002 + useEnergyData().P6000005 + useEnergyData().S4000005 + useEnergyData().S6000002 + useEnergyData().P4000005 + useEnergyData().P6000002} Amps
        </Text>
  
  
        {/* <Sparklines data={useRollData()} limit={20 }>
          <SparklinesLine style={{ fill: "none" }} />
          <SparklinesSpots />
        </Sparklines> */}
        {/* {useRollData()} */}
  
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
                      Mission {val}
                      </Text>
                  </Button>
                </Flex>
              </>
            );
          })}
        </Flex>
      </Box>
    );
  }
};
// as='button' mt='2%' bg='#C4C4C433;' w='20%' h='380px' justifyContent='center' borderRadius='lg' mr="5%"

export default UnitPage;
